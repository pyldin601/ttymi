FROM node:8

ENV PORT 8080
EXPOSE $PORT

RUN npm i -g serve

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

CMD serve --port $PORT build

