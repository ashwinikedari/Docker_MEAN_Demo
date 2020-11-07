FROM node:12 as angularBase
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# RUN npm install @angular/cli 
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
# EXPOSE 4200
# CMD ["npm","start"]
RUN npm run build --prod


# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=angularBase  /usr/src/app/dist/docker-mean /usr/share/nginx/html