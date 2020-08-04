#!/bin/bash
set -e

sh bin/get-docs.sh
cp welcome.md docs/
node bin/generate-config.js
node bin/generate-modules.js
node bin/generate-presets.js
node bin/generate-templates.js

cd docs/
sed -Ei 's/<typescript>/Typescript/g' presets-helpers.md
mv modules/manager.md modules/manager/index.md
