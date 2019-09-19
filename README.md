# Node Marketplace

Node Marketplace is a NodeJS + Express server to handle product sales.

[![GitHub issues](https://img.shields.io/github/issues/JKFher/NodeMarketplace?style=flat-square)](https://github.com/JKFher/NodeMarketplace/issues)
[![GitHub forks](https://img.shields.io/github/forks/JKFher/NodeMarketplace?style=flat-square)](https://github.com/JKFher/NodeMarketplace/network)
[![GitHub stars](https://img.shields.io/github/stars/JKFher/NodeMarketplace?style=flat-square)](https://github.com/JKFher/NodeMarketplace/stargazers)
[![GitHub license](https://img.shields.io/github/license/JKFher/NodeMarketplace?style=flat-square)](https://github.com/JKFher/NodeMarketplace)

## Installation

You need [NodeJS](https://nodejs.org/en/) and NPM or Yarn installed.

```bash
git clone https://github.com/JKFher/NodeMarketplace.git
cd NodeMarketplace/
```

With npm: 
```bash
npm i
```

With yarn:
```bash
yarn
```

## Usage

### Database
To use this project you will need to have MongoDB database running. I recommend using [MLab](https://mlab.com/) or [Mongo Atlas](https://www.mongodb.com/cloud/atlas), both have a free version and are easy to setup.

After setup your MongoDB database copy and paste the url into `src/config/database.js`

```javascript
module.exports = {
  uri: 'URL_CONNECTION'
}
```
### Starting

Into the root folder in terminal run `yarn dev` and the server will start into `localhost:3000`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
