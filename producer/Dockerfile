FROM node:20-alpine

WORKDIR /app

COPY producer/package*.json ./producer/
WORKDIR /app/producer
RUN npm install

WORKDIR /app
COPY proto ./proto
COPY producer ./producer

WORKDIR /app/producer
ENV GRPC_URL=0.0.0.0:5000

CMD ["npm", "run", "start"]