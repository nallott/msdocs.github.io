(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(143)),i={title:"Browser background"},s={id:"3-browser-background",isDocsHomePage:!1,title:"Browser background",description:"The fundamental challenge we are trying to address in this initiative is how can we use the browser to connect to, administer and configure endpoint devices (including the router itself). This is already and established pattern of behaviour in the market, however most implementations use unencrypted connections or are hard to use.",source:"@site/docs/3-browser-background.md",permalink:"/ManySecured-SUIB/docs/3-browser-background",editUrl:"https://github.com/TechWorksHub/ManySecured-SUIB/docs/3-browser-background.md",sidebar:"someSidebar",previous:{title:"Addressing background",permalink:"/ManySecured-SUIB/docs/2-addressing-background"},next:{title:"Certificate background",permalink:"/ManySecured-SUIB/docs/4-certificate-background"}},c=[{value:"No browser changes",id:"no-browser-changes",children:[]},{value:"Changing browser behaviour",id:"changing-browser-behaviour",children:[]},{value:"Lobbied browser changes",id:"lobbied-browser-changes",children:[{value:"Request Browsers to use softer warnings",id:"request-browsers-to-use-softer-warnings",children:[]},{value:"Propose CA/Browser Forum Amendment",id:"propose-cabrowser-forum-amendment",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The fundamental challenge we are trying to address in this initiative is how can we use the browser to connect to, administer and configure endpoint devices (including the router itself). This is already and established pattern of behaviour in the market, however most implementations use unencrypted connections or are hard to use."),Object(a.b)("p",null,"The solutions to this problem come in two major variants:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"No browser changes: Use the existing DNS and CA infrastructure and well-understood security semantics, creating new flows and behaviours, that address our problem requirements without any changes to existing browser behaviour."),Object(a.b)("li",{parentName:"ol"},"Customised browser: more substantive innovation in addressing methods and the negotiation of trust relationships that will inevitably require browser changes.")),Object(a.b)("p",null,"The alterative to using the browser for the administration functions is, of course, for device manufacturers to develop and maintain custom applications, which the user would need to add to their smartphone, along with apps from every other manufacturer or ecosystem."),Object(a.b)("p",null,"Pragmatically, however, any innovation that requires significant changes to existing browser behaviours will initially need to be demonstrated on dedicated customer browsers to show the benefits of innovation. Impacted browser behaviour at scale, and in an interoperable way, will inevitably require coordination with the relevant standards body, in this case the CA/Browser Forum."),Object(a.b)("h3",{id:"no-browser-changes"},"No browser changes"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Move as intro to Solution 2/3 DNS Device Name")),Object(a.b)("p",null,"Solutions which require no change to existing browser behaviour are desirable because these have minimal impact on the end user. Drawbacks to this class of solution include:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The user cannot easily distinguish between local connections and internet connections (that would require UI changes to the browser). This is potentially significant to the security semantics of IoT end point devices.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Because Multicast DNS does not always work reliably, additional infrastructure would be needed to locally address an endpoint device. This means any solution which has no change to the browser will have at least a partial dependency on DNS resolution, at least in the bootstrap binding phase."))),Object(a.b)("h2",{id:"changing-browser-behaviour"},"Changing browser behaviour"),Object(a.b)("p",null,"An alternative and/or complementary solution could be the development of a dedicated IoT browser, which would be independent from the CAB Forum infrastructure. This would leave the internet certificates unaffected and would introduce similar certificate processing semantics for the IoT use case."),Object(a.b)("p",null,"Vendors often offer mobile apps because they implement their own certificate validation independent of the Root CAs. This approach requires an application for every device or service. A dedicated IoT application can bundle these services for a simplified user experience."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"It requires different user behaviour. The user will have to explicitly download and use a new class of browser in order to benefit from these new features."),Object(a.b)("li",{parentName:"ul"},"Needs to be designed from the ground up.")),Object(a.b)("h2",{id:"lobbied-browser-changes"},"Lobbied browser changes"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Move to solutions")),Object(a.b)("p",null,"Lobbying for browser changes addresses some of the drawbacks above; the user can benefit from a differentiated UI, better local device addressing and resilient local behaviours. And these benefits are experienced across existing and future browsers. The drawbacks are however:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Time: it will take time to lobby the CA/Browser forum and longer for any changes to propagate into available browser implementations."),Object(a.b)("li",{parentName:"ul"},"Indeterminacy: there is no guarantee any such lobbing will be successful.")),Object(a.b)("h3",{id:"request-browsers-to-use-softer-warnings"},"Request Browsers to use softer warnings"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Move to solutions")),Object(a.b)("p",null,"A friendlier user experience would be to request browser vendors to distinguish between certificates served on local network versus self-signed, invalid or revoked certificates on the internet. Currently the message is:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},'"Attackers might be trying to steal your information (for example, passwords, messages, or credit cards)"'))),Object(a.b)("p",null,"Instead browsers could display a message on how the validity can not be checked for local networks, for instance."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("em",{parentName:"p"},'"This service is on the local network and the certificate can not be verified."'))),Object(a.b)("p",null,"With a single click option to abort or continue, it would give users the opportunity to identify the device they are connecting to. This does not introduce trust in private networks, but does make device management webservices more intuitive for common users."),Object(a.b)("p",null,'After the initial warning, the browser will connect to the end-point device over an encrypted TLS session. When browsing HTTPS sites on the public internet, most browsers adopt the convention of displaying a "padlock", next to the address. For this scenario where the user is browsing a local resource and where the certificate security semantics are subtly different, an alternative but consistent UI metaphor should be considered.'),Object(a.b)("h3",{id:"propose-cabrowser-forum-amendment"},"Propose CA/Browser Forum Amendment"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Move to solutions")),Object(a.b)("p",null,"Currently CAs are not allowed to sign certificates for internal names"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://cabforum.org/wp-content/uploads/CA-Browser-Forum-BR-1.4.1.pdf"}),"https://cabforum.org/wp-content/uploads/CA-Browser-Forum-BR-1.4.1.pdf")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"7.1.4.2.1. Subject Alternative Name Extension"),Object(a.b)("p",{parentName:"blockquote"},"Certificate Field: extensions:subjectAltName\nRequired/Optional: Required\nContents: This extension MUST contain at least one entry. Each entry MUST be either a dNSName containing the Fully\u2010Qualified Domain Name or an iPAddress containing the IP address of a server. The CA MUST confirm that the Applicant controls the Fully\u2010Qualified Domain Name or IP address or has been granted the right to use it by the Domain Name Registrant or IP address assignee, as appropriate.\nWildcard FQDNs are permitted."),Object(a.b)("p",{parentName:"blockquote"},"As of the Effective Date of these Requirements, prior to the issuance of a Certificate with a subjectAlternativeName extension or Subject commonName field containing a Reserved IP Address or Internal Name, the CA SHALL notify the Applicant that the use of such Certificates has been deprecated by the CA / Browser Forum and that the practice will be eliminated by October 2016. Also as of the Effective Date, the CA SHALL NOT issue a certificate with an Expiry Date later than 1 November 2015 with a subjectAlternativeName extension or Subject commonName field containing a Reserved IP Address or Internal Name. Effective 1 October 2016, CAs SHALL revoke all unexpired Certificates whose subjectAlternativeName extension or Subject commonName field contains a Reserved IP Address or Internal Name. Effective May 1, 2015, each CA SHALL revoke all unexpired Certificates with an Internal Name using onion as the right\u2010most label in an entry in the subjectAltName Extension or commonName field unless such Certificate was issued in accordance with Appendix F of the EV Guidelines.")),Object(a.b)("p",null,"CA/Browser Forum accepts or rejects change proposals with a ballot. It would be possible to propose a modification on 7.1.4.2.1 to allow signing of internal names in specific cases. Because CA/Browser Forum guards the trust in the certificate store, changes are not accepted lightly. Only changes that will not jeopardise trust are likely to be considered and accepted. It would require strict rules under which a local certificate could be signed by a Root CA."),Object(a.b)("p",null,'Similar to the "softer warnings scenario", where the user is browsing a local resource and the certificate security semantics are subtly different, an alternative but consistent UI metaphor should be considered. Possible options might be:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Device icon: indicating to the user they are browsing a local device resource."),Object(a.b)("li",{parentName:"ul"},"Different colour: change the colour of either/both the icon and the address."),Object(a.b)("li",{parentName:"ul"},"Address differentiation: emphasise the differentiation of the address format, using syntax, prepends or colour."),Object(a.b)("li",{parentName:"ul"},"Chrome changes: make a wholesale change to the browser chrome (UI outside the HTML render) to indicate we are browsing a local resource.")))}u.isMDXComponent=!0},143:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),h=n,p=b["".concat(i,".").concat(h)]||b[h]||d[h]||a;return r?o.a.createElement(p,s(s({ref:t},l),{},{components:r})):o.a.createElement(p,s({ref:t},l))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);