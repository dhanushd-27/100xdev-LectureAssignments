import { z } from "zod";
import { signInbody, signUpbody } from "../types/types";

const signUpInputValidation = (userData: signUpbody): z.SafeParseReturnType<signUpbody, signUpbody> => {
    const userDataSchema = z.object({
        username: z.string().min(3).max(25),
        email: z.string().email(),
        password: z.string().min(8).regex(/[A-Z]/)
        .regex(/[a-z]/)
        .regex(/[0-9]/)
        .regex(/[\W_]/)
    })

    const isValid = userDataSchema.safeParse(userData);

    return isValid;
}

const signInInputValidation = (userData: signInbody): z.SafeParseReturnType<signInbody, signInbody> => {
    const userDataSchema = z.object({
        email: z.string().min(3).email(),
        password: z.string().min(8).regex(/[A-Z]/)
        .regex(/[a-z]/)
        .regex(/[0-9]/)
        .regex(/[\W_]/)
    })

    const isValid = userDataSchema.safeParse(userData);

    return isValid;
}

export { signUpInputValidation, signInInputValidation }