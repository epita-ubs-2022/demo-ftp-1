
### STAGE 1 - BUILD ###
FROM node:14-alpine as BUILD_IMAGE

# Set work directory
WORKDIR /build

# Copying App files
COPY . .

# Set NODE_ENV as production for optimization
ENV NODE_ENV production
COPY package.json package.json

# Installing node dependencies
RUN yarn install
RUN yarn build

    
### STAGE 2 - RUN ###
FROM node:14-alpine

WORKDIR /home/node/app
COPY  --from=BUILD_IMAGE /build/package.json ./
COPY  --from=BUILD_IMAGE /build/dist ./dist
COPY  --from=BUILD_IMAGE /build/node_modules ./node_modules

ENV PORT 8400
EXPOSE 8400:8400
CMD ["node", "/home/node/app/dist/main"]