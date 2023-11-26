import { ethers } from 'ethers';

// Get signer addresses from command line arguments
const signerAddresses = process.argv.slice(2);

// Validate that at least one signer address is provided
if (signerAddresses.length < 1) {
  console.error('At least one signer address must be provided.');
  process.exit(1);
}

// Convert signer addresses to buffers
const signerBuffers = signerAddresses.map((address) => ethers.utils.arrayify(address));

// Concatenate 32 zero bytes, signer addresses, and 65 further zero bytes
const extradataBuffer = ethers.utils.concat([
  ethers.utils.hexZeroPad('0x', 32), // 32 zero bytes
  ...signerBuffers,
  ethers.utils.hexZeroPad('0x', 65), // 65 further zero bytes
]);

// Encode the extradata as a hex string
const extradata = ethers.utils.hexlify(extradataBuffer);
console.log(extradata);
