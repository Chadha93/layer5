(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[1809],{67228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},23646:function(e,t,n){var r=n(67228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},69100:function(e,t,n){var r=n(99489),o=n(4043);function a(t,n,c){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},59713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},4043:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},46860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(23646),o=n(46860),a=n(60379),c=n(98206);e.exports=function(e){return r(e)||o(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},60379:function(e,t,n){var r=n(67228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},46725:function(e,t,n){var r=n(93395);e.exports={MDXRenderer:r}},93395:function(e,t,n){var r=n(69100),o=n(319),a=n(59713),c=n(37316);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n(67294),u=n(64983).mdx,p=n(89480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=c(e,["scope","children"]),l=p(t),f=s.useMemo((function(){if(!n)return null;var e=i({React:s,mdx:u},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return s.createElement(f,i({},a))}},70277:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(67294),o=n(70456),a=n(20092),c=n(36179),l=n(97264),i=n(46725),s=n(51500),u=n(57067),p=n(11521),f=n(25444),m=o.ZP.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"sc-1vys66-0"})(['\n\n    .chapter-back {\n        a {\n            display: inline-flex;\n            svg {\n                align-self: center;\n                font-size: 1.5rem;\n                color: rgb(177, 182, 184);\n                width: 100%;\n                max-width: 1.5rem;\n            }\n            h4 {\n                font-weight: 500;\n                text-transform: capitalize;\n                font-size: 1.25rem;\n            }\n            &:hover {\n                svg, h4 {\n                    color: #3C494F;\n                }\n            }\n        }\n        margin-bottom: -1rem;\n    }\n\n    .toc-list {\n        ul {\n            position: relative;\n            padding-inline-start: 2.75rem;\n            &::after {\n                position: absolute;\n                inset: 2rem auto 1rem 26px;\n                width: auto;\n                height: auto;\n                border-left: 1px solid rgba(177, 182, 184, 0.25);\n                content: "";\n                z-index: 0;\n            }\n            li {\n                line-height: 3rem;\n                width: fit-content;\n\n                &::marker {\n                    color: rgba(177, 182, 184, 0.75);\n                }\n                p {\n                    margin: 0;\n                    font-size: 1rem;\n\n                    a {\n                        color: rgba(0, 0, 0, 0.65);\n                    }\n                }\n                &:hover {\n                    &::marker, p, a {\n                        color: ',";\n                    }\n                }\n\n            }\n            .active-link {\n                &::marker, p, a {\n                    color: ",";\n                }\n            }\n        }\n    }\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor})),d=function(e){var t=e.courseData,n=e.chapterData,o=e.location,a=function(e){if(void 0!==e&&void 0!==e.href){var t=e.href.split("/");return t[t.length-2]}};return r.createElement(m,null,r.createElement("div",{className:"chapter-back"},r.createElement(f.Link,{to:"/learn-ng"+t.fields.slug},r.createElement(p.PSe,null),r.createElement("h4",null,t.frontmatter.courseTitle))),r.createElement("div",{className:"toc-list"},r.createElement("ul",null,t.frontmatter.toc.map((function(e){return r.createElement("li",{key:e,className:e===a(o)?"active-link":""},r.createElement("p",{className:"toc-item"},r.createElement("a",{href:"/learn-ng/"+n.fields.learnpath+"/"+n.fields.course+"/istio/"+e+"/"},(t=e.split("-").join(" "),""+t.charAt(0).toUpperCase()+t.slice(1)))));var t})))))},h=o.ZP.div.withConfig({displayName:"chaptersstyle__ChapterWrapper",componentId:"mw2rek-0"})(["\n\n    margin: 5rem auto;\n\n    .chapter-container {\n        @media (min-width: 576px) {\n            max-width: 100%;\n        }\n        // @media (min-width: 768px) {\n        //     max-width: 720px;\n        // }\n        // @media (min-width: 992px) {\n        //     max-width: 960px;\n        }\n        @media (min-width: 1200px) {\n            max-width: 1270px; \n        }\n    }\n    .chapter-data {\n        .chapter-heading {\n            margin-bottom: 1.5rem;\n        }\n    }\n"]),x=function(e){var t=e.chapterData,n=e.courseData,o=e.location,a=t.frontmatter,c=t.body;return r.createElement(h,null,r.createElement(u.W2,{className:"chapter-container"},r.createElement(u.X2,null,r.createElement(u.JX,{sm:12,md:3},r.createElement(d,{courseData:n,chapterData:t,location:o})),r.createElement(u.JX,{sm:12,md:9},r.createElement("div",{className:"chapter-data"},r.createElement("h1",{className:"chapter-heading"},a.chapterTitle),r.createElement(s.Iv,null,r.createElement(i.MDXRenderer,null,c)))))))},y=n(2685),v=n(97956),b=n(38155),g=function(e){var t=e.data,n=e.location;return r.createElement(o.f6,{theme:b.Z},r.createElement(a.Z,null,r.createElement(v.Z,null),r.createElement(c.Z,{title:t.chapter.frontmatter.chapterTitle}),r.createElement(l.Z,null),r.createElement(x,{chapterData:t.chapter,courseData:t.course.nodes[0],location:n}),r.createElement(y.Z,null)))}}}]);
//# sourceMappingURL=component---src-templates-learn-chapter-js-a44d017a815f9fcb018c.js.map