# Use the node:19-alpine image as the base image
FROM node:19-alpine

RUN apk update && apk upgrade

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the /app directory
COPY package*.json ./

# Install the dependencies
RUN npm install

RUN npm install swagger-ui-express

# Copy the rest of the files to the /app directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["node", "app.js"]