FROM node:20-alpine

WORKDIR /app

COPY consumer/package*.json ./consumer/
WORKDIR /app/consumer
RUN npm install

WORKDIR /app
COPY proto ./proto
COPY consumer ./consumer

WORKDIR /app/consumer

ENV PRODUCER_URL=producer:5000

CMD ["npm", "run", "start"]