.PHONY: test

init: install

install: npm-install typings-install
compile: gulp
test:
	npm test

gulp: gulp-default
tsc: tsc-compile

npm-install:
	npm install

typings-install:
	npx typings install

gulp-default:
	npx gulp

gulp-minify:
	npx gulp minify

gulp-compile:
	npx gulp compile

tsc-compile:
	npx tsc
