FROM node:10.18.1-alpine3.10

RUN mkdir -p /app
WORKDIR /app

COPY package.json .
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]