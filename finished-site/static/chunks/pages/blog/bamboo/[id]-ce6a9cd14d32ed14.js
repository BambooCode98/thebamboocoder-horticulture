(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[798],{8203:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/bamboo/[id]",function(){return n(2595)}])},7510:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(5893),s=n(1664),c=n.n(s),a=n(7294),i=n(3517),o=n(1163);function l(t){let{posts:e,pages:n}=t,s=(0,o.useRouter)(),[l,u]=(0,a.useState)(1),[d,f]=(0,a.useState)(5),m=e.slice((l-1)*5,d);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"post-container",children:m.map((t,e)=>(0,r.jsx)(i.Z,{post:t,pages:n},e))}),(0,r.jsx)("div",{className:"pagination-container",children:n.map((t,e)=>(0,r.jsx)(c(),{href:"".concat(t),onClick:()=>{u(t),f(5*t)},children:s.query.id==t?(0,r.jsx)("li",{className:"page-link",children:t}):(0,r.jsx)("li",{className:"not-current-link",children:t})},e))})]})}},3517:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=n(5893),s=n(1664),c=n.n(s),a=n(1163);function i(t){let{post:e,pages:n,category:s}=t,i=(0,a.useRouter)();return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"post-card",children:(0,r.jsxs)(c(),{href:"/blog/".concat(e.frontmatter.category,"/").concat(i.query.id,"/").concat(e.slug),className:"post-link",children:[(0,r.jsx)("img",{src:e.frontmatter.image,alt:e.slug,className:"card-thumb"}),(0,r.jsxs)("div",{className:"card-info",children:[(0,r.jsx)("h2",{className:"card-title",children:e.frontmatter.title}),(0,r.jsx)("hr",{}),(0,r.jsxs)("p",{className:"card-date",children:["Posted on ",e.frontmatter.date]}),(0,r.jsx)("p",{className:"excerpt",children:e.frontmatter.excerpt})]})]})})})}n(7294)},2595:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return i},default:function(){return o}});var r=n(5893);n(7294),n(3517);var s=n(9008),c=n.n(s),a=n(7510),i=!0;function o(t){let{posts:e,pages:n}=t,s=e.filter(t=>"bamboo"===t.frontmatter.category||"all"===t.frontmatter.category);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)(c(),{children:(0,r.jsx)("title",{children:"Bamboo Blog Posts"})}),(0,r.jsx)("h1",{className:"blog-title",children:"Bamboo Articles"}),(0,r.jsx)(a.Z,{posts:s,pages:n})]})})}},9008:function(t,e,n){t.exports=n(3121)},1163:function(t,e,n){t.exports=n(880)}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8203)}),_N_E=t.O()}]);