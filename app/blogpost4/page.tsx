import React from 'react';
import Link from 'next/link';

const JavaScriptIntro = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-pink-400">JavaScript - Giới thiệu và ứng dụng trong phát triển web</h1>
      <img src="JS JavaScript Logo by vladocar.jpg" alt="Java - Lập trình hướng đối tượng" className="w-3/4 h-auto rounded-lg mx-auto my-4" />
      <p>JavaScript là một ngôn ngữ lập trình phổ biến, được thiết kế để phát triển các ứng dụng web động và tương tác. Ra đời vào năm 1995 bởi Brendan Eich, JavaScript ban đầu chỉ được sử dụng trên trình duyệt nhưng ngày nay đã trở thành một công cụ mạnh mẽ cả phía máy khách (client-side) và máy chủ (server-side).</p>
      <p>JavaScript là một ngôn ngữ:</p>
      <p className="pl-10">Đa năng (Multipurpose): Sử dụng được trong nhiều ngữ cảnh, từ ứng dụng web đến lập trình máy chủ.</p>
      <p className="pl-10">Hướng đối tượng (Object-Oriented): Cho phép tạo các đối tượng để tái sử dụng mã nguồn.</p>
      <p className="pl-10">Không đồng bộ (Asynchronous): Hỗ trợ các hoạt động không đồng bộ thông qua callback, promises và async/await.</p>
      <img src="79x.jpg" alt="opp" className="max-w-1/2 rounded-lg mx-auto my-4" />
      <div className="mt-4">
        <Link href="/blog" className="text-pink-400 font-bold">
          Quay lại Trang Blog
        </Link>
      </div>
    </div>
  );
};

export default JavaScriptIntro;
