FROM node

WORKDIR /app

COPY . .

RUN npm install

RUN npm install -g typescript

CMD [ "npm", "start" ]
