const express = require('express');
const User = require('../models/user');

const router = new express.Router();

router.post('/users', async (req, res , next) =>  {
     const user = new User(req.body);
     try {
          const saveUser = await user.save();
          res.status(201).send(saveUser); // postman response
     } catch (error) {
           res.status(400).send(error); // postman response pas console 
     }
      })
router.get('/users', async (req, res , next) => { 
     try {
       const users =   await User.find({});
       res.send(users); // postman response pas console
     } catch (error) {
          res.status(500).send(error)
     }
   
})
router.get('/users/:id', async (req, res , next) => { 
     const userId = req.params.id;

     try {
       const user =   await User.findById(userId);
       if (!user) return res.status(404).send('User not found');
       res.send(user); // postman response pas console
     } catch (error) {
          res.status(500).send(error)
     }
   
})
router.patch('/users/:id', async (req, res , next) => { 
     const updateInfo = Object.keys(req.body);
     const userId = req.params.id;
     try {
      const user =   await User.findById(userId );
      updateInfo.forEach(update => user[update] = req.body[update]);
      await user.save(); 
        if (!user) return res.status(404).send('User not found');
        res.send(user); // postman response pas console
     } catch (error) {
          res.status(500).send(error)
     }
   
})
router.delete('/users/:id', async (req, res , next) => { 
     const userId = req.params.id;

     try {
       const user =   await User.findByIdAndDelete(userId ); 
          if (!user) return res.status(404).send('User not found');
          res.send(user); // postman response pas console
     } catch (error) {
          res.status(500).send(error)
     }
   
})


module.exports = router;
