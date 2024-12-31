import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#FFFFF1] min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-pink-300 h-12 px-5 text-white">
        <div className="text-lg font-bold">My Personal Blog</div>
        <div className="flex space-x-4">
          <Link href="/blog" className="text-white text-lg hover:underline">
            Blog
          </Link>
          <Link href="/about" className="text-white text-lg hover:underline">
            Thông tin cá nhân
          </Link>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="flex flex-col items-center justify-center text-center h-[80vh] bg-[#FFFFF1]">
        <h1 className="text-4xl font-bold text-gray-800 py-5">
          Xin chào, tôi là Phú, chào mừng đã đến với Blog của tôi!
        </h1>
        <div className="mb-5">
          <img
            src="Bsnan.jpg"
            alt="Phú's Blog"
            className="w-72 h-72 rounded-full object-cover"
          />
        </div>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
          Rất vui được gặp bạn ở blog của tôi. Đây sẽ là nơi tôi chia sẻ những kiến thức và trải nghiệm thú vị về lập trình cùng với Java và cập nhật các công nghệ công nghệ!
        </p>
      </section>
    </div>
  );
};

export default HomePage;
