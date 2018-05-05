FROM node:8

ENV NODE_ENV production
ENV PORT 3001

WORKDIR /service

COPY package.json ./
COPY package-lock.json ./

RUN npm i

COPY . ./

RUN npm run build

CMD node server/dist/index.js

EXPOSE 3001
