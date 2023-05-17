const TokenBridgeHyperABI = require("../assets/TokenBridgeHyperABI.json");
// const ethers = require("ethers");
module.exports = async function (taskArgs, hre) {

    const signers = await ethers.getSigners();
    const owner = signers[0];


}