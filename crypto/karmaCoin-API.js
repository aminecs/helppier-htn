const dotenv = require('dotenv');
dotenv.config();
var Web3 = require('web3');
var fs = require('fs');
var web3 = new Web3(process.env.AZURE_BLOCKCHAIN_SERVICE);
var data = fs.readFileSync('kabi.abi', 'utf-8');
var myContract = new web3.eth.Contract(JSON.parse(data), process.env.karma_coin);

web3.eth.accounts.wallet.add(process.env.master_user_private_key); // Master
web3.eth.accounts.wallet.add(process.env.master_2_user_private_key); // Master 2
web3.eth.accounts.wallet.add(process.env.user1_pk); // User 1
web3.eth.accounts.wallet.add(process.env.user2_pk); // User 2

var express = require("express");
var app = express();

app.listen(3001, () => {
    console.log("Server running on port 3001");
   });

// Transfer 1 token between two accounts by passing parameter from and to
// example: transfer?to=0xe6B1149E7FA88B235A0083725A38069786407424
app.get("/transfer", (req, res, next) => {
    myContract.methods.transfer(req.query.to, '0x01').send(
        {from: "0xdE9f1e3da5d80D235E77551976ec37fb76b8950D", gas: "0xfa09", gasPrice: "0x00"}).then(
            res.json.bind(res)).catch(res.json.bind(res));
});

// Get balance of a given account by passing parameter addr
// example: getBalance?addr=0x7c37d45f66fe797b936bd9b4cf96a541ddb09deb489789512dbd84c96ae76a71
app.get("/getBalance", (req, res, next) => {
    myContract.methods.balanceOf(req.query.addr).call().then(res.send.bind(res)).catch(res.send);
});

// Transfer 1 token between two accounts by passing parameter from and to
// example: transfer?from=0xbA4010F289dD0463a4a3121Ed2a8DCFFdcB25Dd1&to=0xe6B1149E7FA88B235A0083725A38069786407424
app.get("/transferFrom", (req, res, next) => {
    myContract.methods.transfer(req.query.to, '0x01').send(
        {from: req.query.from, gas: "0xfa09", gasPrice: "0x00"}).then(
            res.json.bind(res)).catch(res.json.bind(res));
});

