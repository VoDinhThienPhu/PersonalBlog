import React from 'react';

const JavaIntroduction: React.FC = () => {
    return (
        <div className="bg-yellow-50 min-h-screen py-10">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-pink-500 text-3xl font-bold mb-6">Giới thiệu về Java</h1>
                <img
                    src="Java.jpg"
                    alt="Giới thiệu về Java"
                    className="w-full rounded-lg mb-6"
                />
                <p className="text-gray-700 leading-relaxed mb-4">
                    Java là một ngôn ngữ lập trình phổ biến và mạnh mẽ, được phát triển bởi Sun Microsystems vào năm 1995 và hiện nay được quản lý bởi Oracle Corporation. Java nổi bật với phương châm &quot;Viết một lần, chạy mọi nơi&quot; (Write Once, Run Anywhere - WORA), cho phép các ứng dụng được viết bằng Java có thể chạy trên bất kỳ nền tảng nào có máy ảo Java (Java Virtual Machine - JVM).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Java được thiết kế để dễ học, dễ sử dụng và mạnh mẽ, phù hợp với nhiều loại dự án, từ ứng dụng máy tính, web, di động đến hệ thống nhúng. Ngôn ngữ này hỗ trợ lập trình hướng đối tượng (Object-Oriented Programming - OOP), giúp các lập trình viên phát triển mã nguồn có tổ chức, tái sử dụng cao và dễ bảo trì.
                </p>
                <img
                    src="SUN_microsystems_logo_ambigram.png"
                    alt="Sáng lập"
                    className="w-1/3 mx-auto rounded-lg mb-6"
                />
                <p className="text-gray-700 leading-relaxed mb-4">
                    Các tính năng nổi bật của Java bao gồm:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>Độc lập nền tảng: Chương trình Java biên dịch ra bytecode, có thể chạy trên bất kỳ hệ điều hành nào có JVM.</li>
                    <li>Bảo mật cao: Java tích hợp các cơ chế bảo mật mạnh mẽ, phù hợp cho các ứng dụng cần bảo mật như ngân hàng hay thương mại điện tử.</li>
                    <li>Đa luồng (Multithreading): Cho phép thực hiện nhiều tác vụ đồng thời, tối ưu hóa hiệu năng của ứng dụng.</li>
                    <li>Thư viện phong phú: Java cung cấp một hệ sinh thái thư viện phong phú, hỗ trợ gần như mọi khía cạnh của phát triển phần mềm.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Nhờ những ưu điểm này, Java đã trở thành một trong những ngôn ngữ lập trình phổ biến nhất thế giới, được sử dụng rộng rãi trong các ngành công nghệ thông tin và phát triển phần mềm.
                </p>
                <div className="text-center mt-6">
                    <a
                        href="blog"
                        className="text-pink-500 font-bold hover:underline"
                    >
                        Quay lại Trang Blog
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JavaIntroduction;
