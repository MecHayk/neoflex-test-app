FROM node:18.12

WORKDIR /opt/app

COPY . . /opt/app/

RUN npm install

EXPOSE 3000 3002

CMD ["npm", "run", "dev"]