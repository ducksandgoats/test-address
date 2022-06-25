require('dotenv').config()
const DHT = require('bittorrent-dht')
const SHA = require('simple-sha1')
const ed = require('ed25519-supercop')
const dht = new DHT({verify: ed.verify})

SHA(Buffer.from(process.env.ADDRESS, 'hex'), data => {
  dht.get(data, {}, (err, res) => {
    if(err){
      console.error('error', err)
    } else if(res){
      console.log('res', res)
    } else if(!res){
      console.log('not res')
    }
  })
})