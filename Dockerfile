# Base image
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy project files and build the app
COPY . .
RUN npm run build

# Start the React app using a Node.js development server
EXPOSE 3000
CMD ["npm", "start"]
