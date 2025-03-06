import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_DB_URL;
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
})

mongoose.connection.on("error", (error) => {
    console.error("Error connecting to MongoDB", error);
})

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

export { mongoConnect, mongoDisconnect };