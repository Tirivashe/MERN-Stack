const express = require('express');
const router = express.Router();
const Todo = require('../models/todo-model')

router.get('/', (req, res) => {
    Todo.find({}, (err, result) => {
        if(err){
            res.status(404).json({
                message: "Error: Server Error"
            })
        }else{
            res.status(200).json({
                message: "Success",
                todo: result
            })
        }
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Todo.findById({_id: id}, (err, result) => {
        if(err){
            res.status(404).json({
                message: "Error: Server Error"
            })
        }else{
            res.status(200).json({
                message: "Success",
                todo: result
            })
        }
    })
})

router.post('/add', (req, res) => {
    const { description, responsible, priority, completed } = req.body;
    const todo = new Todo({
        description,
        responsible,
        priority,
        completed
    }); //adding the entire todo body. No need to check on each element 
    todo.save()
    .then(todo => {
        res.status(200).json({message: "Todo successfully added"})
    })
    .catch(err => {
        res.status(400).json({Error: "Unable to add Todo"});
        console.log(err);
    })
})

router.patch('/update/:id', (req, res) => {
    const id = req.params.id
    const updatedObj = req.body;
    Todo.updateOne({ _id: id }, {$set: updatedObj}, (err, result) => {
        if(err){
            res.status(404).json({
                message: "Alert: Error updating"
            })
        }
        else{ 
            res.status(200).json({update: "successful", newTodo: result})
        }
    })
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    Todo.deleteOne({_id: id}, (err, result) => {
        if(err){
            console.log("Cannot delete item", err)
        }else{
            res.status(200).json({
                Message: "Delete Successful"
            })
        }
    })
})

module.exports = router