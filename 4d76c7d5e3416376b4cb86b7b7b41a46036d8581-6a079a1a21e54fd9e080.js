(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[6351],{14925:function(e,t,n){var r=n(15301).w_;e.exports.r=function(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"}},{tag:"path",attr:{d:"M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"}}]})(e)}},80449:function(e,t,n){var r=n(15301).w_;e.exports.U=function(e){return r({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}},935:function(e,t,n){var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,l="object"==typeof self&&self&&self.Object===Object&&self,s=u||l||Function("return this")(),f=Object.prototype.toString,m=Math.max,g=Math.min,d=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?c(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var r,i,o,a,c,u,l=0,s=!1,f=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function M(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,c=setTimeout(N,t),s?M(e):a}function b(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-l>=o}function N(){var e=d();if(b(e))return v(e);c=setTimeout(N,function(e){var n=t-(e-u);return f?g(n,o-(e-l)):n}(e))}function v(e){return c=void 0,y&&r?M(e):(r=i=void 0,a)}function L(){var e=d(),n=b(e);if(r=arguments,i=this,u=e,n){if(void 0===c)return j(u);if(f)return c=setTimeout(N,t),M(u)}return void 0===c&&(c=setTimeout(N,t)),a}return t=h(t)||0,p(n)&&(s=!!n.leading,o=(f="maxWait"in n)?m(h(n.maxWait)||0,t):o,y="trailing"in n?!!n.trailing:y),L.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=u=i=c=void 0},L.flush=function(){return void 0===c?a:v(d())},L}},12545:function(e,t,n){"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.DebounceInput=void 0;var i=c(n(67294)),o=c(n(935)),a=["element","onChange","value","minLength","debounceTimeout","forceNotifyByEnter","forceNotifyOnBlur","onKeyDown","onBlur","inputRef"];function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(l,e);var t,n,r,c=g(l);function l(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),y(p(t=c.call(this,e)),"onChange",(function(e){e.persist();var n=t.state.value,r=t.props.minLength;t.setState({value:e.target.value},(function(){var i=t.state.value;i.length>=r?t.notify(e):n.length>i.length&&t.notify(s(s({},e),{},{target:s(s({},e.target),{},{value:""})}))}))})),y(p(t),"onKeyDown",(function(e){"Enter"===e.key&&t.forceNotify(e);var n=t.props.onKeyDown;n&&(e.persist(),n(e))})),y(p(t),"onBlur",(function(e){t.forceNotify(e);var n=t.props.onBlur;n&&(e.persist(),n(e))})),y(p(t),"createNotifier",(function(e){if(e<0)t.notify=function(){return null};else if(0===e)t.notify=t.doNotify;else{var n=(0,o.default)((function(e){t.isDebouncing=!1,t.doNotify(e)}),e);t.notify=function(e){t.isDebouncing=!0,n(e)},t.flush=function(){return n.flush()},t.cancel=function(){t.isDebouncing=!1,n.cancel()}}})),y(p(t),"doNotify",(function(){var e=t.props.onChange;e.apply(void 0,arguments)})),y(p(t),"forceNotify",(function(e){var n=t.props.debounceTimeout;if(t.isDebouncing||!(n>0)){t.cancel&&t.cancel();var r=t.state.value,i=t.props.minLength;r.length>=i?t.doNotify(e):t.doNotify(s(s({},e),{},{target:s(s({},e.target),{},{value:r})}))}})),t.isDebouncing=!1,t.state={value:void 0===e.value||null===e.value?"":e.value};var n=t.props.debounceTimeout;return t.createNotifier(n),t}return t=l,(n=[{key:"componentDidUpdate",value:function(e){if(!this.isDebouncing){var t=this.props,n=t.value,r=t.debounceTimeout,i=e.debounceTimeout,o=e.value,a=this.state.value;void 0!==n&&o!==n&&a!==n&&this.setState({value:n}),r!==i&&this.createNotifier(r)}}},{key:"componentWillUnmount",value:function(){this.flush&&this.flush()}},{key:"render",value:function(){var e,t,n=this.props,r=n.element,o=(n.onChange,n.value,n.minLength,n.debounceTimeout,n.forceNotifyByEnter),c=n.forceNotifyOnBlur,l=n.onKeyDown,f=n.onBlur,m=n.inputRef,g=u(n,a),d=this.state.value;e=o?{onKeyDown:this.onKeyDown}:l?{onKeyDown:l}:{},t=c?{onBlur:this.onBlur}:f?{onBlur:f}:{};var p=m?{ref:m}:{};return i.default.createElement(r,s(s(s(s({},g),{},{onChange:this.onChange,value:d},e),t),p))}}])&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(i.default.PureComponent);t.DebounceInput=M,y(M,"defaultProps",{element:"input",type:"text",onKeyDown:void 0,onBlur:void 0,value:void 0,minLength:0,debounceTimeout:100,forceNotifyByEnter:!0,forceNotifyOnBlur:!0,inputRef:void 0})},86410:function(e,t,n){"use strict";var r=n(12545).DebounceInput;r.DebounceInput=r,e.exports=r},89725:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(67294),i=n(1597),o=n(80285),a=n(14925),c=n(25679),u=n(64423).default.div.withConfig({displayName:"Cardstyle__CardWrapper",componentId:"sc-1sunj6k-0"})(["\n    .post-block{\n        margin-bottom: 2rem;\n        border-radius: 0.5rem;\n        background-Color:",";\n        box-shadow: 0px 2px 6px 0px ",";\n        transition: all 0.3s ease-in;\n        &:hover{\n            box-shadow: 0px 2px 15px 4px ",";\n            .post-thumb-block{\n                .gatsby-image-wrapper, .old-gatsby-image-wrapper{\n                    transform: scale3d(1.1,1.1,1);\n                }\n            }\n            .readmore-btn{\n                color: ",";\n                svg{\n                    margin-left: 0.25rem;\n                    transform: scale(1.2);\n                }\n            }\n        } \n    }\n    .readmore-btn{\n        color: ",";\n\n    }\n    @media screen and (max-width:776px){\n\t\t.post-block{\n\t\t\twidth: auto;\n\t\t\tmargin: auto auto 2rem;\n\t\t}\n\t}\n\n    .post-thumb-block{\n        overflow: hidden;\n        height: 11.5rem;\n        border-top-right-radius: 0.5rem;\n        border-top-left-radius: 0.5rem;\n\n        .gatsby-image-wrapper, .old-gatsby-image-wrapper{\n            height:100%;\n            transition: all 0.3s ease-in;\n        }\n        img{\n            height: inherit;\n            max-height: 180px;\n            display: block;\n            text-align: center;\n            margin: auto;\n        }\n    }\n\n    .post-content-block{\n        padding: 1rem 2rem;\n        height: 8rem;\n    }\n\n    @media screen and (max-width: 1200px) and (min-width: 992px){\n        .post-thumb-block{\n            height: 12rem;\n            \n        }\n       \n        .post-content-block{\n            height: 10rem;\n        }\n           \n\n    }\n   \n\n    @media screen and (max-width: 670px) and (min-width: 560px){\n        .post-content-block{\n            height: 10rem;\n            \n        }\n    }\n\n    @media screen and (max-width: 350px){\n        .post-content-block{\n            height: 10rem;\n        }\n    }\n\n    .post-title{\n        font-size: 1.4rem;\n        font-weight: 400;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    .post-meta-block{\n        height: auto;\n        display: flex;\n\n        .author{\n            text-align: end;\n        }\n        .author, p{\n            color: ",";\n            font-size: 0.9rem;\n            font-weight: 400;\n            flex: auto;\n        }\n        .type{\n            text-align: end;\n            font-size: 1rem;\n            font-weight: 400;\n        }\n    }\n\n    .readmore-btn-wrapper{\n        display:flex;\n        justify-content: flex-start;\n    }\n\n    .readmore-btn::after{\n        content: '';\n        position: absolute;\n        margin: 0 1rem 2rem;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n    }\n    .readmore-btn, .external-link-btn{\n       color: ",";\n       display: flex;\n       flex: auto;\n       align-items: center;\n       transition: all 0.3s ease-in;\n       svg{\n           font-size: 1.5rem;\n           transition: all 0.3s;\n       }\n    }\n\n    .external-link-btn{\n        justify-content: flex-end;\n        svg{\n            font-size: 2rem;\n            padding: 0.25rem;\n            position: relative;\n        }\n\n        &:hover{\n            color: ",";\n            svg{\n                transform: scale(1.25);\n            }\n        }\n    }\n"],(function(e){return e.theme.DarkTheme?"#212121":"#FFFFFF"}),(function(e){return e.theme.DarkTheme?"#00d3a9":"rgba(0, 0, 0, 0.20)"}),(function(e){return e.theme.DarkTheme?"rgba(255, 255, 255, 0.9)":"rgba(0, 0, 0, 0.1)"}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.DarkTheme?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)"}),(function(e){return e.theme.DarkTheme?"rgb(255 255 255 / 40%)":"rgb(0 0 0 / 40%)"}),(function(e){return e.theme.secondaryColor})),l=function(e){var t=e.frontmatter,n=e.fields,l=e.theme;return r.createElement(u,{fixed:!!t.abstract},r.createElement("div",{className:"post-block"},r.createElement("div",{className:"post-thumb-block"},r.createElement(c.Z,Object.assign({},"dark"===l?t.darkthumbnail:t.thumbnail,{imgStyle:{objectFit:"contain"},alt:t.title}))),r.createElement("div",{className:"post-content-block"},r.createElement("h2",{className:"post-title"},t.title),r.createElement("div",{className:"post-meta-block"},t.date&&t.author&&r.createElement(r.Fragment,null,r.createElement("p",null,t.date),r.createElement("p",{className:"author"},t.author)),t.date&&!t.author&&r.createElement("p",null,t.date),!t.date&&t.author&&r.createElement("p",{className:"author"},t.author),!t.author&&t.type&&r.createElement("p",{className:"type"},t.type)),r.createElement("div",{className:"readmore-btn-wrapper"},n&&n.slug&&t.eurl&&r.createElement(r.Fragment,null,r.createElement(i.Link,{className:"readmore-btn",to:n.slug},"see more ",r.createElement(o.f,null)),r.createElement("a",{className:"external-link-btn",href:t.eurl,target:"_blank",rel:"noreferrer"},r.createElement(a.r,null))),n&&n.slug&&!t.eurl&&r.createElement(i.Link,{className:"readmore-btn",to:n.slug},"see more ",r.createElement(o.f,null)),!n&&!n.slug&&t.eurl&&r.createElement("a",{className:"external-link-btn",href:t.eurl,target:"_blank",rel:"noreferrer"},r.createElement(a.r,null))))))}},33754:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(67294),i=n(1597),o=n(51174),a=n.n(o),c=n(64423).default.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"sc-bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin-bottom: 2rem;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 1.5rem;\n                img{\n                    padding-left: 1rem;\n                    width: 3rem;\n                    filter: invert(",");\n\n                }\n            }\n        }\n        \n        .feature-image{\n            /* margin: 2rem auto; */\n            object-fit: contain;\n            justify-content: center; \n            \n            img{\n                max-height: 25rem;\n                /* max-width: 31rem; */\n                display: block;\n                margin-left: auto; \n                margin-right: auto; \n            }   \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;\n            align-items: center;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"],(function(e){return e.theme.meshInterfaceLogoFilter})),u=n(25679),l=n(46319),s=function(e,t){return r.createElement(r.Fragment,null,t?r.createElement(i.Link,{to:"/community/members/"+a()(e.name)},r.createElement("span",null,e.name)):r.createElement("span",null,e.name))},f=function(e){var t=e.category,n=e.title,o=e.img,f=e.feedlink,m=e.subtitle,g=e.author,d=e.thumbnail,p=e.superscript,h=e.date,y=!1;g&&(y=(0,i.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==g.name})));return r.createElement(c,null,r.createElement("div",{className:"page-header"},d&&r.createElement("div",{className:"feature-image"},r.createElement(u.Z,Object.assign({},d,{imgStyle:{objectFit:"contain"},alt:n}))),r.createElement("h1",{className:"page-title"},n,"  ",r.createElement("sup",{className:"supscript"},p),o&&f&&r.createElement("a",{href:f,target:"_blank",rel:"noreferrer"}," ",r.createElement("img",{src:o,alt:"RSS Feed"})," ")," "),m&&r.createElement("h3",null,m),t&&r.createElement("div",{className:"breadcrumbs"},r.createElement("span",null,r.createElement("h5",null,"Category:"),r.createElement("p",{key:t},r.createElement(i.Link,{to:"/blog/category/"+a()(t)},r.createElement("span",null,t)))),g&&r.createElement(r.Fragment,null,r.createElement("span",null,r.createElement("h5",null,"By:"),"Layer5 Team"===g.name?r.createElement("p",null,r.createElement("img",{src:l.Z,alt:"Layer5",width:"85"})," Team"):r.createElement("p",null,s(g,y)))),h&&r.createElement(r.Fragment,null,r.createElement("span",null,r.createElement("h5",null,"On:"),r.createElement("p",null,h)))),!t&&g&&r.createElement("div",{className:"breadcrumbs post"},r.createElement("h5",null,"By:"),r.createElement("span",null,s(g,y)),h&&r.createElement("span",null,r.createElement("h5",null,"On:"),r.createElement("p",null,h)))))}},60580:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(80449),i=n(67294),o=n(64423).default.div.withConfig({displayName:"searchboxstyle__SearchWrapper",componentId:"sc-1wu4lbd-0"})(["\n  .search-box {\n    position: relative;\n    display: flex;\n    input {\n      flex-basis: 100%;\n      padding: 15px;\n      border-radius: 5px;\n      border: 1px solid ",";\n\n      &:focus {\n        border-color: ",";\n      }\n    }\n    button {\n      position: absolute;\n      right: 0px;\n      top: 0;\n      height: 100%;\n      min-width: 20px;\n      border-radius: 5px;\n      background: transparent;\n      font-size: 22px;\n      color: ",";\n    }\n  }\n"],(function(e){return e.theme.headingColor}),(function(e){return e.theme.primaryColor}),(function(e){return e.theme.headingColor})),a=n(63689),c=n(86410),u=function(e){var t=e.searchQuery,n=e.searchData,u=e.paginate,l=e.currentPage;return i.createElement(o,null,i.createElement("div",{className:"search-box"},i.createElement(c.DebounceInput,{type:"text",value:t,minLength:1,debounceTimeout:500,onChange:function(e){e.target.value.length>0&&1!=l&&u(1),n(e)},placeholder:"Search here..."}),i.createElement(a.default,null,i.createElement(r.U,null))))}},51174:function(e){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},91988:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=function(){function e(){}return e.prototype.expandToken=function(e){for(var t=[],n="",r=0,i=e.length;r<i;++r)n+=e.charAt(r),t.push(n);return t},e}(),i=function(){function e(){}return e.prototype.sanitize=function(e){return e?e.toLocaleLowerCase().trim():""},e}();function o(e,t){t=t||[];for(var n=e=e||{},r=0;r<t.length;r++)if(null==(n=n[t[r]]))return null;return n}var a=function(){function e(e){this._uidFieldName=e,this._tokenToIdfCache={},this._tokenMap={}}var t=e.prototype;return t.indexDocument=function(e,t,n){this._tokenToIdfCache={};var r,i=this._tokenMap;"object"!=typeof i[e]?i[e]=r={$numDocumentOccurrences:0,$totalNumOccurrences:1,$uidMap:{}}:(r=i[e]).$totalNumOccurrences++;var o=r.$uidMap;"object"!=typeof o[t]?(r.$numDocumentOccurrences++,o[t]={$document:n,$numTokenOccurrences:1}):o[t].$numTokenOccurrences++},t.search=function(e,t){for(var n={},r=0,i=e.length;r<i;r++){var o=e[r],a=this._tokenMap[o];if(!a)return[];if(0===r)for(var c=0,u=(l=Object.keys(a.$uidMap)).length;c<u;c++){n[s=l[c]]=a.$uidMap[s].$document}else{var l;for(c=0,u=(l=Object.keys(n)).length;c<u;c++){var s=l[c];"object"!=typeof a.$uidMap[s]&&delete n[s]}}}var f=[];for(var s in n)f.push(n[s]);var m=this._createCalculateTfIdf();return f.sort((function(n,r){return m(e,r,t)-m(e,n,t)}))},t._createCalculateIdf=function(){var e=this._tokenMap,t=this._tokenToIdfCache;return function(n,r){if(!t[n]){var i=void 0!==e[n]?e[n].$numDocumentOccurrences:0;t[n]=1+Math.log(r.length/(1+i))}return t[n]}},t._createCalculateTfIdf=function(){var e=this._tokenMap,t=this._uidFieldName,n=this._createCalculateIdf();return function(r,i,a){for(var c=0,u=0,l=r.length;u<l;++u){var s,f=r[u],m=n(f,a);m===1/0&&(m=0),s=t instanceof Array?i&&o(i,t):i&&i[t],c+=(void 0!==e[f]&&void 0!==e[f].$uidMap[s]?e[f].$uidMap[s].$numTokenOccurrences:0)*m}return c}},e}(),c=/[^a-zа-яё0-9\-']+/i,u=function(){function e(){}return e.prototype.tokenize=function(e){return e.split(c).filter((function(e){return e}))},e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(e){if(!e)throw Error("js-search requires a uid field name constructor parameter");this._uidFieldName=e,this._indexStrategy=new r,this._searchIndex=new a(e),this._sanitizer=new i,this._tokenizer=new u,this._documents=[],this._searchableFields=[]}var t,n,c,s=e.prototype;return s.addDocument=function(e){this.addDocuments([e])},s.addDocuments=function(e){this._documents=this._documents.concat(e),this.indexDocuments_(e,this._searchableFields)},s.addIndex=function(e){this._searchableFields.push(e),this.indexDocuments_(this._documents,[e])},s.search=function(e){var t=this._tokenizer.tokenize(this._sanitizer.sanitize(e));return this._searchIndex.search(t,this._documents)},s.indexDocuments_=function(e,t){this._initialized=!0;for(var n=this._indexStrategy,r=this._sanitizer,i=this._searchIndex,a=this._tokenizer,c=this._uidFieldName,u=0,l=e.length;u<l;u++){var s,f=e[u];s=c instanceof Array?o(f,c):f[c];for(var m=0,g=t.length;m<g;m++){var d,p=t[m];if(null!=(d=p instanceof Array?o(f,p):f[p])&&"string"!=typeof d&&d.toString&&(d=d.toString()),"string"==typeof d)for(var h=a.tokenize(r.sanitize(d)),y=0,M=h.length;y<M;y++)for(var j=h[y],b=n.expandToken(j),N=0,v=b.length;N<v;N++){var L=b[N];i.indexDocument(L,s,f)}}}},t=e,(n=[{key:"indexStrategy",set:function(e){if(this._initialized)throw Error("IIndexStrategy cannot be set after initialization");this._indexStrategy=e},get:function(){return this._indexStrategy}},{key:"sanitizer",set:function(e){if(this._initialized)throw Error("ISanitizer cannot be set after initialization");this._sanitizer=e},get:function(){return this._sanitizer}},{key:"searchIndex",set:function(e){if(this._initialized)throw Error("ISearchIndex cannot be set after initialization");this._searchIndex=e},get:function(){return this._searchIndex}},{key:"tokenizer",set:function(e){if(this._initialized)throw Error("ITokenizer cannot be set after initialization");this._tokenizer=e},get:function(){return this._tokenizer}}])&&l(t.prototype,n),c&&l(t,c),e}(),f=n(67294),m=function(e,t,n,o,c){var u=(0,f.useState)(e),l=u[0],m=(u[1],(0,f.useState)([])),g=m[0],d=m[1],p=(0,f.useState)([]),h=p[0],y=p[1],M=(0,f.useState)(!0),j=(M[0],M[1]),b=n?h:l;(0,f.useEffect)((function(){N()}),[b]);var N=function(){var e=new s(c);e.indexStrategy=new r,e.sanitizer=new i,e.searchIndex=new a(c),e.addIndex(o),e.addIndex("body"),e.addDocuments(l),d(e),j(!1)};return{queryResults:b,searchData:function(e){var n=g.search(e.target.value);t(e.target.value.trim()),y(n)}}}},46319:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYuOSA5My43OCI+PHRpdGxlPmxheWVyNS1ncmF5LW5vLXRyaW08L3RpdGxlPjxwb2x5Z29uIHBvaW50cz0iMTguNzYgMCAwIDAgMCA5My43OCA4OC45MSA5My43OCA4OC45MSA3NS4wMyAxOC43NiA3NS4wMyAxOC43NiAwIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSIxMzUuODQgMCA5OC4zMyA5My43OCAxMTkuNzIgOTMuNzggMTQ1LjIyIDI4LjE0IDE2My4zOSA3NS4wMyAxMzIuMjIgNzUuMDMgMTI1LjIyIDkzLjc4IDE5Mi4xMSA5My43OCAxNTQuNTkgMCAxMzUuODQgMCIgc3R5bGU9ImZpbGw6IzNjNDk0ZiIvPjxwb2x5Z29uIHBvaW50cz0iMjE4LjU4IDMyLjgzIDE5NS4xNCAwIDE3MS42OSAwIDIwOS4yIDU2LjI3IDIwOS4yIDkzLjc4IDIyNy45NiA5My43OCAyMjcuOTYgNTYuMjcgMjY1LjQ3IDAgMjQyLjMyIDAgMjE4LjU4IDMyLjgzIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSIyNzMuNTYgMTQuNzcgMjczLjU2IDE4Ljc2IDI3My41NiAzNy41MSAyNzMuNTYgNjAuMzkgMjczLjU2IDkzLjc4IDM2Mi40NiA5My43OCAzNjIuNDYgNzUuMDMgMjkyLjMyIDc1LjAzIDI5Mi4zMiA2MC4zOSAyOTIuMzIgNTYuMjcgMzQ2LjIxIDU2LjI3IDM0Ni4yMSAzNy41MSAyOTIuMzIgMzcuNTEgMjkyLjMyIDE4Ljc2IDM2Mi40NiAxOC43NiAzNjIuNDYgMCAyNzMuNTYgMCAyNzMuNTYgMTQuNzciIHN0eWxlPSJmaWxsOiMzYzQ5NGYiLz48cGF0aCBkPSJNMzkyLjkyLDE3Ljg4SDQ0MVYzNy4zOUgzOTguMTJsLjE4LDE3Ljg4aDEyLjg3bDM0LDM4LjUxaDIzLjE2bC0zNC0zOC41MWgxMy4yN2ExNC41NiwxNC41NiwwLDAsMCwxNC41Ny0xNC41NlYxNC41N0ExNC41NywxNC41NywwLDAsMCw0NDcuNTksMGgtNzNWOTMuNzhoMTguNzZaIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHJlY3QgaWQ9Il9QYXRoXyIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIHg9IjUzNi42MSIgd2lkdGg9IjM2LjkzIiBoZWlnaHQ9IjE3Ljc5IiBzdHlsZT0iZmlsbDojODI4YzhjIi8+PHBhdGggaWQ9Il9QYXRoXzIiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBkPSJNNTc2LjksNTkuOTNWNTIuNTVjMC04LjQ4LTcuMTQtMTUuMzYtMTUuOTQtMTUuMzZoLTU5LjZWMzIuMzRINDc5LjU0djIxaDc1LjU0djYuNTdaIiBzdHlsZT0iZmlsbDojODI4YzhjIi8+PHBvbHlnb24gaWQ9Il9QYXRoXzMiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBwb2ludHM9IjUwMS4zNiAyNi41MiA1MDEuMzYgMTcuNzkgNTMwLjU4IDE3Ljc5IDUzMC41OCAwIDQ3OS41NCAwIDQ3OS41NCAyNi41MiA1MDEuMzYgMjYuNTIiIHN0eWxlPSJmaWxsOiNhMGFhYWEiLz48cGF0aCBpZD0iX1BhdGhfNCIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGQ9Ik01NTUuMDgsNjUuNjRWNzZINTI1Ljg2VjkzLjc4aDM2YzguMzEsMCwxNS02LjQ4LDE1LTE0LjQ4VjY1LjY0WiIgc3R5bGU9ImZpbGw6I2EwYWFhYSIvPjxwYXRoIGlkPSJfUGF0aF81IiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgZD0iTTQ5OS42MSw2Ni42MVY3NmgyMC4yMlY5My43OGgtMjZjLTguMzEsMC0xNS02LjQ4LTE1LTE0LjQ4VjY2LjYxWiIgc3R5bGU9ImZpbGw6IzgyOGM4YyIvPjwvc3ZnPg=="},62305:function(e,t){"use strict";t.Z="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDYxLjQzMiA0NjEuNDMyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjEuNDMyIDQ2MS40MzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGcgaWQ9ImxpbmVzX194MDAzQ19Hcm91cF94MDAzRV8iPgoJPGcgaWQ9ImNpcmNsZSI+CgkJPHBhdGggZD0iTTEyNS44OTYsMzk4LjkyOGMwLDMzLjY4My0yNy4zMDgsNjAuOTk5LTYxLjAyMiw2MC45OTljLTMzLjY4NCwwLTYxLjAwNi0yNy4zMTYtNjEuMDA2LTYwLjk5OQoJCQljMC0zMy43MjksMjcuMzIyLTYxLjAzOCw2MS4wMDYtNjEuMDM4Qzk4LjU4OCwzMzcuODksMTI1Ljg5NiwzNjUuMTk4LDEyNS44OTYsMzk4LjkyOHoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNMCwyMjkuNjM2YzAsOC40NDEsNi42MDYsMTUuMzc5LDE1LjAzNiwxNS44MDljNjAuMzE4LDMuMDc2LDEwMC44ODUsMjUuMDMxLDEzOC4yNDgsNjIuNTgyCgkJCQljMzYuNzE2LDM2Ljg2NCw2MC4wNzEsODkuNzU5LDY0LjA4MiwxMzcuNzY5YzAuNjg2LDguMjAyLDcuNTM5LDE0LjUyNCwxNS43NywxNC41MjRoNTYuNzAxYzQuMzQ0LDAsOC40OTgtMS43ODQsMTEuNDg4LTQuOTM1CgkJCQljMi45OTItMy4xNSw0LjU1NS03LjM5MSw0LjMzMy0xMS43MjljLTguMDc0LTE1OC4xNTItMTMwLjY2OS0yNzguMzMyLTI4OS4wMTMtMjg2LjIzYy00LjMzNC0wLjIxNy04LjU2NCwxLjM1NS0xMS43MDksNC4zNDQKCQkJCUMxLjc5MiwxNjQuNzU5LDAsMTY4LjkwOCwwLDE3My4yNDdWMjI5LjYzNnoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTAsNzMuNDExYzAsOC41MSw2LjcxMywxNS40ODIsMTUuMjE2LDE1LjgxOWMxOTQuMjEsNy42ODMsMzUwLjMxNSwxNjEuNzk4LDM1OC4wOTgsMzU1Ljg3OQoJCQkJYzAuMzQsOC40OTEsNy4zMiwxNS4yMDgsMTUuODE4LDE1LjIwOGg1Ni40NTdjNC4yOTcsMCw4LjQwOC0xLjc0NCwxMS4zOTMtNC44MzRjMi45ODUtMy4wOSw0LjU4NS03LjI1OCw0LjQ0MS0xMS41NTIKCQkJCUM0NTMuMTgxLDE5OS40MTIsMjYxLjAyNCw5LjI3LDE2LjM4LDEuMTIxQzEyLjA4OSwwLjk3OCw3LjkyNSwyLjU4Myw0LjgzOCw1LjU2OEMxLjc1MSw4LjU1MSwwLDEyLjY2MSwwLDE2Ljk1NFY3My40MTF6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=4d76c7d5e3416376b4cb86b7b7b41a46036d8581-6a079a1a21e54fd9e080.js.map