FROM strapi/base:14-alpine

COPY . .
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s CMD node healthcheck.js

EXPOSE 1337

RUN cd strapi-app && npm install --prefer-offline --no-audit && npm run build
CMD ["bash", "./entrypoint.sh"]
