import Link from "next/link";
import React from "react";

const PersonalInfo: React.FC = () => {
  return (
    <div className="container mx-auto mt-5 p-5 max-w-2xl bg-white shadow-md rounded-lg relative">
      <div className="profile-picture absolute top-5 right-5 w-60 h-60 rounded-full border-4 border-pink-400 overflow-hidden shadow-md">
        <img
          src="z6173524526682_c47ca3774dae400fe641c219641e732c.jpg"
          alt="Profile Picture"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Thông tin cá nhân</h1>

      <div className="section mb-5">
        <h2 className="text-xl font-semibold text-pink-400 mb-3">Giới thiệu</h2>
        <p>Họ và tên: Võ Đình Thiên Phú</p>
        <p>Email: phu0367911788@gmail.com</p>
        <p>Số điện thoại: 0903 02 00 50</p>
        <p>Địa chỉ: F12/41Y Quách Điêu, ấp 6a, xã Vĩnh Lộc A, huyện Bình Chánh</p>
      </div>

      <div className="section mb-5">
        <h2 className="text-xl font-semibold text-pink-400 mb-3">Học vấn</h2>
        <ul className="list-none">
          <li>2021 - 2024: Sinh viên khoa Công nghệ Thông tin - Đại học Hutech</li>
        </ul>
      </div>

      <div className="section mb-5">
        <h2 className="text-xl font-semibold text-pink-400 mb-3">Kinh nghiệm làm việc</h2>
        <ul className="list-disc list-inside">
          <li>4/2021 - 12/2021: Nhân viên bán hàng tại adidas</li>
          <li>Nắm kiến thức sản phẩm, học cách trao đổi thông tin với khách hàng, học kỹ năng thuyết phục khách mua hàng.</li>
          <li>1/2022 - 4/2024: Trợ lý nhập xuất hàng tại adidas</li>
          <li>Vận dụng kỹ năng tin học cơ bản đặc biệt là Excel, sử dụng công cụ hỗ trợ nhập xuất hàng trực tiếp trong cơ sở dữ liệu của công ty.</li>
          <li>5/2024 - 11/2024: Tham gia dự án Java của công ty IVS - văn phòng ITP</li>
          <li>Convert source từ ngôn ngữ cũ sang Java, đọc và đều chỉnh logic code theo yêu cầu khách hàng, chỉnh sửa giao diện theo quy chuẩn mà khách hàng quy định.</li>
        </ul>
      </div>

      <div className="section mb-5">
        <h2 className="text-xl font-semibold text-pink-400 mb-3">Kỹ năng</h2>
        <ul className="list-disc list-inside">
          <li>Lập trình: Java, Spring Boot, HTML, CSS, JavaScript</li>
          <li>Tin học văn phòng</li>
          <li>Kỹ năng mềm: Giao tiếp, làm việc nhóm, lên kế hoạch</li>
        </ul>
      </div>

      <div className="section mb-5">
        <h2 className="text-xl font-semibold text-pink-400 mb-3">Sở thích</h2>
        <ul className="list-disc list-inside">
          <li>Âm nhạc - top 6 IT Music Festival 2023</li>
          <li>Chụp ảnh</li>
        </ul>
      </div>

      <div className="back-link text-center mt-5">
        <Link href="/blog" className="text-pink-400 font-bold">
          Quay lại Trang Blog
        </Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
