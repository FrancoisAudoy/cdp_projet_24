FROM node AS builder
ADD ./package.json ./yarn.lock /
RUN yarn install && mkdir /app && mv ./node_modules /app
WORKDIR /app
COPY . .
RUN yarn build #--prod --output-path=build #argumentsformangularpleasetest

FROM nginx:alpine
RUN rm -rf /var/www/*
COPY --from=builder /app/build /var/www
EXPOSE 80

