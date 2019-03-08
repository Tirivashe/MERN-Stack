const express = require('express');
const router = express.Router();

const Item = require('../../models/Item')

router.get('/', (req, res) =>{
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items))
});

router.post('/', (req, res) =>{
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
    .then(item => { res.status(200).json(item) })
});

router.delete('/:_id', (req, res) =>{
    const id = req.params._id;
    Item.deleteOne({_id: id}, (err, result) =>{
        if(err){
            res.status(404).json(err);
        }else{
            res.status(200).json(result);
            console.log("Delete Successful");
        }
        
    })
});
module.exports = router