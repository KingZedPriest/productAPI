import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),

    email: string({
      required_error: "Email is required",
    }).email("Not a valid email is required"),

    password: string({
      required_error: "Password is required",
    }).min(6, "Password too short - should be 6 Chars minimum"),

    passwordConfirmation: string({
      required_error: "Password Confirmation is required",
    }),
    
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;
