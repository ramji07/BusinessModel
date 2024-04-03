// server.js
import dotenv  from 'dotenv'
import express from 'express'
import router from './Router/apiRouter.js'
import Connection from './db/dbConnection.js';
import cors from 'cors'


const app = express();
dotenv.config()
const PORT = process.env.PORT


app.use(cors())
app.use(express.json());
app.get('/',(req,res)=>{
  res.status(200).send("hello world")
})
app.use('/api', router)

Connection()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
