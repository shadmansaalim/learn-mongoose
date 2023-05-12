import { IUser } from "./user.interface";
import User from "./user.model";

// 4. Database Query
export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);
    await user.save();
    return user;
}

export const getUsersFromDb = async (): Promise<Array<IUser>> => {
    const users = await User.find();
    return users;
}