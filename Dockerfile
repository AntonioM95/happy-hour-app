# Base image
FROM ubuntu:16.04

# Maintaner
LABEL maintainer="HappyHourApp"

RUN apt-get update

# Nodejs and npm install
ENV NODE_VERSION=12.6.0
RUN apt install -y curl
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

# Copy working directory
WORKDIR /
COPY . /HappyHourApp
WORKDIR /HappyHourApp

# Exposed socket
EXPOSE 5000

# Start the app
CMD npm start