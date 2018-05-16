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

RUN npm i -g serve

COPY --from=buildContainer /app/build/ /app/

CMD serve --port $PORT .
