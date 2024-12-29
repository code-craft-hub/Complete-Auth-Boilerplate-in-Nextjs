import Credentials from "next-auth/providers/credentials";
import bcryptjs from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
export default {
  providers: [
    Github({
      clientId:process.env.GITHUB_CLIENT_ID,
      clientSecret:process.env.GITHUB_SECRET_ID,
    }),
    Google({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret:process.env.GOOGLE_SECRET_ID,
    }),
    Credentials({
      async authorize(credentials) {
        const { data, success } = LoginSchema.safeParse(credentials);

        if (success) {
          const { email, password } = data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcryptjs.compare(
            password,
            user.password
          );

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
