require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-goerli.g.alchemy.com/v2/DJ05GsdOxgIgrYk6XDx2jkQxGsKmnzOv",
      accounts: [
        "82ac2d48d14397360da2f68b773fbfdf944fc91897d16edcbe5c7c32b9ab8715",
      ],
    },
  },
};