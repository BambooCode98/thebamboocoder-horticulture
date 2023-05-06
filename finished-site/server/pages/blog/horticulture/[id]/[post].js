"use strict";
(() => {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 4145:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostsPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3135);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4321);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6809);
/* harmony import */ var github_slugger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1578);
/* harmony import */ var rehype_slug_custom_id__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1781);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_5__, remark_gfm__WEBPACK_IMPORTED_MODULE_11__, github_slugger__WEBPACK_IMPORTED_MODULE_12__, rehype_slug_custom_id__WEBPACK_IMPORTED_MODULE_13__]);
([react_markdown__WEBPACK_IMPORTED_MODULE_5__, remark_gfm__WEBPACK_IMPORTED_MODULE_11__, github_slugger__WEBPACK_IMPORTED_MODULE_12__, rehype_slug_custom_id__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














let maxArticlesPerPage = 5;
let addOne = 1;
let pages = [
    1
];
let pageNumber = 1;
function PostsPage({ frontMatter , content , post  }) {
    // frontMatter.tags.forEach(tag => {
    // console.log(router.query.id);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        frontMatter.title,
                        " - The Bamboo Coder"
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                className: "post-block",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "post-title",
                        children: frontMatter.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "about-postInfo",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "post-date",
                            children: [
                                "Posted on ",
                                frontMatter.date,
                                " / Written By ",
                                frontMatter.author,
                                " / Tags: ",
                                frontMatter.tags.map((tag, index)=>{
                                    // console.log(tag);
                                    if (index === frontMatter.tags.length - 1) {
                                        // console.log(index, frontMatter.tags.length+1);
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: tag
                                        });
                                    } else {
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                tag,
                                                ","
                                            ]
                                        });
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: frontMatter.image,
                        alt: "post Image",
                        width: "300",
                        height: "250",
                        className: "post-thumbnail"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        className: "markdown-body",
                        remarkPlugins: [
                            remark_gfm__WEBPACK_IMPORTED_MODULE_11__["default"]
                        ],
                        rehypePlugins: [
                            rehype_slug_custom_id__WEBPACK_IMPORTED_MODULE_13__["default"]
                        ],
                        children: content
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Comments__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                post: post,
                frontMatter: frontMatter
            })
        ]
    });
}
async function getStaticPaths() {
    // console.log(params,'get static');
    const files = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("horticulture"));
    let filelength = files.length;
    // let maxArt = 5;
    function checkpageCount(max, fcount) {
        if (fcount > max) {
            maxArticlesPerPage += 5;
            addOne += 1;
            pages.push(addOne);
            checkpageCount(maxArticlesPerPage, filelength);
        } else if (fcount < max) {
            return;
        }
    }
    checkpageCount(maxArticlesPerPage, filelength);
    //not being used
    let urlnum = 0;
    function determineURL() {
        pages.forEach((page)=>{
            if (window.location.href === page) {
                urlnum = page;
                return urlnum;
            }
        });
    }
    // console.log(paggenum, 'pages here');
    const totalPaths = [];
    //each page(number) is a new array of pages, 2 so far, need to combine
    // const testpaths = pages.map(page => {
    //   const newFilePaths = files.map(filename => ({
    //     params: {
    //       id: `${page}`,
    //       post: `${filename.replace('.md','')}`
    //     }
    //   }))
    //   console.log(newFilePaths, 'newfilepaths hereeeeeee!!!!');
    //   totalPaths = concat(newFilePaths)
    // })
    pages.forEach((page)=>{
        totalPaths.push(files.map((filename)=>({
                params: {
                    id: `${page}`,
                    post: `${filename.replace(".md", "")}`
                }
            })));
    // console.log(newFilePaths, 'newfilepaths hereeeeeee!!!!');
    });
    // const paths = files.map(filename => ({
    //   params: {
    //     id: `${1}`,
    //     post: `${filename.replace('.md', '')}`
    //   }
    // }))
    // console.log(pages);
    const paths = totalPaths.flat();
    console.log(paths, "paths ends here555555", totalPaths.flat());
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params: { post  }  }) {
    // console.log(params.context);
    // console.log(post);
    const markdownContent = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("horticulture", post + ".md"), "utf-8");
    const { data: frontMatter , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(markdownContent);
    return {
        props: {
            frontMatter,
            content,
            post
        },
        revalidate: 10
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1527:
/***/ ((module) => {

module.exports = require("disqus-react");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 727:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 4794:
/***/ ((module) => {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1578:
/***/ ((module) => {

module.exports = import("github-slugger");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = import("react-markdown");;

/***/ }),

/***/ 1781:
/***/ ((module) => {

module.exports = import("rehype-slug-custom-id");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [321], () => (__webpack_exec__(4145)));
module.exports = __webpack_exports__;

})();