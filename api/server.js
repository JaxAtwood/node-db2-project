const express = require("express");
const Cars = require('../cars/carsDb.js');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ message: "works" })
})

server.get("/api/cars", (req, res) => {
    Cars.get()
        .then(cars => {
        res.status(200).json(cars)
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: "Cannot GET Cars" })
        })
});


server.get("/api/cars/:id", (req, res) => {
    const { id } = req.params;

    Cars.getById(id)
        .then(cars => {
            console.log("HERE I AM", cars)
            if (cars) {
                res.status(200).json(cars);  
            } else {
                res.status(404).json({ errorMessage: "The car with the specified ID does not exist" })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ errorMessage: "The car could not be retrieved"})
        })
})


server.post("/api/cars", (req, res) => {
    const cars = req.body;
    console.log(cars)

    Cars.insert(cars)
    .then(param => {
        if (cars.VIN && cars.make && cars.model && cars.mileage) {
            res.status(201).json({success: true, param})
        } else {
            res.status(400).json({ errorMessage: "Please provide necessary vehicle information" })
        }
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "There was an error while saving the car to the db", err});
    });
})

module.exports = server;