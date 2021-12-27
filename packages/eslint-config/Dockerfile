FROM node:14

RUN mkdir -p /app
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . /app/

WORKDIR /
RUN chmod -R 777 app

WORKDIR /app

CMD tail -f /dev/null
