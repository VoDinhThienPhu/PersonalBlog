import React from 'react';

const JavaOOP: React.FC = () => {
    return (
        <div className="bg-amber-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-pink-400 text-3xl font-bold mb-6">Java - Lập trình hướng đối tượng</h1>
                <img
                    src="oop-1.webp"
                    alt="Java - Lập trình hướng đối tượng"
                    className="w-full max-w-md mx-auto rounded-lg mb-6"
                />
                <p className="mb-4">
                    Lập trình hướng đối tượng (Object-Oriented Programming - OOP) là một phương pháp lập trình được
                    sử dụng rộng rãi trong các ngôn ngữ như Java, C++, Python, giúp tổ chức mã nguồn theo cách mô phỏng
                    các đối tượng trong thế giới thực. Mục tiêu của OOP là giúp tăng tính mô-đun, dễ bảo trì, và dễ mở rộng
                    phần mềm.
                </p>
                <img
                    src="java-oops.webp"
                    alt="opp"
                    className="w-1/2 mx-auto rounded-lg mb-6"
                />
                <p className="text-lg font-semibold mb-4">Các nguyên lý cơ bản của OOP</p>
                <p className="mb-4">_ Lớp (Class): Lớp là một bản thiết kế hoặc khuôn mẫu để tạo ra các đối tượng. Lớp xác định các thuộc tính (data members) và phương thức (methods) mà đối tượng sẽ có.</p>
                <p className="pl-10 mb-4">Ví dụ: Một lớp &quot;Car&quot; có thể có các thuộc tính như &quot;color&quot; (màu sắc) và &quot;model&quot; (mẫu xe), cùng các phương thức như &quot;drive()&quot; và &quot;stop()&quot;.</p>
                <p className="mb-4">_ Đối tượng (Object): Đối tượng là một thể hiện cụ thể của lớp. Mỗi đối tượng có dữ liệu riêng và có thể thực hiện các hành vi do lớp định nghĩa.</p>
                <p className="pl-10 mb-4">Ví dụ: Một đối tượng của lớp &quot;Car&quot; có thể là một chiếc xe màu đỏ với mẫu xe &quot;Toyota Camry&quot;.</p>
                <p className="mb-4">_ Tính đóng gói (Encapsulation): Tính đóng gói cho phép ẩn thông tin bên trong một lớp, chỉ cung cấp các phương thức công khai để tương tác với dữ liệu. Điều này giúp bảo vệ dữ liệu và giảm thiểu sự can thiệp không mong muốn.</p>
                <p className="pl-10 mb-4">Ví dụ: Các thuộc tính trong lớp có thể được định nghĩa là private và chỉ có thể truy cập thông qua các phương thức public (getter và setter).</p>
                <img
                    src="1_U93e5VpeucMpHJsheJj3gQ.jpg"
                    alt="opp"
                    className="w-1/2 mx-auto rounded-lg mb-6"
                />
                <p className="mb-4">_ Kế thừa (Inheritance): Kế thừa cho phép một lớp kế thừa các thuộc tính và phương thức từ một lớp khác, giúp tái sử dụng mã nguồn và mở rộng tính năng một cách hiệu quả.</p>
                <p className="pl-10 mb-4">Ví dụ: Lớp &quot;Dog&quot; có thể kế thừa từ lớp &quot;Animal&quot;, từ đó sử dụng các phương thức của &quot;Animal&quot; và thêm các phương thức riêng của &quot;Dog&quot;.</p>
                <img
                    src="0_5bscj-Hxw0AKkrzj.png"
                    alt="opp"
                    className="w-1/2 mx-auto rounded-lg mb-6"
                />
                <p className="mb-4">_ Đa hình (Polymorphism): Đa hình cho phép một phương thức có thể có nhiều hình thức khác nhau. Phương thức có thể được ghi đè trong lớp con, giúp thực hiện hành vi khác nhau tùy theo loại đối tượng.</p>
                <p className="pl-10 mb-4">Ví dụ: Phương thức &quot;speak()&quot; có thể được ghi đè trong các lớp con như &quot;Dog&quot; và &quot;Cat&quot;, nơi mỗi loài sẽ có âm thanh riêng khi &quot;speak()&quot;.</p>
                <img
                    src="original.png"
                    alt="opp"
                    className="w-1/2 mx-auto rounded-lg mb-6"
                />
                <p className="mb-4">_ Trừu tượng (Abstraction): Tính trừu tượng cho phép ẩn đi các chi tiết phức tạp và chỉ hiển thị các tính năng cần thiết của đối tượng. Điều này giúp người lập trình tập trung vào các chức năng quan trọng mà không cần quan tâm đến cách thức triển khai bên trong. Tính trừu tượng có thể được thực hiện thông qua các lớp trừu tượng (abstract classes) hoặc giao diện (interfaces).</p>
                <p className="pl-10 mb-4">Ví dụ: Lớp trừu tượng &quot;Shape&quot; có thể định nghĩa một phương thức trừu tượng &quot;draw()&quot;, nhưng không chỉ rõ cách thức vẽ. Các lớp con như &quot;Circle&quot; và &quot;Rectangle&quot; sẽ triển khai chi tiết cách thức vẽ của mình.</p>
                <img
                    src="java-abstract-classes.webp"
                    alt="opp"
                    className="w-1/2 mx-auto rounded-lg mb-6"
                />
                <p className="text-lg font-semibold mb-4">Lợi ích của OOP</p>
                <p className="pl-10 mb-4">Tái sử dụng mã nguồn: Nhờ tính kế thừa và đóng gói, mã nguồn có thể được tái sử dụng hiệu quả hơn.</p>
                <p className="pl-10 mb-4">Dễ bảo trì và mở rộng: OOP giúp dễ dàng thêm chức năng mới mà không làm gián đoạn hệ thống hiện có.</p>
                <p className="pl-10 mb-4">Tính mô-đun: Phần mềm được chia thành các lớp và đối tượng riêng biệt, dễ dàng quản lý và phát triển.</p>
                <p className="pl-10 mb-4">Ẩn chi tiết, dễ hiểu: Tính trừu tượng giúp chương trình dễ hiểu và sử dụng hơn, giảm bớt sự phức tạp không cần thiết.</p>
                <p className="mb-6">Lập trình hướng đối tượng là một phương pháp mạnh mẽ và linh hoạt, giúp tạo ra các ứng dụng phần mềm dễ bảo trì, mở rộng và hiệu quả hơn.</p>
                <div className="text-center">
                    <a
                        href="blog"
                        className="text-pink-400 font-bold hover:underline"
                    >
                        Quay lại Trang Blog
                    </a>
                </div>
            </div>
        </div>
    );
};

export default JavaOOP;
