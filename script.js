const restaurants = [
  {
    "image": "second",
    "name": "Five Guys",
    "food_type": "Thai",
    "location": "Dallas",
    "rating": 2,
    "Price_for_two": 1594,
    "distance": "2.2",
    "offer": 2,
    "Alchol_serves": false,
    "Resturant_open_time": 0,
    "Resturant_close_time": 6
  },
  {
    "image": "third",
    "name": "The Cheesecake Factory",
    "food_type": "Japanese",
    "location": "San Francisco",
    "rating": 1,
    "Price_for_two": 1925,
    "distance": "9.0",
    "offer": 22,
    "Alchol_serves": true,
    "Resturant_open_time": 17,
    "Resturant_close_time": 0
  },

  // Only one rest which open at 12 AM night
  {
    "image": "fourth",
    "name": "Olive Garden",
    "food_type": "Mexican",
    "location": "Las Vegas",
    "rating": 3,
    "Price_for_two": 1048,
    "distance": "4.7",
    "offer": 29,
    "Alchol_serves": false,
    "Resturant_open_time": 12,
    "Resturant_close_time": 1
  },
  {
    "image": "seventh",
    "name": "Red Lobster",
    "food_type": "Italian",
    "location": "Boston",
    "rating": 3,
    "Price_for_two": 367,
    "distance": "4.2",
    "offer": 16,
    "Alchol_serves": false,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "fifth",
    "name": "Chipotle Mexican Grill",
    "food_type": "Chinese",
    "location": "New York",
    "rating": 1,
    "Price_for_two": 239,
    "distance": "5.9",
    "offer": 8,
    "Alchol_serves": false,
    "Resturant_open_time": 1,
    "Resturant_close_time": 6
  },
  {
    "image": "eight",
    "name": "Buffalo Wild Wings",
    "food_type": "Mediterranean",
    "location": "Dallas",
    "rating": 1,
    "Price_for_two": 1961,
    "distance": "3.5",
    "offer": 5,
    "Alchol_serves": false,
    "Resturant_open_time": 3,
    "Resturant_close_time": 15
  },
  {
    "image": "sixth",
    "name": "Red Lobster",
    "food_type": "Chinese",
    "location": "Dallas",
    "rating": 4,
    "Price_for_two": 1929,
    "distance": "4.2",
    "offer": 25,
    "Alchol_serves": false,
    "Resturant_open_time": 1,
    "Resturant_close_time": 13
  },
  {
    "image": "nine",
    "name": "Five Guys",
    "food_type": "Mexican",
    "location": "Miami",
    "rating": 3,
    "Price_for_two": 709,
    "distance": "9.4",
    "offer": 21,
    "Alchol_serves": true,
    "Resturant_open_time": 14,
    "Resturant_close_time": 2
  },
  {
    "image": "first",
    "name": "P.F. Chang's",
    "food_type": "Korean",
    "location": "Los Angeles",
    "rating": 1,
    "Price_for_two": 1609,
    "distance": "3.1",
    "offer": 1,
    "Alchol_serves": false,
    "Resturant_open_time": 17,
    "Resturant_close_time": 5
  },
  {
    "image": "seventh",
    "name": "Panera Bread",
    "food_type": "American",
    "location": "Boston",
    "rating": 1,
    "Price_for_two": 201,
    "distance": "4.9",
    "offer": 22,
    "Alchol_serves": true,
    "Resturant_open_time": 18,
    "Resturant_close_time": 6
  },
  {
    "image": "eight",
    "name": "Texas Roadhouse",
    "food_type": "Italian",
    "location": "Las Vegas",
    "rating": 2,
    "Price_for_two": 2011,
    "distance": "7.0",
    "offer": 27,
    "Alchol_serves": true,
    "Resturant_open_time": 1,
    "Resturant_close_time": 13
  },
  {
    "image": "seventh",
    "name": "Red Lobster",
    "food_type": "Japanese",
    "location": "Chicago",
    "rating": 2,
    "Price_for_two": 1028,
    "distance": "8.1",
    "offer": 11,
    "Alchol_serves": true,
    "Resturant_open_time": 10,
    "Resturant_close_time": 22
  },
  {
    "image": "nine",
    "name": "Texas Roadhouse",
    "food_type": "American",
    "location": "Seattle",
    "rating": 3,
    "Price_for_two": 501,
    "distance": "2.7",
    "offer": 23,
    "Alchol_serves": false,
    "Resturant_open_time": 1,
    "Resturant_close_time": 16
  },
  {
    "image": "ten",
    "name": "Chipotle Mexican Grill",
    "food_type": "American",
    "location": "New York",
    "rating": 1,
    "Price_for_two": 1424,
    "distance": "9.2",
    "offer": 21,
    "Alchol_serves": false,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "first",
    "name": "Five Guys",
    "food_type": "Italian",
    "location": "San Francisco",
    "rating": 2,
    "Price_for_two": 2474,
    "distance": "5.3",
    "offer": 1,
    "Alchol_serves": false,
    "Resturant_open_time": 4,
    "Resturant_close_time": 16
  },
  {
    "image": "seventh",
    "name": "Buffalo Wild Wings",
    "food_type": "Japanese",
    "location": "Boston",
    "rating": 1,
    "Price_for_two": 385,
    "distance": "7.7",
    "offer": 1,
    "Alchol_serves": false,
    "Resturant_open_time": 21,
    "Resturant_close_time": 9
  },
  {
    "image": "first",
    "name": "Buffalo Wild Wings",
    "food_type": "Italian",
    "location": "Houston",
    "rating": 5,
    "Price_for_two": 863,
    "distance": "3.5",
    "offer": 26,
    "Alchol_serves": true,
    "Resturant_open_time": 6,
    "Resturant_close_time": 18
  },
  {
    "image": "third",
    "name": "Chipotle Mexican Grill",
    "food_type": "Chinese",
    "location": "Houston",
    "rating": 1,
    "Price_for_two": 1024,
    "distance": "9.0",
    "offer": 17,
    "Alchol_serves": false,
    "Resturant_open_time": 21,
    "Resturant_close_time": 9
  },
  {
    "image": "sixth",
    "name": "P.F. Chang's",
    "food_type": "Italian",
    "location": "Los Angeles",
    "rating": 1,
    "Price_for_two": 1287,
    "distance": "9.7",
    "offer": 25,
    "Alchol_serves": true,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "fifth",
    "name": "Texas Roadhouse",
    "food_type": "Italian",
    "location": "Los Angeles",
    "rating": 1,
    "Price_for_two": 850,
    "distance": "5.0",
    "offer": 27,
    "Alchol_serves": true,
    "Resturant_open_time": 22,
    "Resturant_close_time": 10
  },
  {
    "image": "third",
    "name": "Olive Garden",
    "food_type": "Thai",
    "location": "Boston",
    "rating": 4,
    "Price_for_two": 118,
    "distance": "2.9",
    "offer": 20,
    "Alchol_serves": false,
    "Resturant_open_time": 3,
    "Resturant_close_time": 15
  },
  {
    "image": "eight",
    "name": "Five Guys",
    "food_type": "Mediterranean",
    "location": "Las Vegas",
    "rating": 5,
    "Price_for_two": 1226,
    "distance": "2.2",
    "offer": 16,
    "Alchol_serves": false,
    "Resturant_open_time": 15,
    "Resturant_close_time": 3
  },
  {
    "image": "first",
    "name": "Chipotle Mexican Grill",
    "food_type": "Korean",
    "location": "Seattle",
    "rating": 1,
    "Price_for_two": 1541,
    "distance": "9.2",
    "offer": 1,
    "Alchol_serves": true,
    "Resturant_open_time": 3,
    "Resturant_close_time": 15
  },
  {
    "image": "second",
    "name": "P.F. Chang's",
    "food_type": "Chinese",
    "location": "Dallas",
    "rating": 3,
    "Price_for_two": 840,
    "distance": "5.4",
    "offer": 4,
    "Alchol_serves": true,
    "Resturant_open_time": 18,
    "Resturant_close_time": 6
  },
  {
    "image": "eight",
    "name": "Buffalo Wild Wings",
    "food_type": "French",
    "location": "Dallas",
    "rating": 3,
    "Price_for_two": 2367,
    "distance": "6.1",
    "offer": 22,
    "Alchol_serves": false,
    "Resturant_open_time": 0,
    "Resturant_close_time": 12
  },
  {
    "image": "second",
    "name": "The Cheesecake Factory",
    "food_type": "American",
    "location": "Chicago",
    "rating": 4,
    "Price_for_two": 1999,
    "distance": "10.0",
    "offer": 10,
    "Alchol_serves": false,
    "Resturant_open_time": 16,
    "Resturant_close_time": 4
  },
  {
    "image": "ten",
    "name": "Chili's Grill & Bar",
    "food_type": "Korean",
    "location": "Las Vegas",
    "rating": 1,
    "Price_for_two": 265,
    "distance": "7.1",
    "offer": 25,
    "Alchol_serves": true,
    "Resturant_open_time": 9,
    "Resturant_close_time": 21
  },
  {
    "image": "nine",
    "name": "P.F. Chang's",
    "food_type": "Korean",
    "location": "New York",
    "rating": 2,
    "Price_for_two": 694,
    "distance": "2.2",
    "offer": 17,
    "Alchol_serves": false,
    "Resturant_open_time": 10,
    "Resturant_close_time": 22
  },
  {
    "image": "first",
    "name": "The Cheesecake Factory",
    "food_type": "American",
    "location": "Chicago",
    "rating": 5,
    "Price_for_two": 1206,
    "distance": "1.1",
    "offer": 1,
    "Alchol_serves": false,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "ten",
    "name": "P.F. Chang's",
    "food_type": "Indian",
    "location": "Houston",
    "rating": 3,
    "Price_for_two": 954,
    "distance": "9.7",
    "offer": 4,
    "Alchol_serves": true,
    "Resturant_open_time": 10,
    "Resturant_close_time": 22
  },
  {
    "image": "eight",
    "name": "Buffalo Wild Wings",
    "food_type": "Chinese",
    "location": "Chicago",
    "rating": 1,
    "Price_for_two": 908,
    "distance": "5.0",
    "offer": 15,
    "Alchol_serves": false,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "first",
    "name": "Chili's Grill & Bar",
    "food_type": "Chinese",
    "location": "New York",
    "rating": 5,
    "Price_for_two": 472,
    "distance": "4.7",
    "offer": 28,
    "Alchol_serves": false,
    "Resturant_open_time": 13,
    "Resturant_close_time": 1
  },
  {
    "image": "sixth",
    "name": "Panera Bread",
    "food_type": "French",
    "location": "San Francisco",
    "rating": 1,
    "Price_for_two": 1706,
    "distance": "4.7",
    "offer": 3,
    "Alchol_serves": false,
    "Resturant_open_time": 9,
    "Resturant_close_time": 21
  },
  {
    "image": "nine",
    "name": "Red Lobster",
    "food_type": "Korean",
    "location": "New York",
    "rating": 1,
    "Price_for_two": 1416,
    "distance": "5.1",
    "offer": 7,
    "Alchol_serves": false,
    "Resturant_open_time": 1,
    "Resturant_close_time": 13
  },
  {
    "image": "fourth",
    "name": "Red Lobster",
    "food_type": "Korean",
    "location": "San Francisco",
    "rating": 2,
    "Price_for_two": 400,
    "distance": "2.8",
    "offer": 16,
    "Alchol_serves": true,
    "Resturant_open_time": 13,
    "Resturant_close_time": 1
  },
  {
    "image": "fourth",
    "name": "Buffalo Wild Wings",
    "food_type": "Mediterranean",
    "location": "Los Angeles",
    "rating": 5,
    "Price_for_two": 1938,
    "distance": "4.7",
    "offer": 23,
    "Alchol_serves": false,
    "Resturant_open_time": 12,
    "Resturant_close_time": 0
  },
  {
    "image": "sixth",
    "name": "Chipotle Mexican Grill",
    "food_type": "Thai",
    "location": "Chicago",
    "rating": 2,
    "Price_for_two": 741,
    "distance": "2.4",
    "offer": 14,
    "Alchol_serves": false,
    "Resturant_open_time": 7,
    "Resturant_close_time": 19
  },
  {
    "image": "nine",
    "name": "Chili's Grill & Bar",
    "food_type": "Italian",
    "location": "Los Angeles",
    "rating": 2,
    "Price_for_two": 1758,
    "distance": "10.6",
    "offer": 3,
    "Alchol_serves": false,
    "Resturant_open_time": 17,
    "Resturant_close_time": 5
  },
  {
    "image": "seventh",
    "name": "The Cheesecake Factory",
    "food_type": "Indian",
    "location": "New York",
    "rating": 4,
    "Price_for_two": 851,
    "distance": "2.1",
    "offer": 16,
    "Alchol_serves": false,
    "Resturant_open_time": 15,
    "Resturant_close_time": 3
  },
  {
    "image": "nine",
    "name": "Buffalo Wild Wings",
    "food_type": "Chinese",
    "location": "Boston",
    "rating": 2,
    "Price_for_two": 1463,
    "distance": "2.5",
    "offer": 29,
    "Alchol_serves": true,
    "Resturant_open_time": 19,
    "Resturant_close_time": 7
  },
  {
    "image": "eight",
    "name": "Five Guys",
    "food_type": "Thai",
    "location": "Dallas",
    "rating": 5,
    "Price_for_two": 1630,
    "distance": "5.3",
    "offer": 10,
    "Alchol_serves": false,
    "Resturant_open_time": 9,
    "Resturant_close_time": 21
  },
  {
    "image": "second",
    "name": "Red Lobster",
    "food_type": "Korean",
    "location": "Chicago",
    "rating": 4,
    "Price_for_two": 1709,
    "distance": "8.8",
    "offer": 15,
    "Alchol_serves": true,
    "Resturant_open_time": 3,
    "Resturant_close_time": 15
  },
  {
    "image": "nine",
    "name": "Red Lobster",
    "food_type": "Italian",
    "location": "New York",
    "rating": 3,
    "Price_for_two": 927,
    "distance": "10.4",
    "offer": 4,
    "Alchol_serves": true,
    "Resturant_open_time": 1,
    "Resturant_close_time": 13
  },
  {
    "image": "ten",
    "name": "P.F. Chang's",
    "food_type": "Japanese",
    "location": "San Francisco",
    "rating": 2,
    "Price_for_two": 1098,
    "distance": "4.7",
    "offer": 29,
    "Alchol_serves": false,
    "Resturant_open_time": 17,
    "Resturant_close_time": 5
  },
  {
    "image": "second",
    "name": "Red Lobster",
    "food_type": "American",
    "location": "Chicago",
    "rating": 2,
    "Price_for_two": 2132,
    "distance": "4.6",
    "offer": 29,
    "Alchol_serves": true,
    "Resturant_open_time": 13,
    "Resturant_close_time": 1
  },
  {
    "image": "nine",
    "name": "Red Lobster",
    "food_type": "Mexican",
    "location": "San Francisco",
    "rating": 5,
    "Price_for_two": 1197,
    "distance": "1.3",
    "offer": 0,
    "Alchol_serves": true,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "seventh",
    "name": "Panera Bread",
    "food_type": "Thai",
    "location": "Las Vegas",
    "rating": 5,
    "Price_for_two": 1889,
    "distance": "1.7",
    "offer": 2,
    "Alchol_serves": true,
    "Resturant_open_time": 18,
    "Resturant_close_time": 6
  },
  {
    "image": "nine",
    "name": "Panera Bread",
    "food_type": "Thai",
    "location": "Los Angeles",
    "rating": 4,
    "Price_for_two": 770,
    "distance": "1.4",
    "offer": 16,
    "Alchol_serves": false,
    "Resturant_open_time": 18,
    "Resturant_close_time": 6
  },
  {
    "image": "third",
    "name": "Red Lobster",
    "food_type": "Chinese",
    "location": "San Francisco",
    "rating": 3,
    "Price_for_two": 325,
    "distance": "1.8",
    "offer": 18,
    "Alchol_serves": false,
    "Resturant_open_time": 0,
    "Resturant_close_time": 12
  },
  {
    "image": "first",
    "name": "P.F. Chang's",
    "food_type": "American",
    "location": "New York",
    "rating": 4,
    "Price_for_two": 1807,
    "distance": "9.0",
    "offer": 20,
    "Alchol_serves": false,
    "Resturant_open_time": 21,
    "Resturant_close_time": 9
  },
  {
    "image": "third",
    "name": "Red Lobster",
    "food_type": "Thai",
    "location": "New York",
    "rating": 1,
    "Price_for_two": 386,
    "distance": "10.3",
    "offer": 26,
    "Alchol_serves": false,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "fifth",
    "name": "Red Lobster",
    "food_type": "Indian",
    "location": "San Francisco",
    "rating": 2,
    "Price_for_two": 1727,
    "distance": "3.3",
    "offer": 15,
    "Alchol_serves": false,
    "Resturant_open_time": 12,
    "Resturant_close_time": 0
  },
  {
    "image": "fourth",
    "name": "Chipotle Mexican Grill",
    "food_type": "Korean",
    "location": "Las Vegas",
    "rating": 3,
    "Price_for_two": 1734,
    "distance": "9.2",
    "offer": 24,
    "Alchol_serves": true,
    "Resturant_open_time": 7,
    "Resturant_close_time": 19
  },
  {
    "image": "eight",
    "name": "Five Guys",
    "food_type": "American",
    "location": "San Francisco",
    "rating": 4,
    "Price_for_two": 1404,
    "distance": "1.2",
    "offer": 22,
    "Alchol_serves": false,
    "Resturant_open_time": 16,
    "Resturant_close_time": 4
  },
  {
    "image": "third",
    "name": "Chipotle Mexican Grill",
    "food_type": "Mediterranean",
    "location": "Dallas",
    "rating": 3,
    "Price_for_two": 2259,
    "distance": "6.7",
    "offer": 3,
    "Alchol_serves": false,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "third",
    "name": "Panera Bread",
    "food_type": "French",
    "location": "Houston",
    "rating": 2,
    "Price_for_two": 1487,
    "distance": "8.3",
    "offer": 24,
    "Alchol_serves": false,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "nine",
    "name": "Panera Bread",
    "food_type": "Chinese",
    "location": "Houston",
    "rating": 2,
    "Price_for_two": 557,
    "distance": "3.2",
    "offer": 28,
    "Alchol_serves": false,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "nine",
    "name": "Panera Bread",
    "food_type": "Chinese",
    "location": "Chicago",
    "rating": 4,
    "Price_for_two": 1565,
    "distance": "7.2",
    "offer": 6,
    "Alchol_serves": false,
    "Resturant_open_time": 22,
    "Resturant_close_time": 10
  },
  {
    "image": "seventh",
    "name": "Buffalo Wild Wings",
    "food_type": "American",
    "location": "Chicago",
    "rating": 3,
    "Price_for_two": 2230,
    "distance": "2.7",
    "offer": 24,
    "Alchol_serves": true,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "third",
    "name": "Red Lobster",
    "food_type": "American",
    "location": "Dallas",
    "rating": 3,
    "Price_for_two": 652,
    "distance": "5.3",
    "offer": 27,
    "Alchol_serves": false,
    "Resturant_open_time": 4,
    "Resturant_close_time": 16
  },
  {
    "image": "eight",
    "name": "Buffalo Wild Wings",
    "food_type": "Korean",
    "location": "Seattle",
    "rating": 1,
    "Price_for_two": 2372,
    "distance": "9.0",
    "offer": 23,
    "Alchol_serves": false,
    "Resturant_open_time": 9,
    "Resturant_close_time": 21
  },
  {
    "image": "fifth",
    "name": "The Cheesecake Factory",
    "food_type": "Korean",
    "location": "Dallas",
    "rating": 2,
    "Price_for_two": 2452,
    "distance": "8.3",
    "offer": 15,
    "Alchol_serves": true,
    "Resturant_open_time": 13,
    "Resturant_close_time": 1
  },
  {
    "image": "fifth",
    "name": "The Cheesecake Factory",
    "food_type": "Mediterranean",
    "location": "Las Vegas",
    "rating": 3,
    "Price_for_two": 754,
    "distance": "8.1",
    "offer": 1,
    "Alchol_serves": false,
    "Resturant_open_time": 18,
    "Resturant_close_time": 6
  },
  {
    "image": "second",
    "name": "Five Guys",
    "food_type": "French",
    "location": "Las Vegas",
    "rating": 1,
    "Price_for_two": 2077,
    "distance": "4.4",
    "offer": 28,
    "Alchol_serves": true,
    "Resturant_open_time": 16,
    "Resturant_close_time": 4
  },
  {
    "image": "seventh",
    "name": "Chipotle Mexican Grill",
    "food_type": "Japanese",
    "location": "New York",
    "rating": 5,
    "Price_for_two": 1988,
    "distance": "6.4",
    "offer": 16,
    "Alchol_serves": true,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "ten",
    "name": "Chili's Grill & Bar",
    "food_type": "Mexican",
    "location": "Chicago",
    "rating": 5,
    "Price_for_two": 1653,
    "distance": "5.8",
    "offer": 3,
    "Alchol_serves": false,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "first",
    "name": "The Cheesecake Factory",
    "food_type": "Mexican",
    "location": "New York",
    "rating": 5,
    "Price_for_two": 2323,
    "distance": "6.8",
    "offer": 24,
    "Alchol_serves": false,
    "Resturant_open_time": 16,
    "Resturant_close_time": 4
  },
  {
    "image": "fourth",
    "name": "The Cheesecake Factory",
    "food_type": "Chinese",
    "location": "Las Vegas",
    "rating": 3,
    "Price_for_two": 790,
    "distance": "1.3",
    "offer": 11,
    "Alchol_serves": false,
    "Resturant_open_time": 21,
    "Resturant_close_time": 9
  },
  {
    "image": "eight",
    "name": "Five Guys",
    "food_type": "Mexican",
    "location": "Boston",
    "rating": 3,
    "Price_for_two": 1723,
    "distance": "10.4",
    "offer": 22,
    "Alchol_serves": false,
    "Resturant_open_time": 11,
    "Resturant_close_time": 23
  },
  {
    "image": "ten",
    "name": "The Cheesecake Factory",
    "food_type": "Mediterranean",
    "location": "Chicago",
    "rating": 4,
    "Price_for_two": 109,
    "distance": "8.7",
    "offer": 10,
    "Alchol_serves": false,
    "Resturant_open_time": 9,
    "Resturant_close_time": 21
  },
  {
    "image": "nine",
    "name": "Buffalo Wild Wings",
    "food_type": "Japanese",
    "location": "Seattle",
    "rating": 1,
    "Price_for_two": 505,
    "distance": "1.9",
    "offer": 1,
    "Alchol_serves": true,
    "Resturant_open_time": 15,
    "Resturant_close_time": 3
  },
  {
    "image": "third",
    "name": "Olive Garden",
    "food_type": "Indian",
    "location": "Las Vegas",
    "rating": 1,
    "Price_for_two": 1462,
    "distance": "2.2",
    "offer": 10,
    "Alchol_serves": false,
    "Resturant_open_time": 17,
    "Resturant_close_time": 5
  },
  {
    "image": "second",
    "name": "Red Lobster",
    "food_type": "Japanese",
    "location": "Chicago",
    "rating": 4,
    "Price_for_two": 1334,
    "distance": "10.9",
    "offer": 3,
    "Alchol_serves": false,
    "Resturant_open_time": 16,
    "Resturant_close_time": 4
  },
  {
    "image": "second",
    "name": "P.F. Chang's",
    "food_type": "Korean",
    "location": "Los Angeles",
    "rating": 1,
    "Price_for_two": 426,
    "distance": "5.8",
    "offer": 10,
    "Alchol_serves": false,
    "Resturant_open_time": 16,
    "Resturant_close_time": 4
  },
  {
    "image": "nine",
    "name": "The Cheesecake Factory",
    "food_type": "Korean",
    "location": "Chicago",
    "rating": 4,
    "Price_for_two": 427,
    "distance": "3.1",
    "offer": 13,
    "Alchol_serves": false,
    "Resturant_open_time": 5,
    "Resturant_close_time": 17
  },
  {
    "image": "eight",
    "name": "Red Lobster",
    "food_type": "Italian",
    "location": "Chicago",
    "rating": 1,
    "Price_for_two": 1492,
    "distance": "5.4",
    "offer": 14,
    "Alchol_serves": true,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "fourth",
    "name": "Five Guys",
    "food_type": "Indian",
    "location": "San Francisco",
    "rating": 2,
    "Price_for_two": 2361,
    "distance": "2.0",
    "offer": 28,
    "Alchol_serves": false,
    "Resturant_open_time": 12,
    "Resturant_close_time": 0
  },
  {
    "image": "seventh",
    "name": "The Cheesecake Factory",
    "food_type": "Mexican",
    "location": "Seattle",
    "rating": 2,
    "Price_for_two": 214,
    "distance": "3.4",
    "offer": 14,
    "Alchol_serves": false,
    "Resturant_open_time": 12,
    "Resturant_close_time": 0
  },
  {
    "image": "third",
    "name": "Chipotle Mexican Grill",
    "food_type": "Mexican",
    "location": "Chicago",
    "rating": 4,
    "Price_for_two": 799,
    "distance": "10.5",
    "offer": 12,
    "Alchol_serves": false,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "eight",
    "name": "Olive Garden",
    "food_type": "French",
    "location": "New York",
    "rating": 5,
    "Price_for_two": 1061,
    "distance": "7.0",
    "offer": 13,
    "Alchol_serves": false,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "nine",
    "name": "The Cheesecake Factory",
    "food_type": "Korean",
    "location": "Miami",
    "rating": 5,
    "Price_for_two": 1652,
    "distance": "2.8",
    "offer": 6,
    "Alchol_serves": true,
    "Resturant_open_time": 17,
    "Resturant_close_time": 5
  },
  {
    "image": "fourth",
    "name": "Panera Bread",
    "food_type": "Chinese",
    "location": "Boston",
    "rating": 3,
    "Price_for_two": 1983,
    "distance": "4.8",
    "offer": 25,
    "Alchol_serves": false,
    "Resturant_open_time": 22,
    "Resturant_close_time": 10
  },
  {
    "image": "fifth",
    "name": "Red Lobster",
    "food_type": "Mediterranean",
    "location": "New York",
    "rating": 4,
    "Price_for_two": 672,
    "distance": "1.5",
    "offer": 7,
    "Alchol_serves": false,
    "Resturant_open_time": 1,
    "Resturant_close_time": 13
  },
  {
    "image": "first",
    "name": "P.F. Chang's",
    "food_type": "Indian",
    "location": "Houston",
    "rating": 4,
    "Price_for_two": 788,
    "distance": "2.6",
    "offer": 8,
    "Alchol_serves": false,
    "Resturant_open_time": 9,
    "Resturant_close_time": 21
  },
  {
    "image": "eight",
    "name": "Texas Roadhouse",
    "food_type": "Korean",
    "location": "Dallas",
    "rating": 2,
    "Price_for_two": 758,
    "distance": "7.7",
    "offer": 25,
    "Alchol_serves": false,
    "Resturant_open_time": 7,
    "Resturant_close_time": 19
  },
  {
    "image": "fifth",
    "name": "Olive Garden",
    "food_type": "Italian",
    "location": "Houston",
    "rating": 5,
    "Price_for_two": 1038,
    "distance": "10.0",
    "offer": 5,
    "Alchol_serves": false,
    "Resturant_open_time": 6,
    "Resturant_close_time": 18
  },
  {
    "image": "fifth",
    "name": "Red Lobster",
    "food_type": "Mexican",
    "location": "San Francisco",
    "rating": 1,
    "Price_for_two": 1239,
    "distance": "4.4",
    "offer": 17,
    "Alchol_serves": false,
    "Resturant_open_time": 8,
    "Resturant_close_time": 20
  },
  {
    "image": "ten",
    "name": "Panera Bread",
    "food_type": "Mexican",
    "location": "Chicago",
    "rating": 1,
    "Price_for_two": 2137,
    "distance": "2.3",
    "offer": 16,
    "Alchol_serves": false,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "nine",
    "name": "Five Guys",
    "food_type": "Thai",
    "location": "Chicago",
    "rating": 2,
    "Price_for_two": 1511,
    "distance": "6.6",
    "offer": 14,
    "Alchol_serves": false,
    "Resturant_open_time": 7,
    "Resturant_close_time": 19
  },
  {
    "image": "third",
    "name": "Olive Garden",
    "food_type": "Italian",
    "location": "New York",
    "rating": 5,
    "Price_for_two": 1114,
    "distance": "2.8",
    "offer": 17,
    "Alchol_serves": false,
    "Resturant_open_time": 3,
    "Resturant_close_time": 15
  },
  {
    "image": "sixth",
    "name": "Texas Roadhouse",
    "food_type": "Japanese",
    "location": "Seattle",
    "rating": 2,
    "Price_for_two": 481,
    "distance": "8.3",
    "offer": 21,
    "Alchol_serves": false,
    "Resturant_open_time": 2,
    "Resturant_close_time": 14
  },
  {
    "image": "fourth",
    "name": "Panera Bread",
    "food_type": "Korean",
    "location": "Los Angeles",
    "rating": 4,
    "Price_for_two": 211,
    "distance": "8.0",
    "offer": 3,
    "Alchol_serves": false,
    "Resturant_open_time": 1,
    "Resturant_close_time": 13
  },
  {
    "image": "second",
    "name": "P.F. Chang's",
    "food_type": "French",
    "location": "San Francisco",
    "rating": 5,
    "Price_for_two": 1339,
    "distance": "10.6",
    "offer": 0,
    "Alchol_serves": true,
    "Resturant_open_time": 15,
    "Resturant_close_time": 3
  },
  {
    "image": "ten",
    "name": "The Cheesecake Factory",
    "food_type": "Mediterranean",
    "location": "Miami",
    "rating": 4,
    "Price_for_two": 2162,
    "distance": "10.9",
    "offer": 9,
    "Alchol_serves": false,
    "Resturant_open_time": 23,
    "Resturant_close_time": 11
  },
  {
    "image": "ten",
    "name": "Olive Garden",
    "food_type": "French",
    "location": "Dallas",
    "rating": 5,
    "Price_for_two": 1656,
    "distance": "3.4",
    "offer": 18,
    "Alchol_serves": false,
    "Resturant_open_time": 9,
    "Resturant_close_time": 21
  },
  {
    "image": "fourth",
    "name": "P.F. Chang's",
    "food_type": "Mexican",
    "location": "Los Angeles",
    "rating": 5,
    "Price_for_two": 1320,
    "distance": "5.1",
    "offer": 12,
    "Alchol_serves": true,
    "Resturant_open_time": 17,
    "Resturant_close_time": 5
  },
  {
    "image": "eight",
    "name": "Texas Roadhouse",
    "food_type": "Indian",
    "location": "New York",
    "rating": 3,
    "Price_for_two": 826,
    "distance": "5.8",
    "offer": 23,
    "Alchol_serves": false,
    "Resturant_open_time": 0,
    "Resturant_close_time": 12
  },
  {
    "image": "nine",
    "name": "Chili's Grill & Bar",
    "food_type": "Mediterranean",
    "location": "Miami",
    "rating": 4,
    "Price_for_two": 1906,
    "distance": "4.5",
    "offer": 20,
    "Alchol_serves": false,
    "Resturant_open_time": 22,
    "Resturant_close_time": 10
  },
  {
    "image": "second",
    "name": "P.F. Chang's",
    "food_type": "American",
    "location": "Las Vegas",
    "rating": 5,
    "Price_for_two": 418,
    "distance": "10.1",
    "offer": 6,
    "Alchol_serves": true,
    "Resturant_open_time": 9,
    "Resturant_close_time": 21
  },
  {
    "image": "seventh",
    "name": "The Cheesecake Factory",
    "food_type": "Korean",
    "location": "Miami",
    "rating": 3,
    "Price_for_two": 1149,
    "distance": "9.7",
    "offer": 23,
    "Alchol_serves": false,
    "Resturant_open_time": 15,
    "Resturant_close_time": 3
  }
];

