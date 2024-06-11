"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
export default function Navigation() {
  const pathname = usePathname();
  return (
    <>
      <h2>Menu</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            href="/"
            className={clsx("nav-link", pathname === "/" && "active")}
          >
            Trang chủ
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/about"
            className={clsx("nav-link", pathname === "/about" && "active")}
          >
            Giới thiệu
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/about/about-us"
            className={clsx(
              "nav-link",
              pathname === "/about/about-us" && "active"
            )}
          >
            Về chúng tôi
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/products"
            className={clsx("nav-link", pathname === "/products" && "active")}
          >
            Sản phẩm
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/about/contact-us"
            className={clsx(
              "nav-link",
              pathname === "/about/contact-us" && "active"
            )}
          >
            Liên hệ
          </Link>
        </li>
      </ul>
    </>
  );
}
