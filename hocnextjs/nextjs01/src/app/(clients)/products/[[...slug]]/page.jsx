import ProductDetail from "../ProductDetail";
import ProductList from "../ProductList";

export default function ProductsPage({ params, searchParams }) {
  const { slug } = params;
  if (!slug) {
    return <ProductList searchParams={searchParams} />;
  }
  return <ProductDetail id={slug[0]} />;
}
