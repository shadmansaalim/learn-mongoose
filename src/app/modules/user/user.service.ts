import { IUser } from "./user.interface";
import User from "./user.model";

// 4. Database Query
export const createUserToDb = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload); // User class er instance hocche eta
    await user.save(); // user instance er method eta, built in

    console.log(user.fullName()); // Custom instance method jeta banaisi

    return user;
}

export const getUsersFromDb = async (): Promise<Array<IUser>> => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDb = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
    return user;
}

