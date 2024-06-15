"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchForm() {
  const [form, setForm] = useState({});
  const pathname = usePathname();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const queryString = new URLSearchParams(form).toString();
    if (queryString) {
      router.push(`${pathname}?${queryString}`);
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form action="" className="mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-3" onChange={handleChange}>
          <select name="status" className="form-select">
            <option value="all">Tất cả trạng thái</option>
            <option value="active">Kích hoạt</option>
            <option value="inactive">Chưa kích hoạt</option>
          </select>
        </div>
        <div className="col-7">
          <input
            type="search"
            name="keyword"
            className="form-control"
            placeholder="Tìm kiếm sản phẩm"
            onChange={handleChange}
          />
        </div>
        <div className="col-2 d-grid">
          <button className="btn btn-primary">Tìm kiếm</button>
        </div>
      </div>
    </form>
  );
}
