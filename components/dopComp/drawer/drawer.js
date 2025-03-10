import React, {useCallback, useEffect, useState} from "react";
import {createPortal} from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}

function _iterableToArrayLimit(arr, i) {
    var _arr = [], _n = !0, _d = !1, _e = void 0;
    try {
        for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = !0) ;
    } catch (err) {
        _d = !0, _e = err
    } finally {
        try {
            _n || null == _i["return"] || _i["return"]()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _defineProperty(obj, key, value) {
    return key in obj ? Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : obj[key] = value, obj
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = null == arguments[i] ? {} : arguments[i], ownKeys = Object.keys(source);
        "function" == typeof Object.getOwnPropertySymbols && (ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable
        }))), ownKeys.forEach(function (key) {
            _defineProperty(target, key, source[key])
        })
    }
    return target
}

function styleInject(css, ref) {
    void 0 === ref && (ref = {});
    var insertAt = ref.insertAt;
    if (css && "undefined" != typeof document) {
        var head = document.head || document.getElementsByTagName("head")[0], style = document.createElement("style");
        style.type = "text/css", "top" === insertAt ? head.firstChild ? head.insertBefore(style, head.firstChild) : head.appendChild(style) : head.appendChild(style), style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css))
    }
}

var css = "\r\n.closeButton-module_closeIcon__2ccUK {\r\n    margin-left: auto;\r\n    color: #000;\r\n    width: 21px;\r\n    height: 21px;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.closeButton-module_closeIcon__2ccUK:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 10px;\r\n    width: 21px;\r\n    height: 1px;\r\n    background-color: currentColor;\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.closeButton-module_closeIcon__2ccUK:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 10px;\r\n    width: 21px;\r\n    height: 1px;\r\n    background-color: currentColor;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n\r\n",
    styles = {closeIcon: "closeButton-module_closeIcon__2ccUK"};
styleInject("\r\n.closeButton-module_closeIcon__2ccUK {\r\n    margin-left: auto;\r\n    color: #000;\r\n    width: 21px;\r\n    height: 21px;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.closeButton-module_closeIcon__2ccUK:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 10px;\r\n    width: 21px;\r\n    height: 1px;\r\n    background-color: currentColor;\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.closeButton-module_closeIcon__2ccUK:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 10px;\r\n    width: 21px;\r\n    height: 1px;\r\n    background-color: currentColor;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\n\r\n");
var CloseButton = function (_ref) {
        var onClose = _ref.onClose;
        return React.createElement("div", {role: "button", className: styles.closeIcon, onClick: onClose})
    }, CloseButton$1 = React.memo(CloseButton),
    css$1 = "\r\n.drawer-module_drawerContainer__6rEA- {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 10;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n}\r\n\r\n.drawer-module_abstractTransitionContainer__1lTD3 {\r\n    overflow-y: auto;\r\n    position: relative;\r\n    background: #fff;\r\n    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.drawer-module_abstractTransitionContainer__1lTD3::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n    border-radius: 10px;\r\n}\r\n\r\n.drawer-module_abstractTransitionContainer__1lTD3::-webkit-scrollbar {\r\n    width: 10px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n.drawer-module_abstractTransitionContainer__1lTD3::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.drawer-module_transitionContainer__3KESg {\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n.drawer-module_topContainer__2KJqT {\r\n    margin-bottom: auto;\r\n}\r\n\r\n.drawer-module_rightContainer__3edQa {\r\n    margin-left: auto;\r\n}\r\n\r\n.drawer-module_leftContainer__2O2De {\r\n}\r\n\r\n.drawer-module_bottomContainer__2Te6K {\r\n    margin-top: auto;\r\n}",
    styles$1 = {
        drawerContainer: "drawer-module_drawerContainer__6rEA-",
        abstractTransitionContainer: "drawer-module_abstractTransitionContainer__1lTD3",
        transitionContainer: "drawer-module_transitionContainer__3KESg",
        topContainer: "drawer-module_topContainer__2KJqT drawer-module_abstractTransitionContainer__1lTD3",
        rightContainer: "drawer-module_rightContainer__3edQa drawer-module_abstractTransitionContainer__1lTD3",
        leftContainer: "drawer-module_leftContainer__2O2De drawer-module_abstractTransitionContainer__1lTD3",
        bottomContainer: "drawer-module_bottomContainer__2Te6K drawer-module_abstractTransitionContainer__1lTD3"
    };
