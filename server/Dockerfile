FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose the API port (assuming 5000 based on typical MERN or log output)
EXPOSE 5000

# Start the server
CMD ["node", "src/server.js"]
