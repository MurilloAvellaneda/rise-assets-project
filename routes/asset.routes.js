const { Router } = require("express");
const Asset = require("../models/Asset.model");

const router = Router()

router.post("/", async(req, res) => {
    const  { id } = req.user
    try {
        const asset = await Asset.create({...req.body, userId: id});
        res.status(200).json(asset);
    } catch (error) {
        res.status(500).json({message: "Error while creating asset", error})
    }
});

router.get("/", async(req, res) => {
    try {
        const assets = await Asset.find();
        res.status(200).json(assets);
    } catch (error) {
        res.status(500).json({message: "Error while geting assets", error});
    }
});

router.get("/:assetId", async(req, res) => {
    const { assetId } = req.params;
    try {
        const asset = await Asset.findById(assetId);
        res.status(200).json(asset);
    } catch (error) {
        res.status(500).json({message: "Error while geting an asset", error});
    }
});

router.put("/:assetId", async(req, res) => {
    const { assetId } = req.params
    try {
        const updatedAsset = await Asset.findByIdAndUpdate(assetId, req.body, {new: true});
        res.status(200).json(updatedAsset);
    } catch(error) {
        res.status(500).json({message: "Error while updating an asset", error});
    }
});

router.delete("/:assetId", async(req, res) => {
    const { assetId } = req.params
    try {
        await Asset.findByIdAndDelete(assetId);
        res.status(204).json();
    } catch(error){
        res.status(500).json({message: "Error while deleting an asset", error});
    }
});

module.exports = router