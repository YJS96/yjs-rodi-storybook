'use client';
import Image from 'next/image';
import React from 'react';

export default function Login() {
  return (
    <>
      {/* PC화면 */}
      <div className="pc-background hidden h-screen w-screen items-center justify-center bg-[url('/images/login_bg.png')] bg-cover md:flex">
        <div className="logo-frame flex w-[500px] flex-col items-center justify-center rounded-2xl bg-color-white px-12 py-16 drop-shadow-login">
          <Image src="/images/logo_vertical.svg" width="114" height="83" alt="main-logo" />
          <div className="mt-7 text-lg font-semibold">소셜 계정으로 간편하게 로그인하세요</div>
          <div className="buttons-frame mt-9 w-full">
            <a
              href="http://localhost:8000/auth/login/naver"
              className="login-button bg-naver-button text-color-white hover:bg-naver-button-hover"
            >
              <Image
                className="mr-2"
                src="/images/btn_naver_icon.svg"
                width="18"
                height="18"
                alt="naver-logo"
              />
              <span>네이버로 로그인하기</span>
            </a>
            <a
              href="http://localhost:8000/auth/login/kakao"
              className="login-button bg-kakao-button hover:bg-kakao-button-hover"
            >
              <Image
                className="mr-2"
                src="/images/btn_kakao_icon.svg"
                width="18"
                height="18"
                alt="kakao-logo"
              />
              <span>카카오로 로그인하기</span>
            </a>
          </div>
        </div>
      </div>

      {/* 모바일화면 */}
      <div className="flex h-screen w-screen items-center justify-center md:hidden">
        <div className="mb-44 flex flex-col items-center">
          <Image src="/images/logo_vertical.svg" width="114" height="83" alt="main-logo" />
          <div className="mt-7 text-lg font-semibold">소셜 계정으로 간편하게 로그인하세요</div>
        </div>
        <div className="fixed bottom-0 w-full p-12">
          <a
            href="http://localhost:8000/auth/login/naver"
            className="login-button bg-naver-button text-color-white hover:bg-naver-button-hover"
          >
            <Image
              className="mr-2"
              src="/images/btn_naver_icon.svg"
              width="18"
              height="18"
              alt="naver-logo"
            />
            <span>네이버로 로그인하기</span>
          </a>
          <a
            href="http://localhost:8000/auth/login/kakao"
            className="login-button bg-kakao-button hover:bg-kakao-button-hover"
          >
            <Image
              className="mr-2"
              src="/images/btn_kakao_icon.svg"
              width="18"
              height="18"
              alt="kakao-logo"
            />
            <span>카카오로 로그인하기</span>
          </a>
        </div>
      </div>
    </>
  );
}
