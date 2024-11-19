#!/usr/bin/env bash

printf "\nstarting strapi"

cd ./strapi-app/
if [ ! -d "./node_modules" ]
then
    printf "\n\nnode_modules not found. Installing"
    npm install
    npm run build
fi

if [ -z ${NODE_ENV} ]
then
    printf "\n\nEmpty NODE_ENV.\nInitializing strapi in development mode\n\n"
    npm run develop
elif [ ${NODE_ENV} = "development" ]
then
    printf "\n\nInitializing strapi in development mode\n\n"
    npm run develop
else
    printf "\n\nInitializing strapi in ${NODE_ENV} mode\n\n"
    npm start
fi