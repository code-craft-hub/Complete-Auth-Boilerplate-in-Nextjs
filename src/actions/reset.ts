"use server";
import * as z from "zod";

import { ResetSchema } from "@/schemas";
// import { signIn } from "@/auth";
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// import { AuthError } from "next-auth";
import { getUserByEmail } from "@/data/user";
import { generatePasswordResetToken, 
  // generateVerificationToken
 } from "@/lib/tokens";
import { sendPasswordResetEmail, 
  // sendVerificationEmail
 } from "@/lib/mail";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const { success, data } = ResetSchema.safeParse(values);

  if (!success) return { error: "Invalid fields!" };

  const { email } = data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) return { error: "Email does not exist!" };

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  )
  
  return {success: "Reset email sent!"}
};
