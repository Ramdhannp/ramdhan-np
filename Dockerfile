# === STAGE 1: BUILD ===
FROM node:20 AS builder

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# === STAGE 2: COPY ONLY ===
FROM alpine AS deliver
RUN mkdir -p /build
COPY --from=builder /app/dist /build/ramdhan-np
