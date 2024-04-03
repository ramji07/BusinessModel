import businessModel from '../model/business.model.js'



const business =  async (req,res) => {
    try {
        const {StartUpName,email,selectedCategory,Problem,Resolve,Costomer,Revenue,Product,Resources,Unique,Competitors,Target} = req.body;
   
     if(!StartUpName)
     {
        res.status(300).send({
            success:false,
            message:'StartUP Name is Required'
        })
     }
     if(!email)
     {
        res.status(301).send({
            success:false,
            message:'StartUP Email is Required'
        })
     }
     if(!selectedCategory)
     {
        res.status(302).send({
            success:false,
            message:'StartUP Category is Required'
        })
     }


     const BusinessData =  await businessModel({StartUpName,email,selectedCategory,Problem,Resolve,Costomer,Revenue,Product,Resources,Unique,Competitors,Target}).save()

     if(!BusinessData)
     {
        res.status(400).send({
            success:false,
            message:'Something Wrong to Server'
        })
     }

     res.status(201).send({
        success:true,
        message:'thanks for Submit your Business Models'
     })

    } catch (error) {
        
        res.status(500).send({
            success:false,
            message:'Internal Server Error'
        })
    }
}


export  default business
