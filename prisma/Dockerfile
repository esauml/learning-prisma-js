FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# run the prisma migrate command
# RUN npx prisma migrate deploy