styleInject(css$1);
var css$2 = "\r\n.leftTransitions-module_enter__dS73R {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n}\r\n\r\n.leftTransitions-module_enterActive__3Nas7 {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    transition: 220ms ease-in-out;\r\n}\r\n\r\n.leftTransitions-module_leave__4soYi {\r\n    right: 0;\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n}\r\n\r\n.leftTransitions-module_leaveActive__3tQ2g {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    transition: all 160ms ease-in;\r\n}",
    leftTransitions = {
        enter: "leftTransitions-module_enter__dS73R",
        enterActive: "leftTransitions-module_enterActive__3Nas7",
        leave: "leftTransitions-module_leave__4soYi",
        leaveActive: "leftTransitions-module_leaveActive__3tQ2g"
    };
styleInject("\r\n.leftTransitions-module_enter__dS73R {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n}\r\n\r\n.leftTransitions-module_enterActive__3Nas7 {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    transition: 220ms ease-in-out;\r\n}\r\n\r\n.leftTransitions-module_leave__4soYi {\r\n    right: 0;\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n}\r\n\r\n.leftTransitions-module_leaveActive__3tQ2g {\r\n    -webkit-transform: translateX(-100%);\r\n            transform: translateX(-100%);\r\n    transition: all 160ms ease-in;\r\n}");
var css$3 = "\r\n.rightTransitions-module_enter__3-ZEZ {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n}\r\n\r\n.rightTransitions-module_enterActive__3Z3s8 {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    transition: 220ms ease-in-out;\r\n}\r\n\r\n.rightTransitions-module_leave__rTcwr {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n}\r\n\r\n.rightTransitions-module_leaveActive__1h_G_ {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    transition: all 160ms ease-in;\r\n}",
    rightTransitions = {
        enter: "rightTransitions-module_enter__3-ZEZ",
        enterActive: "rightTransitions-module_enterActive__3Z3s8",
        leave: "rightTransitions-module_leave__rTcwr",
        leaveActive: "rightTransitions-module_leaveActive__1h_G_"
    };
styleInject("\r\n.rightTransitions-module_enter__3-ZEZ {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n}\r\n\r\n.rightTransitions-module_enterActive__3Z3s8 {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n    transition: 220ms ease-in-out;\r\n}\r\n\r\n.rightTransitions-module_leave__rTcwr {\r\n    -webkit-transform: translateX(0);\r\n            transform: translateX(0);\r\n}\r\n\r\n.rightTransitions-module_leaveActive__1h_G_ {\r\n    -webkit-transform: translateX(100%);\r\n            transform: translateX(100%);\r\n    transition: all 160ms ease-in;\r\n}");
var css$4 = "\r\n.topTransitions-module_enter__wEISF {\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n}\r\n\r\n.topTransitions-module_enterActive__3HdVT {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    transition: 220ms ease-in-out;\r\n}\r\n\r\n.topTransitions-module_leave__1HgBG {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n}\r\n\r\n.topTransitions-module_leaveActive__2R4Dt {\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n    transition: all 160ms ease-in;\r\n}",
    topTransitions = {
        enter: "topTransitions-module_enter__wEISF",
        enterActive: "topTransitions-module_enterActive__3HdVT",
        leave: "topTransitions-module_leave__1HgBG",
        leaveActive: "topTransitions-module_leaveActive__2R4Dt"
    };
styleInject("\r\n.topTransitions-module_enter__wEISF {\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n}\r\n\r\n.topTransitions-module_enterActive__3HdVT {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    transition: 220ms ease-in-out;\r\n}\r\n\r\n.topTransitions-module_leave__1HgBG {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n}\r\n\r\n.topTransitions-module_leaveActive__2R4Dt {\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n    transition: all 160ms ease-in;\r\n}");
var css$5 = "\r\n.bottomTransitions-module_enter__3Y9mI {\r\n    -webkit-transform: translateY(100%);\r\n            transform: translateY(100%);\r\n}\r\n\r\n.bottomTransitions-module_enterActive__2-Iwk {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    transition: 220ms ease-in-out;\r\n}\r\n\r\n.bottomTransitions-module_leave__1yY_y {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n}\r\n\r\n.bottomTransitions-module_leaveActive__3Lp-p {\r\n    -webkit-transform: translateY(100%);\r\n            transform: translateY(100%);\r\n    transition: all 160ms ease-in;\r\n}",
    bottomTransitions = {
        enter: "bottomTransitions-module_enter__3Y9mI",
        enterActive: "bottomTransitions-module_enterActive__2-Iwk",
        leave: "bottomTransitions-module_leave__1yY_y",
        leaveActive: "bottomTransitions-module_leaveActive__3Lp-p"
    };
