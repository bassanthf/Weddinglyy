const bouquet=require('../../models/bouquetModel');

exports.getAllbouquets = async (req, res) => {
    try {
        const boq = await bouquet.find();
        res.status(200).json(boq);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Fetch a single bouquet by ID
exports.getBouquetById = async (req, res) => {
    try {
        const boq = await bouquet.findById(req.params.id);
        if (!boq) return res.status(404).json({ message: 'bouquet not found' });
        res.json(boq);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.postBouquet = async (req,res) => {
    const boq = new bouquet(req.body);
    try {
        if (Array.isArray(req.body)) {
            const boqes = await bouquet.insertMany(req.body);
            res.status(201).json(boqes);
        }
        else {
            const boq = new bouquet(req.body);
            await boq.save();
            res.json(boq);
        }


    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}