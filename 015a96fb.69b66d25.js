(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),o=(r(0),r(294)),i=r(301),l={id:"dev-tools-explorer",title:"Explorers",keywords:["explorer","viewblock","devex","api","zilliqa","token"],description:"Devex and ViewBlock Explorer"},c={id:"dev/dev-tools-explorer",isDocsHomePage:!1,title:"Explorers",description:"Devex and ViewBlock Explorer",source:"@site/docs/dev/dev-tools-explorer.mdx",permalink:"/docs/dev/dev-tools-explorer",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/dev/dev-tools-explorer.mdx",sidebar:"DevelopersSidebar",previous:{title:"Scilla IDEs",permalink:"/docs/dev/dev-tools-ide"},next:{title:"Faucet",permalink:"/docs/dev/dev-tools-faucet"}},s=[{value:"Devex",id:"devex",children:[]},{value:"ViewBlock",id:"viewblock",children:[{value:"Viewblock products",id:"viewblock-products",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"devex"},"Devex"),Object(o.b)("img",{alt:"Viewblock",src:Object(i.a)("img/dev/tools/devex.png")}),Object(o.b)("p",null,"Devex is a developer explorer that is maintained by Zilliqa Research. Devex is integrated directly into developer tools like Ceres and Scilla IDE.\nDevex allows you to look at blocks, address, transactions, status of the Zilliqa network as well as contract code, variables and any transition events."),Object(o.b)("img",{alt:"Viewblock",src:Object(i.a)("img/dev/tools/devexNetworkChange.png")}),Object(o.b)("p",null,"Devex is available at this ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://devex.zilliqa.com/"}),"link"),", by default, devex points to the Zilliqa mainnet but you can change the network by using the dropdown button at the top right corner."),Object(o.b)("h2",{id:"viewblock"},"ViewBlock"),Object(o.b)("img",{alt:"Viewblock",src:Object(i.a)("img/dev/tools/viewblock.png")}),Object(o.b)("p",null,"ViewBlock allows you to look at blocks, address, transactions, status of the Zilliqa network, contract code and variables."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Network"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Link"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Mainnet"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://viewblock.io/zilliqa"}),"https://viewblock.io/zilliqa"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Testnet"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"https://viewblock.io/zilliqa?network=testnet"}),"https://viewblock.io/zilliqa?network=testnet"))))),Object(o.b)("p",null,"For example, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://viewblock.io/zilliqa/tx/c4030c73d6dae558ff0c9d98237101e342888115f13219a00bb14a8ee46fa3be?network=testnet"}),"this"),"\nis the link to a ",Object(o.b)("inlineCode",{parentName:"p"},"getHello()")," transition transaction."),Object(o.b)("p",null,"If you create a legit token and have a logo, head over to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Ashlar/cryptometa"}),"cryptometa")," repository and follow the Readme instructions."),Object(o.b)("h3",{id:"viewblock-products"},"Viewblock products"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://viewblock.io/api"}),"ViewBlock API")," - ViewBlock's API is a valuable resource for some additional methods that a developer might require for his application (e.g retrieving transactions sent by a particular address)."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://viewblock.io/zilliqa/stats"}),"ViewBlock Zilliqa Stats")," - ViewBlock's statistics provide statistical information about Zilliqa network such as difficulty over time, number of blocks over time and address growth over time."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://dash.viewblock.io/d/zilliqa"}),"ViewBlock Dashboard")," - Is an advanced dashboard showing more statistics which allows you to select any time range you desire with a custom granularity"))}p.isMDXComponent=!0},294:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return v}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(r),u=a,v=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return r?n.a.createElement(v,l(l({ref:t},s),{},{components:r})):n.a.createElement(v,l({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},300:function(e,t,r){"use strict";var a=r(0),n=r(35);t.a=function(){return Object(a.useContext)(n.a)}},301:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(300),n=r(302);function o(e,{forcePrependBaseUrl:t=!1,absolute:r=!1}={}){const{siteConfig:{baseUrl:o="/",url:i}={}}=Object(a.a)();if(!e)return e;if(t)return o+e;if(!Object(n.a)(e))return e;const l=o+e.replace(/^\//,"");return r?i+l:l}},302:function(e,t,r){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return a}))}}]);