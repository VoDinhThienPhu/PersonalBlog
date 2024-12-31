import React from 'react';
import Link from 'next/link';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      <h1 className="text-center text-pink-400 text-4xl font-bold py-6">Trang Blog</h1>

      <div className="space-y-6 px-4">
        {blogPosts.map((post, index) => (
          <Link
            key={index}
            href={post.href}
            passHref
            className="block max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col md:flex-row items-center p-5">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full md:w-40 h-28 rounded-lg object-cover mb-4 md:mb-0 md:mr-4"
              />
              <div className="flex flex-col text-center md:text-left">
                <h2 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-sm text-gray-600">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center py-6">
        <Link
          href="/"
          className="text-pink-400 font-bold hover:underline"
        >
          Quay lại Trang chủ
        </Link>
      </div>
    </div>
  );
};

const blogPosts = [
  {
    href: '/blogpost1',
    thumbnail: 'Java.jpg',
    title: 'Giới thiệu về Java',
    description: 'Khám phá nền tảng lập trình Java và lý do tại sao nó là ngôn ngữ phổ biến trên toàn cầu.'
  },
  {
    href: '/blogpost2',
    thumbnail: 'images.png',
    title: 'Java - Lập trình hướng đối tượng',
    description: 'Hiểu tính đối tượng và kế thừa là chìa khóa để xây dựng ứng dụng mạnh mẽ trong Java.'
  },
  {
    href: '/blogpost3',
    thumbnail: 'Why you should go to java bootcamp.jpg',
    title: 'Ứng dụng thực tế của Java',
    description: 'Nêu bật các lĩnh vực sử dụng Java như phát triển ứng dụng di động, hệ thống doanh nghiệp, trí tuệ nhân tạo, và dữ liệu lớn.'
  },
  {
    href: '/blogpost4',
    thumbnail: 'JS JavaScript Logo by vladocar.jpg',
    title: 'JavaScript - Giới thiệu và ứng dụng trong phát triển web',
    description: 'JavaScript mang đến sức sống cho các trang web, từ tương tác cơ bản đến ứng dụng phức tạp.'
  },
  {
    href: '/blogpost5',
    thumbnail: 'JavaScript Fundamentals_ A Course for Absolute Beginners.jpg',
    title: 'JavaScript trong phát triển ứng dụng web tương tác',
    description: 'Mô tả cách JavaScript tạo ra các trang web có giao diện động, xử lý sự kiện và cải thiện trải nghiệm người dùng.'
  },
  {
    href: '/blogpost6',
    thumbnail: 'HTML, CSS and JavaScript layers as website coding language outline diagram.jpg',
    title: 'Quản lý sự kiện trong JavaScript',
    description: 'Sự kiện là linh hồn của tương tác web, và JavaScript là công cụ điều khiển chúng.'
  },
  {
    href: '/blogpost7',
    thumbnail: 'Java vs JavaScript.jpg',
    title: 'So sánh Java và JavaScript',
    description: 'Hai ngôn ngữ, hai sứ mệnh. Hiểu sự khác biệt để chọn đúng công cụ cho công việc của bạn.'
  },
  {
    href: '/blogpost8',
    thumbnail: 'Premium Vector _ A web developer is analyzing the programming language.jpg',
    title: 'Lập trình đa luồng (Multithreading) và xử lý đồng thời (Concurrency) trong Java',
    description: 'Giải thích cách tạo và quản lý luồng trong Java để xây dựng các ứng dụng xử lý song song hiệu quả.'
  },
  {
    href: '/blogpost9',
    thumbnail: 'Eclipse Vs NetBeans Vs IntelliJ_ Select the Right Java-Based IDE for your Application.jpg',
    title: 'Java - Các công cụ phát triển và môi trường lập trình (IDE)',
    description: 'Eclipse hay IntelliJ IDEA? Tìm hiểu công cụ phù hợp để làm chủ Java.'
  }
];

export default BlogPage;
