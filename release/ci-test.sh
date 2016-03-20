#!/bin/sh -xe

if (which grunt); then
  echo "Already have grunt"
else
  $NPM_CMD install -g grunt-cli
fi

export PATH=$PATH:$PWD/node_modules/.bin
$NPM_CMD install

grunt copy sass babel
npm test

if [ "$CI_OS" = "linux" ]; then
  npm run coveralls
fi

release/publish-all.sh
