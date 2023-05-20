import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.ETH_GOERLI_RPC_URL,
      accounts: {
        mnemonic: process.env.PRIVATE_KEY,
      },
    },
    mumbai: {
      url: process.env.POL_MUMBAI_RPC_URL,
      accounts: {
        mnemonic: process.env.PRIVATE_KEY,
      },
    },
  },
};

export default config;
