FROM node:10.16.0-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm test && npm build
CMD ["npm", "run", "start"]