"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInInputValidation = exports.signUpInputValidation = void 0;
const zod_1 = require("zod");
const signUpInputValidation = (userData) => {
    const userDataSchema = zod_1.z.object({
        username: zod_1.z.string().min(3).max(25),
        email: zod_1.z.string().email(),
        password: zod_1.z.string().min(8).regex(/[A-Z]/)
            .regex(/[a-z]/)
            .regex(/[0-9]/)
            .regex(/[\W_]/)
    });
    const isValid = userDataSchema.safeParse(userData);
    return isValid;
};
exports.signUpInputValidation = signUpInputValidation;
const signInInputValidation = (userData) => {
    const userDataSchema = zod_1.z.object({
        email: zod_1.z.string().min(3).email(),
        password: zod_1.z.string().min(8).regex(/[A-Z]/)
            .regex(/[a-z]/)
            .regex(/[0-9]/)
            .regex(/[\W_]/)
    });
    const isValid = userDataSchema.safeParse(userData);
    return isValid;
};
exports.signInInputValidation = signInInputValidation;
