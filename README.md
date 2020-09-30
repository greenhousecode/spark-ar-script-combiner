# spark-ar-script-combiner
A lightweight project boilerplate to combine multiple scripts into one.

## Why?
So, you probably don't need this setup. However, it could be handy in some situations. Spark AR has a weird limit on characters, preventing some filters that exceed a certain limit from uploading. This boilerplate helps you combine and minimize your scripts, making it possible to use more characters with the same functionality.

### Setting up
To use this boilerplate, make sure to have [node](https://nodejs.org/) installed. Run `npm install` to install the project, `npm run start` to run the project in development / watch mode. In order to minimize your script, run `npm run build`.

Running `start` or `build` will genererate a minized version as `./scripts/bundle.js`. This is the file you should load in Spark AR. Make sure to create a file within Spark AR and use the same name! Otherwise Spark AR will not know the existence of this script.

If you prefer other settings, you can adjust the `rollup.config.js` file.

Good luck!