// Function 

function getrestaurants(restaurants){

    const root_div = document.getElementById('root');
    
    restaurants.forEach(restaurant => {
        
     // Card create
    const card = document.createElement('div');
    card.classList.add('card');

    // Image create
    const image = document.createElement('img');
    image.src=`images/${restaurant.image}.jpeg`;

    // Card-content div
    const card_content = document.createElement('div');
    card_content.classList.add('card-content');

    // Card-content div inside div's

    // header-div
    const header_div = document.createElement('div');
    header_div.classList.add('card-header');

    // header-div inside content
    const h3 = document.createElement('h3');
    h3.textContent = restaurant.name;

    const rating = document.createElement('span');

    // Apply Rating background color conditionally
      if (restaurant.rating <= 2) 
    {
      rating.style.backgroundColor = "red";
    } else if (restaurant.rating === 3) 
    {
      rating.style.backgroundColor = "Orange";
      rating.style.color = "white"; // better contrast
    } else if (restaurant.rating === 4 || restaurant.rating === 5) 
    {
      rating.style.backgroundColor = "green";
    }
      rating.classList.add('rating');
      rating.textContent = `${restaurant.rating}★`;

    // Append these both into header-div
    header_div.appendChild(h3);
    header_div.appendChild(rating);


    // footer-div
    const footer_div = document.createElement('div');
    footer_div.classList.add('card-footer');

    // footer-div inside content
    const food_type = document.createElement('span');
    food_type.textContent = restaurant.food_type;

    const Price_for_two = document.createElement('span');
    Price_for_two.textContent = `₹${restaurant.Price_for_two} for two`;

    // Append these both into footer-div
    footer_div.appendChild(food_type);
    footer_div.appendChild(Price_for_two);

    // location-div
    const location_div = document.createElement('div');
    location_div.classList.add('card-location');
  
    // location-div inside parts
    const location = document.createElement('span');
    location.textContent = restaurant.location;

    const distance = document.createElement('span');
    distance.textContent = `${restaurant.distance} km`;


    // Append these into location-div
    location_div.appendChild(location);
    location_div.appendChild(distance);

    // card-content append all content div's
    card_content.appendChild(header_div);
    card_content.appendChild(footer_div);
    card_content.appendChild(location_div);

    // card append image & card-content
    card.appendChild(image);
    card.appendChild(card_content);
    
     // Add offer line if available
    if (restaurant.offer > 15) {
      const offerLine = document.createElement('p');
      offerLine.innerText = `${restaurant.offer}% OFF`;
      offerLine.classList.add('offer'); // tailwind styling
      card.appendChild(offerLine);
    }

    // Close Time
    const currentHour = new Date().getHours(); 
    if(restaurant.Resturant_close_time>currentHour){
    const time_Remain = document.createElement('p');
    time_Remain.classList.add('hr_remain');

      time_Remain.innerText = `Close in less than ${restaurant.Resturant_close_time-currentHour} hr `
      card.appendChild(time_Remain);
    }
    
    else{
      const close = document.createElement('p');
      close.classList.add('close');
      close.innerText = "Closed";
      card.appendChild(close);
    }

     // root append card
    root.appendChild(card);    

    });
}

