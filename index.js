const express = require('express');
const app = express();
const PORT = 3000;

app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

const mongodb = require('./mongoose')

const Todo = require('./todoList');

app.post('/create',async (req, res) => {
    let todo =await Todo.create({
        description:req.body.description,
        name:req.body.name,
        status:req.body.status
    })
    
    return res.json({todo});
  });
  
  app.get('/get/:id',async (req, res) => {
    const todo =await Todo.findById(req.params.id);
    if(!todo)return res.status(500).json({success:false})
    return res.status(200).json({todo});
  });
  
  app.put('/update/:id', async(req, res) => {
    const todo =await Todo.findById(req.params.id);
    if(!todo)return res.status(500).json({success:false})

    await Todo.findByIdAndUpdate(todo, {
        description:req.body.description,
        name:req.body.name,
        status:req.body.status
    })

    return res.status(200).json({success:true})
  });
  
  app.delete('/delete/:id', async(req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    return res.status(200).json({success:true})
  });
  
  

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});