styleInject("\r\n.bottomTransitions-module_enter__3Y9mI {\r\n    -webkit-transform: translateY(100%);\r\n            transform: translateY(100%);\r\n}\r\n\r\n.bottomTransitions-module_enterActive__2-Iwk {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n    transition: 220ms ease-in-out;\r\n}\r\n\r\n.bottomTransitions-module_leave__1yY_y {\r\n    -webkit-transform: translateY(0);\r\n            transform: translateY(0);\r\n}\r\n\r\n.bottomTransitions-module_leaveActive__3Lp-p {\r\n    -webkit-transform: translateY(100%);\r\n            transform: translateY(100%);\r\n    transition: all 160ms ease-in;\r\n}");
var getWrapperClassNameByPlacement = function (placement) {
        return "top" === placement ? styles$1.topContainer : "right" === placement ? styles$1.rightContainer : "bottom" === placement ? styles$1.bottomContainer : "left" === placement ? styles$1.leftContainer : styles$1.leftContainer
    }, getTransitionStylesByPlacement = function (placement) {
        return "top" === placement ? topTransitions : "right" === placement ? rightTransitions : "bottom" === placement ? bottomTransitions : "left" === placement ? leftTransitions : leftTransitions
    }, getWidthByPlacement = function (placement) {
        return "top" === placement ? "100%" : "right" === placement ? "256px" : "bottom" === placement ? "100%" : "left" === placement ? "256px" : "256px"
    }, getHeightByPlacement = function (placement) {
        return "top" === placement ? "256px" : "right" === placement ? "100%" : "bottom" === placement ? "256px" : "left" === placement ? "100%" : "100%"
    }, Transition = function (_ref) {
        var children = _ref.children, isOpen = _ref.isOpen, _ref$placement = _ref.placement,
            placement = void 0 === _ref$placement ? "left" : _ref$placement, width = _ref.width, height = _ref.height,
            closable = _ref.closable, onClose = _ref.onClose, style = _ref.style, className = _ref.className,
            _useState = useState(!1), _useState2 = _slicedToArray(_useState, 2), childrenVisible = _useState2[0],
            setChildrenVisible = _useState2[1];
        useEffect(function () {
            setChildrenVisible(!0)
        }, []);
        var contentWidth = width || getWidthByPlacement(placement),
            contentHeight = height || getHeightByPlacement(placement),
            childWrapperStyle = _objectSpread({width: contentWidth, height: contentHeight}, style);
        return React.createElement(ReactCSSTransitionGroup, {
            transitionName: getTransitionStylesByPlacement(placement),
            transitionEnterTimeout: 220,
            transitionLeaveTimeout: 160,
            className: styles$1.transitionContainer
        }, childrenVisible && isOpen && React.createElement("div", {
            className: "".concat(getWrapperClassNameByPlacement(placement), " ").concat(className),
            style: childWrapperStyle
        }, closable && React.createElement(CloseButton$1, {onClose: onClose}), children))
    }, Transition$1 = React.memo(Transition),
    css$6 = "\r\n.transitions-module_leave__3I9g0 {\r\n    opacity: 1;\r\n}\r\n\r\n.transitions-module_leaveActive__1sAKM {\r\n    opacity: 0;\r\n    transition: all 400ms;\r\n}",
    transitions = {leave: "transitions-module_leave__3I9g0", leaveActive: "transitions-module_leaveActive__1sAKM"};
styleInject(css$6);
var css$7 = "\r\n.mask-module_mask__2zjdu {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}",
    styles$2 = {"-webkit-mask": "mask-module_mask__2zjdu", mask: "mask-module_mask__2zjdu"};
styleInject("\r\n.mask-module_mask__2zjdu {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}");
var Mask = function (_ref) {
    var isOpen = _ref.isOpen, style = _ref.style, onClose = _ref.onClose;
    return React.createElement(ReactCSSTransitionGroup, {
        transitionName: transitions,
        transitionLeaveTimeout: 400
    }, isOpen && React.createElement("div", {id: "mask", className: styles$2.mask, style: style, onClick: onClose}))
}, Mask$1 = React.memo(Mask), delay = function (duration) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve()
        }, duration)
    })
};

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(target, props) {
    for (var descriptor, i = 0; i < props.length; i++) descriptor = props[i], descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor)
}

