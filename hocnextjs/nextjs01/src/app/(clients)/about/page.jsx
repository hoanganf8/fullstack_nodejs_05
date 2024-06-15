import { redirect } from "next/navigation";
import AboutNavigation from "./components/AboutNavigation";
import Comment from "./components/Comment";
export const metadata = {
  title: "Giới thiệu F8",
};
const getComment = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/1/comments`
  );
  return res.json();
};
export default async function AboutPage() {
  let comment;
  try {
    comment = await getComment();
  } catch (error) {
    //Chuyển hướng trên server
    return redirect("/");
  }

  return (
    <div>
      <h1>About Page</h1>
      <h3>Name: {comment[0].name}</h3>
      <h3>Email: {comment[0].email}</h3>
      <Comment comment={comment} />
      <AboutNavigation />
    </div>
  );
}
