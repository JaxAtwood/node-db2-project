const express = require("express");

const db = require('../data/dbConfig.js');

module.exports = {
    get,
    getById,
    insert
}

function get() {
    return db('cars');
}

function getById(id) {
    return db('cars')
    .where({ id })
    .first();
}

function insert(car) {
    return db('cars')
    .insert(car)
    .then(ids => {
        return getById(ids[0]);
    });
}