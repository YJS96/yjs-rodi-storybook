// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>로그인 여부 따라 페이지 이동</div>
      <br />
      <a href="/login">로그인 페이지</a>
      <br />
      <br />
      <a href="/admin/home">어드민 페이지</a>
    </>
  );
}
