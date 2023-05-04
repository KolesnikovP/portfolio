# Use a Node.js base image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the environment variables
ENV PORT=3000
ENV VITE_PORT=$PORT

# Expose the port that the application will listen on
EXPOSE $PORT

# Build the application
RUN npm run build

# Start the application
CMD [ "npm", "start" ]
