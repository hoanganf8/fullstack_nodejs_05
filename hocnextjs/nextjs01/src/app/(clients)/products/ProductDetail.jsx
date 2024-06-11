const getProduct = async (id) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );
  const data = response.json();
  return data;
};
export default async function ProductDetail({ id }) {
  const product = await getProduct(id);
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
