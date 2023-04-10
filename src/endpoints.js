const express = require('express');
const StudentModel = require('../models/studentModel');

module.exports = (app) => {

    // CREATE - Create a new resource
    app.post('/students', async (req, res) => {
        // Get data from request body
        const data = req.body;
        const studentModel = new StudentModel(data);
        // Save the new instance to the database
        try {
            const result = await studentModel.save();
            // Send the created resource as response
            res.status(201).send(result);
        } catch (err) {
            // Handle error
            res.status(500).send(err);
        }
    });

    // READ - Get a resource
    app.get('/students/:id', async (req, res) => {
        // Get the ID from the request parameters
        const id = req.params.id;
        // Find the resource with the specified ID in the database
        try {
            const result = await StudentModel.findById(id);
            if (!result) {
                // Resource not found
                res.status(404).send('Not found');
            } else {
                // Send the resource as response
                res.send(result);
            }
        } catch (err) {
            // Handle error
            res.status(500).send(err);
        }
    });

    // UPDATE - Update a resource
    app.put('/students/:id', async (req, res) => {
        // Get the ID from the request parameters
        const id = req.params.id;
        // Get the updated data from the request body
        const data = req.body;
        // Update the resource with the specified ID in the database
        try {
            const result = await StudentModel.findByIdAndUpdate(id, data, { new: true });
            if (!result) {
                // Resource not found
                res.status(404).send('Not found');
            } else {
                // Send the updated resource as response
                res.send(result);
            }
        } catch (err) {
            // Handle error
            res.status(500).send(err);
        }
    });

    // DELETE - Delete a resource
    app.delete('/students/:id', async (req, res) => {
        // Get the ID from the request parameters
        const id = req.params.id;
        // Delete the resource with the specified ID from the database
        try {
            const result = await StudentModel.findByIdAndDelete(id);
            if (!result) {
                // Resource not found
                res.status(404).send('Not found');
            } else {
                // Send a success response
                res.send('Deleted successfully');
            }
        } catch (err) {
            // Handle error
            res.status(500).send(err);
        }
    });

    // LIST - Get all resources
    app.get('/students', async (req, res) => {
        // Find all resources in the database
        try {
            const result = await StudentModel.find();
            // Send the resources as response
            res.send(result);
        } catch (err) {
            // Handle error
            res.status(500).send(err);
        }
    });
}