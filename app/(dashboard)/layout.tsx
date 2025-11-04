import { adminAuth } from "@/utils/adminAuth";
import { headers } from "next/headers";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const reqHeaders = headers(); // ✅ get request headers
  await adminAuth(reqHeaders);  // ✅ pass headers to adminAuth

  return <>{children}</>;
}
