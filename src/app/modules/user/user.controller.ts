/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status";
import { user_service } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  const result = await user_service.createAdmin(req.body);
  res.json({
    statusCode: httpStatus.OK,
    success: true,
    message: "",
    data: result,
  });
};

export const user_controller = {
  createAdmin,
};
