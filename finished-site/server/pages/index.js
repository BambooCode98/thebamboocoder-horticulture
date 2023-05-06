"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(8076);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(558);
// EXTERNAL MODULE: ./components/Post.js
var Post = __webpack_require__(3517);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/HomePage.js



function HomePage({ posts  }) {
    const [articleNumber, setArticleNumber] = (0,external_react_.useState)("");
    let recentPosts = [];
    posts.forEach((post)=>{
        recentPosts.push(post);
    });
    if (recentPosts.length > 5) {
        recentPosts.shift();
        recentPosts.reverse();
    }
    function moveRight() {
        scrollTo(450, 0);
    }
    // console.log(posts);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "home-hero-img",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "home-title",
                        children: "Have a problem growing plants?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "home-title3",
                        children: "Need guidance starting a garden and making it productive?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "home-title4",
                        children: "Need help growing bamboo?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "home-title5",
                        children: "If so, you've come to the right place."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                        className: "home-title2",
                        children: [
                            "The Bamboo Coder aims to solve your problems related to growing plants with blog posts covering numerous topics.",
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/blog",
                                className: "homepage-link1",
                                children: " Click here to view the blog."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "home-middle-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "home-intro",
                        children: "Featured Posts"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "home-i-container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "test1 scrollcontainer scrollcontainer--horizontal",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "home-p scrollcontainer scrollcontainer--horizontal",
                                children: recentPosts.map((post, index)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "home-post-card",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                            href: `/blog/post/${post.slug}`,
                                            className: "post-link",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: post.frontmatter.image,
                                                    alt: post.slug,
                                                    className: "home-card-thumb"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "home-card-info",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                            className: "home-card-title",
                                                            children: post.frontmatter.title
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                            className: "card-date",
                                                            children: [
                                                                "Posted on ",
                                                                post.frontmatter.date
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "excerpt",
                                                            children: post.frontmatter.excerpt
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, index);
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "home-subscribe",
                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                    width: "540",
                    height: "550",
                    src: "https://e88cc980.sibforms.com/serve/MUIEAMTQUjU11MuzKZvYwrE4aB67gNYiQJ8mN_nvsSM0T6ViimoEY9r14-FAusL7JZ4KdAK-HbO1el1LQZqCferautMigj3E3a-drXXUw5n-LuuDTP3ruz0Q1elFt4A8CBIntcIXB7P9w2cJGkQwwIt89IhiDJCaA5WrquYP956hvapa6PmHXb3oPC1hwQQ__eUPrfhAi8OXbVb7",
                    frameBorder: "0",
                    scrolling: "auto",
                    allowFullScreen: true,
                    style: {
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: "100%"
                    },
                    className: "iframeStyles"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.js









function Home({ posts  }) {
    // console.log(posts);
    // posts.forEach(post => {
    //   for(let i=0; i<post.frontmatter.tags.length;i++) {
    //     console.log(post.frontmatter.tags[i],'b');
    //   }
    // })
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "The Bamboo Coder"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Find help here with solving a problem growing plants, or starting a garden."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HomePage, {
                posts: posts
            })
        ]
    });
}
async function getStaticProps() {
    //get files from posts folder
    const files = external_fs_default().readdirSync(external_path_default().join("posts"));
    //get slug and front matter from posts
    const posts = files.map((file)=>{
        //create slug first
        const slug = file.replace(".md", "");
        //get front matter
        const frontMatter = external_fs_default().readFileSync(external_path_default().join("posts", file), "utf-8");
        const { data: frontmatter  } = external_gray_matter_default()(frontMatter);
        return {
            slug,
            frontmatter
        };
    });
    return {
        props: {
            posts: posts.sort(utils/* sortByDate */.d)
        }
    };
}


/***/ }),

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ sortByDate)
/* harmony export */ });
const sortByDate = (a, b)=>{
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
};


/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,517], () => (__webpack_exec__(8474)));
module.exports = __webpack_exports__;

})();