const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 8081; // or any other port you prefer

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
// Increase the payload size limit (e.g., 10MB)
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  
  mongoose.connect('mongodb://localhost:27017/foodhunger', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });
  
  const Resturant = require('./models/resturant');
  const Image = require('./models/image');
// const image = require('./models/image');
const Hello = require('./models/request');

  app.post('/signup', async (req, res) => {
    try {
       console.log(req.body)
      const {name,govnumber,address,contact,foodtype,email,password } = req.body;
  
      // Create a new user instance
      const newResturant = new Resturant({name,govnumber,address,contact,foodtype,email,password});
      console.log("hell",newResturant)
      // Save the user to the database
      await  newResturant.save();
  
      res.status(201).json({ message: 'Resturant created successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    }
  });
  

  app.post('/login', async (req, res) => {
    try {
      console.log(req.body)
      const { email, password } = req.body;
        
      // Find the user in the database
      const user = await Resturant.findOne({ email });
  
      // Check if the user exists and the password is correct
      if (user && user.password === password) {
        res.status(200).json({ message: 'Login successful', user });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error during login' });
    }
  });
  

  app.post('/upload', async (req, res) => {
    try {
      const { name, data, email } = req.body;
  
      // Create a new image document 
      const image = new Image({
        email: email,
        name: name,
        data: data
      });
  
      // Save the image to the database
      await image.save();
  
      res.status(201).json({ message: 'Image uploaded successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error uploading image' });
    }
  });
  
  app.post('/getupload', async (req, res) => {
    try {
      console.log(req.body)
      const { email} = req.body;
        
      // Find the user in the database
      const user = await Image.find({ email });
      console.log(user)
      if (user.length === 0) {
        return res.status(404).json({ message: 'No user data found for the email provided' });
      }
  
      res.status(200).json({ user });

   
    } catch (error) {
      res.status(500).json({ message: 'Error during finding' });
    }
  });

  app.get('/allupload', async (req, res) => {
    try {
      const condition = { status: false };
      // Find the user in the database
      const user = await Image.find(condition);
      console.log(user)
      if (user.length === 0) {
        return res.status(404).json({ message: 'No user data found for the email provided' });
      }
  
      res.status(200).json({ user });

   
    } catch (error) {
      res.status(500).json({ message: 'Error during login' });
    }
  });


  app.post('/request', async (req, res) => {
    try {
      //  console.log(req.body)
      const {name,restuid,restuemail,foodname,cnic,address,email,contact,usertype,comment } = req.body;
  
      // Create a new user instance
      const newData =  Hello({
        name:name,
        restuid:restuid,
        restuemail:restuemail,
        foodname:foodname,
        cnicreq:cnic,
        address:address,
        emailreq:email,
        contactreq:contact,
        usertypereq:usertype,
        comment:comment
      });
      console.log("hell",newData)
      // Save the user to the database 
      const data = await newData.save();
      console.log("data",data)
      res.status(201).json({ message: 'Request submitted successfully' });
    } catch (error) {
      console.error('MongoDB Error:', error.message);
      res.status(500).json({ error: 'Error submitting requestion' });
    }
  }); 

  app.post('/getrequest', async (req, res) => {
    try {
      console.log(req.body)
      const {restuid} = req.body;
        
      // Find the user in the database
      const user = await Hello.find({ restuid });
      console.log(user)
      if (user.length === 0) {
        return res.status(404).json({ message: 'No user data found for the email provided' });
      }
  
      res.status(200).json({ user });

   
    } catch (error) {
      res.status(500).json({ message: 'Error during login' });
    }
  });

