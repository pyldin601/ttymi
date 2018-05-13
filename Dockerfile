FROM node:8

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm run build

CMD npm start
