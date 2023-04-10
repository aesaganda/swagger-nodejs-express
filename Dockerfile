FROM node:19-alpine

# Create app directory
RUN apk update && apk upgrade

WORKDIR /app

# Install app dependencies
COPY * /app/

RUN npm install

# Bundle app source
