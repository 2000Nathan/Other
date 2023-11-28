const log4js = require("log4js");
import { Response } from "express";

log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});

const logger = log4js.getLogger("cheese");

function error(message: string, res: Response ) {
  logger.error(`[${new Date()}] ERROR ${message}` );
  res.send(message); 
}

export default {
    logger,
}