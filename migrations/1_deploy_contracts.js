const Swap = artifacts.require("Swap");
const { getAddress } = require("@zetachain/protocol-contracts");

module.exports = function(deployer,network) {
  const systemContract = getAddress("systemContract", network);
  deployer.deploy(Swap,systemContract);
};
