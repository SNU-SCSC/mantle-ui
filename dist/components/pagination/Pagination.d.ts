/// <reference types="react" />
import "./Pagination.css";
interface PaginationProps {
    totalPages: number;
    onPageChange: (page: number) => void;
}
export default function BoardPagination({ totalPages, onPageChange, }: PaginationProps): import("react").JSX.Element;
export {};
