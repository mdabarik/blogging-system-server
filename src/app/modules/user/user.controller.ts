import { NextFunction, Request, Response } from 'express';
import { userService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    console.log(req.body);
    const result = await userService.userRegistration(userData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is created succesfully',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserController = {
  register,
};
