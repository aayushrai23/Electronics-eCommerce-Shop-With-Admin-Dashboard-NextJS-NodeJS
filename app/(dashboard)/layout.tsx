import { adminAuth } from "@/utils/adminAuth";
import { headers } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const reqHeaders = headers(); // ✅ Get request headers for auth
  await adminAuth(reqHeaders); // ✅ Pass headers to adminAuth

  return <>{children}</>;
}
