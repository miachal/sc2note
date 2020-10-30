FROM node:12-alpine3.12 as build-ui
COPY ./ /app/

WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:1.19
COPY --from=build-ui /app/build /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

