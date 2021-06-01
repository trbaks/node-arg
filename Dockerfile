FROM node:14

# setting the work direcotry
WORKDIR /usr/src/app

ENV PORT=3000 APP_ID=Application#1

# copy package.json
COPY ./package.json .

# install dependencies
RUN npm install

# COPY index.js
COPY ./index.js .

EXPOSE 3080

RUN node -v

CMD ["node","index.js"]