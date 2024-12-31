import React from 'react';
import Link from 'next/link';

const CompareJavaAndJavaScript = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-pink-400">So sánh Java và JavaScript</h1>
      <img src="Java vs JavaScript.jpg" alt="Java - Lập trình hướng đối tượng" className="w-3/4 h-auto rounded-lg mx-auto my-4" />
      <p>Mặc dù cùng mang tên &quot;Java&quot;, Java và JavaScript là hai ngôn ngữ lập trình hoàn toàn khác nhau, được thiết kế với mục đích và ứng dụng khác biệt.</p>
      <p>Điểm giống nhau:</p>
      <p className="pl-10">Cú pháp dựa trên C/C++</p>
      <p className="pl-10">Hỗ trợ lập trình hướng đối tượng</p>
      <p className="pl-10">Có thư viện chuẩn phong phú</p>
      <p className="pl-10">Cộng đồng lớn và nhiều tài liệu</p>
      <p>Điểm khác nhau chính:</p>
      <p className="pl-10">Kiểu dữ liệu và Biến</p>
      <p className="pl-10">Thực thi code</p>
      <img src="Ảnh chụp màn hình 2024-12-30 150912.png" alt="Java - Lập trình hướng đối tượng" className="w-3/4 h-auto rounded-lg mx-auto my-4" />
      <p>Mặc dù có tên gọi tương tự, Java và JavaScript là hai ngôn ngữ hoàn toàn khác nhau với những ưu điểm và use case riêng. Việc hiểu rõ điểm mạnh của mỗi ngôn ngữ sẽ giúp lập trình viên chọn công cụ phù hợp cho dự án của mình.</p>
      <div className="mt-4">
        <Link href="/blog" className="text-pink-400 font-bold">
          Quay lại Trang Blog
        </Link>
      </div>
    </div>
  );
};

export default CompareJavaAndJavaScript;
