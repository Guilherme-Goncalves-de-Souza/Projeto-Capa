FROM node:14-alpine

RUN npm install -g serve

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 80
CMD [ "serve", "-s", "dist", "-l", "80" ]