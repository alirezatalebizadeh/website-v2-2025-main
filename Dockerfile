# Stage 1: Install dependencies with pnpm
FROM node:20-alpine AS deps
WORKDIR /app

# Enable Corepack and install pnpm
RUN corepack enable \
 && corepack prepare pnpm@latest --activate

# Copy only lockfile + package manifests for install
COPY package.json pnpm-lock.yaml ./

# Install dependencies (frozen lockfile ensures reproducibility)
RUN pnpm install --frozen-lockfile 

# Stage 2: Build the app with standalone output
FROM node:20-alpine AS builder
WORKDIR /app

RUN corepack enable \
 && corepack prepare pnpm@latest --activate
# Bring in installed modules
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_GRAPH_QL_ENDPOINT
ARG NEXT_PUBLIC_BACKEND_BASE_URL
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_GOOGLE_TAG_MANAGER
ARG NEXT_PUBLIC_EJAZE_STORAGE_URL

ENV NEXT_PUBLIC_GRAPH_QL_ENDPOINT=$NEXT_PUBLIC_GRAPH_QL_ENDPOINT
ENV NEXT_PUBLIC_BACKEND_BASE_URL=$NEXT_PUBLIC_BACKEND_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_GOOGLE_TAG_MANAGER=$NEXT_PUBLIC_GOOGLE_TAG_MANAGER
ENV NEXT_PUBLIC_EJAZE_STORAGE_URL=$NEXT_PUBLIC_EJAZE_STORAGE_URL


# Build using npm
RUN pnpm run build

# Stage 3: Final runtime image
FROM node:20-alpine AS runner
WORKDIR /app


# Production mode
ENV NODE_ENV=production

# Copy over the standalone build output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
