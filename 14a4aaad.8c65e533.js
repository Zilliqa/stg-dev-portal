(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),c=(a(0),a(298)),o={id:"core-accounts",title:"Account Management",keywords:["core","account"],description:"Core protocol design - account management."},i={id:"contributors/core-accounts",isDocsHomePage:!1,title:"Account Management",description:"Core protocol design - account management.",source:"@site/docs/contributors/core-accounts.md",permalink:"/docs/contributors/core-accounts",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/contributors/core-accounts.md",sidebar:"ContributorsSidebar",previous:{title:"Message Queues and Jobs",permalink:"/docs/contributors/core-message-queues"},next:{title:"Transaction Lifecycle",permalink:"/docs/contributors/core-transaction-lifecycle"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Contract Account States",id:"contract-account-states",children:[]},{value:"Account Data Storage",id:"account-data-storage",children:[]},{value:"State Tries",id:"state-tries",children:[]},{value:"State Trie Library",id:"state-trie-library",children:[]},{value:"AccountStore Class Hierarchy",id:"accountstore-class-hierarchy",children:[]},{value:"State Deltas",id:"state-deltas",children:[]},{value:"Account and State Management During Tx Epoch",id:"account-and-state-management-during-tx-epoch",children:[]},{value:"Account and State Management During Node Launch",id:"account-and-state-management-during-node-launch",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("hr",null),Object(c.b)("h2",{id:"overview"},"Overview"),Object(c.b)("p",null,"The Zilliqa blockchain supports two types of accounts:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Non-contract")," - for balance transfers"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Contract")," - for both balance transfers and smart contract execution")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/contributors/core/account-management/image01.png",alt:"image01"}))),Object(c.b)("p",null,"While non-contract accounts simply need to record base data like ",Object(c.b)("strong",{parentName:"p"},"balance")," and ",Object(c.b)("strong",{parentName:"p"},"nonce"),", contract accounts also have to store smart contract ",Object(c.b)("strong",{parentName:"p"},"code"),", as well as ",Object(c.b)("strong",{parentName:"p"},"immutable and mutable states"),"."),Object(c.b)("p",null,"The diagram here shows that account data is organized according to those common to all accounts (",Object(c.b)("inlineCode",{parentName:"p"},"AccountBase"),") and those that only contract accounts would have (",Object(c.b)("inlineCode",{parentName:"p"},"Account"),")."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"We can distinguish a contract from non-contract account by checking if ",Object(c.b)("inlineCode",{parentName:"p"},"m_codeHash")," is NULL. We can also choose to serialize only the base fields or both the base and the contract-related fields."))),Object(c.b)("h2",{id:"contract-account-states"},"Contract Account States"),Object(c.b)("p",null,"A transaction that requests a contract ",Object(c.b)("strong",{parentName:"p"},"deployment")," triggers the generation of a new contract account and the setting up of that account's immutable and mutable states. Then, transactions that invoke ",Object(c.b)("strong",{parentName:"p"},"transition calls")," on that contract account trigger the updating of the mutable states."),Object(c.b)("p",null,"Immutable states are more commonly referred to as the ",Object(c.b)("strong",{parentName:"p"},"init data"),", and examples of this include ",Object(c.b)("inlineCode",{parentName:"p"},"_scilla_version"),", ",Object(c.b)("inlineCode",{parentName:"p"},"_library"),", and ",Object(c.b)("inlineCode",{parentName:"p"},"_extlibs"),"."),Object(c.b)("p",null,"Init data is supplied to the node within the transaction body (please refer to the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/apis/api-transaction-create-tx"}),"CreateTransaction")," API documentation), although the node will also eventually add more fields into init data (such as ",Object(c.b)("inlineCode",{parentName:"p"},"_creation_block")," and ",Object(c.b)("inlineCode",{parentName:"p"},"_this_address"),") during transaction processing. "),Object(c.b)("p",null,"Mutable states, on the other hand, are the variables that are manipulated by the Scilla interpreter as it executes a transition on the contract. The Zilliqa node provides the Scilla interpreter access to these states through the Scilla IPC server."),Object(c.b)("h2",{id:"account-data-storage"},"Account Data Storage"),Object(c.b)("p",null,"Storage of accounts in the Zilliqa blockchain can be quite complex to understand due to the fact that account data is spread out across several leveldb databases:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"leveldb Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Managed By"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Key"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"state"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AccountStoreTrie"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AccountBase")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contractCode"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ContractStorage"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Code")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contractInitState2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ContractStorage"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tx data field + _creation_block + _this_address")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contractStateData2"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ContractStorage"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Address.vname",Object(c.b)("br",null),"Address._depth.vname",Object(c.b)("br",null),"Address._type.vname",Object(c.b)("br",null),"Address.vname.index1.index2..."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"State value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"contractTrie"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ContractStorage"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hash of contractStateData2 key"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"State value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stateRoot"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BlockStorage"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LATEST_EPOCH_STATES_UPDATED",Object(c.b)("br",null),"STATEROOT"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Epoch number",Object(c.b)("br",null),"Trie root value")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"stateDelta"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"BlockStorage"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Tx block number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List of Account")))),Object(c.b)("h2",{id:"state-tries"},"State Tries"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"state")," and ",Object(c.b)("strong",{parentName:"p"},"contractTrie")," databases are implementations of Ethereum's Merkle Patricia Trie data structure. "),Object(c.b)("p",null,"A trie is a key-value data structure with a root hash and hashes along each key-value pair. The root hash is updated every time the structure is updated (e.g., by adding another key-value pair)."),Object(c.b)("p",null,"Please see this ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/@chiqing/merkle-patricia-trie-explained-ae3ac6a7e123"}),"Medium article")," for how the trie structure evolves (specifically, where the root node is) as you add transactions one-by-one."),Object(c.b)("p",null,"The trie provides the ability to prove that a specific key-value pair exists within the structure without the requesting party needing to know the rest of the structure. All the requesting party needs is the hash of the key-value pair at the particular time that the structure is being evaluated. For example, the ",Object(c.b)("strong",{parentName:"p"},"contractTrie")," database supports requests from the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/apis/api-contract-get-state-proof"}),"GetStateProof")," API, which requests for proof of a particular state for an account at a specific Tx block."),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"contractTrie")," database was implemented in order to support bridging between the Zilliqa and Ethereum blockchains. While the contract state trie is useful for the blockchain bridging aspect, it is ",Object(c.b)("em",{parentName:"p"},"not")," vital to the normal operation of the Zilliqa protocol, i.e., it has no impact on the normal transaction processing, consensus execution, and account state updating. Therefore, it does not need to be discussed further at present."),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"state")," database, on the other hand, is used to store the ",Object(c.b)("inlineCode",{parentName:"p"},"AccountBase")," portion of the account data."),Object(c.b)("h2",{id:"state-trie-library"},"State Trie Library"),Object(c.b)("p",null,"Zilliqa uses Ethereum's ",Object(c.b)("inlineCode",{parentName:"p"},"GenericTrieDB")," library for the trie structure. The ",Object(c.b)("inlineCode",{parentName:"p"},"GenericTrieDB")," class contains a ",Object(c.b)("inlineCode",{parentName:"p"},"TraceableDB")," member, which manages the loading from or saving to disk (i.e., to the levelDB database) of the trie structure."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/contributors/core/account-management/image02.png",alt:"image02"}))),Object(c.b)("p",null,"The basic usage will involve:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Calling ",Object(c.b)("inlineCode",{parentName:"li"},"init()")," to reset the root to NULL"),Object(c.b)("li",{parentName:"ol"},"Calling ",Object(c.b)("inlineCode",{parentName:"li"},"insert()")," to add nodes to the trie"),Object(c.b)("li",{parentName:"ol"},"Calling ",Object(c.b)("inlineCode",{parentName:"li"},"at()")," to access any of the added nodes"),Object(c.b)("li",{parentName:"ol"},"Calling ",Object(c.b)("inlineCode",{parentName:"li"},"db()")," to access the underlying ",Object(c.b)("inlineCode",{parentName:"li"},"TraceableDB")," member, and then either",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"Calling ",Object(c.b)("inlineCode",{parentName:"li"},"commit()")," to save the changes to disk"),Object(c.b)("li",{parentName:"ol"},"Calling ",Object(c.b)("inlineCode",{parentName:"li"},"rollback()")," to discard changes")))),Object(c.b)("p",null,"This basic usage applies to the ",Object(c.b)("strong",{parentName:"p"},"state")," database. In this context, a node basically refers to the ",Object(c.b)("inlineCode",{parentName:"p"},"Address")," (key) and the ",Object(c.b)("inlineCode",{parentName:"p"},"AccountBase")," (value) pair."),Object(c.b)("p",null,"For the ",Object(c.b)("strong",{parentName:"p"},"contractTrie")," database, the usage is slightly more complex due to the fact that separate tries are maintained for a maximum of ",Object(c.b)("inlineCode",{parentName:"p"},"NUM_DS_EPOCHS_STATE_HISTORY")," DS epochs. As mentioned in the previous section, we won't be going deeper into ",Object(c.b)("strong",{parentName:"p"},"contractTrie")," for now."),Object(c.b)("h2",{id:"accountstore-class-hierarchy"},"AccountStore Class Hierarchy"),Object(c.b)("p",null,"The diagram below highlights the Zilliqa architecture around account and account state storage."),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/contributors/core/account-management/image03.png",alt:"image03"}))),Object(c.b)("p",null,"There are essentially ",Object(c.b)("em",{parentName:"p"},"three")," account store objects in a Zilliqa node:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AccountStore")," holds the accounts that have been committed to disk (i.e., the blockchain)."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AccountStoreTemp")," holds the account data that resides in transient memory and that has yet to be validated by the nodes during consensus."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AccountStoreAtomic")," also holds account data in transient memory, but only for the current transaction being executed. More precisely, it is used for ",Object(c.b)("strong",{parentName:"li"},"contract call")," transactions, where multiple accounts may be updated (e.g., a chain call). After the transaction is completely processed, the contents are moved to the ",Object(c.b)("inlineCode",{parentName:"li"},"AccountStoreTemp")," object.")),Object(c.b)("p",null,"The rest of the account store hierarchy is composed of abstract classes:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AccountStoreBase")," contains the map of accounts in transient memory. It also provides an ",Object(c.b)("inlineCode",{parentName:"li"},"UpdateAccount()")," function for use on non-contract (i.e., payment) transactions."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AccountStoreSC")," contains most of the smart contract-related functionality, including an ",Object(c.b)("inlineCode",{parentName:"li"},"UpdateAccount()")," function for use on contract (deployment and call) transactions."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AccountStoreTrie")," contains trie management functions and the ",Object(c.b)("inlineCode",{parentName:"li"},"GenericTrieDB")," instance for the base account data and its storage in the ",Object(c.b)("strong",{parentName:"li"},"state")," leveldb database.")),Object(c.b)("p",null,"Apart from the ",Object(c.b)("strong",{parentName:"p"},"state")," leveldb database, the other account-related databases listed in the previous section are managed by the ",Object(c.b)("inlineCode",{parentName:"p"},"ContractStorage")," and ",Object(c.b)("inlineCode",{parentName:"p"},"BlockStorage")," classes."),Object(c.b)("p",null,"Finally, the diagram also shows that aside from the account store classes, the ",Object(c.b)("inlineCode",{parentName:"p"},"ScillaIPCServer")," also interacts with ",Object(c.b)("inlineCode",{parentName:"p"},"ContractStorage")," whenever the Scilla Interpreter requests for state access during the execution of a contract."),Object(c.b)("h2",{id:"state-deltas"},"State Deltas"),Object(c.b)("p",null,"State deltas are the differences between what's stored in disk (i.e., the blockchain) and what's changed after transaction execution for a particular account (whether non-contract or otherwise)."),Object(c.b)("p",null,"Transaction processing by a node does not immediately result in committing any such differences to disk. As with any distributed ledger system, all nodes in the network must first reach consensus before they update their storage in a uniform manner. Until the consensus is completed (i.e., the proposed Tx Block is accepted by all nodes), state deltas must first be managed by a node separately within its transient memory."),Object(c.b)("p",null,"It should also be noted that ",Object(c.b)("em",{parentName:"p"},"multiple")," transactions could be called on the ",Object(c.b)("em",{parentName:"p"},"same")," contract (for example, several users withdrawing rewards from the Staking contract), and thus the complete set of state deltas cannot be known immediately after one transaction, but rather only after all transactions for the current Tx epoch have been processed."),Object(c.b)("p",null,"Another consideration unique to Zilliqa's architecture is that shards manage their own set of transactions that are different from those of other shards. This means nodes belonging to different shards will be holding different state deltas in their transient memory during the consensus period. Therefore, in order for all nodes to arrive at the same final states, these state deltas will eventually have to be shared across shards."),Object(c.b)("p",null,"As can be inferred from the previous section, state deltas are generated by getting the differences for an account between ",Object(c.b)("inlineCode",{parentName:"p"},"AccountStore")," and ",Object(c.b)("inlineCode",{parentName:"p"},"AccountStoreTemp"),"."),Object(c.b)("h2",{id:"account-and-state-management-during-tx-epoch"},"Account and State Management During Tx Epoch"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/contributors/core/account-management/image04.png",alt:"image04"}))),Object(c.b)("h2",{id:"account-and-state-management-during-node-launch"},"Account and State Management During Node Launch"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"../../img/contributors/core/account-management/image05.png",alt:"image05"}))))}b.isMDXComponent=!0},298:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,m=d["".concat(o,".").concat(p)]||d[p]||u[p]||c;return a?r.a.createElement(m,i(i({ref:t},s),{},{components:a})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);