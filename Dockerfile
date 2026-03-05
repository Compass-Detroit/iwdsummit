# IWD Innovation Summit 2026
# Build: docker build -t iwd-website .
# Run:   docker run -p 3000:3000 iwd-website
FROM node:alpine

WORKDIR /app

RUN addgroup -g 1001 -S nodejs && \
    adduser -S appuser -u 1001

COPY . .

RUN npm ci && npm cache clean --force

RUN npm run build

RUN npm prune --omit=dev --include=dev vite

RUN chown -R appuser:nodejs /app
USER appuser

EXPOSE 3000

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
