import React from 'react';
import Link from 'next/link';

const EventManagementInJavaScript = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-pink-400">Quản lý sự kiện trong JavaScript</h1>
      <img src="HTML, CSS and JavaScript layers as website coding language outline diagram.jpg" alt="Java - Lập trình hướng đối tượng" className="w-3/4 h-auto rounded-lg mx-auto my-4" />
      <p>Quản lý sự kiện là một phần quan trọng trong JavaScript, giúp trang web phản hồi với hành động của người dùng, từ nhấp chuột, nhập dữ liệu, đến di chuyển chuột. Bằng cách sử dụng các cơ chế quản lý sự kiện, JavaScript cho phép xây dựng các ứng dụng web tương tác và linh hoạt.</p>
      <p>Sự kiện là các hành động hoặc tương tác xảy ra trên một phần tử HTML, chẳng hạn:</p>
      <p className="pl-10">Sự kiện chuột: click, dblclick, mousedown, mouseup, mousemove.</p>
      <p className="pl-10">Sự kiện bàn phím: keydown, keyup, keypress.</p>
      <p className="pl-10">Sự kiện form: submit, change, focus, blur.</p>
      <p className="pl-10">Sự kiện khác: load, resize, scroll.</p>
      <img src="JavaScript Event Types that to Enhance Your Page's Response & User-friendliness.jpg" alt="opp" className="max-w-1/2 rounded-lg mx-auto my-4" />
      <p>Quản lý sự kiện giúp xây dựng các tính năng như:</p>
      <p className="pl-10">Hiển thị hộp thoại khi nhấn nút.</p>
      <p className="pl-10">Kiểm tra dữ liệu đầu vào của biểu mẫu.</p>
      <p className="pl-10">Tạo hiệu ứng khi di chuyển chuột qua các phần tử.</p>
      <p>Quản lý sự kiện là công cụ mạnh mẽ giúp JavaScript tương tác với người dùng. Với các phương pháp đa dạng, việc sử dụng hiệu quả quản lý sự kiện có thể nâng cao trải nghiệm và tính năng cho các ứng dụng web.</p>
      <img src="JavaScript in HTML- Important aspects you neeed to know_.jpg" alt="opp" className="max-w-1/2 rounded-lg mx-auto my-4" />
      <div className="mt-4">
        <Link href="/blog" className="text-pink-400 font-bold">
          Quay lại Trang Blog
        </Link>
      </div>
    </div>
  );
};

export default EventManagementInJavaScript;
