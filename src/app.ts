import express from "express";
import dotenv from 'dotenv';
dotenv.config();

import userRoutes from "./routes/userRoutes";

//Import Needed Middlewares, Utils and Needed Files
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import deserializeUser from "./middleware/deserializeUser";

const app = express();

const PORT = config.get<number>("port")


//Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));

//Parse JSON bodies (as sent by API clients)
app.use(express.json());

//Deserialize the user and get the Id
app.use(deserializeUser)

// Log requests for debugging
app.use((req, res, next) => {
    console.log(`Received request: ${req.method} ${req.url}`);
    next();
});

//Set the Routes
userRoutes(app);


app.listen(PORT, async () => {
    logger.info(`App is running at http://localhost:${PORT}`)

    //Connect Database
    await connect()
});