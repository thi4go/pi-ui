(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/docs/modal.mdx":function(e,o,t){"use strict";t.r(o),t.d(o,"default",(function(){return m}));var n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/react/index.js"),a=t.n(s),l=t("./node_modules/@mdx-js/react/dist/index.es.js"),d=t("./node_modules/docz/dist/index.esm.js"),u=t("./src/index.js"),r={},c="wrapper";function m(e){var o=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)(c,Object.assign({},r,t,{components:o,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"modal"},"Modal"),Object(l.b)("h2",{id:"properties"},"Properties"),Object(l.b)(d.d,{of:u.s,mdxType:"Props"}),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("h3",{id:"simple-modal"},"Simple Modal"),Object(l.b)(d.c,{__position:1,__code:"() => {\n  const [showModal, setShowModal] = useState(false)\n  const openModal = () => setShowModal(true)\n  const closeModal = () => setShowModal(false)\n  return (\n    <>\n      <Button onClick={openModal}>Open Modal</Button>\n      <Modal show={showModal} onClose={closeModal}>\n        Simple Modal\n      </Modal>\n    </>\n  )\n}",__scope:{props:this?this.props:t,useState:s.useState,Playground:d.c,Props:d.d,Modal:u.r,Button:u.c,P:u.t,ModalWrapper:u.s},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(s.useState)(!1),o=Object(n.a)(e,2),t=o[0],i=o[1];return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.c,{onClick:function(){return i(!0)},mdxType:"Button"},"Open Modal"),Object(l.b)(u.r,{show:t,onClose:function(){return i(!1)},mdxType:"Modal"},"Simple Modal"))})),Object(l.b)("h3",{id:"modal-with-title"},"Modal with title"),Object(l.b)(d.c,{__position:2,__code:'() => {\n  const [showModal, setShowModal] = useState(false)\n  const openModal = () => setShowModal(true)\n  const closeModal = () => setShowModal(false)\n  return (\n    <>\n      <Button onClick={openModal}>Open Modal</Button>\n      <Modal\n        title="Title"\n        iconType="mail"\n        show={showModal}\n        onClose={closeModal}\n      >\n        Content!\n      </Modal>\n    </>\n  )\n}',__scope:{props:this?this.props:t,useState:s.useState,Playground:d.c,Props:d.d,Modal:u.r,Button:u.c,P:u.t,ModalWrapper:u.s},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(s.useState)(!1),o=Object(n.a)(e,2),t=o[0],i=o[1];return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.c,{onClick:function(){return i(!0)},mdxType:"Button"},"Open Modal"),Object(l.b)(u.r,{title:"Title",iconType:"mail",show:t,onClose:function(){return i(!1)},mdxType:"Modal"},"Content!"))})),Object(l.b)("h3",{id:"unclosable-modal"},"Unclosable Modal"),Object(l.b)(d.c,{__position:3,__code:'() => {\n  const [showModal, setShowModal] = useState(false)\n  const openModal = () => setShowModal(true)\n  const closeModal = () => setShowModal(false)\n  return (\n    <>\n      <Button onClick={openModal}>Open Modal</Button>\n      <Modal\n        title="Title"\n        iconType="mail"\n        show={showModal}\n        disableClose="true"\n        onClose={closeModal}\n      >\n        <P>Content!</P>\n        <br />\n        <Button onClick={closeModal}>close me!</Button>\n      </Modal>\n    </>\n  )\n}',__scope:{props:this?this.props:t,useState:s.useState,Playground:d.c,Props:d.d,Modal:u.r,Button:u.c,P:u.t,ModalWrapper:u.s},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(s.useState)(!1),o=Object(n.a)(e,2),t=o[0],i=o[1],d=function(){return i(!1)};return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.c,{onClick:function(){return i(!0)},mdxType:"Button"},"Open Modal"),Object(l.b)(u.r,{title:"Title",iconType:"mail",show:t,disableClose:"true",onClose:d,mdxType:"Modal"},Object(l.b)(u.t,{mdxType:"P"},"Content!"),Object(l.b)("br",null),Object(l.b)(u.c,{onClick:d,mdxType:"Button"},"close me!")))})),Object(l.b)("h3",{id:"modal-with-huge-contet"},"Modal with huge contet"),Object(l.b)(d.c,{__position:4,__code:'() => {\n  const [showModal, setShowModal] = useState(false)\n  const openModal = () => setShowModal(true)\n  const closeModal = () => setShowModal(false)\n  return (\n    <>\n      <Button onClick={openModal}>Open Modal</Button>\n      <Modal title="Title" show={showModal} onClose={closeModal}>\n        <P>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,\n          veniam distinctio illum, nesciunt dolorum tempore minus voluptate\n          omnis facilis illo earum inventore quibusdam iste dolores id unde\n          neque ipsum rerum?\n        </P>\n        <P>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae\n          perspiciatis, natus dolorum adipisci repellendus debitis temporibus\n          fuga dicta dolorem veniam doloribus maxime nostrum? Dolores ullam at\n          voluptate saepe ipsa!\n        </P>\n        <P>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,\n          eligendi! Cum vero non saepe eius ratione quam ea laudantium dolor\n          autem, illo aliquam commodi sequi iure at totam fugit dolores.\n        </P>\n        <P>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,\n          veniam distinctio illum, nesciunt dolorum tempore minus voluptate\n          omnis facilis illo earum inventore quibusdam iste dolores id unde\n          neque ipsum rerum?\n        </P>\n        <P>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae\n          perspiciatis, natus dolorum adipisci repellendus debitis temporibus\n          fuga dicta dolorem veniam doloribus maxime nostrum? Dolores ullam at\n          voluptate saepe ipsa!\n        </P>\n        <P>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,\n          eligendi! Cum vero non saepe eius ratione quam ea laudantium dolor\n          autem, illo aliquam commodi sequi iure at totam fugit dolores.\n        </P>\n      </Modal>\n    </>\n  )\n}',__scope:{props:this?this.props:t,useState:s.useState,Playground:d.c,Props:d.d,Modal:u.r,Button:u.c,P:u.t,ModalWrapper:u.s},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(s.useState)(!1),o=Object(n.a)(e,2),t=o[0],i=o[1];return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.c,{onClick:function(){return i(!0)},mdxType:"Button"},"Open Modal"),Object(l.b)(u.r,{title:"Title",show:t,onClose:function(){return i(!1)},mdxType:"Modal"},Object(l.b)(u.t,{mdxType:"P"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veniam distinctio illum, nesciunt dolorum tempore minus voluptate omnis facilis illo earum inventore quibusdam iste dolores id unde neque ipsum rerum?"),Object(l.b)(u.t,{mdxType:"P"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae perspiciatis, natus dolorum adipisci repellendus debitis temporibus fuga dicta dolorem veniam doloribus maxime nostrum? Dolores ullam at voluptate saepe ipsa!"),Object(l.b)(u.t,{mdxType:"P"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eligendi! Cum vero non saepe eius ratione quam ea laudantium dolor autem, illo aliquam commodi sequi iure at totam fugit dolores."),Object(l.b)(u.t,{mdxType:"P"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veniam distinctio illum, nesciunt dolorum tempore minus voluptate omnis facilis illo earum inventore quibusdam iste dolores id unde neque ipsum rerum?"),Object(l.b)(u.t,{mdxType:"P"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae perspiciatis, natus dolorum adipisci repellendus debitis temporibus fuga dicta dolorem veniam doloribus maxime nostrum? Dolores ullam at voluptate saepe ipsa!"),Object(l.b)(u.t,{mdxType:"P"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, eligendi! Cum vero non saepe eius ratione quam ea laudantium dolor autem, illo aliquam commodi sequi iure at totam fugit dolores.")))})))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/docs/modal.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=docs-modal.2f5c110f8c96be954dc7.js.map