getrestaurants(restaurants);

// Serves Alcohol Button
const Alchol_serves_Btn = document.getElementById('Alcohol');
Alchol_serves_Btn.addEventListener('click',()=>{

  // Above filter logic in one line;
    const result = restaurants.filter( obj=> obj.Alchol_serves);

    // Remove old result
    document.getElementById('root').replaceChildren(); // OR .innertesxt = ""

    // Just call fn and pass result which is our true condition
    getrestaurants(result);
})

// Rating Button (Same above button logic)
const Rating_Btn = document.getElementById('Rating');
Rating_Btn.addEventListener('click',()=>{

    const result = restaurants.filter( obj=> obj.rating>4);
    document.getElementById('root').replaceChildren();

    getrestaurants(result);
})

// Open Button logic 
const OpenNow_Btn = document.getElementById('Open');

OpenNow_Btn.addEventListener('click', () => {

    const currentHour = new Date().getHours(); // (Actual current time)
    //const currentHour = 21; // set your current hour (0–23) (Hard code time)

    const result = restaurants.filter(obj => currentHour < obj.Resturant_close_time);
  
    document.getElementById('root').replaceChildren();
    getrestaurants(result);
});

// Offer button logic

document.getElementById('Offers').addEventListener('click',()=>{
  const result = restaurants.filter(obj=>obj.offer>15);
  document.getElementById('root').replaceChildren();
  getrestaurants(result);

})

// Filter Pop-up logic:
// Pop-up visible after click on filter btn:
document.getElementById('Filters').addEventListener('click',()=>{
document.getElementById('filterPopup').classList.remove('hidden');
})

// Pop-up div logic:
document.getElementById('applyFilter').addEventListener('click',()=>{
  const selected_radio = document.querySelector('input[name="filterOption"]:checked');
  const answer = selected_radio.value;

  // Check as per condition
  if(answer==="rating"){
    restaurants.sort((a,b)=> b.rating-a.rating); // Descending
  }
  else if(answer==="highLow"){
    restaurants.sort((a,b)=>b.Price_for_two-a.Price_for_two); // Descending
  }
  else if(answer==="costLowHigh"){
    restaurants.sort((a,b)=>a.Price_for_two-b.Price_for_two); // Ascending
  }
  else if(answer==="distance"){
    restaurants.sort((a,b)=>a.distance-b.distance) // Ascending
  }
  
  document.getElementById('root').replaceChildren();
  document.getElementById('filterPopup').classList.add('hidden');
  getrestaurants(restaurants);


})

// Close button
document.getElementById('closeFilter').addEventListener('click',()=>{
  document.getElementById('filterPopup').classList.add('hidden');  
})
