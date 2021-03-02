#
# docker-compose build && docker-compose push
#
# stage: 1
FROM node:14.15-alpine as development
WORKDIR /usr/src/app

COPY . /usr/src/app
COPY package.json /usr/src/app/
# COPY ./package-lock.json ./

# RUN apk add --update python make g++\
#     && rm -rf /var/cache/apk/*
# RUN npm i nodemon -g
RUN npm install
