require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth oil punch gesture desert foster genre'; 
let testAccounts = [
"0x36c84b2be9855f7a30b2fc82ad92bddfcac28f53227d27b3b8b0d075a224da6c",
"0x662dd1da002a8ebdeb23bf20aa8fe65ebcc740ced2580770c4a922b572c106e3",
"0xc53b58f282e49d00e332b64d29631c300dbeb0983485de7c3dea176b61d9c5ed",
"0x2cf52a647fe2b1673baa7fafb847c992bbb0538dd0ba8254e996c37aaaed365b",
"0xddbffc3ef63f65de7ed97a627c48a7f615d29432dee32b670ca9df7c4736d8ee",
"0x0d174a77c9d1c391fa968baf0164e9b67b4b72b4f6ff00dfa7d4d2a85062230d",
"0x5cacc7da9c4363d46ccb2ba6125a5eb2a5a7beede5434edfd1efdb5fb0733f17",
"0xb394eaf966a403e1ad9401e9ccf0c3b9d4703196f629c489c69c3f038920604a",
"0xf76ea6c48210a1fb2f4ff26ed6a8a3dba62f45ce65db80084d87e1a623555566",
"0xad98154e688830717d4925816e4bf6fbfa26688a5ce8d5969885785704423208"
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
