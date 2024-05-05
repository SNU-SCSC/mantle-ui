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
import { useEffect, useState } from "react";
import "./Pagination.css";
export default function BoardPagination(param) {
    var totalPages = param.totalPages, onPageChange = param.onPageChange;
    var pagesPerGroup = 10;
    var _useState = _sliced_to_array(useState(0), 2), currPage = _useState[0], setCurrPage = _useState[1];
    var _useState1 = _sliced_to_array(useState(0), 2), currGroup = _useState1[0], setCurrGroup = _useState1[1];
    useEffect(function() {
        setCurrPage(1);
        onPageChange(1);
    }, []);
    useEffect(function() {
        setCurrGroup(Math.floor((currPage - 1) / pagesPerGroup));
        onPageChange(currPage);
    }, [
        currPage
    ]);
    var pages = Array.from({
        length: totalPages
    }, function(_, i) {
        return i + 1;
    }).filter(function(page) {
        var start = Math.floor(currGroup) * pagesPerGroup + 1;
        var end = Math.min(start + pagesPerGroup, totalPages + 1);
        return page >= start && page < end;
    });
    return /*#__PURE__*/ React.createElement("div", {
        className: "pagination"
    }, /*#__PURE__*/ React.createElement("button", {
        onClick: function() {
            if (currGroup > 0) setCurrPage((currGroup - 1) * pagesPerGroup + 1);
        },
        className: "pagination-item"
    }, "<<"), /*#__PURE__*/ React.createElement("button", {
        onClick: function() {
            return setCurrPage(Math.max(currPage - 1, 1));
        },
        className: "pagination-item"
    }, "<"), pages.map(function(page) {
        return /*#__PURE__*/ React.createElement("button", {
            key: page,
            className: page === currPage ? "pagination-item active" : "pagination-item",
            onClick: function() {
                return setCurrPage(page);
            }
        }, page);
    }), /*#__PURE__*/ React.createElement("button", {
        onClick: function() {
            return setCurrPage(Math.min(currPage + 1, totalPages));
        },
        className: "pagination-item"
    }, ">"), /*#__PURE__*/ React.createElement("button", {
        onClick: function() {
            if (currGroup < Math.floor(totalPages / pagesPerGroup)) setCurrPage((currGroup + 1) * pagesPerGroup + 1);
        },
        className: "pagination-item"
    }, ">>"));
}
