import { cookies, headers } from "next/headers";
import Users from "./components/Users";

export default function Home() {
  const token = cookies().get("token")?.value;
  const allHeaders = headers();
  const user = JSON.parse(allHeaders.get("x-user"));
  const permissions = user.permissions;
  return (
    <div>
      <h1>Trang chủ</h1>
      <Users token={token} permissions={permissions} />
    </div>
  );
}
