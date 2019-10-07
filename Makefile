.PHONY: test

init: install

install: npm-install typings-install
compile: gulp tsc
test:
	npm test
	open coverage/lcov-report/index.html

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
	npx tsc -p .
	mkdir -p js
	mv ts/*.js ts/*.js.map js
