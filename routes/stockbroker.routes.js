const { Router } = require("express");
const Stockbroker = require("../models/Stockbroker.model");

const router = Router()

router.post("/", async(req, res) => {
    const  { id } = req.user
    try {
        const stockbroker = await Stockbroker.create({...req.body, assetId: id});
        res.status(200).json(stockbroker);
    } catch (error) {
        res.status(500).json({message: "Error while creating stockbroker", error})
    }
});

router.get("/", async(req, res) => {
    try {
        const stockbrokers = await Stockbroker.find();
        res.status(200).json(stockbrokers);
    } catch (error) {
        res.status(500).json({message: "Error while geting stockbrokers", error});
    }
});

router.get("/:stockbrokerId", async(req, res) => {
    const { stockbrokerId } = req.params;
    try {
        const stockbroker = await Stockbroker.findById(stockbrokerId);
        res.status(200).json(stockbroker);
    } catch (error) {
        res.status(500).json({message: "Error while geting a stockbroker", error});
    }
});

router.put("/:stockbrokerId", async(req, res) => {
    const { stockbrokerId } = req.params
    try {
        const updatedStockbroker = await Stockbroker.findByIdAndUpdate(stockbrokerId, req.body, {new: true});
        res.status(200).json(updatedStockbroker);
    } catch(error) {
        res.status(500).json({message: "Error while updating a stockbroker", error});
    }
});

router.delete("/:stockbrokerId", async(req, res) => {
    const { stockbrokerId } = req.params
    try {
        await Stockbroker.findByIdAndDelete(stockbrokerId);
        res.status(204).json();
    } catch(error){
        res.status(500).json({message: "Error while deleting a stockbroker", error});
    }
});

module.exports = router