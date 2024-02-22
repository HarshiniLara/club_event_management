import mongoose from 'mongoose';

export const connectDB = async ()=>{
    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;
    const url = `mongodb+srv://${username}:${password}@ams.iyeeqzo.mongodb.net/?retryWrites=true&w=majority`;
    
    const options = {
        autoIndex: false,  
        maxPoolSize: 10,  
        serverSelectionTimeoutMS: 5000, 
        socketTimeoutMS: 45000,  
        family: 4
      };
    
    try{
        await mongoose.connect(url, options);
        console.log(`Database Connection Success`);
    }
    catch(err){
        console.log(`Database Connection Failed: ${err.message}`);
    }
    
}
