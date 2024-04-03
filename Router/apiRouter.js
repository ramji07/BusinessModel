import   express from 'express'
const router =  express.Router();
import  business from '../Controller/businessContorller.js'


router.post('/business', business)



export default router