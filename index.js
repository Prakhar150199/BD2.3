const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

let products = [
  {
    name: 'Laptop',
    price: 50000,
    category: 'Electronics',
  },
  {
    name: 'Mobile',
    price: 20000,
    category: 'Electronics',
  },
  {
    name: 'Shirt',
    price: 1500,
    category: 'Apparel',
  },
  {
    name: 'Mixer Grinder',
    price: 4000,
    category: 'Home Appliances',
  },
];

let cars = [
  {
    make: 'Maruti',
    model: 'Swift',
    mileage: 1500,
  },
  {
    make: 'Hyundai',
    modeil: 'i20',
    mileage: 25000,
  },
  {
    make: 'Tata',
    model: 'Nexon',
    mileage: 30000,
  },
];

let movies = [
  {
    title: '3 Idiots',
    genre: 'Comedy',
    rating: 9,
  },
  {
    title: 'Dangal',
    genre: 'Drama',
    rating: 10,
  },
  {
    title: 'Bahubali',
    genre: 'Action',
    rating: 8,
  },
];

let orders = [
  {
    orderId: 1,
    customerName: 'Rahul',
    status: 'shipped',
  },
  {
    orderId: 2,
    customerName: 'Sita',
    status: 'pending',
  },
  {
    orderId: 3,
    customerName: 'Amit',
    status: 'shipped',
  },
];

function filterProductsByCategory(productObj, category) {
  return productObj.category === category;
}

app.get('/products/category/:category', (req, res) => {
  let category = req.params.category;
  let result = products.filter((productObj) =>
    filterProductsByCategory(productObj, category)
  );
  res.json(result);
});

function filterCarsByMileage(carsObj, mileage) {
  return carsObj.mileage < mileage;
}

app.get('/cars/mileage/:mileage', (req, res) => {
  let mileage = req.params.mileage;
  let result = cars.filter((carsObj) => filterCarsByMileage(carsObj, mileage));
  res.json(result);
});

function filterMoviesByRating(moviesObj, rating) {
  return moviesObj.rating > rating;
}

app.get('/movies/rating/:rating', (req, res) => {
  let rating = req.params.rating;
  let result = movies.filter((moviesObj, rating) =>
    filterMoviesByRating(moviesObj, rating)
  );
  res.json(result);
});

function filterOrderByStatus(ordersObj, status) {
  return ordersObj.status === status;
}

app.get('/orders/status/:status', (req, res) => {
  let status = req.params.status;
  let result = orders.filter((ordersObj) =>
    filterOrderByStatus(ordersObj, status)
  );
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
