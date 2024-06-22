import React from "react";
import "./Pagination.css";
interface PaginationProps {
    totalPages: number;
    onPageChange: (page: number) => void;
}
export default function BoardPagination({ totalPages, onPageChange, }: PaginationProps): React.JSX.Element;
export {};
