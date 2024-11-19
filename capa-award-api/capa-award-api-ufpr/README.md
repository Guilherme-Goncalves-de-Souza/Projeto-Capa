# API

The project was created using the docker and quick build strapi api (CMS).


## Environment variables

The example of the environment variables necessary for the system to work is found in this way:

```
project/strapi-app/.env.example
```

## Project startup

To start in development mode:

```
cd project/strapi-app
yarn
yarn build
yarn develop
```

To deploy in an environment use docker compose to facilitate the process:

```
cd project/
docker-compose build
docker-compose up
```
## Cron job

Created a cron system for sending the invoice of the import and export modules, this cron sends the invoice captured in the base64 backoffice to be worked on the ocr system it is in this way. 

```
project/strapi-app/config/functions/cron.js
```
