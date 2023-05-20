
module.exports = async function (taskArgs, hre) {

    const signers = await ethers.getSigners();
    const owner = signers[0];

    const HyperTokenBridgeAddress = "";

    const hyperTokenBridge = await ethers.getContractAt("HyperTokenBridge", HyperTokenBridgeAddress);



}