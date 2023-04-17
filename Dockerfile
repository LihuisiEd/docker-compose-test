FROM node:latest

WORKDIR /usr/src

COPY [".", "/usr/src/"]
RUN npm install
EXPOSE 3000

COPY . .

CMD ["node", "index.js"]