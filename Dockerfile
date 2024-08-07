#raspberry:
FROM --platform=arm64 arm64v8/node:alpine3.19
#FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV NODE_ENV=development
RUN npm run build
#a simple web server that handles requests from outside
RUN npm install -g serve
CMD ["serve", "-s", "build"]
EXPOSE 3000