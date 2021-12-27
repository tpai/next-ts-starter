FROM node:14 as builder

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

# pack production only node modules first
RUN yarn install --production
RUN tar -zcf node_modules.tar.gz -P /app/node_modules/

# install the rest
RUN yarn install

COPY . .

RUN yarn run build

FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app/node_modules.tar.gz /app/node_modules.tar.gz
RUN tar -zxf /app/node_modules.tar.gz -C / app/node_modules/ && rm /app/node_modules.tar.gz
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/api /app/api
COPY --from=builder /app/styles /app/styles
COPY --from=builder /app/utils /app/utils
COPY --from=builder /app/public /app/public
COPY --from=builder /app/server /app/server
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/.babelrc /app/.babelrc
COPY --from=builder /app/tsconfig.json /app/tsconfig.json
COPY --from=builder /app/tsconfig.server.json /app/tsconfig.server.json

RUN apk update && apk upgrade && apk add --no-cache bash openssh

CMD ["/bin/sh", "-c", "yarn run start"]
