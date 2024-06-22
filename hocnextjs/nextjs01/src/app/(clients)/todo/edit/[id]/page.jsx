import Link from "next/link";
import { notFound } from "next/navigation";
import { handleUpdateTodo } from "../../action";
import TodoUpdate from "../../TodoUpdate";
const getTodo = async (id) => {
  try {
    const response = await fetch(`http://localhost:4000/todos/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch todo");
    }
    return response.json();
  } catch (error) {
    return false;
  }
};
export default async function EditPage({ params }) {
  const { id } = params;
  const todo = await getTodo(id);
  if (!todo) {
    return notFound();
  }
  return <TodoUpdate todo={todo} />;
}
