import express from "express";
import routes from "./routes";

//Import Needed Utils and Needed Files
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";

const app = express();



const PORT = config.get<number>("port")

app.listen(PORT, async () => {
    logger.info(`App is running at http://localhost:${PORT}`)

    //Connect Database
    await connect()

    routes(app);
});