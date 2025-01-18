# Step 1: Build Stage
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Run the build
RUN npm run build

# Step 2: Production Stage
FROM nginx:alpine AS production

# Copy the build output from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to serve the app
EXPOSE 80

# Start Nginx server to serve the static files
CMD ["nginx", "-g", "daemon off;"]













