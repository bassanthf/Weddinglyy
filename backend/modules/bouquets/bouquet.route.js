const express =require('express');
const router=express.Router();
const { getAllbouquets, getBouquetById,postBouquet } = require('./bouquet.controller');


router.post('/', postBouquet);
router.get('/', getAllbouquets);
router.get('/:id', getBouquetById);

module.exports = router;
