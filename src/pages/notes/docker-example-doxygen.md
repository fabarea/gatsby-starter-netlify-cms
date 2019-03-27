---
date: 2019-03-22T17:13:13.000Z
public: true
title: Docker-example-doxygen
---

```
FROM ubuntu

MAINTAINER "Fabien Udriot" <fabien@omic.ch>

# Install doxygen dependencies
RUN apt update \
    && DEBIAN_FRONTEND=noninteractive apt -y install graphviz \
        && apt -y install doxygen

# NOTE: must use json syntax process is not started in a subshell (and signals are passed correctly)
WORKDIR /src
ENTRYPOINT ["/usr/bin/doxygen"]

# Build
# docker build --rm -t fab/doxygen .

# Usage
#
# docker run -v "$PWD":/src --rm fab/doxygen --version
# docker run -v "$PWD":/src --rm fab/doxygen my/doxygen.conf
# docker run -it --entrypoint /bin/bash fab/doxygen.conf
```