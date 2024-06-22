import Link from "next/link";
import TodoForm from "../TodoForm";
export default function page() {
  return (
    <div>
      <h2>Thêm công việc mới</h2>
      <Link href={"/todo"} className="btn btn-primary btn-sm">
        Danh sách
      </Link>
      <TodoForm />
    </div>
  );
}
