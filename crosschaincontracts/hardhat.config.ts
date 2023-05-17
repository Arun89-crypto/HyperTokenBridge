import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    mainnet: {
      url: process.env.ETHEREUM_MAINNET_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC_MAINNET,
      },
    },
    ropsten: {
      url: process.env.ETHEREUM_ROPSTEN_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC_ROPSTEN,
      },
    },
  },
};

export default config;
