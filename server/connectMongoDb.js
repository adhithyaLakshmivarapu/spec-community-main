import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Make sure the connection string is wrapped in quotes as a string
        const uri = "mongodb+srv://karthikreddy81799:Karthik%4025@cluster0.6xawr.mongodb.net/comminityapp?retryWrites=true&w=majority&appName=Cluster0"; 
        if (!uri) {
            throw new Error("MONGO_URI environment variable is not defined");
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;
