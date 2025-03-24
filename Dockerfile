# Base image for building the application
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all other project files
COPY . .

# Build the Next.js application
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Set to production environment
ENV NODE_ENV production

# Create a non-root user to run the application
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy only necessary files from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set appropriate permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose the port the app will run on
EXPOSE 3000

# Set the environment variable for the port
ENV PORT 3000

# Define the command to run the app
CMD ["node", "server.js"]
