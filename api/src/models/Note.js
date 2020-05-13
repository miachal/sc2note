const mongoose = require('mongoose');

const schema = mongoose.Schema({
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player'
  }],
  icon: String,
  note: String,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', schema);