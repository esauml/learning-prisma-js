FROM node:18

# Set the working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm i
# RUN npm ci

# Bundle app source
COPY . .

