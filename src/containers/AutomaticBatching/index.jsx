import React, { useState } from "react";

let renderCount = 0; // Biến global để đếm số lần render

export default function AutomaticBatching() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const [mode, setMode] = useState("React 18 (Auto Batching)"); // Chế độ mặc định

  // Mỗi khi component render, tăng biến đếm và log ra console
  renderCount++;
  console.log(
    `[RENDER] Component re-rendered. Total: ${renderCount}. State: count=${count}, flag=${flag}`
  );

  // Hàm xử lý cập nhật state
  const handleUpdateState = () => {
    console.log("--- STARTING STATE UPDATES ---");

    // Cập nhật 1 (Đồng bộ, trong sự kiện React)
    setCount((prev) => {
      console.log(`[Update 1] Previous count: ${prev}, New count: ${prev + 1}`);
      return prev + 1;
    });
    setFlag((prev) => {
      console.log(`[Update 2] Previous flag: ${prev}, New flag: ${!prev}`);
      return !prev;
    });

    console.log("--- Simulating async operation (setTimeout) ---");

    // Cập nhật 2 (Bất đồng bộ, trong setTimeout)
    // *** Đây là điểm khác biệt chính giữa React 16 và React 18 ***
    setTimeout(() => {
      console.log("--- START ASYNC UPDATES ---");

      setCount((prev) => {
        console.log(
          `[Update 3 - Async] setCount called. Previous count: ${prev}, New count: ${
            prev + 1
          }`
        );
        return prev + 1;
      });

      setFlag((prev) => {
        console.log(
          `[Update 4 - Async] setFlag called. Previous flag: ${prev}, New flag: ${!prev}`
        );
        return !prev;
      });

      console.log("--- ENDING ASYNC UPDATES ---");
    }, 100); // Thêm một độ trễ nhỏ để mô phỏng tác vụ bất đồng bộ
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Demo: Automatic Batching React 18</h1>
      <p style={descriptionStyle}>
        Chế độ hiện tại: <span style={modeStyle}>{mode}</span>
      </p>
      <p style={stateDisplay}>
        Count: <span style={valueStyle}>{count}</span> | Flag:{" "}
        <span style={valueStyle}>{flag ? "True" : "False"}</span>
      </p>
      <button onClick={handleUpdateState} style={buttonStyle}>
        Cập nhật State (Đồng bộ + Async)
      </button>
      <p style={renderCountStyle}>
        Tổng số lần re-render Component: <strong>{renderCount}</strong>
      </p>
      <p style={noteStyle}>
        Kiểm tra **console trình duyệt** để xem chi tiết các lệnh `setState` và
        số lần re-render.
      </p>
    </div>
  );
}

// Styles đơn giản để demo dễ nhìn hơn
const containerStyle = {
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#f4f4f4",
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "50px auto",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
};

const headerStyle = {
  color: "#333",
  marginBottom: "20px",
};

const descriptionStyle = {
  color: "#555",
  marginBottom: "15px",
};

const modeStyle = {
  color: "#8A2BE2", // BlueViolet
  fontWeight: "bold",
};

const stateDisplay = {
  fontSize: "1.2em",
  marginBottom: "20px",
  color: "#444",
};

const valueStyle = {
  color: "#007bff",
  fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "1em",
  marginBottom: "15px",
};

const renderCountStyle = {
  fontSize: "1.1em",
  color: "#333",
};

const noteStyle = {
  fontSize: "0.9em",
  color: "#777",
  marginTop: "10px",
};

// Để đảm bảo console sạch khi refresh trang hoặc lần đầu load
// document.addEventListener("DOMContentLoaded", () => {
//   console.clear();
//   renderCount = 0; // Reset counter on full page load
// });
