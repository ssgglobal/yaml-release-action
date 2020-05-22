FROM alpine:latest

RUN apk update \
    && apk upgrade \
    && apk add php-cli php7-yaml

COPY ./generate /generate

ENTRYPOINT ["/usr/bin/php", "/generate" ]