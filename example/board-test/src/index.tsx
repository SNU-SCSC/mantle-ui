import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BoardPagination from "@/components/pagination/BoardPagination";
import BoardDropdown from "@/components/dropdown/BoardDropdown";

// TODO: add width restrictor

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <div className="layout">
      <div className="dropdown-container">
        <BoardDropdown
          subject="페이지당"
          items={["10개", "15개", "30개"]}
          onSelect={console.log}
        />
        <BoardDropdown
          subject="정렬 기준"
          items={["날짜순", "인기순"]}
          onSelect={console.log}
        />
      </div>
      <BoardPagination totalPages={115} onPageChange={console.log} />
    </div>
  </React.StrictMode>,
);
