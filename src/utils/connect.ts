import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

export default async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("The Database was connected successfully")
  } catch (error) {
    logger.error(
      `Could not connect to the Database and this is the error ${error}`
    );
    process.exit(1);
  }
}
