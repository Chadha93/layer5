(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[532],{93982:function(e,t,n){var r=n(15301).w_;e.exports.h=function(e){return r({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"}}]})(e)}},999:function(e,t,n){var r=n(15301).w_;e.exports.t=function(e){return r({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(e)}},25760:function(e,t,n){var r=n(15301).w_;e.exports.l=function(e){return r({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}},39095:function(e,t,n){var r=n(15301).w_;e.exports.V=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"}},{tag:"path",attr:{d:"M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"}},{tag:"path",attr:{d:"M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"}}]})(e)}},21455:function(e,t,n){"use strict";var r=n(78072),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,l,c,s,u=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),l=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),s&&document.body.removeChild(s),i()}return u}},50191:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=l(n(67294)),a=l(n(21455)),i=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=f(e);if(t){var a=f(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,n)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,e);var t,n,r,l=m(c);function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return g(h(e=l.call.apply(l,[this].concat(n))),"onClick",(function(t){var n=e.props,r=n.text,i=n.onCopy,l=n.children,c=n.options,s=o.default.Children.only(l),u=(0,a.default)(r,c);i&&i(r,u),s&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(t)})),e}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,i),r=o.default.Children.only(t);return o.default.cloneElement(r,s(s({},n),{},{onClick:this.onClick}))}}])&&d(t.prototype,n),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.default.PureComponent);t.CopyToClipboard=y,g(y,"defaultProps",{onCopy:void 0,options:void 0})},38552:function(e,t,n){"use strict";var r=n(50191).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},78072:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},11777:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(67294),o=n(71082),a=n(80285),i=n(89725);var l=n(85313).default.div.withConfig({displayName:"relatedPostsstyle__RelatedPostsWrapper",componentId:"sc-4o1l69-0"})(["\n    Button:hover{\n        box-shadow: none;\n    }\n    .widgets-title{\n        margin: 1rem 0 2rem 0.5rem;\n        h3{\n            font-size: 1.5rem;\n        }\n    }\n    @media screen and (max-width:500px){\n        .widgets-title{\n            h3{\n                text-align: center;\n            }\n        }\n    }\n\n    .cardCol{\n        padding: 0 1rem;\n    }\n    @media screen and (max-width: 992px) {\n        .cardCol{\n            padding: 0 1rem;\n            margin: auto;\n        }\n    }\n\n    .slick-list{\n        padding-top: 2px;\n        text-align: center;\n    }\n    @media screen and (max-width: 992px) {\n        .slick-list{\n            margin: 0;\t\n        }\n    }\n\n    .slick-arrow{\n        width: 4.8rem;\t\n        height: 5rem;\n    }\t\n    .slick-arrow:before{\t\n        color: ",";\n        font-size: 6rem;\n        display: inline-block;\n        height: 3rem;\n    }\n    .slick-arrow:hover:before{\t\n        color: ",';\n    }\n    .slick-prev:before{\t\n        content: "‹";\t\n        line-height: 0;\n        opacity: 1;\n        color: ',';\n        margin-left: -3rem;\n    }\n    .slick-next:before{\t\n        content: "›";\n        line-height: 0;\n        opacity: 1;\n        margin-left: 2rem;\n        color: ',';\n    }\n    .slick-disabled{\t\n        visibility: hidden;\n    }\n    .slick-dots li:before{\n        content: "";\n    }\n    .slick-dots li button:before {\n        font-size: 0.6rem;\n        color: ',";\n    }\n    .slick-dots li.slick-active button:before {\n        opacity: 1;\n        color: ",";\n    }\n\n    .post-meta-block{\n        text-align: left;\n    }\n\n    .post-content-block{\n        height: 10rem;\n\n        .post-title {\n            text-align: left;\n        }\n    }\n\n    .allBlogs{\n        height: 22rem;\n    }\n\n    @media screen and (min-width: 1200px) {\n        .post-content-block {\n            height: 8rem;\n        }\n\n        .allBlogs{\n            height: 19.5rem;\n        }\n    }\n\n    @media screen and (max-width: 720px) and (min-width: 385px){\n        .post-content-block{\n            height: 8rem;\n        }\n\n        .allBlogs{\n            height: 19.5rem;\n        }\n    }\n\n    .allBlogs_card{\n        display: inline-block;\n        height: inherit;\n        width: inherit;\n        border-radius: 0.5rem;\n        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.2);\n        transition: box-shadow 0.3s;\n\n        h2{\n            padding: 0.5rem 0;\n        }\n\n        a{\n            height: inherit;\n            width: inherit;\n            font-size: 1.8rem;\n            font-weight: 600;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            svg{\n                margin-left: 0px;\n                padding: 0.5rem 0 0.3rem;\n                font-size: 4rem;\n                transition: all 0.3s;\n            }\n        }\n        &:hover{\n            box-shadow: 0px 2px 15px 4px rgba(0,0,0,0.2);\n            h2{\n                color: ",";\n            }\n            svg{\n                color: ",";\n                margin-left: 3px;\n                transform: scale(1.3);\n            }\n        }\n    }\n"],(e=>e.theme.primaryColor),(e=>e.theme.secondaryColor),(e=>e.theme.primaryColor),(e=>e.theme.primaryColor),(e=>e.theme.secondaryColor),(e=>e.theme.secondaryColor),(e=>e.theme.secondaryColor),(e=>e.theme.secondaryColor)),c=n(37242),s=n(48538),u=n(39953);var d=e=>{const{postType:t,relatedPosts:n,mainHead:d,lastCardHead:p,linkToAllItems:m}=e,h=(0,u.Z)();return r.createElement(l,null,r.createElement("div",{className:"widgets-title"},r.createElement("h3",null,d)),h&&r.createElement(s.Z,{dots:window.innerWidth<992,arrows:window.innerWidth>=992,infinite:!1,speed:"500",slidesToShow:window.innerWidth<=720?1:window.innerWidth<=991?2:3,slidesToScroll:1},"blogs"===t?n.map((e=>{let{post:t}=e;return r.createElement(c.JX,{className:"cardCol",xs:12,key:t.fields.slug},r.createElement(i.Z,{frontmatter:t.frontmatter,fields:t.fields}))})):n.map((e=>r.createElement(c.JX,{className:"cardCol",xs:12,key:e.fields.slug},r.createElement(i.Z,{frontmatter:e.frontmatter,fields:e.fields})))),r.createElement(c.JX,{xs:12,lg:12,className:"allBlogs"},r.createElement("div",{className:"allBlogs_card"},r.createElement(o.Link,{to:m},r.createElement("h2",null,p),r.createElement(a.f,null))))))}},47531:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return ne},default:function(){return te}});var r=n(67294),o=n(17875),a=n(71082),i=n(98940),l=n(51500),c=n(51174),s=n.n(c),u=n(37242),d=n(33754),p=n(11777),m=n(85313);var h=m.default.div.withConfig({displayName:"blogSinglestyle__BlogPageWrapper",componentId:"sc-qnxlza-0"})(["\n    div{\n        color: ",'; \n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n    ul {\n    list-style: none; /* Remove default bullets */\n     }\n    .single-post-wrapper{\n        margin-bottom: 4rem;\n    }\n\n    ul li::before {\n        content: "•";  \n        color: ',"; \n        font-weight: bold;\n        display: inline-block; \n        width: 1em; \n        margin-left: -1em; \n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n\n    p{\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n    li{\n        color: ",";\n        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n    }\n    .post-info-block{\n        margin-top: 3rem;\n        border-bottom: 1px solid #e5e5e5;\n        padding-bottom: 2rem;\n    }\n    .post-tag-container {\n        display: block;\n\n        .post-share-mobile {\n            display: none;\n        }\n        .share-icons-container {\n            display: none;\n        }\n\n    }\n\n\n    .tags{\n        display: flex;\n        span{\n            font-size: 1.2rem;\n            align-self: center;\n        }\n        a{\n            color: ",";\n            margin: 0.2rem;\n            display: inline-block;\n            padding: 0.3rem 0.8rem;\n            border-radius: 0.2rem;\n            background: ",";\n            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n            &:hover{\n                background: ",";\n                color: ",";\n            }\n        }\n        div{\n            display: inline-flex;\n            flex-wrap: wrap;\n        }\n    }\n\n    @media (max-width: 770px) { \n        .post-tag-container {\n            position: relative;\n            justify-content: space-between;\n            align-items: center;\n\n            .post-share-mobile {\n                display: block;\n                \n                position: relative;\n                width: 95%;\n            }\n            .share-icons-container {\n                display: flex;\n                margin: auto 0;\n                justify-content: space-evenly;\n                padding: 0.5rem;\n                font-size: 1.5rem;\n            }\n            .link-copied-container {\n                display: inline-block;\n                background: #1E2117;\n                border-radius: 0.25rem;\n                color: #fff;\n                padding: 0.5rem;\n                font-size: 1rem;\n                position: absolute;\n                right: 0;\n            }\n        }\n    }\n\n\n    @media screen and (max-width: 360px){\n        .tags{\n            span{\n                position: relative;\n                top: 0.5rem;\n                align-self: flex-start;\n            }\n        }\n        .author-info-section{\n            width: 90%;\n            margin: 0 auto;\n             .authors-info-container{\n                .authors-head-shot{\n                    width: 40%;\n                    height: 40%;\n                }\n             }\n         }\n    }\n\n   \n"],(e=>e.theme.text),(e=>e.theme.text),(e=>e.theme.text),(e=>e.theme.text),(e=>e.theme.text),(e=>e.theme.grey212121ToGreyF0F0F0),(e=>e.theme.secondaryColor),(e=>e.theme.textRevert)),f=n(3706);var g=m.default.div.withConfig({displayName:"blogpost-signoffstyles__BlogPostSignOffWrapper",componentId:"sc-nkce4l-0"})(["\n    display:flex;\n    padding:1rem 0rem;\n    .sign-off\n    {\n        padding:0rem 0.2rem;\n        font-style:italic;\n\n        img {\n            width: 5.5rem;\n            transform: skewX(-15deg);\n        }\n    }\n    \n"]);var y=e=>{let{author:t}=e,n=!1;if(t){n=(0,a.useStaticQuery)("112401468").allMdx.nodes.some((e=>e.frontmatter.name==t.name))}return r.createElement(g,null,"- ","Layer5 Team"===t.name?r.createElement("p",{className:"sign-off"},r.createElement("img",{src:f.Z,alt:"Layer5"})," Team"):r.createElement("p",{className:"sign-off"},((e,t)=>r.createElement(r.Fragment,null,t?r.createElement(a.Link,{to:"/community/members/"+s()(e.name)},r.createElement("span",null,e.name)):r.createElement("span",null,e.name)))(t,n)))},b=n(75472),w=n.n(b),v=n(64721),x=n.n(v);var E,k=class{constructor(e,t){this.posts=e.filter((e=>e.fields.slug!==t)),this.currentPostSlug=t,this.maxPosts=6,this.category=null,this.tags=[]}setMaxPosts(e){return this.maxPosts=e,this}setCategory(e){return this.category=e,this}setTags(e){return this.tags=e,this}getPosts(){const{category:e,tags:t,posts:n,maxPosts:r}=this,o={};if(!1==!!t||0===t.length)return console.error("RelatedPostsFactory: Tags not provided, use setTags()."),[];if(!1==!!e)return console.error("RelatedPostsFactory: Category not provided, use setCategory()."),[];const a=e=>e.fields.slug,i=e=>{const t=a(e);Object.prototype.hasOwnProperty.call(o,t)||(o[t]={post:e,points:0})},l=(e,t)=>{const n=a(e);e.frontmatter.category===t&&(o[n].points+=2)},c=(e,t)=>{const n=a(e);e.frontmatter.tags.forEach((e=>{x()(t,e)&&(o[n].points+=1)}))};for(let u of n)i(u),l(u,e),c(u,t);const s=Object.keys(o).map((e=>o[e]));return w()(s,["points"],["desc"]).splice(0,r)}},C=(E=function(e,t){return E=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},E(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}E(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return C(t,e),t}(Error);function P(e,t){if(!e)throw new O(t)}function j(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(n)))}));return t.length>0?"?".concat(t.join("&")):""}var S=n(75900),_=n.n(S),T=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),N=function(){return N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},N.apply(this,arguments)},D=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(t){a(t)}}function l(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))},z=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(l){a=[6,l],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},B=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};var R=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n,r,o=t.props,a=o.onShareWindowClose,i=o.windowHeight,l=void 0===i?400:i,c=o.windowPosition,s=void 0===c?"windowCenter":c,u=o.windowWidth,d=void 0===u?550:u;!function(e,t,n){var r=t.height,o=t.width,a=B(t,["height","width"]),i=N({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),l=window.open(e,"",Object.keys(i).map((function(e){return"".concat(e,"=").concat(i[e])})).join(", "));if(n)var c=window.setInterval((function(){try{(null===l||l.closed)&&(window.clearInterval(c),n(l))}catch(e){console.error(e)}}),1e3)}(e,N({height:l,width:d},"windowCenter"===s?(n=d,r=l,{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-n/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-r/2}):function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}}(d,l)),a)},t.handleClick=function(e){return D(t,void 0,void 0,(function(){var t,n,r,o,a,i,l,c,s,u;return z(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,l=t.openShareDialogOnClick,c=t.opts,s=o(i,c),r?[2]:(e.preventDefault(),n?(u=n(),!(p=u)||"object"!=typeof p&&"function"!=typeof p||"function"!=typeof p.then?[3,2]:[4,u]):[3,2]);case 1:d.sent(),d.label=2;case 2:return l&&this.openShareDialog(s),a&&a(e,s),[2]}var p}))}))},t}return T(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,o=e.disabled,a=e.disabledStyle,i=e.forwardedRef,l=(e.networkLink,e.networkName),c=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,B(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=_()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},n),p=N(N(c?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),o&&a);return r.createElement("button",N({},u,{"aria-label":u["aria-label"]||l,className:d,onClick:this.handleClick,ref:i,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),A=R,H=function(){return H=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},H.apply(this,arguments)};var M=function(e,t,n,o){function a(a,i){var l=n(a),c=H({},a);return Object.keys(l).forEach((function(e){delete c[e]})),r.createElement(A,H({},o,c,{forwardedRef:i,networkName:e,networkLink:t,opts:n(a)}))}return a.displayName="ShareButton-".concat(e),(0,r.forwardRef)(a)};var I=M("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,l=void 0===i?[]:i;return P(e,"twitter.url"),P(Array.isArray(a),"twitter.hashtags is not an array"),P(Array.isArray(l),"twitter.related is not an array"),"https://twitter.com/share"+j({url:e,text:n,via:r,hashtags:a.length>0?a.join(","):void 0,related:l.length>0?l.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400});var L=M("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return P(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+j({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400});var W=M("linkedin",(function(e,t){var n=t.title,r=t.summary,o=t.source;return P(e,"linkedin.url"),"https://linkedin.com/shareArticle"+j({url:e,mini:"true",title:n,summary:r,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),V=n(38552),F=n(93982),Z=n(999),U=n(25760),q=n(39095),X=n(29499),G=n(59434),Q=n(25679),J=n(63689);var K=m.default.div.withConfig({displayName:"authorstyle__AboutTheAuthorWrapper",componentId:"sc-1hf0h6p-0"})(["\n\n.author-info-section{\n    float: right;\n    width: 25%;\n    margin: 3rem 0 3rem 1rem;\n    .authors-info-container{\n        padding: 1.8rem;\n        background: rgba(201,252,246,.3);\n        text-align: center;\n        margin-bottom: 3rem;\n        h3{\n            font-size: 1.5rem;\n        }\n        .authors-head-shot{\n            width: 150px;\n            height: 150px;\n            margin: 1.3rem auto;\n            border: 5px solid #00D3A9;\n            border-radius: 50%;\n            overflow: hidden;\n            a{\n                img{\n                    clip-path: circle(50% at 50% 50%);\n                }\n            }\n            \n        }\n         .gatsby-image-wrapper, .old-gatsby-image-wrapper {\n            display: block;\n            margin: auto;\n            border-radius: 100%;\n            overflow: hidden;\n            width: 140px;\n            height: 140px;\n            box-shadow: 0 1px 0 rgba(0,0,0,.1);\n        }\n        h4{\n            font-weight: 500;\n            font-size: 1.25rem;\n            border-bottom: 1px solid ",";\n            padding-bottom: .5rem;\n            width: 80%;\n            margin: 0 auto;\n            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n        }\n        p{\n            font-size: 1rem;\n            line-height: 1.375rem;\n            margin: 1.5rem 0;\n            color: ","; \n            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); \n        }\n        .authors-info-meshery{\n            border-top: 1px solid ",";\n            border-bottom: 1px solid ",";\n            padding: 1.5rem 0;\n            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\n            h4{\n                font-weight: 500;\n                font-size: 1.25rem;\n                line-height: 2rem;\n                color: ","; \n                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); \n            }\n            p{\n                font-size: 1rem;\n                line-height: 1.375rem;\n                color: ","; \n                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); \n            }\n            .cta-btn{\n                    min-width: 100%;\n            }\n        }\n        .share-section{\n            padding: 1.5rem 0;\n            \n            h3{\n                font-size: 1.5rem;\n                color: ",";  \n                border-bottom: none;\n                margin-bottom: .5rem;\n                transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n            }\n            .share-icons-container{\n                width: 60%;\n                margin: 0 auto;\n                display: flex;\n                justify-content: space-between;\n\n                .icon{\n                    box-shadow: none;\n                }\n            }\n        }\n    }\n}\n\n\n @media (max-width: 975px) { \n     .author-info-section{\n       width: 30%;\n     }\n }\n @media (max-width: 770px) { \n     .author-info-section{\n       display: none;\n     }\n }\n\n @media screen and (max-width: 360px){\n    .author-info-section{\n        width: 90%;\n        margin: 0 auto;\n         .authors-info-container{\n            .authors-head-shot{\n                width: 40%;\n                height: 40%;\n            }\n         }\n     }\n}\n"],(e=>e.theme.greyFiveToBlueFive),(e=>e.theme.greyB1B6B8ToBlue477E96),(e=>e.theme.greyFiveToBlueFive),(e=>e.theme.greyFiveToBlueFive),(e=>e.theme.greyD3D7DBToGreen1E2117),(e=>e.theme.greyB1B6B8ToBlue477E96),(e=>e.theme.greyD3D7DBToGreen1E2117));var Y=e=>{var t,n,o,i;const{authorInformation:l,shareQuote:c}=e,s=(0,X.useLocation)();return r.createElement(K,null,l&&r.createElement("div",{className:"author-info-section"},r.createElement("div",{className:"authors-info-container"},r.createElement("h3",null,"About the Author"),r.createElement("div",{className:"authors-head-shot"},r.createElement(a.Link,{to:"/community/members/"+l.slug},r.createElement(Q.Z,Object.assign({},null==l||null===(t=l.frontmatter)||void 0===t?void 0:t.image_path,{imgStyle:{objectFit:"cover"},alt:null===(n=l.frontmatter)||void 0===n?void 0:n.name,className:"authors-image"})))),r.createElement("h4",null,null===(o=l.frontmatter)||void 0===o?void 0:o.name),r.createElement("p",null,null===(i=l.frontmatter)||void 0===i?void 0:i.bio),r.createElement("div",{className:"authors-info-meshery"},r.createElement("h4",null,"MeshMap"),r.createElement("p",null,"MeshMap is the world's only visual and collaborative designer for Kubernetes and all cloud native infrastructure."),r.createElement(J.default,{secondary:!0,url:"/meshmap",title:"Get Started",className:"cta-btn"})),r.createElement("div",{className:"share-section"},r.createElement("h3",null,"Share"),r.createElement("div",{className:"share-icons-container"},r.createElement(I,{url:s.href,title:c,className:"icon"},r.createElement(F.h,null)),r.createElement(L,{url:s.href,quote:c,className:"icon"},r.createElement(Z.t,null)),r.createElement(W,{url:s.href,className:"icon"},r.createElement(U.l,null)))))))},$=n(89192);var ee=e=>{let{data:t}=e;const n=(0,X.useLocation)(),{frontmatter:o,body:c,fields:m}=t.mdx,{relatedPosts:f,authors:g}=(0,a.useStaticQuery)("3764683943"),b=f.nodes,w=new k(b,m.slug).setMaxPosts(6).setCategory(o.category).setTags(o.tags).getPosts(),{0:v,1:x}=(0,r.useState)(!1),{isDark:E}=(0,$.I)();(0,r.useEffect)((()=>{v&&setTimeout((()=>{x(!1)}),3e3)}),[v]);const C=g.nodes.filter((e=>e.frontmatter.name===o.author))[0],O='Check out this post from layer5 "'+o.title+'"';return r.createElement(h,null,r.createElement(u.W2,null,r.createElement(Y,{authorInformation:C,shareQuote:O}),r.createElement("div",null,r.createElement(d.Z,{title:o.title,subtitle:o.subtitle,category:o.category,author:{name:o.author},thumbnail:E&&o.darkthumbnail.publicURL!==o.thumbnail.publicURL?o.darkthumbnail:o.thumbnail,darkthumbnail:o.thumbnail,date:o.date}),r.createElement("div",{className:"single-post-wrapper"},r.createElement(l.Iv,null,r.createElement(i.MDXRenderer,null,c)),r.createElement(y,{author:{name:o.author}}),r.createElement("div",{className:"post-tag-container"},r.createElement("div",{className:"post-share-mobile"},r.createElement("div",{className:"share-icons-container"},r.createElement("h4",null,"Share Post:"),r.createElement(I,{url:n.href,title:O},r.createElement(F.h,null)),r.createElement(L,{url:n.href,quote:O},r.createElement(Z.t,null)),r.createElement(W,{url:n.href},r.createElement(U.l,null)),r.createElement(V.CopyToClipboard,{text:n.href,title:"Copy link",onCopy:()=>x(!0)},r.createElement(q.V,null))),v?r.createElement("p",{className:"link-copied-container"},"Copied"):""),r.createElement("div",{className:"post-info-block"},r.createElement("div",{className:"tags"},r.createElement("span",null,"Tags:"),r.createElement("div",null,o.tags&&o.tags.map((e=>r.createElement(a.Link,{key:o.title+"-"+e,to:"/blog/tag/"+s()(e)},e))))),r.createElement(G.Z,{category:"MeshMap"}))),r.createElement(p.Z,{postType:"blogs",relatedPosts:w,mainHead:"Related Blogs",lastCardHead:"All Blogs",linkToAllItems:"/blog"})))))};var te=e=>{let{data:t}=e;return r.createElement(r.Fragment,null,r.createElement(l.ZP,null,r.createElement(ee,{data:t})))};const ne=e=>{let{data:t}=e;return r.createElement(o.Z,{title:t.mdx.frontmatter.title,image:t.mdx.frontmatter.thumbnail.publicURL})}}}]);
//# sourceMappingURL=component---src-templates-blog-single-js-004753bd492388145af7.js.map