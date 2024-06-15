import Link from "next/link";
import SearchForm from "./components/SearchForm";
const getProductList = async () => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
  const data = response.json();
  return data;
};
export default async function ProductList({ searchParams }) {
  const productList = await getProductList();
  const { status, keyword } = searchParams;
  return (
    <div>
      <h1>Sản phẩm</h1>
      <SearchForm />
      <h2>Trạng thái: {status}</h2>
      <h2>Từ khóa: {keyword}</h2>
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
