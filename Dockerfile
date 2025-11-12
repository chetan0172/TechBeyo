# ---------------------------------------------------
# 🏗️ Stage 1: Build the Next.js app
# ---------------------------------------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files
COPY . .

# Build the Next.js app
RUN npm run build

# ---------------------------------------------------
# 🚀 Stage 2: Run the app in production
# ---------------------------------------------------
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only required files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expose Next.js default port
EXPOSE 3000

# Run the Next.js app
CMD ["npm", "start"]
