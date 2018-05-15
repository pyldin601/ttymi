FROM node:8

ENV NODE_ENV production

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

CMD npm run serve
