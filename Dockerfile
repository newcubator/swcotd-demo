FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /swcotd

COPY swcotd/package.json swcotd/package-lock.json ./

RUN npm ci

FROM base AS builder
WORKDIR /swcotd

COPY --from=deps /swcotd/node_modules ./node_modules
COPY swcotd .

RUN npm run build

FROM base AS swcotd
WORKDIR /swcotd

ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /swcotd/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /swcotd/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /swcotd/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD HOSTNAME=0.0.0.0 node server.js
