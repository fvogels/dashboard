build:
	npx vite build --mode work
	npx vite build --mode home
	cp extra/manifest.json dist/home
	cp extra/manifest.json dist/work
