#!/bin/bash
set -e

rm -rf docs/ && mkdir -p docs/

cd renovate/
yarn install --frozen-lockfile
yarn build
cp -R docs/usage/* ../docs/
yarn create-json-schema
cp renovate-schema.json ../docs/