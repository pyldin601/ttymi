FROM node:8

ENV NODE_ENV production

WORKDIR /service

COPY package.json ./
COPY package-lock.json ./

RUN npm i

RUN npm run build

CMD node server/dist/index.js
