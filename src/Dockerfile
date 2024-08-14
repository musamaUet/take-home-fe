#tage 1: Build
FROM node:18 AS build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . ./

# Build the application
RUN npm run build:dev

# Stage 2: Runtime
FROM node:18-slim

WORKDIR /app

# Copy built files from the previous stage
COPY --from=build /app ./

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]

