FROM node:8

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3010

CMD [ "npm", "run", "server" ]
