import React from "react";
import "./Dropdown.css";
interface DropdownProps {
    subject: string;
    items: string[];
    onSelect: (item: string) => void;
}
export default function BoardDropdown({ subject, items, onSelect, }: DropdownProps): React.JSX.Element;
export {};
