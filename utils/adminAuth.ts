import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

export async function adminAuth(authOptions: NextAuthOptions) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/login");
  }

  return session;
}
