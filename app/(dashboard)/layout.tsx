import { adminAuth } from "@/utils/adminAuth";

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await adminAuth();
  return <>{children}</>;
}
