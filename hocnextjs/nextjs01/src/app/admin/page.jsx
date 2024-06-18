import { headers, cookies } from "next/headers";
export default function AdminPage() {
  // const headersList = headers();
  // const apiKey = headersList.get("x-api-token");
  // console.log(apiKey);
  // console.log(headersList.get("x-abc"));
  // console.log(cookies().get("username"));
  return (
    <div>
      <h1>Admin Page</h1>
    </div>
  );
}
