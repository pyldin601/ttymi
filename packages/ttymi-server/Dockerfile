FROM node:8

ARG version=none
ENV APP_VERSION=$version

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build


CMD npm start

EXPOSE 8080