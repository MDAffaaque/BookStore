const express = require("express");
const PORT = 5555;
const MONGOURL =
  "mongodb+srv://MDAffaaquw:mSdloDZcnSjo6WzI@cluster0.mdcko0i.mongodb.net/BookStore?retryWrites=true&w=majority";
const mongoose = require("mongoose");
const {router}=require('./Routes/booksRoute');
const cors=require('cors');
const app = express(); 

// middleware for parsing request body
app.use(express.json());

//Option->1:Allow all origin with default of cors(*)
app.use(cors());


// Option->2:Allow Custom Origins

// app.use(cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }))

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello Budy welcome to the MERN stack tutorial");
});
app.use('/books',router);
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("The database is connected successfully");
    app.listen(PORT, () => {
      console.log(`App is listening to post:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Sorry Some error is occured, " + err);
  });
