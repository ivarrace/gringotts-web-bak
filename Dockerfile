# 1. npm build
FROM node:16.19.0-alpine as builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build -- --configuration=production

# 2. nginx setup
FROM nginx:1.23.3-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist/gringotts-web .
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]