function _createClass(Constructor, protoProps, staticProps) {
    return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Constructor
}

function _typeof2(obj) {
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
    }, _typeof2(obj)
}

function _typeof(obj) {
    return _typeof = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function (obj) {
        return _typeof2(obj)
    } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj)
    }, _typeof(obj)
}

function _assertThisInitialized(self) {
    if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self
}

function _possibleConstructorReturn(self, call) {
    return call && ("object" === _typeof(call) || "function" == typeof call) ? call : _assertThisInitialized(self)
}

function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function (o) {
        return o.__proto__ || Object.getPrototypeOf(o)
    }, _getPrototypeOf(o)
}

function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function (o, p) {
        return o.__proto__ = p, o
    }, _setPrototypeOf(o, p)
}

function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass)
}

function withErrorHandler(Component) {
    var WithErrorHandler = /*#__PURE__*/function (_React$PureComponent) {
        function WithErrorHandler() {
            var _getPrototypeOf2, _this;
            _classCallCheck(this, WithErrorHandler);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            return _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WithErrorHandler)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {hasError: !1}, _this
        }

        return _inherits(WithErrorHandler, _React$PureComponent), _createClass(WithErrorHandler, [{
            key: "componentDidCatch",
            value: function (error) {
                this.setState({hasError: !0}), console.error(error)
            }
        }, {
            key: "render", value: function () {
                return !this.state.hasError && React.createElement(Component, this.props)
            }
        }]), WithErrorHandler
    }(React.PureComponent);
    return WithErrorHandler.displayName = "withErrorHandler(".concat(Component.displayName, ")"), WithErrorHandler
}

var Drawer = function (_ref) {
    var onClose = _ref.onClose, children = _ref.children, _ref$visible = _ref.visible,
        visible = void 0 !== _ref$visible && _ref$visible, placement = _ref.placement, width = _ref.width,
        height = _ref.height, _ref$mask = _ref.mask, _ref$maskStyle = _ref.maskStyle,
        maskStyle = void 0 === _ref$maskStyle ? {backgroundColor: "rgba(0, 0, 0, 0.3)"} : _ref$maskStyle,
        _ref$zIndex = _ref.zIndex, zIndex = void 0 === _ref$zIndex ? 1e3 : _ref$zIndex, style = _ref.style,
        className = _ref.className, _ref$closable = _ref.closable, _useState = useState(!1),
        _useState2 = _slicedToArray(_useState, 2), localVisible = _useState2[0], setLocalVisible = _useState2[1],
        _useState3 = useState(!0), _useState4 = _slicedToArray(_useState3, 2), transitionOpen = _useState4[0],
        setTransitionOpen = _useState4[1],
        computedMaskStyle = !(void 0 !== _ref$mask) || _ref$mask ? maskStyle : {backgroundColor: "transparent"};
    useEffect(function () {
        setTransitionOpen(visible)
    }, [visible]), useEffect(function () {
        visible ? setLocalVisible(!0) : delay(160).then(function () {
            setLocalVisible(!1)
        })
    }, [visible]), useEffect(function () {
        return localVisible && (document.body.style.overflow = "hidden"), function () {
            document.body.style.overflow = "visible"
        }
    }, [localVisible]);
    var closeDrawer = useCallback(function () {
        setTransitionOpen(!1), delay(160).then(function () {
            onClose && onClose()
        })
    }, [onClose]);
    return createPortal(React.createElement(React.Fragment, null, localVisible && React.createElement("div", {
        className: styles$1.drawerContainer,
        role: "dialog",
        style: {zIndex: zIndex}
    }, React.createElement(Mask$1, {
        isOpen: transitionOpen,
        style: computedMaskStyle,
        onClose: closeDrawer
    }), React.createElement(Transition$1, {
        isOpen: transitionOpen,
        placement: placement,
        width: width,
        height: height,
        closable: void 0 !== _ref$closable && _ref$closable,
        style: style,
        className: className,
        onClose: closeDrawer
    }, children))), document.body)
}, Drawer$1 = withErrorHandler(Drawer);
export {Drawer$1 as Drawer};
