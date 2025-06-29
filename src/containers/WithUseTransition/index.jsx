// src/App.js cho dự án React 18

import React, { useState, useTransition, useMemo } from "react";
// Nếu dùng React 18, đảm bảo bạn có dòng này trong src/index.js:
// import ReactDOM from 'react-dom/client';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// Giả lập một danh sách lớn để mô phỏng tác vụ nặng
const ALL_ITEMS = Array.from(
  { length: 20000 },
  (_, i) => `Item number ${i + 1}`
);

// Hàm mô phỏng tác vụ nặng: Lọc danh sách và làm chậm CPU
function filterHeavy(query, items) {
  // Simulate CPU-intensive work
  for (let i = 0; i < 1000000000; i++) {
    /* Do nothing */
  }
  return items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}

export default function WithUseTransition() {
  const [inputValue, setInputValue] = useState("");
  const [filterQuery, setFilterQuery] = useState(""); // State để lọc danh sách (transition)

  // Khai báo useTransition Hook:
  // - isPending: true khi transition đang chạy, false khi hoàn tất
  // - startTransition: hàm để bọc các cập nhật không khẩn cấp
  const [isPending, startTransition] = useTransition();

  // Xử lý khi input thay đổi
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Cập nhật input (Đây là cập nhật KHẨN CẤP, React ưu tiên nó)

    // Bọc cập nhật filterQuery bên trong startTransition
    // React sẽ coi cập nhật này (và bất kỳ render nào nó gây ra) là KHÔNG KHẨN CẤP
    startTransition(() => {
      console.log("Hàm bên trong startTransition đang chạy!");
      setFilterQuery(value); // Cập nhật filterQuery (Đây là cập nhật TRANSITION)
    });

    console.log("Hàm handleChange đã kết thúc.");
  };

  // Sử dụng useMemo để tránh lọc lại nếu query không đổi
  const filteredItems = useMemo(() => {
    console.log(`[R18] Lọc danh sách cho: "${filterQuery}"`);
    return filterHeavy(filterQuery, ALL_ITEMS).slice(0, 50); // Chỉ hiển thị 50 kết quả đầu
  }, [filterQuery]); // Chạy lại khi filterQuery thay đổi

  const isNoData =
    !isPending && filteredItems.length === 0 && inputValue !== "";
  const isHasData = !isPending && filteredItems.length > 0 && inputValue !== "";

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>
        React 18: UI Luôn Phản Hồi với `useTransition`
      </h1>
      <p style={descriptionStyle}>
        Gõ vào ô dưới đây. UI sẽ phản hồi mượt mà hơn ngay cả khi có tác vụ lọc
        nặng chạy ngầm.
      </p>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Gõ để lọc..."
        style={inputStyle}
      />

      <p style={statusStyle}>
        Kết quả tìm kiếm cho:{" "}
        <span style={highlightStyle}>{filterQuery || "Trống"}</span>
      </p>

      <div style={listContainerStyle}>
        {/* Hiển thị trạng thái isPending khi tác vụ lọc đang chạy */}
        {isPending && <p style={pendingStyle}>Đang tìm kiếm...</p>}

        {isNoData && <p style={noResultStyle}>Không tìm thấy kết quả.</p>}

        {isHasData && (
          <ul style={ulStyle}>
            {filteredItems.map((item, index) => (
              <li key={index} style={liStyle}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <p style={noteStyle}>Quan sát độ mượt khi gõ phím.</p>
    </div>
  );
}

// Basic Styles (slightly adjusted for R18 visual)
const containerStyle = {
  fontFamily: "Inter, sans-serif",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#DCFCE7", // green-100 for R18
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "50px auto",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  border: "1px solid #22C55E", // green-500
};

const headerStyle = { color: "#22C55E", marginBottom: "15px" }; // green-600
const descriptionStyle = { color: "#4B5563", marginBottom: "20px" };
const inputStyle = {
  width: "80%",
  padding: "10px",
  fontSize: "1em",
  border: "1px solid #CCC",
  borderRadius: "4px",
  marginBottom: "15px",
};
const pendingStyle = {
  color: "#8B5CF6",
  fontWeight: "bold",
  fontSize: "0.9em",
  marginBottom: "10px",
}; // violet-500
const statusStyle = { color: "#374151", marginBottom: "10px" };
const highlightStyle = { fontWeight: "bold", color: "#22C55E" };
const listContainerStyle = {
  height: "200px",
  overflowY: "auto",
  border: "1px solid #E5E7EB",
  borderRadius: "4px",
  backgroundColor: "#FFF",
  padding: "10px",
};
const ulStyle = { listStyleType: "none", padding: "0" };
const liStyle = {
  padding: "5px 0",
  borderBottom: "1px dotted #E5E7EB",
  textAlign: "left",
};
const noResultStyle = { color: "#DC2626", fontStyle: "italic" };
const noteStyle = { fontSize: "0.9em", color: "#6B7280", marginTop: "15px" };
