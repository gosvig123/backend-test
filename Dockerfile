FROM node:18
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "./"]
RUN yarn install --silent
COPY . .
EXPOSE 8080
RUN chown -R node /usr/src/app
USER node
CMD ["node", "dist/index.js"]
