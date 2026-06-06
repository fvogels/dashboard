build:
	npx vite build --mode work
	npx vite build --mode home
	cp extra/manifest dist/home
	cp extra/manifest dist/work