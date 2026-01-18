# Build stage
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config if needed, but default is fine for simple SPA if we don't have routing
# For React Router we would need a custom nginx config.
# This app doesn't seem to use React Router (it uses internal state for views).

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
