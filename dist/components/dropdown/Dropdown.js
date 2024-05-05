"use client";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import { useState } from "react";
import "./Dropdown.css";
export default function BoardDropdown(param) {
    var subject = param.subject, items = param.items, onSelect = param.onSelect;
    var _useState = _sliced_to_array(useState(false), 2), isDropdownOpen = _useState[0], setIsDropdownOpen = _useState[1];
    var _useState1 = _sliced_to_array(useState(0), 2), selectedItemIndex = _useState1[0], setSelectedItemIndex = _useState1[1];
    var toggleDropdown = function() {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return /*#__PURE__*/ React.createElement("div", {
        className: "dropdown"
    }, /*#__PURE__*/ React.createElement("button", {
        onClick: toggleDropdown,
        className: "dropdown-button"
    }, /*#__PURE__*/ React.createElement("div", null, subject + ": " + items[selectedItemIndex]), /*#__PURE__*/ React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "0.8em",
        viewBox: "0 0 24 24",
        style: {
            transform: "".concat(isDropdownOpen ? "rotate(180deg)" : ""),
            transformOrigin: "center",
            position: "relative",
            top: "2px",
            left: "3px"
        }
    }, /*#__PURE__*/ React.createElement("path", {
        fill: "currentColor",
        d: "M1 21h22L12 2"
    }))), isDropdownOpen && /*#__PURE__*/ React.createElement("div", {
        className: "dropdown-list"
    }, items.map(function(item) {
        return /*#__PURE__*/ React.createElement("button", {
            key: item,
            onClick: function() {
                onSelect(item);
                toggleDropdown();
                setSelectedItemIndex(items.indexOf(item));
            },
            className: "dropdown-item " + (items.indexOf(item) === selectedItemIndex ? "active" : "")
        }, item);
    })));
}
