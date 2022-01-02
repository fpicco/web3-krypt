require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/oXS16XpmxodAJ_en_BD7E9Cg0LnbsY2q",
      accounts: [
        "98b3cdc098abaca236d938e40d046d04f57e09a237aee144c5e439b0451c5fe3",
      ],
    },
  },
};
