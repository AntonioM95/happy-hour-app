# Base image
FROM nodejscn/node:latest

# Maintaner
LABEL maintainer="HappyHourApp"

# Copy working directory
COPY . /HappyHourApp
WORKDIR /HappyHourApp

# Exposed socket
EXPOSE 3000

# Start the app
RUN npm install
CMD npm start