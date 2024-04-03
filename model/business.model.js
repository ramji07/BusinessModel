import mongoose from "mongoose"

const BusinessSchema =  new mongoose.Schema({
    StartUpName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    selectedCategory:{
        type:String,
        required:true
    },
    Problem:{
        type:String,
        required:true
    },
    Resolve:{
        type:String,
        required:true
    },
    Costomer:{
        type:String,
        required:true
    },
    Revenue:{
        type:String,
        required:true
    },
    Product:{
        type:String,
        required:true
    },
    Resources:{
        type:String,
        required:true
    },
    Unique:{
        type:String,
        required:true
    },
    Competitors:{
        type:String,
        required:true
    },
    Target:{
        type:String,
        required:true
    }
})

const BusinessModel =  mongoose.model('businessModel', BusinessSchema)

export default  BusinessModel