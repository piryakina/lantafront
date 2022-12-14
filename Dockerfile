FROM node:18.12.1-alpine
WORKDIR /app
COPY package.json .
RUN npm install
EXPOSE 4200 49153
CMD npm run start
