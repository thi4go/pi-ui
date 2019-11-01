(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./src/docs/tabs.mdx":function(e,t,b){"use strict";b.r(t),b.d(t,"default",(function(){return r}));var a=b("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=b("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),c=b("./node_modules/react/index.js"),o=b.n(c),s=b("./node_modules/@mdx-js/react/dist/index.es.js"),d=b("./node_modules/docz/dist/index.esm.js"),l=b("./src/index.js"),T={},i="wrapper";function r(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(s.b)(i,Object.assign({},T,b,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"tabs"},"Tabs"),Object(s.b)("h2",{id:"properties"},"Properties"),Object(s.b)(d.d,{of:l.A,mdxType:"Props"}),Object(s.b)("h2",{id:"usage"},"Usage"),Object(s.b)("h3",{id:"simple-tabs"},"Simple Tabs"),Object(s.b)(d.c,{__position:1,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <>\n      <Tabs onSelectTab={setActiveTabIndex} activeTabIndex={activeTabIndex}>\n        <Tab label="tab 1" />\n        <Tab label="tab 2" />\n        <Tab label="tab 3" />\n      </Tabs>\n    </>\n  )\n}',__scope:{props:this?this.props:b,useState:c.useState,Playground:d.c,Props:d.d,Tabs:l.A,Tab:l.y},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),b=t[0],n=t[1];return Object(s.b)(o.a.Fragment,null,Object(s.b)(l.A,{onSelectTab:n,activeTabIndex:b,mdxType:"Tabs"},Object(s.b)(l.y,{label:"tab 1",mdxType:"Tab"}),Object(s.b)(l.y,{label:"tab 2",mdxType:"Tab"}),Object(s.b)(l.y,{label:"tab 3",mdxType:"Tab"})))})),Object(s.b)("h3",{id:"vertical-tabs"},"Vertical Tabs"),Object(s.b)(d.c,{__position:2,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <>\n      <Tabs\n        mode="vertical"\n        onSelectTab={setActiveTabIndex}\n        activeTabIndex={activeTabIndex}\n      >\n        <Tab label="What is Politeia?" />\n        <Tab label="Proposals?" />\n        <Tab label="Censorship" />\n      </Tabs>\n    </>\n  )\n}',__scope:{props:this?this.props:b,useState:c.useState,Playground:d.c,Props:d.d,Tabs:l.A,Tab:l.y},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),b=t[0],n=t[1];return Object(s.b)(o.a.Fragment,null,Object(s.b)(l.A,{mode:"vertical",onSelectTab:n,activeTabIndex:b,mdxType:"Tabs"},Object(s.b)(l.y,{label:"What is Politeia?",mdxType:"Tab"}),Object(s.b)(l.y,{label:"Proposals?",mdxType:"Tab"}),Object(s.b)(l.y,{label:"Censorship",mdxType:"Tab"})))})),Object(s.b)("h3",{id:"tabs-with-counting"},"Tabs with counting"),Object(s.b)(d.c,{__position:3,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <>\n      <Tabs onSelectTab={setActiveTabIndex} activeTabIndex={activeTabIndex}>\n        <Tab label="tab 1" count={1} />\n        <Tab label="tab 2" count={4} />\n      </Tabs>\n    </>\n  )\n}',__scope:{props:this?this.props:b,useState:c.useState,Playground:d.c,Props:d.d,Tabs:l.A,Tab:l.y},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),b=t[0],n=t[1];return Object(s.b)(o.a.Fragment,null,Object(s.b)(l.A,{onSelectTab:n,activeTabIndex:b,mdxType:"Tabs"},Object(s.b)(l.y,{label:"tab 1",count:1,mdxType:"Tab"}),Object(s.b)(l.y,{label:"tab 2",count:4,mdxType:"Tab"})))})),Object(s.b)("h3",{id:"tabs-with-content"},"Tabs with content"),Object(s.b)(d.c,{__position:4,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <>\n      <Tabs onSelectTab={setActiveTabIndex} activeTabIndex={activeTabIndex}>\n        <Tab label="tab 1" count={1}>\n          <div>tab content 1</div>\n        </Tab>\n        <Tab label="tab 2" count={4}>\n          <div>tab content 2</div>\n        </Tab>\n      </Tabs>\n    </>\n  )\n}',__scope:{props:this?this.props:b,useState:c.useState,Playground:d.c,Props:d.d,Tabs:l.A,Tab:l.y},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),b=t[0],n=t[1];return Object(s.b)(o.a.Fragment,null,Object(s.b)(l.A,{onSelectTab:n,activeTabIndex:b,mdxType:"Tabs"},Object(s.b)(l.y,{label:"tab 1",count:1,mdxType:"Tab"},Object(s.b)("div",null,"tab content 1")),Object(s.b)(l.y,{label:"tab 2",count:4,mdxType:"Tab"},Object(s.b)("div",null,"tab content 2"))))})),Object(s.b)("h3",{id:"tabs-in-dropwdown-mode"},"Tabs in dropwdown mode"),Object(s.b)(d.c,{__position:5,__code:'() => {\n  const [activeTabIndex, setActiveTabIndex] = useState(0)\n  return (\n    <>\n      <Tabs\n        onSelectTab={setActiveTabIndex}\n        activeTabIndex={activeTabIndex}\n        mode="dropdown"\n      >\n        <Tab label="All Proposals" count={4} />\n        <Tab label="In discussion" count={2} />\n        <Tab label="Voting" count={5} />\n        <Tab label="Approved" count={25} />\n        <Tab label="Rejected" count={30} />\n        <Tab label="Abandoned" count={5} />\n      </Tabs>\n    </>\n  )\n}',__scope:{props:this?this.props:b,useState:c.useState,Playground:d.c,Props:d.d,Tabs:l.A,Tab:l.y},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),b=t[0],n=t[1];return Object(s.b)(o.a.Fragment,null,Object(s.b)(l.A,{onSelectTab:n,activeTabIndex:b,mode:"dropdown",mdxType:"Tabs"},Object(s.b)(l.y,{label:"All Proposals",count:4,mdxType:"Tab"}),Object(s.b)(l.y,{label:"In discussion",count:2,mdxType:"Tab"}),Object(s.b)(l.y,{label:"Voting",count:5,mdxType:"Tab"}),Object(s.b)(l.y,{label:"Approved",count:25,mdxType:"Tab"}),Object(s.b)(l.y,{label:"Rejected",count:30,mdxType:"Tab"}),Object(s.b)(l.y,{label:"Abandoned",count:5,mdxType:"Tab"})))})))}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/tabs.mdx"}}),r.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-tabs.2f5c110f8c96be954dc7.js.map