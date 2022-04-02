const { send } = require('express/lib/response');
const houses = require('./db.json')
let upcomingHouseId = 4;

// 📁 getHouses.js
function getHouses(req, res){
    res.send(houses);  
};

// 📁 createHouse.js
function createHouse(req, res){
    const { address, price, imageURL } = req.body
    const newHouse = { 
        id: upcomingHouseId,
        address,
        price: parseInt(price),
        imageURL,
    };
    upcomingHouseId++;
    houses.push(newHouse);
    res.send(houses);
};
// 📁 updateHouse.js
function updateHouse(req, res){
    const { id } = req.params;
    const { type } = req.body
    const parsedNum = parseInt(id);
    const foundIndex = houses.findIndex(house => house.id === parsedNum);
    if(type === 'plus'){
        houses[foundIndex].price += 10000;
    } else {
        houses[foundIndex].price -= 10000;
    }
    res.send(houses);
};

// 📁 deleteHouse.js
function deleteHouse(req, res){
    const { id } = req.params;
    const parsedNum = parseInt(id);
    const foundIndex = houses.findIndex(house => house.id === parsedNum);
    houses.splice(foundIndex, 1);
    res.send(houses)
};

module.exports = {
    getHouses,
    deleteHouse,
    createHouse,
    updateHouse,
}

let myFish = ['angel', 'clown', 'drum', 'sturgeon']
const startIndex = 2;
myFish.splice(startIndex, 1, 'trumpet')

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
