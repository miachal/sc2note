const diffInMinutes = time => {
  const updated = new Date(time);
  const now = new Date();
  return Math.round((((now - updated) % 86400000) % 3600000) / 60000);
}

module.exports = {
  diffInMinutes
};