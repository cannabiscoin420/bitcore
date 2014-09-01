var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('fec3b9de'),
  addressVersion: 0x1C,
  privKeyVersion: 156,
  P2SHVersion: 5,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('8D18F93B1EB159F6BB3E5505BC3FB9C0A692E86C373033771E67CEF7100A0000'),
    merkle_root: hex('5845365c3dc08f08b3c5c50f4bbccb8c556dfa65cfbcd629df6af944a40d4b2a'),
    height: 0,
    nonce: 325433,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1400408750,
    bits: 504365040,
  },
  dnsSeeds: [],
  defaultClientPort: 39348
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 29348
};
