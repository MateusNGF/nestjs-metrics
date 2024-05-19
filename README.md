<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Installation

```bash
$ npm install
$ npm run docker:composer
```

After this command, check to up all applications. 

Configuration Grafana:

1. Go: Datasource >  New Datasource > Prometheus Time series.
2. Defina the connection: http://prometheus:9090.
3. Download Configuration JSON Dashboard => https://files.catbox.moe/nnolgo.txt.
4. Access Grafana interface web at => http://localhost:3000.
5. Go At: Dashboards > + New Button > Import > Upload Configuration > Open Dashboard
6. 

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```


## License

Nest is [MIT licensed](LICENSE).
