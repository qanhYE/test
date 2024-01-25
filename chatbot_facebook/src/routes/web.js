import express from "express";
import chatbotController from "../controllers/chatbotcontroller";
import { ROOT_CONFIG_FILENAMES } from "@babel/core/lib/config/files";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", chatbotController.getHomePage);

    router.get("/webhook", chatbotController.getWebhook);
    router.post("/webhook", chatbotController.postWebhook);
    router.update

    return app.use("/", router);
}

module.exports = initWebRoutes; 