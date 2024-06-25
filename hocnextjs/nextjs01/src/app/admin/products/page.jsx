import ProductList from "./ProductList";
import ProductTitle from "./ProductTitle";
export default function ProductPage() {
  return (
    <div>
      <h1>Sản phẩm</h1>
      <ProductList>
        <ProductTitle />
      </ProductList>
    </div>
  );
}

//Cha là server
//Con là server (Có thể chuyển con thành client)
