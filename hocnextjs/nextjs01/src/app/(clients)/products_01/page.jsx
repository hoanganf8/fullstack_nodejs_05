import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>Sản phẩm</h1>
      <div className="row">
        <div className="col-3">
          <h3>Sản phẩm 1</h3>

          <Link href={"/products/do-gia-dung/san-pham-1"}>Chi tiết</Link>
        </div>
        <div className="col-3">
          <h3>Sản phẩm 2</h3>

          <Link href={"/products/do-gia-dung/san-pham-2"}>Chi tiết</Link>
        </div>
        <div className="col-3">
          <h3>Sản phẩm 3</h3>

          <Link href={"/products/do-gia-dung/san-pham-3"}>Chi tiết</Link>
        </div>
        <div className="col-3">
          <h3>Sản phẩm 4</h3>

          <Link href={"/products/do-gia-dung/san-pham-4"}>Chi tiết</Link>
        </div>
      </div>
    </div>
  );
}
