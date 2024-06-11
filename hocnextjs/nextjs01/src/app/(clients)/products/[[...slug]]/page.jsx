import ProductDetail from "../ProductDetail";
import ProductList from "../ProductList";

export default function ProductsPage({ params }) {
  const { slug } = params;
  if (!slug) {
    return <ProductList />;
  }
  return <ProductDetail id={slug[0]} />;
}
