"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./pages/about/index.js":
/*!******************************!*\
  !*** ./pages/about/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction About() {\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [validEmail, setValidEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [buttonType, setButtonType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"submit\");\n    const [buttonText, setButtonText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Subscribe\");\n    // console.log(value);\n    function validateEmail(e) {\n        e.preventDefault();\n        if (value.match(/[a-z0-9!#$%&'*+\\=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+\\=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\\b/gm)) {\n            console.log(\"good email\");\n            setButtonText(\"Subscribed Successfully!\");\n            setButtonType(\"submit\");\n        } else {\n            console.log(\"bad email\");\n            setButtonText(\"Invalid Email, Input Again\");\n            setButtonType(\"\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"About\"\n                }, void 0, false, {\n                    fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"about-hero\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"about-box2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"about-title\",\n                            children: \"Want to learn about bamboo, need a self-sufficient landscape, or in search of some gardening tips, tricks, and information?\"\n                        }, void 0, false, {\n                            fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"about-pic-container\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/images/social_pic_cropped.jpg\",\n                                alt: \"\",\n                                className: \"about-mypic\"\n                            }, void 0, false, {\n                                fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"about-vp\",\n                            children: [\n                                \"Hello, my name is James Thomas. I am a plant enthusiast that likes to grow just about any plant I can get! My experience with growing plants goes way back to when I was much younger, and took an interest in gardening. Shortly after I started there was an extremely severe drought, but I perservered through it, and mananged to create a productive garden. Now I have the joy of being able to say that I have experience with growing hundreds (if not thousands) of plant species, and am currently growing over 150 different plant species on the same plot of land.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                \"My goal with this blog is to help people get the most from their gardens, landscapes, or forests. During my forestry degree program I learned everything I needed to know to become a forest steward capable of making the healthiest forest possible. I also took a plethora of horticulture classes to further my knowledge about plants. These degree programs were really enjoyable as I got to be around plants often. Now I want to spread what I know to help gardeners, forest owners, or any others interested in plants!\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                \"My secondary goal with this blog is to collect and spread information about bamboo. I have had a very difficult time trying to find information about bamboo, and for some species I haven't found anything at all! So, I intend to thoroughly document everything I can about bamboo on this blog.\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"a-make-bold\",\n                                    children: \"Be sure to subscribe below to receive reminders about new articles, tips, and more!\"\n                                }, void 0, false, {\n                                    fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                            width: \"540\",\n                            height: \"405\",\n                            src: \"https://e88cc980.sibforms.com/serve/MUIEADg-m9aRbo52uYY91ycILZNiLSKZ5IW5IFw4objrc9pCULwHornpTJehOJfr2dRVOWNz5wFlSHn7TmuwJvM6ZJ4M4PlOTTj9_aqwtStg7eWgI8JXX2iJIakZCLsSOIPf8Ls0wY5tS7y3RQTcd2ZrwGf0ZN9qJHZ0Znih7wXvGKm5pwOIwKUlP0joq2-7P-UAt405CnlIKLOc\",\n                            frameBorder: \"0\",\n                            scrolling: \"auto\",\n                            allowFullScreen: true,\n                            style: {\n                                display: \"block\",\n                                marginLeft: \"auto\",\n                                marginRight: \"auto\",\n                                maxWidth: \"100%\"\n                            },\n                            className: \"sendinblue-form\"\n                        }, void 0, false, {\n                            fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/jimmy/Documents/current work/thebamboocoder-horticulture/pages/about/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUNVO0FBRXhCLFNBQVNHLFFBQVE7SUFFOUIsTUFBTSxDQUFDQyxPQUFNQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ0ksWUFBV0MsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM1QyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLHNCQUFzQjtJQUV0QixTQUFTVSxjQUFjQyxDQUFDLEVBQUU7UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEIsSUFBR1YsTUFBTVcsS0FBSyxDQUFDLG1MQUFtTDtZQUNoTUMsUUFBUUMsR0FBRyxDQUFDO1lBQ1pOLGNBQWM7WUFDZEYsY0FBYztRQUNoQixPQUFNO1lBQ0pPLFFBQVFDLEdBQUcsQ0FBQztZQUNaTixjQUFjO1lBQ2RGLGNBQWM7UUFDaEIsQ0FBQztJQUNIO0lBRUEscUJBQ0U7OzBCQUVFLDhEQUFDVCxrREFBSUE7MEJBQ0gsNEVBQUNrQjs4QkFBTTs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBRWIsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFjOzs7Ozs7c0NBRTVCLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0U7Z0NBQUlDLEtBQUk7Z0NBQWlDQyxLQUFJO2dDQUFHSixXQUFVOzs7Ozs7Ozs7OztzQ0FHM0QsOERBQUNLOzRCQUFFTCxXQUFVOztnQ0FBVzs4Q0FDeEIsOERBQUNNOzs7Ozs4Q0FDRCw4REFBQ0E7Ozs7O2dDQUFJOzhDQUVMLDhEQUFDQTs7Ozs7OENBQ0QsOERBQUNBOzs7OztnQ0FBSTs4Q0FHTCw4REFBQ0E7Ozs7OzhDQUNELDhEQUFDQTs7Ozs7OENBQ0QsOERBQUNBOzs7Ozs4Q0FDRCw4REFBQ0M7b0NBQUtQLFdBQVU7OENBQWM7Ozs7Ozs7Ozs7OztzQ0FTaEMsOERBQUNROzRCQUFPQyxPQUFNOzRCQUFNQyxRQUFPOzRCQUFNUCxLQUFJOzRCQUF1UFEsYUFBWTs0QkFBSUMsV0FBVTs0QkFBT0MsZUFBZTs0QkFBQ0MsT0FBTztnQ0FBQ0MsU0FBUztnQ0FBU0MsWUFBWTtnQ0FBT0MsYUFBYTtnQ0FBUUMsVUFBVTs0QkFBTzs0QkFBSWxCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnhiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGUtYmFtYm9vLWNvZGVyLy4vcGFnZXMvYWJvdXQvaW5kZXguanM/MzllNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuXG4gIGNvbnN0IFt2YWx1ZSxzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt2YWxpZEVtYWlsLHNldFZhbGlkRW1haWxdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtidXR0b25UeXBlLCBzZXRCdXR0b25UeXBlXSA9IHVzZVN0YXRlKCdzdWJtaXQnKVxuICBjb25zdCBbYnV0dG9uVGV4dCwgc2V0QnV0dG9uVGV4dF0gPSB1c2VTdGF0ZSgnU3Vic2NyaWJlJylcbiAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZih2YWx1ZS5tYXRjaCgvW2EtejAtOSEjJCUmJyorXFw9P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKitcXD0/Xl9ge3x9fi1dKykqQCg/OlthLXowLTldKD86W2EtejAtOS1dKlthLXowLTldKT9cXC4pKyg/OltBLVpdezJ9fGNvbXxvcmd8bmV0fGdvdnxtaWx8Yml6fGluZm98bW9iaXxuYW1lfGFlcm98am9ic3xtdXNldW0pXFxiL2dtKSkge1xuICAgICAgY29uc29sZS5sb2coJ2dvb2QgZW1haWwnKTtcbiAgICAgIHNldEJ1dHRvblRleHQoJ1N1YnNjcmliZWQgU3VjY2Vzc2Z1bGx5IScpXG4gICAgICBzZXRCdXR0b25UeXBlKCdzdWJtaXQnKVxuICAgIH0gZWxzZXtcbiAgICAgIGNvbnNvbGUubG9nKCdiYWQgZW1haWwnKTtcbiAgICAgIHNldEJ1dHRvblRleHQoJ0ludmFsaWQgRW1haWwsIElucHV0IEFnYWluJylcbiAgICAgIHNldEJ1dHRvblR5cGUoJycpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFib3V0PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYm91dC1oZXJvJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fib3V0LWJveDInPlxuICAgICAgICAgIHsvKiA8aDEgY2xhc3NOYW1lPSdhYm91dC10aXRsZSc+SGF2ZSBBbiBJbnRlcmVzdCBJbiBHZW5lcmF0aXZlIEFydCwgQUksIFdlYiBEZXNpZ24sIG9yIENvZGluZz88L2gxPiAqL31cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdhYm91dC10aXRsZSc+V2FudCB0byBsZWFybiBhYm91dCBiYW1ib28sIG5lZWQgYSBzZWxmLXN1ZmZpY2llbnQgbGFuZHNjYXBlLCBvciBpbiBzZWFyY2ggb2Ygc29tZSBnYXJkZW5pbmcgdGlwcywgdHJpY2tzLCBhbmQgaW5mb3JtYXRpb24/PC9oMT5cbiAgICAgICAgICB7LyogPGhyLz4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fib3V0LXBpYy1jb250YWluZXInPlxuICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWFnZXMvc29jaWFsX3BpY19jcm9wcGVkLmpwZycgYWx0PScnIGNsYXNzTmFtZT0nYWJvdXQtbXlwaWMnLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPSdhYm91dC12cCc+SGVsbG8sIG15IG5hbWUgaXMgSmFtZXMgVGhvbWFzLiBXZWF0aGVyIGFuZCBwbGFudHMgc2VydmUgYXMgbXkgaW5zcGlyYXRpb24gZm9yIGNyZWF0aW5nIGdlbmVyYXRpdmUgYXJ0IGZvcm1zLCBhcyBJIHdvdWxkIGxpa2UgdG8gdHJ5IHJlY3JlYXRpbmcgdGhlc2UgbmF0dXJhbCBzeXN0ZW1zLiA8YnIvPjxici8+QXMgYSBzZWxmLXRhdWdodCBwcm9ncmFtbWVyLCB3aGVuIEkgZmlyc3Qgc3RhcnRlZCBsZWFybmluZyB0byBjb2RlIEkgbmV2ZXIgdGhvdWdodCBJIHdvdWxkIGJlIHdoZXJlIEkgYW0gbm93IGluIGxpdHRsZSBvdmVyIGEgeWVhci5UaHVzLCBteSBnb2FsIHdpdGggdGhpcyBibG9nIGlzIHRvIGhlbHAgb3RoZXJzIHVuZGVyc3RhbmQgaG93IHRvIGNvZGUgd2hpbGUgZm9jdXNpbmcgb24gY3JlYXRpbmcgZ2VuZXJhdGl2ZSBhcnQuIE15IGFpbSBpcyB0byB3cml0ZSBhYm91dCB0b3BpY3MgdGhhdCBjb3ZlciBKYXZhc2NyaXB0LCBQeXRob24sYW5kIG1hY2hpbmUtbGVhcm5pbmcsIGFuZCBnZW5lcmF0aXZlIGFydC48YnIvPjxici8+V2hpbGUgSSBoYXZlIG11Y2ggdG8gbGVhcm4geWV0LCBJIGhvcGUgeW91IHdpbGwgZmluZCBzb21ldGhpbmcgaW50ZXJlc3Rpbmcgb24gdGhpcyB3ZWJzaXRlIHRoYXQgd2lsbCBwaXF1ZSB5b3VyIGludGVyZXN0LCBhbmQgZ2V0IHlvdSBleGNpdGVkIGFib3V0IHRoZSBhcHBsaWNhdGlvbnMgb2YgZ2VuZXJhdGl2ZSBhcnQsIGhvdyBBSSBjYW4gYmUgdXNlZCBpbiBjcmVhdGluZyB0aGVzZSBzeXN0ZW1zLCBhbmQgcGVyaGFwcyBwaWNrIHVwIHNvbWUgY29kaW5nIGtub3dsZWRnZSBhbG9uZyB0aGUgd2F5Ljxici8+PGJyLz48YnIvPjxzcGFuIGNsYXNzTmFtZT0nYS1tYWtlLWJvbGQnPkJlIHN1cmUgdG8gc3Vic2NyaWJlIGJlbG93IHRvIHJlY2VpdmUgcmVtaW5kZXJzIGFib3V0IG5ldyBhcnRpY2xlcywgdGlwcywgYW5kIG1vcmUhPC9zcGFuPjwvcD4gKi99XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2Fib3V0LXZwJz5IZWxsbywgbXkgbmFtZSBpcyBKYW1lcyBUaG9tYXMuIEkgYW0gYSBwbGFudCBlbnRodXNpYXN0IHRoYXQgbGlrZXMgdG8gZ3JvdyBqdXN0IGFib3V0IGFueSBwbGFudCBJIGNhbiBnZXQhIE15IGV4cGVyaWVuY2Ugd2l0aCBncm93aW5nIHBsYW50cyBnb2VzIHdheSBiYWNrIHRvIHdoZW4gSSB3YXMgbXVjaCB5b3VuZ2VyLCBhbmQgdG9vayBhbiBpbnRlcmVzdCBpbiBnYXJkZW5pbmcuIFNob3J0bHkgYWZ0ZXIgSSBzdGFydGVkIHRoZXJlIHdhcyBhbiBleHRyZW1lbHkgc2V2ZXJlIGRyb3VnaHQsIGJ1dCBJIHBlcnNlcnZlcmVkIHRocm91Z2ggaXQsIGFuZCBtYW5hbmdlZCB0byBjcmVhdGUgYSBwcm9kdWN0aXZlIGdhcmRlbi4gTm93IEkgaGF2ZSB0aGUgam95IG9mIGJlaW5nIGFibGUgdG8gc2F5IHRoYXQgSSBoYXZlIGV4cGVyaWVuY2Ugd2l0aCBncm93aW5nIGh1bmRyZWRzIChpZiBub3QgdGhvdXNhbmRzKSBvZiBwbGFudCBzcGVjaWVzLCBhbmQgYW0gY3VycmVudGx5IGdyb3dpbmcgb3ZlciAxNTAgZGlmZmVyZW50IHBsYW50IHNwZWNpZXMgb24gdGhlIHNhbWUgcGxvdCBvZiBsYW5kLlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICBNeSBnb2FsIHdpdGggdGhpcyBibG9nIGlzIHRvIGhlbHAgcGVvcGxlIGdldCB0aGUgbW9zdCBmcm9tIHRoZWlyIGdhcmRlbnMsIGxhbmRzY2FwZXMsIG9yIGZvcmVzdHMuIER1cmluZyBteSBmb3Jlc3RyeSBkZWdyZWUgcHJvZ3JhbSBJIGxlYXJuZWQgZXZlcnl0aGluZyBJIG5lZWRlZCB0byBrbm93IHRvIGJlY29tZSBhIGZvcmVzdCBzdGV3YXJkIGNhcGFibGUgb2YgbWFraW5nIHRoZSBoZWFsdGhpZXN0IGZvcmVzdCBwb3NzaWJsZS4gSSBhbHNvIHRvb2sgYSBwbGV0aG9yYSBvZiBob3J0aWN1bHR1cmUgY2xhc3NlcyB0byBmdXJ0aGVyIG15IGtub3dsZWRnZSBhYm91dCBwbGFudHMuIFRoZXNlIGRlZ3JlZSBwcm9ncmFtcyB3ZXJlIHJlYWxseSBlbmpveWFibGUgYXMgSSBnb3QgdG8gYmUgYXJvdW5kIHBsYW50cyBvZnRlbi4gTm93IEkgd2FudCB0byBzcHJlYWQgd2hhdCBJIGtub3cgdG8gaGVscCBnYXJkZW5lcnMsIGZvcmVzdCBvd25lcnMsIG9yIGFueSBvdGhlcnMgaW50ZXJlc3RlZCBpbiBwbGFudHMhXG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIE15IHNlY29uZGFyeSBnb2FsIHdpdGggdGhpcyBibG9nIGlzIHRvIGNvbGxlY3QgYW5kIHNwcmVhZCBpbmZvcm1hdGlvbiBhYm91dCBiYW1ib28uIEkgaGF2ZSBoYWQgYSB2ZXJ5IGRpZmZpY3VsdCB0aW1lIHRyeWluZyB0byBmaW5kIGluZm9ybWF0aW9uIGFib3V0IGJhbWJvbywgYW5kIGZvciBzb21lIHNwZWNpZXMgSSBoYXZlbid0IGZvdW5kIGFueXRoaW5nIGF0IGFsbCEgU28sIEkgaW50ZW5kIHRvIHRob3JvdWdobHkgZG9jdW1lbnQgZXZlcnl0aGluZyBJIGNhbiBhYm91dCBiYW1ib28gb24gdGhpcyBibG9nLlxuICAgICAgICAgICAgIHsvKiBPbiB0aGUgcG9pbnQgYWJvdXQgbGFjayBvZiBpbmZvcm1hdGlvbiwgd2hpbGUgbWFueSBzYXkgYmFtYm9vIGlzIGFuIGV4dHJlbWVseSBpbnZhc2l2ZSBwbGFudCwgbXkgZXhwZXJpZW5jZSB3aXRoIGl0IHNvIGZhciBoYXMgbm90IHF1aXRlIGJlZW4gdGhlIGNhc2UuIFBlcmhhcHMgaXQgaXMgZHVlIHRvIHRoZSBjbGF5IHNvaWwsIG9yIGxpdmluZyBvbiB0aGUgVVNEQSB6b25lIDYvNyBib3JkZXIsIGJ1dCBteSBydW5uaW5nIGJhbWJvb3MgZ2VuZXJhbGx5IHNwcmVhZCAxLTIgZmVldCBwZXIgeWVhci4gSSBiZWxpZXZlIGJhbWJvbyBoYXMgYSBsb3Qgb2YgcG90ZW50aWFsIHdpdGggaXRzIGZhc3QgZ3Jvd3RoIHJhdGVzLCBhYmlsaXR5IHRvIHN0YWJpbGl6ZSB0aGUgc29pbCwgYW5kIGFiaWxpdHkgdG8gcHJvdmlkZSBhIHVuaXF1ZSBpbnRlcmVzdCBwb2ludCB0byB0aGUgbGFuZHNjYXBlLiAqL31cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYS1tYWtlLWJvbGQnPkJlIHN1cmUgdG8gc3Vic2NyaWJlIGJlbG93IHRvIHJlY2VpdmUgcmVtaW5kZXJzIGFib3V0IG5ldyBhcnRpY2xlcywgdGlwcywgYW5kIG1vcmUhPC9zcGFuPlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIHsvKl9fXyBzcHJlYWQgdGhlIGtub3dsZWRnZSBuZWVkZWQgdG8gbWFrZSBhbWF6aW5nIGdlbmVyYXRpdmUgYXJ0IGNvbnRlbnQgXG4gICAgICAgICAgTXkgZ29hbCB3aXRoIHRoaXMgYmxvZyBpcyB0byBzaW1wbGlmeSB0aGUgY29kaW5nIHByb2Nlc3MsIGFuZCB0cnkgdG8gZXhwbGFpbiBwcm9ncmFtaW5nIGNvbmNlcHRzIHJhbmduZyBmcm9tIGJhc2ljIHRvIGFkdmFuY2VkLiAqL31cbiAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPSdhYm91dC12cCc+VGhlIHdlYXRoZXIgaXMgc3VjaCBhbiBhbWF6aW5nLCBjb21wbGV4IHN5c3RlbSBmaWxsZWQgd2l0aCBzbyBtYW55IGludHJpY2F0ZSBkZXRhaWxzIHRoYXQgSSBoYXZlIGRlY2lkZWQgb24gdHJ5aW5nIHRvIHJlY3JlYXRlIGl0IGFzIGEgZ2VuZXJhdGl2ZSBhcnQgc3R5bGUuPC9wPiAqL31cblxuICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9J2Fib3V0LXZwJz48L3A+ICovfVxuXG4gICAgICAgICAgPGlmcmFtZSB3aWR0aD1cIjU0MFwiIGhlaWdodD1cIjQwNVwiIHNyYz1cImh0dHBzOi8vZTg4Y2M5ODAuc2liZm9ybXMuY29tL3NlcnZlL01VSUVBRGctbTlhUmJvNTJ1WVk5MXljSUxaTmlMU0taNUlXNUlGdzRvYmpyYzlwQ1VMd0hvcm5wVEplaE9KZnIyZFJWT1dOejV3RmxTSG43VG11d0p2TTZaSjRNNFBsT1RUajlfYXF3dFN0ZzdlV2dJOEpYWDJpSklha1pDTHNTT0lQZjhMczB3WTV0Uzd5M1JRVGNkMlpyd0dmMFpOOXFKSFowWm5paDd3WHZHS201cHdPSXdLVWxQMGpvcTItN1AtVUF0NDA1Q25sSUtMT2NcIiBmcmFtZUJvcmRlcj1cIjBcIiBzY3JvbGxpbmc9XCJhdXRvXCIgYWxsb3dGdWxsU2NyZWVuIHN0eWxlPXt7ZGlzcGxheTogJ2Jsb2NrJywgbWFyZ2luTGVmdDogXCJhdXRvXCIsbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLCBtYXhXaWR0aDogXCIxMDAlXCIsfX0gIGNsYXNzTmFtZT1cInNlbmRpbmJsdWUtZm9ybVwiPjwvaWZyYW1lPlxuICAgICAgICAgIHsvKiA8Zm9ybSBhY3Rpb249JycgY2xhc3NOYW1lPSdhYm91dC1mb3JtJyBtZXRob2Q9J3Bvc3QnPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZm9ybS10aXRsZSc+RW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzIGJlbG93IHRvIHN0YXkgdXBkYXRlZCB3aGVuIG5ldyBjb250ZW50IGJlY29tZXMgYXZhaWxhYmxlITwvaDM+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdlbWFpbCcgbmFtZT0nZW1haWwnIG9uQ2hhbmdlPXtlID0+IHtzZXRWYWx1ZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSB9IHBsYWNlaG9sZGVyPSdFbWFpbCBBZGRyZXNzJyB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9e2J1dHRvblR5cGV9IGNsYXNzTmFtZT0nYnV0dG9uJyBvbkNsaWNrPXtlID0+IHt2YWxpZGF0ZUVtYWlsKGUpfX0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYnV0dG9uLXRleHQnPntidXR0b25UZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPC9mb3JtPiAqL31cbiAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgXG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFib3V0IiwidmFsdWUiLCJzZXRWYWx1ZSIsInZhbGlkRW1haWwiLCJzZXRWYWxpZEVtYWlsIiwiYnV0dG9uVHlwZSIsInNldEJ1dHRvblR5cGUiLCJidXR0b25UZXh0Iiwic2V0QnV0dG9uVGV4dCIsInZhbGlkYXRlRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW1nIiwic3JjIiwiYWx0IiwicCIsImJyIiwic3BhbiIsImlmcmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwiZnJhbWVCb3JkZXIiLCJzY3JvbGxpbmciLCJhbGxvd0Z1bGxTY3JlZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtYXhXaWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/about/index.js"));
module.exports = __webpack_exports__;

})();