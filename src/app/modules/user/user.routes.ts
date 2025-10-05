import { Router } from "express";
import { user_controller } from "./user.controller";

const router = Router();

router.post("/create-admin", user_controller.createAdmin);

export const userRoutes = router;
