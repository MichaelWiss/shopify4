import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";

import { getEnv } from "@/lib/shopify/env";

const env = process.env.NODE_ENV === "production" ? getEnv() : null;

const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      from: process.env.AUTH_EMAIL_FROM ?? "hello@example.com",
      sendVerificationRequest: async ({ identifier }) => {
        // Stubbed email handler. Integrate provider (Resend, Postmark, etc.) before enabling.
        console.info("Verification email requested for", identifier);
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET ?? env?.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  callbacks: {
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub
        }
      };
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
