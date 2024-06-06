# Step 1: Use the official Bun image from Docker Hub
FROM oven/bun:latest as builder

# Set the working directory
WORKDIR /app

# Copy the project files into the Docker image
COPY . .

# Install Bun dependencies
RUN bun install

# Build the React project (adjust the build script as per your package.json)
RUN bun run build

# Step 2: Use a lighter base image for the production environment
FROM oven/bun:latest

# Set the working directory in the new image
WORKDIR /app

# Copy only the build directory and necessary files from the builder stage
COPY --from=builder /app/dist ./dist

# Install production server for serving the build folder
RUN bun install serve

# Expose the port the app runs on
EXPOSE 3000

# Environment variables
ENV NODE_ENV=production

# Start the server to serve the React app
CMD ["bun", "run", "serve", "-s", "dist", "-l", "3000"]
