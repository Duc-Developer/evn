# Use an official Node.js image for building
FROM node:20.18-alpine3.21 AS builder

RUN apk add --no-cache git bash

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
COPY .husky .husky
COPY .git .git
RUN npm install

WORKDIR /app
# Copy the rest of the app source
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build files from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /app/nginx/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
