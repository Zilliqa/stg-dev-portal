(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{308:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),c=(n(0),n(324)),i=n(328),l=n(329),b={id:"api-transaction-get-pending-tx",title:"GetPendingTxn"},o={id:"apis/api-transaction-get-pending-tx",isDocsHomePage:!1,title:"GetPendingTxn",description:"---",source:"@site/docs/apis/api-transaction-get-pending-tx.mdx",permalink:"/docs/apis/api-transaction-get-pending-tx",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/apis/api-transaction-get-pending-tx.mdx",sidebar:"APIsSideBar",previous:{title:"GetNumTxnsTxEpoch",permalink:"/docs/apis/api-transaction-get-num-txns-txepoch"},next:{title:"GetPendingTxns",permalink:"/docs/apis/api-transaction-get-pending-txs"}},s=[{value:"Example Request",id:"example-request",children:[]},{value:"Example Response",id:"example-response",children:[]},{value:"API Availability",id:"api-availability",children:[]},{value:"Status Codes",id:"status-codes",children:[]},{value:"HTTP Request",id:"http-request",children:[]},{value:"Arguments",id:"arguments",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("hr",null),Object(c.b)("p",null,"Returns the status (code) of a specified unconfirmed Transaction."),Object(c.b)("h3",{id:"example-request"},"Example Request"),Object(c.b)(i.a,{defaultValue:"cURL",values:[{label:"cURL",value:"cURL"},{label:"node.js",value:"node.js"},{label:"java",value:"java"},{label:"python",value:"python"},{label:"go",value:"go"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"cURL",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl -d \'{\n    "id": "1",\n    "jsonrpc": "2.0",\n    "method": "GetPendingTxn",\n    "params": ["b9e545ab3ed0b61a4d326425569605255e0990da7dda18b4658fdb17b390844e"]\n}\' -H "Content-Type: application/json" -X POST "https://api.zilliqa.com/"\n'))),Object(c.b)(l.a,{value:"node.js",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const pendingTransaction = await zilliqa.blockchain.getPendingTxn(txId);\nconsole.log(pendingTransaction.result);\n"))),Object(c.b)(l.a,{value:"java",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class App {\n    public static void main(String[] args) throws IOException {\n        HttpProvider client = new HttpProvider("https://api.zilliqa.com");\n        Rep<PendingStatus> pengdingStatus = client.getPendingTxn("b9e545ab3ed0b61a4d326425569605255e0990da7dda18b4658fdb17b390844e");\n        System.out.println(new Gson().toJson(pengdingStatus));\n    }\n}\n'))),Object(c.b)(l.a,{value:"go",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'func GetPendingTxn() {\n  provider := NewProvider("https://api.zilliqa.com/")\n  response := provider.GetPendingTxn("2cf109b25f2132c08a4248e2be8add6b95b92aef5b2c77e737faefbc9353ee7c")\n  result, _ := json.Marshal(response)\n  fmt.Println(string(result))\n}\n')))),Object(c.b)("h3",{id:"example-response"},"Example Response"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "1",\n  "jsonrpc": "2.0",\n  "result": {\n    "code": 24,\n    "confirmed": false,\n    "pending": false\n  }\n}\n')),Object(c.b)("h3",{id:"api-availability"},"API Availability"),Object(c.b)("p",null,"Please note that the status of newly created transactions (using ",Object(c.b)("inlineCode",{parentName:"p"},"CreateTransaction"),") may not immediately be available for checking using this API."),Object(c.b)("p",null,"A created transaction will be included in this API if:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"It has already been dispatched to the network (this may require one transaction epoch)"),Object(c.b)("li",{parentName:"ol"},"The network has acknowledged receiving this transaction (this occurs at the end of every transaction epoch)")),Object(c.b)("p",null,"Hence, we recommend calling ",Object(c.b)("inlineCode",{parentName:"p"},"GetPendingTxn")," around 1-2 transaction epochs after transaction creation to get accurate results."),Object(c.b)("h3",{id:"status-codes"},"Status Codes"),Object(c.b)("p",null,"Refer to ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://dev.zilliqa.com/docs/apis/api-transaction-get-transaction-status#status-codes"}),"GetTransactionStatus")," for the status codes."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Note: Dropped transactions are available for querying for up to 5 transaction epochs only.")),Object(c.b)("h3",{id:"http-request"},"HTTP Request"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Chain(s)"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"URL(s)"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Zilliqa mainnet")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://api.zilliqa.com/"}),"https://api.zilliqa.com/"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Developer testnet")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://dev-api.zilliqa.com/"}),"https://dev-api.zilliqa.com/"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Local testnet")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"http://localhost:4201/")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Isolated server")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://zilliqa-isolated-server.zilliqa.com/"}),"https://zilliqa-isolated-server.zilliqa.com/"))))),Object(c.b)("h3",{id:"arguments"},"Arguments"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"id")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"1"'))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"jsonrpc")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"2.0"'))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"method")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},'"GetPendingTxn"'))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"params")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Transaction hash of 32 bytes of a specified transaction.")))))}u.isMDXComponent=!0},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<c;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},325:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},326:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=r},327:function(e,t,n){"use strict";var a=n(0),r=n(326);t.a=function(){return Object(a.useContext)(r.a)}},328:function(e,t,n){"use strict";n(24),n(20),n(19);var a=n(0),r=n.n(a),c=n(327),i=n(325),l=n(130),b=n.n(l),o=37,s=39;t.a=function(e){var t=e.block,n=e.children,l=e.defaultValue,p=e.values,u=e.groupId,d=Object(c.a)(),m=d.tabGroupChoices,j=d.setTabGroupChoices,O=Object(a.useState)(l),g=O[0],f=O[1];if(null!=u){var h=m[u];null!=h&&h!==g&&p.some((function(e){return e.value===h}))&&f(h)}var v=function(e){f(e),null!=u&&j(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":g===t,className:Object(i.a)("tabs__item",b.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case o:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===g}))[0]))}},329:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);