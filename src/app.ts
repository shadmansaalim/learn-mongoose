// Imports
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express();

// Using cors
app.use(cors());

// Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // Inserting a test data in Mongo DB

    /*
        Step 1: Interface
        Step 2: Schema
        Step 3: Model
        Step 4: Database Query
    */

    // Creating an interface
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        };
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

    // Creating schema using interface
    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            firstName: {
                type: String,
                required: true
            },
            middleName: {
                type: String
            },
            lastName: {
                type: String,
                required: true
            },
        },
        dateOfBirth: {
            type: String
        },
        gender: {
            type: String,
            enum: ['male', 'female'],
            required: true
        },
        email: {
            type: String
        },
        contactNo: {
            type: String,
            required: true
        },
        emergencyContactNo: {
            type: String,
            required: true
        },
        presentAddress: {
            type: String,
            required: true
        },
        permanentAddress: {
            type: String,
            required: true
        }
    });

    //Create a Model.
    const User = model<IUser>('User', userSchema);

    const createUserToDb = async () => {
        const user = new User({
            id: "999",
            role: "student",
            password: "123456@",
            name: {
                firstName: "Saalim",
                lastName: "Shadman",
            },
            gender: "male",
            email: "abc123@gmail.com",
            contactNo: "0177777777777",
            emergencyContactNo: "01999999999999",
            presentAddress: "Australia",
            permanentAddress: "Bangladesh",
        });
        await user.save();
        console.log(user);
    }
    createUserToDb();

    // res.send('Hello World!');
    // next();
})

export default app;