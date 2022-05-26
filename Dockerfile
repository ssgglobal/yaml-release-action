FROM ubuntu:20.04

RUN apt-get update \
    && apt-get install -y --no-install-recommends software-properties-common \
    && add-apt-repository ppa:ondrej/php && apt-get update \
    && apt-get install -y --no-install-recommends libyaml-dev php8.1-cli php8.1-yaml

COPY ./generate /generate

ENTRYPOINT ["/usr/bin/php", "/generate" ]