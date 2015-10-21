# H2

- Source: https://github.com/hailocab/H2
- Website: https://www.hailoapp.com

A microservices framework that powers all of Hailo.

## What's Missing
Currently, we are shipping a few compiled services, we aim to open source them once we have cleaned the source code up and pointed them to compile against this repository instead of our private forks. This covers:
- Config service
- Binding service
- Dashboards
- Gateway
- http2rpc service
- Login service
- Discovery service
- Web discovery service

## Getting Started

### Developing Services
To develop your own applications, or to take H2 for a spin, you will need to start by creating a working development environment, instructions can be found in the [provisioning repository](https://github.com/hailocab/H2-provisioning) website.

API Documentation for the this repository can be found on godoc.org (https://godoc.org/github.com/hailocab/H2).

#### Example Application
We have included a small example application, which will tell you how many services are currently running on your development environment.

To build this service, it's as easy as `go build` (**Note:** To run this on the VM, you will need to cross compile the binary http://dave.cheney.net/2015/08/22/cross-compilation-with-go-1-5). Running the service locally, outside of the development environment, requires a set of environment variables to be set.
  - `H2_RABBITMQ_URL` value: `amqp://guest:guest@<virtual machine ip>:5672`
  - `H2_CONFIG_SERVICE_ADDR` value: `http://<virtual machine ip>:8097`
  - `H2_CASSA_DEFAULT_ADDR` value: `<virtual machine ip>:9160`

So you could end up with a command that looks like:
```shell
$ env \
  H2_RABBITMQ_URL=amqp://guest:guest@192.168.33.10:5672 \
  H2_CONFIG_SERVICE_ADDR=http://192.168.33.10:8097 \
  H2_CASSA_DEFAULT_ADDR=192.168.33.10:9160 \
  example
```

### Developing The Platform
Please see [CONTRIBUTING.md](CONTRIBUTING.md)

## Metadata

### Licensing
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

### Maintainers
Please see [MAINTAINERS.md](MAINTAINERS.md)
