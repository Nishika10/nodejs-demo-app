# Base Node image
FROM node:18-alpine

# Set app folder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["node", "app.js"]
