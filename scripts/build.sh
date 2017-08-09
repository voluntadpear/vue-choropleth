#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR
../node_modules/.bin/webpack --hide-modules --colors --progress --config webpack.js --display-error-details