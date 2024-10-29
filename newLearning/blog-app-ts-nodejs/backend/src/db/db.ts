import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_NAME}`);

        console.log("Database connected", connect.connection.host);
    } catch (error) {
        console.error("Database connection failed!!\n")
    }
}

export { connectDB }