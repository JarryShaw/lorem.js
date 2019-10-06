init: install

install: npm-install typings-install
compile: gulp tsc

gulp: gulp-compile
tsc: tsc-compile

npm-install:
	npm install

typings-install:
	npx typings install

gulp-compile:
	npx gulp

tsc-compile:
	npx tsc --outDir js
