import { notFound } from "next/navigation";

const getProduct = async (id) => {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    if (response.status === 400) {
      return false;
    }
    const data = await response.json();

    return data;
  } catch (error) {
    return false;
  }
};
export default async function ProductDetail({ id }) {
  const product = await getProduct(id);
  if (!product) {
    return notFound();
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
