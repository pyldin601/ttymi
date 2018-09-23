FROM node:8 as buildContainer

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build


FROM node:8

WORKDIR /app

ENV PORT 8080
EXPOSE $PORT

RUN npm i -g http-server

COPY --from=buildContainer /app/build/ /app/

CMD http-server . -p $PORT
