import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.set('strictQuery', false)

const dbUrl =`${process.env.MongoDbURL}`

const connectdB = async()=>{
   try{
    mongoose.connect(dbUrl,{dbName:'blog'})
    console.log('DB connected')
   }catch{
     console.log('db not conected')
   }
}

export default connectdB