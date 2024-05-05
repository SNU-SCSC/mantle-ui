function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
import { useEffect, useRef } from "react";
import "./TextArea.css";
export default function TextArea(_param) {
    var label = _param.label, _param_resizable = _param.resizable, resizable = _param_resizable === void 0 ? false : _param_resizable, //
    className = _param.className, props = _object_without_properties(_param, [
        "label",
        "resizable",
        "className"
    ]);
    var handleRef = useRef(null);
    var textareaRef = useRef(null);
    useEffect(function() {
        if (!handleRef.current) return;
        if (!textareaRef.current) return;
        var handle = handleRef.current;
        var isDragging = false;
        handle.addEventListener("mousedown", function(e) {
            isDragging = true;
        });
        document.addEventListener("mouseup", function(e) {
            isDragging = false;
        });
        document.addEventListener("mousemove", function(e) {
            if (!isDragging) return;
            var textarea = textareaRef.current;
            if (!textarea) return;
            var top = textarea.getBoundingClientRect().top;
            var clientY = e.clientY;
            var newHeight = clientY - top;
            textarea.style.height = "".concat(newHeight, "px");
        });
    }, [
        handleRef.current,
        textareaRef.current
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "MT-textarea-root ".concat(className || "")
    }, label && /*#__PURE__*/ React.createElement("label", {
        className: "MT-textarea-label"
    }, " ", label, " "), /*#__PURE__*/ React.createElement("textarea", _object_spread({
        className: "MT-textarea ".concat(resizable ? "MT-resizable" : ""),
        ref: textareaRef
    }, props)), resizable && /*#__PURE__*/ React.createElement("div", {
        className: "MT-textarea-handle",
        ref: handleRef
    }, /*#__PURE__*/ React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "1em",
        height: "1em",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ React.createElement("path", {
        fill: "currentColor",
        d: "M16.59 5.59L18 7l-6 6l-6-6l1.41-1.41L12 10.17zm0 6L18 13l-6 6l-6-6l1.41-1.41L12 16.17z"
    }))));
}
