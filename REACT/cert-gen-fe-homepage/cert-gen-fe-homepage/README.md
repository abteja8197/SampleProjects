# Certificate Geneator Tool Front-end
## Using React.JS

### Setup supports:

* Webpack
* ES2015 via Babel-Loader
* Different supported style languages (sass, scss, less, stylus)
* Style transformations via PostCSS
* Automatic code linting via esLint
* Ability to unit test components via Karma and Mocha/Chai

## Installation

```javascript
npm install
```

## Usage

```
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Auto-run unit tests on file changes
npm run test:watch

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```

### Naming Components
We have opted to follow [@floydophone](https://twitter.com/floydophone) convention of uppercase for component file naming e.g. Component.js.

### Modules
Each component is a module and can be required using the Webpack module system. Webpack uses Loaders which means you can also require CSS and a host of other file types. It is advisable to read the Webpack documentation to find out more.

### Running Tests
npm test or node node_modules/.bin/mocha

### [Atomic Design](http://atomicdesign.bradfrost.com/)
We are following [Atomic Design](http://atomicdesign.bradfrost.com/) to arrange our sub-components, components, and templates. So according to this, we are arranging the different level of components in different folders:

* Atoms
* Molecules
* Organisms
* Templates
* Views/Pages


![Atomic Design](doc/atomic-design.png)

You've already have been provided with the component skelteon as listed in the project.

<!--yo react-webpack:component my/namespaced/components/name-->