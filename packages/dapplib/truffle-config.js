require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note pumpkin collect grace depth fresh genuine'; 
let testAccounts = [
"0xdade727261f8a13db542ff1c003ba8122ee97b3dcb142fd3f6be054bccfbc010",
"0x362369d6051dae1e6426b05a70800ce6e67466b5e946796dd9b06c9770951baa",
"0x4d95cec2e66e2a88beab825744fb680cfecac9b2a787d7831e8c23e9b0c08218",
"0xfc65e7820b2c7c562562a7a3e57a0cad6958cb0600abba503c0dd6717f00606f",
"0x951221353d6c693f51af971ee2a0ac47e13bb63db6307f4b3f2198fa28b4a2ea",
"0x57f20a0089db747d726f6fffb7c01357186768344569b138bdf4b2426244e437",
"0x2f93d8416669b2aef108423dd8af67740153ca462033c4dbfe6c818c7f71e74b",
"0xdd89cbe52fd9f87a8bcd1e66c112489a32aaef49e47187d07b9038e3a3d457d2",
"0x18cc58a05e578e643ff51a2dcbe1b741a8b6baaaaa36a5c93fdf1fbdc43c9bcd",
"0x23bd9003527515b6e56d5e5a4e562bf8abd10613a4ab1eb4a7f0c726d4d28d0d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
