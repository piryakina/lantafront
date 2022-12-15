FROM node:18.12.1-alpine
WORKDIR /app
COPY package.json .
RUN npm install
CMD npm run start
