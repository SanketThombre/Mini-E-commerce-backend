
const express = require('express');

const router = express.Router();

const Product = require("../models/products.models");


// -------------------Product Crud ----------------------------

router.get("", async (req, res) => {
    try {
        const product = await Product.find().lean().exec();
        res.status(201).send(product);
    }
    catch (er) {
        return res.status(500).send(er.message);
    }
});

router.post("", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).send(product);
    }
    catch (er) {
        return res.status(500).send(er.message);
    }
});
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).lean().exec();
        res.status(201).send(product);
    }
    catch (er) {
        return res.status(500).send(er.message);
    }
});

module.exports = router;