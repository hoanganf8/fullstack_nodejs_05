import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: "Không tìm thấy trang",
};
export default function NotFound() {
  return (
    <div className="container text-center">
      <h1>Không tìm thấy trang</h1>
      <h2>Vui lòng thử trang khác</h2>
      <a href="/" className="btn btn-primary">
        Về trang chủ
      </a>
    </div>
  );
}
