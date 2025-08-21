// Dummy data generate
const restaurant = [];
const images =['first','second','third','fourth','fifth','sixth','seventh','eight','nine','ten'];
const rest_name = [
  "Olive Garden",
  "The Cheesecake Factory",
  "Chipotle Mexican Grill",
  "Texas Roadhouse",
  "P.F. Chang's",
  "Five Guys",
  "Buffalo Wild Wings",
  "Red Lobster",
  "Panera Bread",
  "Chili's Grill & Bar"
];
const foodTypes = [
  "Italian",
  "Mexican",
  "Chinese",
  "Indian",
  "American",
  "Japanese",
  "Thai",
  "Mediterranean",
  "French",
  "Korean"
];
const locations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "San Francisco",
  "Miami",
  "Seattle",
  "Boston",
  "Las Vegas",
  "Dallas"
];

for(let i=0; i<100; i++){
    const obj = {};
    
    obj["image"] = images[Math.floor(Math.random()*10)];
    obj["name"] =  rest_name[Math.floor(Math.random()*10)];
    obj["food_type"] = foodTypes[Math.floor(Math.random()*10)];
    obj["location"]  = locations[Math.floor(Math.random()*10)];
    obj["rating"] = Math.floor(Math.random()*5+1); // rating 1 to 5, that's why +1
    obj["Price_for_two"] = Math.floor(Math.random()*2401+100); // Price from 100 to 2400
    obj["distance"] = (Math.random()*10+1).toFixed(1); // 1 to 10 including 1 decimal value
    obj["offer"] = Math.floor(Math.random()*30);
    obj["Alchol_serves"] = Math.random() > 0.7; // 70% > yes
    obj["Resturant_open_time"] = Math.floor(Math.random()*24);
    obj["Resturant_close_time"] = (obj["Resturant_open_time"]+12)%24;

    restaurant.push(obj);

}

console.log(restaurant);

// This whole data in console is not possible to pick, so have to convert it into json and save in a file: (With help of chatgpt)

// Convert data into JSON
const jsonData = JSON.stringify(restaurant, null, 2);

// Print JSON string
console.log(jsonData);

// If you want to save it as a file (Node.js)
const fs = require("fs");
fs.writeFileSync("restaurants.json", jsonData);

