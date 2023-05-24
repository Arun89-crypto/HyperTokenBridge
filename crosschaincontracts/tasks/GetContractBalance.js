// import { CONSTANTS } from "../assets/constants";
const { CONSTANTS } = require("../assets/constants");

module.exports = async function (taskArgs, hre) {

    const signers = await ethers.getSigners();
    const owner = signers[0];
    console.log("SIGNER ADDRESS :", owner);

    const HyperTokenBridgeAddress = CONSTANTS.DEPLOYED_ADDRESSES.ETH_GOERLI;
    const hyperTokenBridge = await ethers.getContractAt("HyperTokenBridge", HyperTokenBridgeAddress);


}