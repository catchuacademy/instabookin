// next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user?: {
      id?: string;
      name?: string;
      email?: string;
      // add any fields you expect in `user.data.user`
      [key: string]: any;
    };
  }

  interface User {
    data?: {
      token?: string;
      user?: {
        id?: string;
        name?: string;
        email?: string;
        // add custom user fields from your API
        [key: string]: any;
      };
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    user?: {
      id?: string;
      name?: string;
      email?: string;
      [key: string]: any;
    };
  }
}
