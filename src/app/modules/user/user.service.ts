import User from "./user.model";

// 4. Database Query
export const createUserToDb = async () => {
    const user = new User({
        id: "666",
        role: "student",
        password: "fsdfasdf@",
        name: {
            firstName: "Ameer",
            lastName: "Hossain",
        },
        gender: "male",
        email: "canada@gmail.com",
        contactNo: "5342523452345",
        emergencyContactNo: "523452340939123123",
        presentAddress: "Canada",
        permanentAddress: "Bangladesh",
    });
    await user.save();
    return user;
}
