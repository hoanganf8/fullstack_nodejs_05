import ProductDetail from "../ProductDetail";
import ProductList from "../ProductList";
// export const metadata = {
//   title: "Sản phẩm",
// };
import { getProduct } from "../ProductDetail";
export async function generateMetadata({ params }) {
  const { slug } = params;
  if (!slug) {
    return {
      title: "Sản phẩm",
    };
  }
  const [id] = slug;
  const product = await getProduct(id);
  return {
    title: product.title + " - F8",
  };
}
export default function ProductsPage({ params, searchParams }) {
  const { slug } = params;
  if (!slug) {
    return <ProductList searchParams={searchParams} />;
  }
  return <ProductDetail id={slug[0]} />;
}
``;
