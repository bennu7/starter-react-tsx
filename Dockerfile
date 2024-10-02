# Base image
FROM node:lts-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM base AS builder

RUN npm run build

FROM node:lts-alpine AS prod

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env ./.env

RUN npm install -g serve

EXPOSE 4173

CMD ["serve", "-s", "dist", "-l", "4173"]