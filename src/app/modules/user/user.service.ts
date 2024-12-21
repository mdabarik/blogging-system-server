/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { TUser } from './user.interface';
import { User } from './user.model';

/*
user-registration
*/
const userRegistration = async (payload: TUser) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // create a user (transaction-1)
    const newUser = await User.create([payload], { session });

    await session.commitTransaction();
    await session.endSession();

    return newUser;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const userService = {
  userRegistration,
};
