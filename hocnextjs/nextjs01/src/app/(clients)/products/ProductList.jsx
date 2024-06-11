import Link from "next/link";
const getProductList = async () => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
  const data = response.json();
  return data;
};
export default async function ProductList() {
  const productList = await getProductList();
  console.log(productList);
  return (
    <div>
      <h1>Sản phẩm</h1>
      <div className="row">
        {productList.map(({ id, title }) => (
          <div key={id} className="col-3">
            <h3>{title}</h3>
            <Link href={`/products/${id}`}>Chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
