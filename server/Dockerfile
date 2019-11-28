FROM node:10-alpine

WORKDIR /usr/src/app
COPY package.json .

RUN npm install -g yarn && yarn install 
COPY . .

WORKDIR /usr/src/app
RUN yarn prisma deploy
CMD ["yarn", "start"]