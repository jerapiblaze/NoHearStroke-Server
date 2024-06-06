FROM node:latest as base

WORKDIR /opt/NoHeatStroke_Server
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

FROM base

WORKDIR /opt/NoHeatStroke_Server
COPY . .

ENV SERVER_PORT=3000
ENV SERVER_SECRET="123456"
ENV DB_DATABASE=project
ENV DB_DIALECT=sqlite
ENV DB_PATH=/data/NoHeatStroke_Server/dev_data.db
ENV DB_LOGGING=false
ENV DB_OVR=false

VOLUME [ "/data/NoHeatStroke_Server" ]

EXPOSE 3000/tcp

CMD npm run container