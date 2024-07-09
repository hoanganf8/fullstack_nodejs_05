import Image from "next/image";
import HelloWorld from "@/components/HelloWorld";
import contextImg from "@/assets/images/context.png";
import Script from "next/script";
// console.log(contextImg);
export default function Home() {
  console.log("Homepage");
  return (
    <div>
      <h1>Hello anh em F8</h1>
      <HelloWorld />
      {/* <img src="/images/img01.png" alt="" /> */}
      {/* <Image src={contextImg} width={200} /> */}
      <Image
        src="https://cdnphoto.dantri.com.vn/wMMXfFNOONcEAy3t4kGMg42PUyk=/zoom/1032_688/2024/06/29/dai-bieu-quoc-hoi-crop-1719620680567.jpeg"
        width={400}
        height={300}
        alt="Hình ảnh 01"
      />
      <Script src="/js/script.js" />
    </div>
  );
}
