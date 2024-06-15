"use client";
import { useRouter } from "next/navigation";
export default function AboutNavigation() {
  const router = useRouter();
  const handleNextPage = () => {
    //Xử lý chuyển trang
    console.log(router);
    router.push("/about/about-us");
  };
  return (
    <div className="mt-3">
      <button className="btn btn-primary btn-sm" onClick={handleNextPage}>
        Đọc tiếp
      </button>
    </div>
  );
}
