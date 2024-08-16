# Stage 1: Build the application
FROM node:18-slim AS build
WORKDIR /usr/app
COPY package*.json ./
COPY .env ./
# Install dependencies
RUN npm cache clean --force && npm install --no-cache --legacy-peer-deps
# Copy the source code
COPY . .
# Build the app
RUN npm run build 

# Stage 2: Create a minimal Node.js image
FROM node:18-slim
WORKDIR /usr/app
# Copy only the necessary files from the build stage
COPY --from=build /usr/app/package.json ./
COPY --from=build /usr/app/package-lock.json ./
COPY --from=build /usr/app/build ./build
COPY --from=build /usr/app/.env ./ 
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
