(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(143)),a={},c={id:"SUIB-solutions-background",isDocsHomePage:!1,title:"SUIB-solutions-background",description:"1.  2.",source:"@site/docs/SUIB-solutions-background.md",permalink:"/docs/SUIB-solutions-background",editUrl:"https://github.com/nqminds/docusaurus-template/edit/master/docs/SUIB-solutions-background.md"},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"1--2"},"1. # 2."),Object(i.b)("h1",{id:"3-background"},"3. Background"),Object(i.b)("p",null,"Symmetrical encryption uses the same key to encrypt. To exchange the key an asymmetrical encryption can be used. A known shared public key of a recipient is used to encrypt the data and only the recipient with the private key can decrypt the traffic. The public key information can be published somewhere or exchanged in the protocol. ITU-T x.509 certificates can be used to exchange the information. This certificate can specify the subject to indicate what the certificate is valid for. It can also have an issuer who signs the certificate. TLS is a protocol that browsers use to communicate securely. TLS Certificates are not the only schemes that provide secure connections.  "),Object(i.b)("p",null,"TLS Certificates therefor have a component where the address matters, where the browser has an influence because it has a trust store, where the certificate values matter and the way they are provisioned during device onboarding."),Object(i.b)("h1",{id:""}),Object(i.b)("h1",{id:"34-device-onboarding"},"3.4 Device Onboarding"),Object(i.b)("p",null,"<< INSERT FDO, Matter, MUD Here >>"),Object(i.b)("h1",{id:"4-solutions"},"4. Solutions"),Object(i.b)("p",null,"<< INSERT Solution Doc here>>"),Object(i.b)("h1",{id:"5-bringing-it-together"},"5. Bringing it together"),Object(i.b)("p",null,"The enable local encryption there are three aspects that need to be addressed. The local network needs a reliable way to identify that the device really came from the vendor, the network needs a reliable way to name a device and the browser needs to have a trust anchor that trusts these devices."),Object(i.b)("p",null,"In the current situation, the ingredients exist to create a solution that will satisfy the local trust, but there is no consistent coherent way which will work every time for everyone in every situation. It will require consensus building to achieve a reliable trust chain."),Object(i.b)("p",null,"Changes in the browser, certificate signing process or infrastructure to support domains can solve this issue, but it requires significant standardisation and organisation."))}l.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,b=d["".concat(a,".").concat(h)]||d[h]||p[h]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);