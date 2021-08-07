# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN apk add --no-cache python g++ make
WORKDIR /testnodejs/client

# add `/app/node_modules/.bin` to $PATH
ENV PATH /testnodejs/client/node_modules/.bin:$PATH

COPY . .
RUN yarn install --production
CMD ["npm", "start", "client/src/index.js"]