"use client";
import { useClient } from "next/client";
import Experience from "../homepage/experience/index"; // Đặt đường dẫn đúng đến file Experience của bạn

function ParentComponent() {
  useClient(); // Đánh dấu thành phần này là Component Client

  return <Experience />;
}

export default ParentComponent;
