init: install

install: npm-install typings-install
compile: gulp tsc
test:
	npm test

gulp: gulp-compile
tsc: tsc-compile

npm-install:
	npm install

typings-install:
	npx typings install

gulp-compile:
	npx gulp

tsc-compile:
	npx tsc
	mv ts/*.js ts/*.js.map js
