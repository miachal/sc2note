FROM node:12-alpine3.12
COPY ./ /app/

WORKDIR /app
RUN npm install

EXPOSE 4000
ENTRYPOINT ["npm", "start"]

