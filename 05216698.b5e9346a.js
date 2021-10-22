(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{102:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return a})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return c})),i.d(t,"default",(function(){return u}));var n=i(2),r=i(6),o=(i(0),i(143)),a={title:"Certificate background"},s={id:"4-certificate-background",isDocsHomePage:!1,title:"Certificate background",description:"Non TLS based security",source:"@site/docs/4-certificate-background.md",permalink:"/docs/4-certificate-background",editUrl:"https://github.com/nqminds/docusaurus-template/edit/master/docs/4-certificate-background.md",sidebar:"someSidebar",previous:{title:"Browser background",permalink:"/docs/3-browser-background"},next:{title:"Browser integration",permalink:"/docs/7-browser-solution"}},c=[{value:"Non TLS based security",id:"non-tls-based-security",children:[]},{value:"Existing TLS certificate practices",id:"existing-tls-certificate-practices",children:[{value:"Certificate Semantics and Security Bootstrap",id:"certificate-semantics-and-security-bootstrap",children:[]}]},{value:"Alternative Root of Trust",id:"alternative-root-of-trust",children:[]},{value:"IoT Certificate Key Usage",id:"iot-certificate-key-usage",children:[]}],l={rightToc:c};function u(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"non-tls-based-security"},"Non TLS based security"),Object(o.b)("p",null,"TLS enables encryption on the session layer, but it's possible to provide encryption for different protocols or in a different layer."),Object(o.b)("p",null,"If the device is in possession of a public private key pair, the device may sign one or more tokens, relating to the status of the devices."),Object(o.b)("p",null,"In addition the device may be in possession of tokens signed by externally recognised authorities, that containing the devices public key, which also express key information relating to the status of the device."),Object(o.b)("p",null,"The only real difference here relates to the expression of the claim. For example these claims could be rendered as JWT's, CBOR Object Signing and Encryption and Verified Credentials."),Object(o.b)("p",null,"?? This method would require changes to the TLS stack, to accommodate these new credentials as part of the authorisation negotiation. ??"),Object(o.b)("h2",{id:"existing-tls-certificate-practices"},"Existing TLS certificate practices"),Object(o.b)("p",null,"Certificates are currently being used for deployed IOT devices. Many gateways and IoT devices host a both a HTTP and a HTTPS webserver for device onboarding and device management purposes. Users are most often directed to the HTTP administrative web server for the following reasons:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The aggressive security warnings disconcert users, leading to support calls."),Object(o.b)("li",{parentName:"ol"},'Many browsers make it quite difficult to "click through" past the warning to the "insecure" destination web page.')),Object(o.b)("p",null,"A solution that embraces the use of well-formed X.509 certificates will have to be combined with new browser behaviours (above section) if it is to be useful."),Object(o.b)("h3",{id:"certificate-semantics-and-security-bootstrap"},"Certificate Semantics and Security Bootstrap"),Object(o.b)("p",null,"When the browser connects to the gateway or end point device over HTTPS, the characteristics of the security established are determined by both the characteristics of the certificate being used, and the mechanism by which the certificate was provisioned on the device. (Viable methods of revocation are also relevant). In order to fully understand the qualities of the various solutions, it is worth outlining different options:"),Object(o.b)("h4",{id:"0-no-certificate"},"0. No certificate"),Object(o.b)("p",null,"In the simplest case there is no certificate and the website is hosted unencrypted"),Object(o.b)("p",null,"This method is the defector standard. It should be strongly discouraged. It fails to implement zero trust principles. It leaves critical information, in particular passwords, in the clear."),Object(o.b)("h4",{id:"1-non-device-unique---self-signed-certificate"},"1. Non device unique - self-signed certificate"),Object(o.b)("p",null,'In this scenario the exact same certificate is burned into "all devices" of this class.'),Object(o.b)("p",null,"The certificate subject common name is the same as the issuer common name. The certificate is signed by itself. The common name can be arbitrary."),Object(o.b)("p",null,"This method will generate browser errors under CA/Browser forum current guidelines."),Object(o.b)("p",null,"This method is actively being used by some device manufacturers."),Object(o.b)("p",null,"This method should be discouraged."),Object(o.b)("h4",{id:"2-non-device-unique---untrusted-root-signed-certificate"},"2. Non device unique - untrusted root-signed certificate"),Object(o.b)("p",null,'In this scenario the exact same certificate is burned into "all devices" of this class.'),Object(o.b)("p",null,"The certificate is signed by an untrusted root."),Object(o.b)("p",null,"By untrusted we mean the signing authority does not correspond to any authority recognised by convention in most web browsers"),Object(o.b)("h4",{id:"3-device-unique---self-signed-certificate"},"3. Device unique - self-signed certificate"),Object(o.b)("p",null,"In this scenario a public/private key pair is generated unique to this device."),Object(o.b)("p",null,"This key pair could be generated in the factory, or during device initialisation."),Object(o.b)("p",null,"The common name could be"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'Arbitrary text: e.g. "pre-set certificate".'),Object(o.b)("li",{parentName:"ol"},"MAC address: presumably unique to this device, but meaningless in current browser-based certificate check."),Object(o.b)("li",{parentName:"ol"},"Unique device address: e.g. GUID.")),Object(o.b)("p",null,"This class of certificate is self-signed"),Object(o.b)("p",null,"This method will fail the certificate verification under current CA/Browser Forum guidelines and would generate browser errors, unless an exception is accepted for the certificate."),Object(o.b)("p",null,"Both these methods 2 and 3 are in use today on real deployed devices. This method generates strong warnings on current browsers."),Object(o.b)("p",null,"These warnings could be made more usable with browser changes."),Object(o.b)("p",null,'These methods introduce a weakness, that that compromised private key credentials taken from the device mean that it is very easy to "spoof" a manufacture end point device.'),Object(o.b)("p",null,"These methods should be discouraged."),Object(o.b)("h4",{id:"4-device-unique---untrusted-root-signed-certificate"},"4. Device unique - untrusted root-signed certificate"),Object(o.b)("p",null,"This scenario is like scenario 2, but instead of self-signing the certificate, it is signed by an untrusted root."),Object(o.b)("p",null,"It is the same as scenario 5, but the root certificate is not pre-approved in the browser."),Object(o.b)("h4",{id:"5-device-unique---locally-signed-certificate"},"5. Device unique - locally-signed certificate"),Object(o.b)("p",null,"In this method a certificate is signed by binding a unique device common name to a unique public key for this end point device."),Object(o.b)("p",null,"This certificate is signed by a local entity, for example a mobile application or a gateway hosted signing service."),Object(o.b)("p",null,"For this method to work:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A CSR must be generated as part of a one-off binding event."),Object(o.b)("li",{parentName:"ul"},"The CSR must be issued to and processed by the local service."),Object(o.b)("li",{parentName:"ul"},"The end point address used in the CSR, must resolve locally.")),Object(o.b)("p",null,"This method requires all the browsers on all the systems to add the gateway certificate that has signed all the local certificates. This requires the certificates to remain local. This may cause problems when internet servers start serving local certificates, but the common name would not match the certificate."),Object(o.b)("p",null,"These methods are all slight variants of one another. They improve on 1&2 in that the impact of private key compromise is limited."),Object(o.b)("p",null,"The private key per device could be implemented at different points in the lifecycle."),Object(o.b)("p",null,"Browser changes are required to unpack the certificate and establish a qualified measure of trust from the signatures, and any a priority trust base provisioned into the modified browser."),Object(o.b)("p",null,"These use facing impacts of this trust base will need to be presented to the user."),Object(o.b)("p",null,"Many of the solutions below, are examples of this solution"),Object(o.b)("h4",{id:"6-device-unique---ca-root-signed-certificate"},"6. Device unique - CA root signed certificate"),Object(o.b)("p",null,"In this method a certificate is signed binding a unique device common name, to a unique public key on this end point device."),Object(o.b)("p",null,"This certificate is signed by one of the trusted roots that the browsers use."),Object(o.b)("p",null,"For this method to work:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A CSR must be generated as part of a one-off binding event."),Object(o.b)("li",{parentName:"ul"},"The CSR must be issued to and signed by one of the Root CAs."),Object(o.b)("li",{parentName:"ul"},"The common name used in the CSR must be publicly DNS resolvable, at least for the duration of the signing.")),Object(o.b)("p",null,"This method can be used without generating any browser security warnings. It is the method used by the flexible names Device DNS Name solution."),Object(o.b)("p",null,"Device DNS Name provides a description of how we may achieve this method. This is still under investigation."),Object(o.b)("h2",{id:"alternative-root-of-trust"},"Alternative Root of Trust"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Solution")),Object(o.b)("p",null,"To solve the problem of establishing a trusted secure connection between a browser and a locally hosted web server, we could look outside of traditional TLS certificate semantics and use alternative methods to negotiate a secure TLS session and represent the results of this negotiation."),Object(o.b)("p",null,"There are multiple sources of such information from which security could be established. Some of these methods could work in isolation, others can be combined."),Object(o.b)("p",null,"Each of these methods could complement, or replace the existing root of trust negotiation method."),Object(o.b)("p",null,"The results of this security negotiation could be manifest in a classic X.509 certificate, in which case we may make use of Extended Key Usage (see below), it could be made manifest in a more complex key signing hierarchies (with multiple additional root of trust) , or it could be made manifest in non certificate based representation (see below)."),Object(o.b)("h2",{id:"iot-certificate-key-usage"},"IoT Certificate Key Usage"),Object(o.b)("p",null,"Certificates have the parameter fields Key Usage and Extended Key Usage. These parameters describe the purpose of the certificate. For certificates used on the internet the extended key usage is set to server authentication (id-kp 1): ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3"}),"https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.3")),Object(o.b)("p",null,"The key usage parameters of a normal certificate are typically Digital Signature, Key Encipherment and Client and Server Authentication. Other extended key usages are for client authentication, code signing, email protection and timestamping."),Object(o.b)("p",null,"A new extended key usage dedicated to IoT could create a certificate class which would be allowed to be signed by a certification authority, vendor or any other authority. Browsers would be able to distinguish the certificate to be of local significance only."),Object(o.b)("p",null,"id-kp 10 could be assigned as Local Device. Since this is different than a normal Server Authentication certificate the browser can check that the connection is local and the certificate is signed by a device vendor or IoT authority (FIDO, Matter, CACERT) that acts as root for these certificates."))}u.isMDXComponent=!0},143:function(e,t,i){"use strict";i.d(t,"a",(function(){return d})),i.d(t,"b",(function(){return f}));var n=i(0),r=i.n(n);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(i),h=n,f=d["".concat(a,".").concat(h)]||d[h]||b[h]||o;return i?r.a.createElement(f,s(s({ref:t},l),{},{components:i})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=i[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,i)}h.displayName="MDXCreateElement"}}]);