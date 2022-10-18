(this.webpackJsonpalgorithm=this.webpackJsonpalgorithm||[]).push([[0],{27:function(e,t,o){},28:function(e,t,o){},35:function(e,t,o){"use strict";o.r(t);var s,r=o(0),c=o.n(r),n=o(19),l=o.n(n),i=(o(27),o(28),o(9)),a=o(2),m=o(15),p=o(20),d=o(22),b=o(4),h="Sliding Windows",u="Two Pointers",j="Intervals",g="Tree - General",f="Tree - Trie Variation",O="Subset and Combination",x="Backtracking",v="Binary Heap",S="Graph",w="Matrix",y={"Fruit into Basket":"https://leetcode.com/problems/fruit-into-baskets/submissions/","Min Size SubArray Sum":"https://leetcode.com/problems/minimum-size-subarray-sum/","Longest Substring without Repeating Char":"https://leetcode.com/problems/longest-substring-without-repeating-characters/","Longest Substring with at most K distinct Char":"https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/","Min Window Substring":"https://leetcode.com/problems/minimum-window-substring/","Longest Repeating Char Replacement":"https://leetcode.com/problems/longest-repeating-character-replacement/","Longest Palindrome Substring":"https://leetcode.com/problems/longest-palindromic-substring/","Find All Anagrams in a String":"https://leetcode.com/problems/find-all-anagrams-in-a-string/"},T={"Two Sum - Sorted":"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/","3 Sum":"https://leetcode.com/problems/3sum/","4 Sum":"https://leetcode.com/problems/4sum/","Sort Colors":"https://leetcode.com/problems/sort-colors/","Intersection of 2 Linked Lists":"https://leetcode.com/problems/intersection-of-two-linked-lists/","Merge 2 Sorted Lists":"https://leetcode.com/problems/merge-two-sorted-lists/","Merge k Sorted Lists":"https://leetcode.com/problems/merge-k-sorted-lists/"},k={"Insert Interval":"https://leetcode.com/problems/insert-interval/","Interval List Intersections":"https://leetcode.com/problems/interval-list-intersections/","Meeting Rooms":"https://leetcode.com/problems/meeting-rooms/","Meeting Rooms II":"https://leetcode.com/problems/meeting-rooms-ii/","Merge Intervals":"https://leetcode.com/problems/merge-intervals/","My Calendar II":"https://leetcode.com/problems/my-calendar-ii/"},C={"Level Order Traversal":"https://leetcode.com/problems/binary-tree-level-order-traversal/","Zigzag Level Order Traversal":"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/","Min Depth of Binary Tree":"https://leetcode.com/problems/minimum-depth-of-binary-tree/","Lowest Common Ancestor":"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"},I=C,L={"Validate BST":"https://leetcode.com/problems/validate-binary-search-tree/","Lowest Common Ancestor of a BST":"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/","Inorder Successor in a BST":"https://leetcode.com/problems/inorder-successor-in-bst/"},M={"Implement Trie":"https://leetcode.com/problems/implement-trie-prefix-tree/","Design Add and Search":"https://leetcode.com/problems/design-add-and-search-words-data-structure/","Design Autocomplete":"https://leetcode.com/problems/design-search-autocomplete-system/","Word Search II":"https://leetcode.com/problems/word-search-ii/"},z={"Maximum Depth":"https://leetcode.com/problems/maximum-depth-of-binary-tree/","Same Tree":"https://leetcode.com/problems/same-tree/","Invert Binary Tree":"https://leetcode.com/problems/invert-binary-tree/","Maximum Path Sum":"https://leetcode.com/problems/binary-tree-maximum-path-sum/","Construct Tree from Preorder and Inorder":"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/","Serialize and Deserialize":"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/","Subtree of Another Tree":"https://leetcode.com/problems/subtree-of-another-tree/"},A=z=Object.assign(I,L,z),N={Subset:"https://leetcode.com/problems/subsets/","Subset II":"https://leetcode.com/problems/subsets-ii/",Permutations:"https://leetcode.com/problems/permutations/","Letter Combinations of a Phone Number":"https://leetcode.com/problems/letter-combinations-of-a-phone-number/"},B={"N Queens":"https://leetcode.com/problems/n-queens/","N Queens II":"https://leetcode.com/problems/n-queens-ii/","Letter Combinations of a Phone Number":"https://leetcode.com/problems/letter-combinations-of-a-phone-number/","Letter Case Permutation":"https://leetcode.com/problems/letter-case-permutation/","Valid Tic Tac Toe":"https://leetcode.com/problems/valid-tic-tac-toe-state/"},F={"Median from Data Stream":"https://leetcode.com/problems/find-median-from-data-stream/","Sort Chars by Frequency":"https://leetcode.com/problems/sort-characters-by-frequency/","Kth Largest":"https://leetcode.com/problems/kth-largest-element-in-an-array/","Top K Frequent Elements":"https://leetcode.com/problems/top-k-frequent-elements/","Rearrange String k Distance Apart":"https://leetcode.com/problems/rearrange-string-k-distance-apart/","Task Scheduler":"https://leetcode.com/problems/task-scheduler/"},P={"Clone Graph":"https://leetcode.com/problems/clone-graph/","Find the Town Judge":"https://leetcode.com/problems/find-the-town-judge/","Course Schedule":"https://leetcode.com/problems/course-schedule/","Graph Valid Tree":"https://leetcode.com/problems/graph-valid-tree/","Evaluate Division":"https://leetcode.com/problems/evaluate-division/"},R={"Set Matrix Zeroes":"https://leetcode.com/problems/set-matrix-zeroes/","Spiral Matrix":"https://leetcode.com/problems/spiral-matrix/","Rotate Image":"https://leetcode.com/problems/rotate-image/","Word Search":"https://leetcode.com/problems/word-search/","Longest Line of Consecutive Matrix":"https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solution/","N-Queens":"https://leetcode.com/problems/n-queens/","Count Submatrices with All Ones":"https://leetcode.com/problems/count-submatrices-with-all-ones/","Pacific Atlantic Water Flow":"https://leetcode.com/problems/pacific-atlantic-water-flow/","Number of Islands":"https://leetcode.com/problems/number-of-islands/"},D={"01 Matrix":"https://leetcode.com/problems/01-matrix/","Rotting Oranges":"https://leetcode.com/problems/rotting-oranges/"},q=(s={},Object(b.a)(s,h,y),Object(b.a)(s,u,T),Object(b.a)(s,j,k),Object(b.a)(s,"Tree - BFS",C),Object(b.a)(s,"Tree - DFS",I),Object(b.a)(s,"Tree - BST",L),Object(b.a)(s,g,A),Object(b.a)(s,f,M),Object(b.a)(s,O,N),Object(b.a)(s,x,B),Object(b.a)(s,v,F),Object(b.a)(s,S,P),Object(b.a)(s,w,R),Object(b.a)(s,"BFS",D),s),W=o(10),G=o.n(W),V=o(1),E=function(e){var t=e.children,o=e.onClick,s=e.className,r=e.type,c=e.size,n=e.href,l=function(){return Object(V.jsx)("button",{onClick:o,className:G()("App-button",{"App-button-danger":"danger"===r,"App-button-small":"small"===c},s),children:t})};return"link"===r?Object(V.jsx)(i.b,{className:"button-link",to:n,children:Object(V.jsx)(l,{})}):Object(V.jsx)(l,{})},J=function(e){var t=e.children,o=e.className,s=e.size,r=void 0===s?"100":s,c=e.justifyContent,n=void 0===c?"space-around":c,l=e.direction,i=void 0===l?"row":l;return Object(V.jsx)("div",{className:G()("height-100 flex width-".concat(r," flex-").concat(i),n,o),children:t})},K=function(){var e,t=Object(r.useState)(null),o=Object(d.a)(t,2),s=o[0],c=o[1],n=Object(a.h)().names,l={},i=n.split("+"),b=Object(p.a)(i);try{for(b.s();!(e=b.n()).done;){var h=e.value;l=Object(m.a)(Object(m.a)({},q[h]),l)}}catch(j){b.e(j)}finally{b.f()}var u=Object.keys(l);return Object(V.jsxs)(J,{size:"50",direction:"column",justifyContent:"space-between",className:"margin-top-small",children:[Object(V.jsxs)(J,{size:"50",direction:"column",children:[Object(V.jsx)(E,{onClick:function(){return c(u[Math.floor(Math.random()*u.length)])},children:"Randomize"}),Object(V.jsx)(E,{onClick:function(){return c(null)},children:"Show All"})]}),Object(V.jsx)("br",{}),Object(V.jsx)("div",{className:"text-align-left",children:s?Object(V.jsx)("a",{href:l[s],target:"_blank",rel:"noreferrer",children:s}):Object(V.jsx)("ul",{children:u.map((function(e){return Object(V.jsx)("li",{children:Object(V.jsx)("a",{href:l[e],target:"_blank",rel:"noreferrer",children:e})},e)}))})})]})},Q=[h,u,j,g,f,O,x,v,S,w,"BFS"],Z=function(e){var t=e.isRemove;return Object(V.jsx)(E,{type:"link",href:t?"/":"/topics/".concat(Q.join("+")),size:"small",children:t?"Remove All Topics":"Select All Topics"})},_=function(){var e=Object(a.f)(),t=Object(a.g)().pathname.split("/topics/")[1]||"",o=t.length?t.split("+"):[],s=new Set(o),r=function(t){s.has(t)?s.delete(t):s.add(t);var o=Array.from(s);o.length?e.push("/topics/".concat(o.join("+"))):e.push("/")};return Object(V.jsxs)(J,{size:"50",direction:"column",children:[Object(V.jsxs)("ul",{children:[Q.map((function(e){return Object(V.jsx)("li",{className:"margin-small",children:Object(V.jsx)(E,{onClick:function(){return r(e)},className:G()("width-100",{"selected-topic":s.has(e)}),children:e})},"".concat(e,"-selection"))})),Object(V.jsx)("li",{children:Object(V.jsx)(Z,{isRemove:s.size===Q.length})})]}),Object(V.jsx)("br",{}),Object(V.jsxs)("div",{children:[Object(V.jsx)("header",{children:"Problems from the following topics:"}),Object(V.jsx)("br",{}),Object(V.jsx)("ul",{children:o.map((function(e){return Object(V.jsx)("li",{className:"inline margin-small",children:Object(V.jsxs)(E,{size:"small",type:"danger",className:"pill-button margin-xSmall",onClick:function(){return r(e)},children:[e," X"]})},"".concat(e,"-selection-removal"))}))})]})]})},H=function(){return Object(V.jsx)("div",{className:"App",children:Object(V.jsx)(i.a,{basename:"/algorithm-app",children:Object(V.jsx)("div",{children:Object(V.jsxs)(a.c,{children:[Object(V.jsx)(a.a,{exact:!0,path:"/topics/:names",children:Object(V.jsxs)(J,{children:[Object(V.jsx)(_,{}),Object(V.jsx)(K,{})]})}),Object(V.jsx)(a.a,{path:"/",children:Object(V.jsx)(_,{})})]})})})})},X=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,36)).then((function(t){var o=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;o(e),s(e),r(e),c(e),n(e)}))};l.a.render(Object(V.jsx)(c.a.StrictMode,{children:Object(V.jsx)(H,{})}),document.getElementById("root")),X()}},[[35,1,2]]]);
//# sourceMappingURL=main.614c8adc.chunk.js.map