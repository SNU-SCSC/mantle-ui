/// <reference types="react" />
import "./Dropdown.css";
interface DropdownProps {
    subject: string;
    items: string[];
    onSelect: (item: string) => void;
}
export default function BoardDropdown({ subject, items, onSelect, }: DropdownProps): import("react").JSX.Element;
export {};
