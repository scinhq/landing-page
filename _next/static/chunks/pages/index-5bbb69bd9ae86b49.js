(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6870)}])},8418:function(e,s,r){"use strict";function n(e,s){(null==s||s>e.length)&&(s=e.length);for(var r=0,n=new Array(s);r<s;r++)n[r]=e[r];return n}function t(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,t,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!s||i.length!==s);a=!0);}catch(c){l=!0,t=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw t}}return i}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return n(e,s);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}s.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},l=r(6273),c=r(387),o=r(7190);var d={};function h(e,s,r,n){if(e&&l.isLocalURL(s)){e.prefetch(s,r,n).catch((function(e){0}));var t=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;d[s+"%"+r+(t?"%"+t:"")]=!0}}var u=function(e){var s,r=!1!==e.prefetch,n=c.useRouter(),i=a.default.useMemo((function(){var s=t(l.resolveHref(n,e.href,!0),2),r=s[0],i=s[1];return{href:r,as:e.as?l.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),u=i.href,f=i.as,m=e.children,p=e.replace,x=e.shallow,j=e.scroll,v=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var g=(s=a.default.Children.only(m))&&"object"===typeof s&&s.ref,w=t(o.useIntersection({rootMargin:"200px"}),2),b=w[0],N=w[1],y=a.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);a.default.useEffect((function(){var e=N&&r&&l.isLocalURL(u),s="undefined"!==typeof v?v:n&&n.locale,t=d[u+"%"+f+(s?"%"+s:"")];e&&!t&&h(n,u,f,{locale:s})}),[f,u,N,v,r,n]);var I={ref:y,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,r,n,t,i,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),s[t?"replace":"push"](r,n,{shallow:i,locale:c,scroll:a}))}(e,n,u,f,p,x,j,v)},onMouseEnter:function(e){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),l.isLocalURL(u)&&h(n,u,f,{priority:!0})}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var k="undefined"!==typeof v?v:n&&n.locale,S=n&&n.isLocaleDomain&&l.getDomainLocale(f,k,n&&n.locales,n&&n.domainLocales);I.href=S||l.addBasePath(l.addLocale(f,k,n&&n.defaultLocale))}return a.default.cloneElement(s,I)};s.default=u},7190:function(e,s,r){"use strict";function n(e,s){(null==s||s>e.length)&&(s=e.length);for(var r=0,n=new Array(s);r<s;r++)n[r]=e[r];return n}function t(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,t,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!s||i.length!==s);a=!0);}catch(c){l=!0,t=c}finally{try{a||null==r.return||r.return()}finally{if(l)throw t}}return i}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return n(e,s);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootRef,r=e.rootMargin,n=e.disabled||!l,d=i.useRef(),h=t(i.useState(!1),2),u=h[0],f=h[1],m=t(i.useState(s?s.current:null),2),p=m[0],x=m[1],j=i.useCallback((function(e){d.current&&(d.current(),d.current=void 0),n||u||e&&e.tagName&&(d.current=function(e,s,r){var n=function(e){var s,r={root:e.root||null,margin:e.rootMargin||""},n=o.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?s=c.get(n):(s=c.get(r),o.push(r));if(s)return s;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var s=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;s&&r&&s(r)}))}),e);return c.set(r,s={id:r,observer:i,elements:t}),s}(r),t=n.id,i=n.observer,a=n.elements;return a.set(e,s),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),c.delete(t);var s=o.findIndex((function(e){return e.root===t.root&&e.margin===t.margin}));s>-1&&o.splice(s,1)}}}(e,(function(e){return e&&f(e)}),{root:p,rootMargin:r}))}),[n,p,r,u]);return i.useEffect((function(){if(!l&&!u){var e=a.requestIdleCallback((function(){return f(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),i.useEffect((function(){s&&x(s.current)}),[s]),[j,u]};var i=r(7294),a=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map,o=[]},6870:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return c}});var n=r(5893),t=r(1664),i=r(4298),a=r(9008);function l(e){var s=e.description,r=e.title,t=e.siteTitle;return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,n.jsxs)("title",{children:[" ","".concat(r," | ").concat(t)]}),(0,n.jsx)("meta",{name:"description",content:s}),(0,n.jsx)("meta",{name:"keywords",content:"Decentralized Publishign, DePub, Scientist Independence, SCIN, SCIN.io, SCIN.tech"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"shortcut icon",type:"image/x-icon",href:"img/favicon.svg"})]})}function c(){return(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)(l,{title:"SCIN",siteTitle:"Decentralized Scientific Publishing",description:"SCIN is a decentralized scientific publishing platform, empowering researchers to retain the ownership of their work."}),(0,n.jsx)("div",{className:"preloader",children:(0,n.jsx)("div",{className:"loader",children:(0,n.jsx)("div",{className:"ytp-spinner",children:(0,n.jsx)("div",{className:"ytp-spinner-container",children:(0,n.jsxs)("div",{className:"ytp-spinner-rotator",children:[(0,n.jsx)("div",{className:"ytp-spinner-left",children:(0,n.jsx)("div",{className:"ytp-spinner-circle"})}),(0,n.jsx)("div",{className:"ytp-spinner-right",children:(0,n.jsx)("div",{className:"ytp-spinner-circle"})})]})})})})}),(0,n.jsx)("header",{className:"header",children:(0,n.jsx)("div",{className:"navbar-area",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row align-items-center",children:(0,n.jsx)("div",{className:"col-lg-12",children:(0,n.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[(0,n.jsx)(t.default,{href:"",passHref:!0,children:(0,n.jsx)("a",{className:"navbar-brand",children:(0,n.jsx)("img",{className:"logo-1",src:"img/logo/logo.png",alt:"SCIN Logo"})})}),(0,n.jsxs)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[(0,n.jsx)("span",{className:"toggler-icon"}),(0,n.jsx)("span",{className:"toggler-icon"}),(0,n.jsx)("span",{className:"toggler-icon"})]}),(0,n.jsx)("div",{className:"collapse navbar-collapse sub-menu-bar",id:"navbarSupportedContent"})]})})})})})}),(0,n.jsxs)("section",{id:"home",className:"hero-section",children:[(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsxs)("div",{className:"hero-content",children:[(0,n.jsx)("h1",{className:"wow fadeInUp","data-wow-delay":".2s",children:"Decentralized Scientific Publishing Platform"}),(0,n.jsx)("p",{className:"wow fadeInUp","data-wow-delay":".4s",children:"Promoting Open Access peer-reviewed publishing and leaving the copytright ownership of publications to authors and reviewers."}),(0,n.jsx)("div",{className:"hero-btns wow fadeInUp",children:(0,n.jsxs)("div",{className:"row g-3",children:[(0,n.jsx)("div",{className:"col-auto",children:(0,n.jsx)(t.default,{href:"#signup-for-product",passHref:!0,children:(0,n.jsx)("a",{className:"btn btn-primary btn-lg","data-wow-delay":".6s",children:"Publish With Us"})})}),(0,n.jsx)("div",{className:"col-auto",children:(0,n.jsx)(t.default,{href:"about",passHref:!0,children:(0,n.jsx)("a",{className:"btn btn-outline-primary btn-lg","data-wow-delay":".6s",children:"Learn More"})})})]})})]})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"hero-img wow fadeInUp","data-wow-delay":".5s",children:(0,n.jsx)("img",{src:"img/hero/hero-img.png",alt:""})})})]})}),(0,n.jsx)("div",{className:"hero-shape"})]}),(0,n.jsx)("section",{id:"tracking",className:"tracking-section pt-150",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-6 col-xl-7",children:(0,n.jsx)("div",{className:"tracking-image",children:(0,n.jsx)("img",{src:"img/plan/smart contract.svg",alt:""})})}),(0,n.jsx)("div",{className:"col-lg-6 col-xl-5",children:(0,n.jsx)("div",{className:"tracking-content",children:(0,n.jsxs)("div",{className:"section-title mb-50",children:[(0,n.jsx)("h1",{className:"mb-40 wow fadeInUp","data-wow-delay":".2s",children:"Why SCIN?"}),(0,n.jsx)("p",{className:"wow fadeInUp","data-wow-delay":".4s",children:"We are on a mission to revolutionize the scientific publishing and empower the authors and researchers to keep the ownership of their work. Authors will have the choice to publish their work as Open Access with lower fees or retain the ownership of their work."}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{className:"wow fadeInUp","data-wow-delay":".4s",children:"This is achieved through our decentralized publishing platform which publishes your scientific work as a smart contract."})]})})})]})})}),(0,n.jsx)("section",{className:"search-section pt-150",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-xl-5 col-lg-6 order-last order-lg-first",children:(0,n.jsxs)("div",{className:"search-content",children:[(0,n.jsxs)("div",{className:"section-title mb-40",children:[(0,n.jsx)("h1",{className:"mb-40 wow fadeInUp","data-wow-delay":".2s",children:"What SCIN Brings To The Scientific Community?"}),(0,n.jsx)("p",{className:"wow fadeInUp","data-wow-delay":".4s",children:"SCIN empowers authors/researchers to own their publishing and decide if they want to publish it as open access or earn lifetime royalties on their work. Through our decentralized nature, we are able to provide authors with a platform to publish their work as a smart contract."}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{className:"wow fadeInUp","data-wow-delay":".4s",children:"We are revolutionizing the peer-review publishing by incentivizing reviewers to review the publications with more accountability and responsibility. This is achieved by our unique fair system of distribution of royalties."})]}),(0,n.jsxs)("div",{className:"app-info",children:[(0,n.jsxs)("div",{className:"single-info",children:[(0,n.jsx)("div",{className:"icon-style color-1",children:(0,n.jsx)("h6",{children:"Open Access"})}),(0,n.jsx)("p",{className:"icon-descr",children:"Promoting Open Access publishing by reducing the publishing costs"})]}),(0,n.jsxs)("div",{className:"single-info",children:[(0,n.jsx)("div",{className:"icon-style color-2",children:(0,n.jsx)("h6",{children:"Copyright Ownership"})}),(0,n.jsx)("p",{className:"icon-descr",children:"Authors will retain the copyright ownership of their work."})]})]}),(0,n.jsxs)("div",{className:"app-info",children:[(0,n.jsxs)("div",{className:"single-info",children:[(0,n.jsx)("div",{className:"icon-style color-3",children:(0,n.jsx)("h6",{children:"Royalty Earning"})}),(0,n.jsx)("p",{className:"icon-descr",children:"Collaborators of the publication could choose to earn royalty for their work."})]}),(0,n.jsxs)("div",{className:"single-info",children:[(0,n.jsx)("div",{className:"icon-style color-1",children:(0,n.jsx)("h6",{children:"Expedited Reviewing"})}),(0,n.jsx)("p",{className:"icon-descr",children:"Incentivized peer-review process to ensure timely and high quality reviews of the manuscript."})]})]})]})}),(0,n.jsx)("div",{className:"col-xl-7 col-lg-6",children:(0,n.jsx)("div",{className:"search-img text-lg-right",children:(0,n.jsx)("img",{src:"img/search/search-img.png",alt:""})})})]})})}),(0,n.jsx)("section",{id:"signup-for-product",className:"testimonial-section",children:(0,n.jsxs)("div",{className:"container text-center",children:[(0,n.jsx)("h1",{children:"Are you intesred in publishing your paper with us?"}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{children:"Please sign up and we will get back to you soon."}),(0,n.jsx)("div",{className:"row justify-content-center my-4",children:(0,n.jsx)("div",{className:"col-auto",children:(0,n.jsxs)("form",{id:"subscription-form",action:"https://formspree.io/f/mknyrgbe",method:"POST",children:[(0,n.jsxs)("div",{className:"input-group mb-3",children:[(0,n.jsx)("button",{className:"btn btn-primary btn-lg",type:"button",id:"subscribe-btn",children:"Sign Up"}),(0,n.jsx)("input",{type:"text",name:"email",className:"form-control",placeholder:"Email Address","aria-label":"Email Address"})]}),(0,n.jsx)("p",{id:"my-form-status"})]})})})]})}),(0,n.jsxs)("footer",{id:"footer",className:"footer",children:[(0,n.jsx)("div",{className:"footer-shape",children:(0,n.jsx)("img",{src:"img/footer/footer-shape-1.svg",alt:"",className:"shape shape-1",width:"35%",height:"auto"})}),(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"widget-wrapper",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-xl-4 col-lg-4 col-md-6 col-sm-6",children:(0,n.jsxs)("div",{className:"footer-widget",children:[(0,n.jsx)("div",{className:"logo",children:(0,n.jsx)("a",{href:"index.html",children:(0,n.jsx)("img",{src:"img/logo/website-logo.svg",alt:"",className:"logo-1"})})}),(0,n.jsxs)("ul",{className:"socials",children:[(0,n.jsx)("li",{children:(0,n.jsx)(t.default,{href:"https://twitter.com/scinhq",passHref:!0,children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("em",{className:"lni lni-twitter-filled"})})})}),(0,n.jsx)("li",{children:(0,n.jsx)(t.default,{href:"https://linkedin.com/company/scinhq",passHref:!0,children:(0,n.jsx)("a",{target:"_blank",children:(0,n.jsx)("em",{className:"lni lni-linkedin-original"})})})})]})]})}),(0,n.jsx)("div",{className:"col-xl-3 col-lg-2 col-md-6 col-sm-6 ml-auto",children:(0,n.jsxs)("div",{className:"footer-widget",children:[(0,n.jsx)("h3",{children:"About SCIN"}),(0,n.jsx)("ul",{className:"links",children:(0,n.jsx)("li",{children:(0,n.jsx)(t.default,{href:"mailto:armin@scin.io?subject=Book a meeting to discuss SCIN",passHref:!0,children:(0,n.jsx)("a",{children:"Contact Us"})})})})]})})]})})})]}),(0,n.jsx)(i.default,{src:"js/bootstrap.5.0.0.alpha-2-min.js",strategy:"beforeInteractive"}),(0,n.jsx)(i.default,{src:"js/count-up.min.js",strategy:"beforeInteractive"}),(0,n.jsx)(i.default,{src:"js/wow.min.js",strategy:"beforeInteractive"}),(0,n.jsx)(i.default,{src:"js/main.js",strategy:"beforeInteractive"}),(0,n.jsx)("a",{href:"#",className:"scroll-top btn-hover",children:(0,n.jsx)("em",{className:"lni lni-chevron-up"})})]})}},9008:function(e,s,r){e.exports=r(5443)},1664:function(e,s,r){e.exports=r(8418)},4298:function(e,s,r){e.exports=r(699)}},function(e){e.O(0,[774,888,179],(function(){return s=5301,e(e.s=s);var s}));var s=e.O();_N_E=s}]);