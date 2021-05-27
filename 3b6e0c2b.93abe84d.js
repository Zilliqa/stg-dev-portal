(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{166:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(288)),o={id:"staking-phase11-notice",title:"Phase 1.1 Migration Notice",keywords:["staking","general information","ssn","seed node","zilliqa","migration"],description:"Staking phase 1.1 migration notice"},l={id:"staking/phase1/staking-phase11-notice",isDocsHomePage:!1,title:"Phase 1.1 Migration Notice",description:"Staking phase 1.1 migration notice",source:"@site/docs/staking/phase1/staking-phase11-notice.md",permalink:"/docs/staking/phase1/staking-phase11-notice",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/staking/phase1/staking-phase11-notice.md",sidebar:"StakingSidebar",previous:{title:"Disclaimer",permalink:"/docs/staking/staking-disclaimer"},next:{title:"Phase 1  Overview",permalink:"/docs/staking/phase1/staking-phase1-overview"}},b=[{value:"Staking Phase 1.1",id:"staking-phase-11",children:[]},{value:"Important Notes",id:"important-notes",children:[]},{value:"Information on Contracts",id:"information-on-contracts",children:[]},{value:"Changes to Staking Parameters (Mainnet)",id:"changes-to-staking-parameters-mainnet",children:[]},{value:"Migration Duration",id:"migration-duration",children:[]},{value:"New Feature - Swapping of Wallet for Delegator",id:"new-feature---swapping-of-wallet-for-delegator",children:[]},{value:"References",id:"references",children:[]}],c={rightToc:b};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("strong",{parentName:"p"},"Staking Phase 1 Migration")),Object(i.b)("p",{parentName:"div"},"We will be performing a contract migration from staking phase 1 to phase 1.1. The migration will happen on Tuesday 11th May 2021. Phase 1 contract will be frozen permanently at around 04:45 UTC.\nThe migration may take up to 7 days to complete. We will aim to re-open staking as soon as the migration is completed."))),Object(i.b)("h2",{id:"staking-phase-11"},"Staking Phase 1.1"),Object(i.b)("p",null,"As proposed in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/ZIP/blob/master/zips/zip-19.md"}),"ZIP-19"),", staking phase 1.1 consists of the following changes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Transfer of stake from one account to another account"),Object(i.b)("li",{parentName:"ul"},"Proper deletion of empty maps to prevent contract states bloating"),Object(i.b)("li",{parentName:"ul"},"Removal of user-defined ADT in ",Object(i.b)("inlineCode",{parentName:"li"},"AssignStakeRewards")," transition"),Object(i.b)("li",{parentName:"ul"},"Staking parameters change")),Object(i.b)("p",null,"The migration to phase 1.1 will involve the following: "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Freezing of phase 1.0 contracts"),Object(i.b)("li",{parentName:"ol"},"Deployment of new proxy and ssnlist contracts"),Object(i.b)("li",{parentName:"ol"},"Migration of states and funds from phase 1 to phase 1.1")),Object(i.b)("h2",{id:"important-notes"},"Important Notes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"No staking activities can be performed during the migration"),Object(i.b)("li",{parentName:"ul"},"The contract addresses will be changed after the migration"),Object(i.b)("li",{parentName:"ul"},"No action is needed for ",Object(i.b)("strong",{parentName:"li"},"delegators")),Object(i.b)("li",{parentName:"ul"},"For ",Object(i.b)("strong",{parentName:"li"},"wallets, explorers and node operators"),", you will need to switch to the new contract addresses after the migration. All transition names and parameters in the contracts remain the same"),Object(i.b)("li",{parentName:"ul"},"Stake rewards will be retroactively distributed in full to all delegators and node operators for the period of migration"),Object(i.b)("li",{parentName:"ul"},"We will also update the Zillion staking portal to point to the phase 1.1 contracts after migration")),Object(i.b)("h2",{id:"information-on-contracts"},"Information on Contracts"),Object(i.b)("p",null,"For wallets and explorers, we will aim to let you know of the phase 1.1 Mainnet staking contract addresses as soon as we can. In the meantime, we have migrated the testnet staking contract from phase 1 to phase 1.1. Please refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"staking-general-information"}),"this page")," for the phase 1.1 testnet contracts."),Object(i.b)("h2",{id:"changes-to-staking-parameters-mainnet"},"Changes to Staking Parameters (Mainnet)"),Object(i.b)("p",null,"With the Mainnet upgrade to Zilliqa ",Object(i.b)("inlineCode",{parentName:"p"},"v8.0.0"),", the block time will be reduced. As such, we will be making the following staking parameter changes:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Phase 1.0"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Phase 1.1 (mainnet v8.0.0 - v8.0.3)"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Phase 1.1 (mainnet v8.0.4)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1 cycle duration"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"~27 hours"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"~23.83 hours"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"~23.91 hours")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Blocks per cycle"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1,800"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2,200"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2,200")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rewards per cycle"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1,980,000 $ZIL"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1,548,800 $ZIL"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1,795,200 $ZIL")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unbonding period"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"24,000 final blocks"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30,800 final blocks (~2 weeks)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"30,800 final blocks (~2 weeks)")))),Object(i.b)("p",null,"For wallets and explorers, you may need to adjust your UI to reflect the changes in the parameters. "),Object(i.b)("h2",{id:"migration-duration"},"Migration Duration"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Date/Time"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migration start"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tuesday 11th May 2021 04:45 UTC")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migration end"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tuesday 18th May 2021 05:00 UTC")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"In the event of migration ending earlier than scheduled, we will resume the staking activities at the earliest possible time."))),Object(i.b)("h2",{id:"new-feature---swapping-of-wallet-for-delegator"},"New Feature - Swapping of Wallet for Delegator"),Object(i.b)("p",null,"A new feature will be added to allow transferring of the entire stake deposit, rewards and pending withdrawals across all SSNs to a new address. Such a transfer will not require the user to go through an unbonding period and instead the transfer of stake and other relevant states will be immediately executed upon confirmation of the transfer. No penalty will be incurred for this transfer and there will be no restriction on the number of transfers."),Object(i.b)("p",null,"The new transitions are as follows:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"RequestDelegatorSwap")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"new_deleg_addr: ByStr20, initiator: ByStr20")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Creates a request to another delegator to indicate transferring all existing stakes, rewards, etc., to this new delegator.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"initiator")," is the address of the delegator who wants to transfer his/her stakes.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"new_deleg_addr")," is the address of the recipient that would be receiving all the staked amount, rewards, pending withdrawals, etc., of the ",Object(i.b)("inlineCode",{parentName:"td"},"initiator")," (original owner). The ",Object(i.b)("inlineCode",{parentName:"td"},"initiator")," is allowed to change the recipient by sending the request with another ",Object(i.b)("inlineCode",{parentName:"td"},"new_deleg_addr"),". The ",Object(i.b)("inlineCode",{parentName:"td"},"initiator")," can also revoke the request via ",Object(i.b)("inlineCode",{parentName:"td"},"RevokeDelegatorSwap"),".",Object(i.b)("br",null),Object(i.b)("br",null),"On the recipient end, the ",Object(i.b)("inlineCode",{parentName:"td"},"new_deleg_addr")," can either ",Object(i.b)("inlineCode",{parentName:"td"},"ConfirmDelegatorSwap")," to accept the swap or ",Object(i.b)("inlineCode",{parentName:"td"},"RejectDelegatorSwap")," to reject the swap.",Object(i.b)("br",null),Object(i.b)("br",null),"To avoid either party from gaining or losing rewards after the swap, both parties must not have buffered deposits or unwithdrawn rewards at the time of request and confirming. Also, the ",Object(i.b)("inlineCode",{parentName:"td"},"initiator")," is not allowed to make a request to ",Object(i.b)("inlineCode",{parentName:"td"},"new_deleg_addr")," if there is an existing request made by ",Object(i.b)("inlineCode",{parentName:"td"},"new_deleg_addr")," to the ",Object(i.b)("inlineCode",{parentName:"td"},"initiator"),", i.e., if there exists a ",Object(i.b)("inlineCode",{parentName:"td"},"A -> B")," request, then ",Object(i.b)("inlineCode",{parentName:"td"},"B")," cannot make a request to ",Object(i.b)("inlineCode",{parentName:"td"},"A")," unless ",Object(i.b)("inlineCode",{parentName:"td"},"B")," accepts or rejects the existing request first. However, ",Object(i.b)("inlineCode",{parentName:"td"},"B")," can make other swap requests to other delegators.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("strong",{parentName:"td"},"Change is irreversible once the recipient accepts the swap request, so please be cautious of the ",Object(i.b)("inlineCode",{parentName:"strong"},"new_deleg_addr"),"."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"RevokeDelegatorSwap")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"initiator: ByStr20")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Revokes a swap request. This is used only by the ",Object(i.b)("inlineCode",{parentName:"td"},"initiator")," who has made an existing swap request and wishes to cancel it.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"ConfirmDelegatorSwap")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"requestor: ByStr20, initiator: ByStr20")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Accepts a swap request from a requestor.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"initiator")," is the new delegator that would be inheriting all the staked amount, withdrawals, rewards, etc., from ",Object(i.b)("inlineCode",{parentName:"td"},"requestor"),".",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"requestor")," is the delegator who has initiated a swap request via ",Object(i.b)("inlineCode",{parentName:"td"},"RequestDelegatorSwap"),".",Object(i.b)("br",null),Object(i.b)("br",null),"To avoid either party from gaining or losing rewards after the swap, both parties must not have buffered deposits or unwithdrawn rewards at the time of confirming.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"RejectDelegatorSwap")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"requestor: ByStr20, initiator: ByStr20")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rejects a swap request from a requestor.",Object(i.b)("br",null),Object(i.b)("br",null),"Once rejected, the requestor must create the swap request again if he/she wishes to revert the rejection.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"initiator")," is the new delegator that would be inheriting all the staked amount, withdrawals, rewards, etc., from ",Object(i.b)("inlineCode",{parentName:"td"},"requestor"),".",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("inlineCode",{parentName:"td"},"requestor")," is the delegator who has initiated a swap request via ",Object(i.b)("inlineCode",{parentName:"td"},"RequestDelegatorSwap"),".")))),Object(i.b)("p",null,"For more information, please refer to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Zilliqa/ZIP/blob/master/zips/zip-19.md#design-changes-for-phase-11"}),"Transfer of stake deposit between accounts")),Object(i.b)("h2",{id:"references"},"References"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Zilliqa/staking-contract"}),"Phase 1.1 staking contracts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Zilliqa/ZIP/blob/master/zips/zip-19.md"}),"ZIP-19 - Seed Node Staking Mechanism: Phase 1.1")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../../dev/dev-upgrade-v8"}),"Zilliqa Mainnet V8 Upgrade Notice"))))}s.isMDXComponent=!0},288:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,O=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return a?r.a.createElement(O,l(l({ref:t},c),{},{components:a})):r.a.createElement(O,l({ref:t},c))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);