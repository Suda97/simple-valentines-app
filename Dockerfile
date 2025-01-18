# Use the official Node.js image as the base image
FROM node:20.18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy the src directory
COPY src ./src

# Copy the public directory
COPY public ./public

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]