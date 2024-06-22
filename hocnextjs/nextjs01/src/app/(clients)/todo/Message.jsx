"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Message({ msg }) {
  //   const searchParams = useSearchParams();
  //   const pathname = usePathname();
  //   const router = useRouter();
  //   useEffect(() => {
  //     router.push(pathname);
  //   }, [msg]);
  return (
    <div className="alert alert-success" role="alert">
      {msg}
    </div>
  );
}
