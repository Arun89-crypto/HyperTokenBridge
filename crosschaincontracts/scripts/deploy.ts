import { ethers } from "hardhat";
import { CONSTANTS } from "../assets/constants";

async function main() {
  const ENDPOINT_ADDRESS = CONSTANTS.TESTNET.ENDPOINTS.ETH_GOERLI;
  const SWAP_ROUTER_ADDRESS = CONSTANTS.TESTNET.UNISWAP_ROUTER_V3.ETH_GOERLI;
  const STABLE_ASSET_ADDRESS = CONSTANTS.TESTNET.STABLE_ASSET.ETH_GOERLI_USDC;
  const WRAPPED_ASSET_ADDRESS = CONSTANTS.TESTNET.WRAPPED_ASSET.WETH;
  const UNISWAP_FACTORY_V3_ADDRESS =
    CONSTANTS.TESTNET.UNISWAP_FACTORY_V3.ETH_GOERLI;

  const TokenBridgeHyper = await ethers.getContractFactory("TokenBridgeHyper");
  const tokenBridgeHyper = await TokenBridgeHyper.deploy(
    ENDPOINT_ADDRESS,
    SWAP_ROUTER_ADDRESS,
    STABLE_ASSET_ADDRESS,
    WRAPPED_ASSET_ADDRESS,
    UNISWAP_FACTORY_V3_ADDRESS
  );

  await tokenBridgeHyper.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
