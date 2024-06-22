import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import Link from "next/link";
import { setFlash } from "@/utils/message";
import { cookies } from "next/headers";

export default function DeletePage({ params }) {
  const { id } = params;
  const handleRemove = async () => {
    "use server";
    const res = await fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      revalidateTag("todo-list");
      return redirect("/todo?success=1");
    }
    redirect("/todo?success=0");
  };
  return (
    <div>
      <h2>Bạn có muốn xóa không?</h2>
      <form action={handleRemove}>
        <button className="btn btn-primary">Xóa</button>
      </form>
      <Link href={"/todo"} className="btn btn-danger">
        Không xóa
      </Link>
    </div>
  );
}
