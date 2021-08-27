(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return b}));var o=r(2),n=r(6),a=(r(0),r(295)),i={id:"core-coinbase",title:"Coinbase Rewards",keywords:["core","coinbase","rewards"],description:"Core protocol design - coinbase rewards."},c={id:"contributors/core-coinbase",isDocsHomePage:!1,title:"Coinbase Rewards",description:"Core protocol design - coinbase rewards.",source:"@site/docs/contributors/core-coinbase.md",permalink:"/docs/contributors/core-coinbase",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/contributors/core-coinbase.md",sidebar:"ContributorsSidebar",previous:{title:"Proof of Reputation",permalink:"/docs/contributors/core-por"},next:{title:"Global Gas Price",permalink:"/docs/contributors/core-global-gas-price"}},s=[{value:"Distribution Process",id:"distribution-process",children:[]},{value:"Technical Note",id:"technical-note",children:[]}],d={rightToc:s};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,"At each DS epoch, a total of ",Object(a.b)("inlineCode",{parentName:"p"},"COINBASE_REWARD_PER_DS")," QA is distributed to reward miners. Out of this amount, 20% is allocated as the base reward, 40% for cosignature-based reward and 40% for seed node staking rewards."),Object(a.b)("p",null,"The base reward is given to each node equally. Specifically, these nodes are those who gained membership into a shard or the DS committee by doing PoW."),Object(a.b)("p",null,"The lookup reward is distributed to all the lookup nodes equally."),Object(a.b)("p",null,"The cosignature-based reward is distributed to the same base reward recipients in a proportional manner with respect to the number of microblocks (in the case of a shard node) or transaction blocks (in the case of DS nodes) the nodes signed."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Guard nodes do not get rewarded. Their share of the reward is instead stored in the null address."))),Object(a.b)("h2",{id:"distribution-process"},"Distribution Process"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"The distribution of rewards takes place during the vacuous epoch (i.e., the last Tx epoch in the DS epoch)"),Object(a.b)("li",{parentName:"ol"},"The state change (i.e., the subtraction from null address and addition to a node's address) is reflected in the state delta of the DS committee's microblock"),Object(a.b)("li",{parentName:"ol"},"The DS performs consensus over the state delta and the rewards are hence recorded"),Object(a.b)("li",{parentName:"ol"},"Cosignatures from the first Tx epoch (of the current DS epoch) until before the vacuous epoch are considered for cosignature-based rewards distribution"),Object(a.b)("li",{parentName:"ol"},"Cosignatures from shards only are considered for the vacuous epoch (i.e., the Tx block cosignatures by the DS nodes are excluded). This is because the DS committee needs to calculate the coinbase reward distribution first before it performs the consensus that generates the Tx block (with the DS nodes' cosignatures) in the vacuous epoch")),Object(a.b)("h2",{id:"technical-note"},"Technical Note"),Object(a.b)("p",null,"Developers need to take note that the coinbase rewarding data structure is managed in a bit unusual way."),Object(a.b)("p",null,"To keep track of cosignatures for cosignature-based rewarding, we use this convention: ",Object(a.b)("inlineCode",{parentName:"p"},"m_coinbaseRewardees[EPOCH][SHARDID]--\x3e{Cosigs}"),". The epoch number, however, depends on whether the shard ID refers to an actual shard or the DS committee."),Object(a.b)("p",null,"For example, the cosignatures for ",Object(a.b)("inlineCode",{parentName:"p"},"Epoch 5")," with two shards (with ID ",Object(a.b)("inlineCode",{parentName:"p"},"0")," and ",Object(a.b)("inlineCode",{parentName:"p"},"1"),") are stored this way:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{}),"m_coinbaseRewardees[5][0] --\x3e {Cosigs from Microblock proposed by shard 0}\nm_coinbaseRewardees[5][1] --\x3e {Cosigs from Microblock proposed by shard 1}\nm_coinbaseRewardees[6][-1]--\x3e {Cosigs from Tx block mined by DS Committee}\n")),Object(a.b)("p",null,"Notice that the shard ID for the DS committee is ",Object(a.b)("inlineCode",{parentName:"p"},"-1"),". Also, the epoch number is one higher than the epoch number for the shards. This is because ",Object(a.b)("inlineCode",{parentName:"p"},"IncreaseEpochNum()")," is called (inside ",Object(a.b)("inlineCode",{parentName:"p"},"StoreFinalBlock()"),") before ",Object(a.b)("inlineCode",{parentName:"p"},"SaveCoinbase()"),"."))}b.isMDXComponent=!0},295:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=n.a.createContext({}),b=function(e){var t=n.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=b(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=b(r),u=o,h=l["".concat(i,".").concat(u)]||l[u]||p[u]||a;return r?n.a.createElement(h,c(c({ref:t},d),{},{components:r})):n.a.createElement(h,c({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=r[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);