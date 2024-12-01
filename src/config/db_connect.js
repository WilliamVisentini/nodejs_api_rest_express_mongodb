import mongoose, { mongo } from "mongoose"

async function connect_db() {
    mongoose.connect(process.env.URI);
    return mongoose.connection;
}

export default connect_db;
