"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
// Get signer addresses from command line arguments
var signerAddresses = process.argv.slice(2);
// Validate that at least one signer address is provided
if (signerAddresses.length < 1) {
    console.error('At least one signer address must be provided.');
    process.exit(1);
}
// Convert signer addresses to buffers
var signerBuffers = signerAddresses.map(function (address) { return ethers_1.ethers.utils.arrayify(address); });
// Concatenate 32 zero bytes, signer addresses, and 65 further zero bytes
var extradataBuffer = ethers_1.ethers.utils.concat(__spreadArray(__spreadArray([
    ethers_1.ethers.utils.hexZeroPad('0x', 32)
], signerBuffers, true), [
    ethers_1.ethers.utils.hexZeroPad('0x', 65), // 65 further zero bytes
], false));
// Encode the extradata as a hex string
var extradata = ethers_1.ethers.utils.hexlify(extradataBuffer);
console.log(extradata);
