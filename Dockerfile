FROM node:10.16.0-alpine
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run test && npm run build
CMD ["npm", "run", "start"]