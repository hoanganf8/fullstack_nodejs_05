export default function ProductDetailPage({ params }) {
  const [categroy, product] = params.slug;
  return (
    <div>
      <h1>Chuyên mục: {categroy}</h1>
      <h1>Sản phẩm: {product}</h1>
    </div>
  );
}
