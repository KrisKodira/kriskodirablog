(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{206:function(A,e,a){"use strict";a.d(e,"b",function(){return r});var t=a(0),c=a.n(t),i=a(68),n=a.n(i);a.d(e,"a",function(){return n.a});a(215),a(10).default.enqueue;var o=c.a.createContext({});function d(A){var e=A.staticQueryData,a=A.data,t=A.query,i=A.render,n=a?a.data:e[t]&&e[t].data;return c.a.createElement(c.a.Fragment,null,n&&i(n),!n&&c.a.createElement("div",null,"Loading (StaticQuery)"))}var r=function(A){var e=A.data,a=A.query,t=A.render,i=A.children;return c.a.createElement(o.Consumer,null,function(A){return c.a.createElement(d,{data:e,query:a,render:t||i,staticQueryData:A})})}},207:function(A,e,a){"use strict";a.d(e,"a",function(){return d}),a.d(e,"b",function(){return r});var t=a(221),c=a.n(t),i=a(223),n=a.n(i);n.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete n.a.googleFonts;var o=new c.a(n.a);var d=o.rhythm,r=o.scale},210:function(A,e,a){"use strict";var t=a(0),c=a.n(t),i=a(206),n=a(207),o=(a(226),a(50),a(227));var d=function(){var A=Object(t.useState)(!1),e=A[0],a=A[1];return c.a.createElement(i.b,{query:"793409878",render:function(A){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",null,c.a.createElement(i.a,{to:"/"},c.a.createElement("div",{className:"logo"},"KrisKodira")),c.a.createElement("ul",{style:{display:"flex",flex:1}},c.a.createElement("li",{className:(e?"block":"hidden")+" mobileNav",onClick:function(){return a(!e)}},"Menu"),A.site.siteMetadata.menuLinks.map(function(A){return c.a.createElement("li",{key:A.name,style:{listStyleType:"none"}},c.a.createElement(i.a,{to:A.link,activeClassName:"active"},A.name))}))))},data:o})},r=(a(218),a(228)),s=a(212),g=a.n(s),l=function(){var A=r.data,e=A.site.siteMetadata.author;return c.a.createElement("div",{style:{display:"flex",marginBottom:Object(n.a)(2.5),width:300,alignItems:"center"}},c.a.createElement(g.a,{fixed:A.avatar.childImageSharp.fixed,alt:e,style:{marginRight:Object(n.a)(.5),marginBottom:0,minWidth:100,height:100,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),c.a.createElement("p",{style:{marginBottom:0}},"Written by ",c.a.createElement("strong",null,e)," who lives and works in Frankfurt am Main."))},E=function(){return c.a.createElement("form",{action:"https://tinyletter.com/kriskodira",method:"post",target:"popupwindow",onsubmit:"window.open('https://tinyletter.com/kriskodira', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"},c.a.createElement("p",null,c.a.createElement("label",{for:"tlemail"},"Get new posts in your inbox")),c.a.createElement("p",null,c.a.createElement("input",{type:"text",name:"email",id:"tlemail",placeholder:"E-Mail"})),c.a.createElement("input",{type:"hidden",value:"1",name:"embed"}),c.a.createElement("input",{className:"submitBtn",type:"submit",value:"Subscribe"}))},p=(a(70),a(14),a(229)),f=a.n(p),B={gtmId:"GTM-TM9VXRW",dataLayer:{event:"cookieConsented"}},b=function(){return Object(t.useEffect)(function(){var A=function(){f.a.dataLayer(B)};if(-1===document.cookie.indexOf("cookieDesicionHasBeenMade=")){var e=document.querySelector(".cookie-dim"),a=new Date,t=a.setDate(a.getDate()+14).toString(),c="cookieDesicionHasBeenMade=true; expires="+t+"; path=/";e.style.display="block",document.getElementById("agreeToCookie").addEventListener("click",function(){e.style.display="none",A(),document.cookie=c,document.cookie="allowTrackingCookies=true; expires="+t+"; path=/"}),document.getElementById("disagreeToCookie").addEventListener("click",function(){e.style.display="none",document.cookie=c})}-1!==document.cookie.indexOf("allowTrackingCookies=")&&A();var i=document.querySelector("a[href='#revokecookieconsent']");null!=i&&(console.log("notr null"),i.addEventListener("click",function(){console.log("click"),document.cookie="allowTrackingCookies=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/",document.cookie="cookieDesicionHasBeenMade=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"}))}),c.a.createElement("div",{className:"cookie-dim"},c.a.createElement("div",{className:"cookie-consent"},c.a.createElement("div",{className:"text-wrap"},c.a.createElement("p",null,"We use cookies to track you do you agree?"),c.a.createElement("div",{className:"button",id:"agreeToCookie"},"Yes"),c.a.createElement("div",{className:"button",id:"disagreeToCookie"},"No and close window"))))};var m=function(A){var e,a;function t(){return A.apply(this,arguments)||this}return a=A,(e=t).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,t.prototype.render=function(){var A=this.props,e=(A.location,A.title,A.children);return c.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(n.a)(48),padding:Object(n.a)(1.5)+" "+Object(n.a)(.75)}},c.a.createElement("header",null,c.a.createElement(d,null)),c.a.createElement("main",null,e),c.a.createElement("footer",null,c.a.createElement("div",null,c.a.createElement(l,null),c.a.createElement("p",null,c.a.createElement(i.a,{to:"/privacy-policy"},"Datenschutzerklärung")," | ",c.a.createElement(i.a,{to:"/imprint"},"Impressum")),c.a.createElement("p",null,"© ",(new Date).getFullYear(),", made by KrisKodira")),c.a.createElement(E,null)),c.a.createElement(b,null))},t}(c.a.Component);e.a=m},211:function(A,e,a){"use strict";var t=a(233),c=a(0),i=a.n(c),n=a(234),o=a.n(n),d=(a(134),a(135),a(13),a(213),a(240)),r=function(A){if("undefined"!=typeof window){var e=d.data.images.edges.find(function(e){var a=A.replace(/\//gi,"");return e.node.relativePath.includes(a)});return e?"http://"+window.location.host+e.node.childImageSharp.fluid.src:null}};function s(A){var e,a=A.description,c=A.lang,n=A.meta,d=A.title,s=A.image,g=t.data.site;e=""!==s&&void 0!==s?r(s):"";var l=a||g.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:c},title:d,titleTemplate:"%s | "+g.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:d},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:g.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:l},{name:"image",content:e},{name:"og:image",content:e},{name:"twitter:image",content:e}].concat(n)})}s.defaultProps={lang:"en",meta:[],description:"",image:""};e.a=s},215:function(A,e,a){var t;A.exports=(t=a(220))&&t.default||t},220:function(A,e,a){"use strict";a.r(e);a(18);var t=a(0),c=a.n(t),i=a(128);e.default=function(A){var e=A.location,a=A.pageResources;return a?c.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null}},227:function(A){A.exports={data:{site:{siteMetadata:{title:"Kriskodira Blog",menuLinks:[{name:"Start",link:"/"},{name:"About me",link:"/about"},{name:"Code",link:"/category/code"},{name:"Art of Coding",link:"/category/art-of-coding"}]}}}}},228:function(A){A.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB9aeqMvZHHcOgP//EABwQAAICAgMAAAAAAAAAAAAAAAECAAMQEQQSIf/aAAgBAQABBQKxiqVWMWj66cfeB7AAMf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAEDBQEAAAAAAAAAAAAAAAEAETECEBIgIVH/2gAIAQEABj8CJEpq8S/li66I1//EABwQAAICAgMAAAAAAAAAAAAAAAERACEQMUFxof/aAAgBAQABPyETIPBwUN4EUYwgtxyo07xRc1gx/9oADAMBAAIAAwAAABCAxwD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAeEAEBAAICAgMAAAAAAAAAAAABEQAhMUEQUWGBkf/aAAgBAQABPxAArgFCrN/G8TSh2YuWPsd5PrIk+469P7hBc1cNuuOpefG+ERojk1l94Bn/2Q==",width:50,height:50,src:"/static/b4ddf2e681056136238320866b9d1cff/9b664/profile-pic.jpg",srcSet:"/static/b4ddf2e681056136238320866b9d1cff/9b664/profile-pic.jpg 1x,\n/static/b4ddf2e681056136238320866b9d1cff/06a10/profile-pic.jpg 1.5x,\n/static/b4ddf2e681056136238320866b9d1cff/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"KrisKodira"}}}}},233:function(A){A.exports={data:{site:{siteMetadata:{title:"Kriskodira Blog",description:"Fresh blog made by Kris about development and other cool stuff =]",author:"KrisKodira"}}}}},240:function(A){A.exports={data:{images:{edges:[{node:{relativePath:"craft-cms-3-simple-language-redirect.md",name:"craft-cms-3-simple-language-redirect",childImageSharp:null}},{node:{relativePath:"keeping-uo-with-new-coding-standards-libraries-and-much-more.md",name:"keeping-uo-with-new-coding-standards-libraries-and-much-more",childImageSharp:null}},{node:{relativePath:"gitlab-ci-cd-basics.md",name:"gitlab-ci-cd-basics",childImageSharp:null}},{node:{relativePath:"tips-on-landing-your-first-development-job.md",name:"tips-on-landing-your-first-development-job",childImageSharp:null}},{node:{relativePath:"what-to-plan-before-starting-to-code-a-website.md",name:"what-to-plan-before-starting-to-code-a-website",childImageSharp:null}},{node:{relativePath:"google-tagmanager-cookie-consent-using-google-tag-manager.md",name:"google-tagmanager-cookie-consent-using-google-tag-manager",childImageSharp:null}},{node:{relativePath:"my-opinion-on-where-to-start-if-you-want-to-become-a-developer.md",name:"my-opinion-on-where-to-start-if-you-want-to-become-a-developer",childImageSharp:null}},{node:{relativePath:"add-new-tag.png",name:"add-new-tag",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuUlEQVQoz4VSTY/TMBDdP8SJX8WBXwM/AHFBQty7e0Cc9orggNgmW9o0m4+2qWPHzped+O047jZstYKRniYzjp9n3sxV2/Uw2qPvPYzxvrtE57xGr80E7f5vW7Rth0oq8EriCmSitROGEai1xUFZWMo7XJq1lh7UVAARUzye8lLVT4QWv3YWn34MuF4OiDnwbTVSbKD0TDSO/up6vcZiscD1zQ2+vn+Hh48fgDSBpMq5qHyFSikUTEDIBoJe4UIizBRKQW3wElrPzJxzsLJEJQT42zeoXr+C+fIZyp2V3BMWRYHVfYjN+g8e4hjxdovDLp18luWkUXsmlFKipgIaypV0bx9FTgfIupk1zPMcm02ELREkSYKXzSvqyB2pcmga9MPwXMOBEsYYP2FqTbvpUWyMz7vzv+G0PMPFp/y5wq7rJo0G42EH53uMxq9S18/r9LRKl99unRjpd245EsAtSZFUwM+cJlkC31NgX+O/1lDbrtpDcaQh0pTdQPKixDZnyPYMUcaQkl+nDDHlOE2UMfYy6Kw4HqehJmnmKwzuV7hbBgjCAMtg9uHJ/17+G+7uXRBidyho7RQeAYLeRnq/Qpw/AAAAAElFTkSuQmCC",aspectRatio:1.8693181818181819,src:"/static/0256e621368a23f1adaf3f9c4da04801/59139/add-new-tag.png",srcSet:"/static/0256e621368a23f1adaf3f9c4da04801/d3809/add-new-tag.png 150w,\n/static/0256e621368a23f1adaf3f9c4da04801/fdbb0/add-new-tag.png 300w,\n/static/0256e621368a23f1adaf3f9c4da04801/59139/add-new-tag.png 600w,\n/static/0256e621368a23f1adaf3f9c4da04801/6eaa4/add-new-tag.png 658w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"Screenshot 2019-11-15 at 23.26.37.png",name:"Screenshot 2019-11-15 at 23.26.37",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABZ0lEQVQ4y52T23KDMAxE+f+P7FP7krTg+x1vtSYkYdpk0jIj7IB1slqJSVsHpTUWpTEvCj4EpJQRU/pjZBjnMFm5uRARGN5jXVf893I+CFBuxXwiR49S6wD23se6RX8htrNOBE0uZuDrDckuUMaiCpTALXC3fxyrBPMG0IqHPlWEmNCHug3SWhuHuO42PINeSyY1xgAtjWEzJG28JIy/c85jvwN/u45A5yUxwQu4loLaOgrXi5/3SS8pZJfZXWutdFqUhhVW/sTJc6p7pOzw7AjcFBLAtRSWWa6qWcHeKCrmu9bW5x4ycZ7nAdkSm+wjlAy7kc6PxvTNClZSazuMS7tYM4CL8Tgrj4/TgtmK0rRChQbtM6wxN6AkEeglaff3J1DGZrEBJxXwflI46wiXuwC7AKnGIImPe0kE7xbcGnW1cHy2kxYVbAzL4z7EKGMUhw1am+27lhllUB1V0Jo4zt1WzrGWar4BBiX7565TRwYAAAAASUVORK5CYII=",aspectRatio:1.5086887835703002,src:"/static/aace2f62cf7810ea05a013651fbcade7/59139/Screenshot%202019-11-15%20at%2023.26.37.png",srcSet:"/static/aace2f62cf7810ea05a013651fbcade7/d3809/Screenshot%202019-11-15%20at%2023.26.37.png 150w,\n/static/aace2f62cf7810ea05a013651fbcade7/fdbb0/Screenshot%202019-11-15%20at%2023.26.37.png 300w,\n/static/aace2f62cf7810ea05a013651fbcade7/59139/Screenshot%202019-11-15%20at%2023.26.37.png 600w,\n/static/aace2f62cf7810ea05a013651fbcade7/cb30f/Screenshot%202019-11-15%20at%2023.26.37.png 900w,\n/static/aace2f62cf7810ea05a013651fbcade7/ba299/Screenshot%202019-11-15%20at%2023.26.37.png 1200w,\n/static/aace2f62cf7810ea05a013651fbcade7/06670/Screenshot%202019-11-15%20at%2023.26.37.png 1910w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"trigger-config.png",name:"trigger-config",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABQ0lEQVQoz51Sa2+DMBDr//+V+zCpWwXkTcgL7xwe3aRW2xrJoBDis313sdZBKYVhHDFOE3LOqLWi/AelorYGH2ZcnPcIS0ZKG9G6ri+BK8xCOMujjW8IzsA69zJp6wrDRgh3Q81J7JZ+cFQ81l/IiEDLZDU+gNZLKedPKTOGdGb6G/Hdcoz9ItlJKNf6IYPmnmjtTvho/SD0oi4KKUElSTj5PrJ8Zvs5oVgOtG1Mb7v2Bdbavl+W5czokaqHlknGWZwm1VUWac4RgdK6z+iRLWeOAti8rdBWrLbvhPJgQ3iZDeCPtBtFHZU65/dLrZ9HjplkunIadtTdwdkUqjHG9kZwkYCDzkJUdEQ2p4oPJcpDgUvo0FGIMnbCiItSGlry4ntT5DpYQItqgnvvHUbt8H7TuA4Gn5MXOFxHh0G+M7pJOL4ALTetduk8GpIAAAAASUVORK5CYII=",aspectRatio:1.6643109540636043,src:"/static/54e11a63ccd040a28a524fbcc8adc046/59139/trigger-config.png",srcSet:"/static/54e11a63ccd040a28a524fbcc8adc046/d3809/trigger-config.png 150w,\n/static/54e11a63ccd040a28a524fbcc8adc046/fdbb0/trigger-config.png 300w,\n/static/54e11a63ccd040a28a524fbcc8adc046/59139/trigger-config.png 600w,\n/static/54e11a63ccd040a28a524fbcc8adc046/cb30f/trigger-config.png 900w,\n/static/54e11a63ccd040a28a524fbcc8adc046/ba299/trigger-config.png 1200w,\n/static/54e11a63ccd040a28a524fbcc8adc046/a642a/trigger-config.png 1884w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"close-code.jpg",name:"close-code",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABlc5WJlLgv//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMREBP/2gAIAQEAAQUCenyUnl1zaZk//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgIDAAAAAAAAAAAAAAAAARAAMRESIf/aAAgBAQAGPwI2ch6jkpf/xAAcEAADAQACAwAAAAAAAAAAAAABESEAEDFRYYH/2gAIAQEAAT8hrfKKDEIDa4cTDv3lrD5Mpt3/2gAMAwEAAgADAAAAEAT/AP/EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oACAEDAQE/EFf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAgEBPxBH/8QAHhABAAICAQUAAAAAAAAAAAAAAQARITGhEEFRwdH/2gAIAQEAAT8Qo6RWoEPHMRLAUPQrmPY38R5EO7ycTXIvso+p/9k=",aspectRatio:1.5,src:"/static/00051dbb5b9c7a7f4dfdf04f1b633445/775d9/close-code.jpg",srcSet:"/static/00051dbb5b9c7a7f4dfdf04f1b633445/cb3d3/close-code.jpg 150w,\n/static/00051dbb5b9c7a7f4dfdf04f1b633445/c83a6/close-code.jpg 300w,\n/static/00051dbb5b9c7a7f4dfdf04f1b633445/775d9/close-code.jpg 600w,\n/static/00051dbb5b9c7a7f4dfdf04f1b633445/2b1a3/close-code.jpg 900w,\n/static/00051dbb5b9c7a7f4dfdf04f1b633445/81ef8/close-code.jpg 1200w,\n/static/00051dbb5b9c7a7f4dfdf04f1b633445/14dee/close-code.jpg 1920w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"close-up-code-coding-160107.jpg",name:"close-up-code-coding-160107",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABlc5WJlLgv//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMREBP/2gAIAQEAAQUCenyUnl1zaZk//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgIDAAAAAAAAAAAAAAAAARAAMRESIf/aAAgBAQAGPwI2ch6jkpf/xAAcEAADAQACAwAAAAAAAAAAAAABESEAEDFRYYH/2gAIAQEAAT8hrfKKDEIDa4cTDv3lrD5Mpt3/2gAMAwEAAgADAAAAEAT/AP/EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oACAEDAQE/EFf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAgEBPxBH/8QAHhABAAICAQUAAAAAAAAAAAAAAQARITGhEEFRwdH/2gAIAQEAAT8Qo6RWoEPHMRLAUPQrmPY38R5EO7ycTXIvso+p/9k=",aspectRatio:1.5,src:"/static/00051dbb5b9c7a7f4dfdf04f1b633445/775d9/close-up-code-coding-160107.jpg",srcSet:"/static/00051dbb5b9c7a7f4dfdf04f1b633445/cb3d3/close-up-code-coding-160107.jpg 150w,\n/static/00051dbb5b9c7a7f4dfdf04f1b633445/c83a6/close-up-code-coding-160107.jpg 300w,\n/static/00051dbb5b9c7a7f4dfdf04f1b633445/775d9/close-up-code-coding-160107.jpg 600w,\n/static/00051dbb5b9c7a7f4dfdf04f1b633445/2b1a3/close-up-code-coding-160107.jpg 900w,\n/static/00051dbb5b9c7a7f4dfdf04f1b633445/81ef8/close-up-code-coding-160107.jpg 1200w,\n/static/00051dbb5b9c7a7f4dfdf04f1b633445/14dee/close-up-code-coding-160107.jpg 1920w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"tag-not-fired.png",name:"tag-not-fired",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABIklEQVQY032QT0+DQBDFORut38diT6bfkAVKeqzhoMGexHpUD0aKlYRSeml68qKUAgvln89lI4aDcZJf3mR230xmBHU0woihaRrEcxG93gmGwws4jgPDMKDrOkzTRDfyPMd4PIaqqtzbRVBkAlmWoSgKBmIfp8dHGPTPcD+b8SEyIbicTBCGIdI0RZZlCIKAN5MkiXsJIb8qWIsllq4L1/NxZ97CuL7CdHqDp8cH2HMLbwsb1sszXu05ttstNpsNZ71ew/M8uMy7Wq24+r4PYU9zfNU1InrALilQ/6xVs1pZVowSVVVxmlVbmnpRFDzvqrDbBTyJaYb3jwifYYwo2jMiTtxqHCNJEq7/ITSTmziw20T7EJQmDMppGvxF+97+6eo3wamgO5+SKoQAAAAASUVORK5CYII=",aspectRatio:3.280550774526678,src:"/static/8946d6374b2602a1e4cd2eb5d6727d3a/59139/tag-not-fired.png",srcSet:"/static/8946d6374b2602a1e4cd2eb5d6727d3a/d3809/tag-not-fired.png 150w,\n/static/8946d6374b2602a1e4cd2eb5d6727d3a/fdbb0/tag-not-fired.png 300w,\n/static/8946d6374b2602a1e4cd2eb5d6727d3a/59139/tag-not-fired.png 600w,\n/static/8946d6374b2602a1e4cd2eb5d6727d3a/cb30f/tag-not-fired.png 900w,\n/static/8946d6374b2602a1e4cd2eb5d6727d3a/ba299/tag-not-fired.png 1200w,\n/static/8946d6374b2602a1e4cd2eb5d6727d3a/6a2c6/tag-not-fired.png 3812w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"cookie-overlay.png",name:"cookie-overlay",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABq0lEQVQoz5WSy4vSYRSGv8VAFjQa3XRGB6NaFMGsZtNmiHAhbScQIiIyNyqiZgiuZhaKIOINr5OQP0NmGJp0kkBcCIIb/w53miKICy9P/T5oOVQHHs63OOd93w+OcDqduFwu3G436jscDlMqlcjlcuTz+UvJZrMkk0kSiYQklUqRTqcRSrVKtfoFRVEol8tSrFAoUCwW/4o6q/LHRA0h3r97y5vXr/j4wc9wOGQymfwT4/GY6XTKYDCQQVRB1UQYtFfRbQie7j5itVrxvzWbzahUKlJM/Zkwm3fQ373N82f7/ByNeHlwgM1mw+FwYLVasVgsBINB1us1i8WC5XIpu4pao987mUyGeDwuk4qdx0+4ab7PvvWFHKidnHJ6dka9Xuf4+JN0brfblyacz+eEQiF8Ph+xWAxhevAQg/keu3t7KPkMP2oVmic1GvVzmhd1mt8v+Hb+FaXymX6/T6/Xo9Vq0el06Ha7NBoN/H6/xOv1Ira3DZhMRraMRsy3rnNHCG5c2UCn06LXatBc07Cp3WTLoOfw6IhAIIDdbpcn5vF4ZLJIJCLPLRqN8gvsocUL7BmefgAAAABJRU5ErkJggg==",aspectRatio:2.484090909090909,src:"/static/9935fa33ca3a48312040a47b8527f17e/59139/cookie-overlay.png",srcSet:"/static/9935fa33ca3a48312040a47b8527f17e/d3809/cookie-overlay.png 150w,\n/static/9935fa33ca3a48312040a47b8527f17e/fdbb0/cookie-overlay.png 300w,\n/static/9935fa33ca3a48312040a47b8527f17e/59139/cookie-overlay.png 600w,\n/static/9935fa33ca3a48312040a47b8527f17e/cb30f/cookie-overlay.png 900w,\n/static/9935fa33ca3a48312040a47b8527f17e/ba299/cookie-overlay.png 1200w,\n/static/9935fa33ca3a48312040a47b8527f17e/a444b/cookie-overlay.png 2186w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"profile-pic.jpg",name:"profile-pic",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB9aeqMvZHHcOgP//EABwQAAICAgMAAAAAAAAAAAAAAAECAAMQEQQSIf/aAAgBAQABBQKxiqVWMWj66cfeB7AAMf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAEDBQEAAAAAAAAAAAAAAAEAETECEBIgIVH/2gAIAQEABj8CJEpq8S/li66I1//EABwQAAICAgMAAAAAAAAAAAAAAAERACEQMUFxof/aAAgBAQABPyETIPBwUN4EUYwgtxyo07xRc1gx/9oADAMBAAIAAwAAABCAxwD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAeEAEBAAICAgMAAAAAAAAAAAABEQAhMUEQUWGBkf/aAAgBAQABPxAArgFCrN/G8TSh2YuWPsd5PrIk+469P7hBc1cNuuOpefG+ERojk1l94Bn/2Q==",aspectRatio:1,src:"/static/b4ddf2e681056136238320866b9d1cff/775d9/profile-pic.jpg",srcSet:"/static/b4ddf2e681056136238320866b9d1cff/cb3d3/profile-pic.jpg 150w,\n/static/b4ddf2e681056136238320866b9d1cff/c83a6/profile-pic.jpg 300w,\n/static/b4ddf2e681056136238320866b9d1cff/775d9/profile-pic.jpg 600w,\n/static/b4ddf2e681056136238320866b9d1cff/2b1a3/profile-pic.jpg 900w,\n/static/b4ddf2e681056136238320866b9d1cff/81ef8/profile-pic.jpg 1200w,\n/static/b4ddf2e681056136238320866b9d1cff/883ab/profile-pic.jpg 2000w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"profile-pic-2.jpg",name:"profile-pic-2",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB9aeqMvZHHcOgP//EABwQAAICAgMAAAAAAAAAAAAAAAECAAMQEQQSIf/aAAgBAQABBQKxiqVWMWj66cfeB7AAMf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAEDBQEAAAAAAAAAAAAAAAEAETECEBIgIVH/2gAIAQEABj8CJEpq8S/li66I1//EABwQAAICAgMAAAAAAAAAAAAAAAERACEQMUFxof/aAAgBAQABPyETIPBwUN4EUYwgtxyo07xRc1gx/9oADAMBAAIAAwAAABCAxwD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAeEAEBAAICAgMAAAAAAAAAAAABEQAhMUEQUWGBkf/aAAgBAQABPxAArgFCrN/G8TSh2YuWPsd5PrIk+469P7hBc1cNuuOpefG+ERojk1l94Bn/2Q==",aspectRatio:1,src:"/static/b4ddf2e681056136238320866b9d1cff/775d9/profile-pic-2.jpg",srcSet:"/static/b4ddf2e681056136238320866b9d1cff/cb3d3/profile-pic-2.jpg 150w,\n/static/b4ddf2e681056136238320866b9d1cff/c83a6/profile-pic-2.jpg 300w,\n/static/b4ddf2e681056136238320866b9d1cff/775d9/profile-pic-2.jpg 600w,\n/static/b4ddf2e681056136238320866b9d1cff/2b1a3/profile-pic-2.jpg 900w,\n/static/b4ddf2e681056136238320866b9d1cff/81ef8/profile-pic-2.jpg 1200w,\n/static/b4ddf2e681056136238320866b9d1cff/883ab/profile-pic-2.jpg 2000w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg",name:"amauri-acosta-montiel-mtuCpK4EzbY-unsplash",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAByxpFC8j/xAAZEAACAwEAAAAAAAAAAAAAAAAQIQABEjH/2gAIAQEAAQUCQQruZ//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAAMAAwEAAAAAAAAAAAAAAAABESFRkWH/2gAIAQEAAT8hmxiujQl1wTNEecP/2gAMAwEAAgADAAAAEBA//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EIyv/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QV//EABwQAQEBAAIDAQAAAAAAAAAAAAERACFRMUGBwf/aAAgBAQABPxAWfrA3E+4M59d6L4F6GuiUKM1vJj//2Q==",aspectRatio:1.5,src:"/static/83e71db84b0296e4e44b80182ee2d14b/775d9/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg",srcSet:"/static/83e71db84b0296e4e44b80182ee2d14b/cb3d3/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 150w,\n/static/83e71db84b0296e4e44b80182ee2d14b/c83a6/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 300w,\n/static/83e71db84b0296e4e44b80182ee2d14b/775d9/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 600w,\n/static/83e71db84b0296e4e44b80182ee2d14b/2b1a3/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 900w,\n/static/83e71db84b0296e4e44b80182ee2d14b/81ef8/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 1200w,\n/static/83e71db84b0296e4e44b80182ee2d14b/2728f/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 5184w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"charles-Ms9xBg3Gtr8-unsplash.jpg",name:"charles-Ms9xBg3Gtr8-unsplash",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAdUj0DAD/8QAGhAAAwADAQAAAAAAAAAAAAAAAQIDABEUEv/aAAgBAQABBQKzKjbWkxYASbpQT8jnXP/EABYRAQEBAAAAAAAAAAAAAAAAAAACEf/aAAgBAwEBPwFsv//EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oACAECAQE/AVf/xAAbEAEAAgIDAAAAAAAAAAAAAAABABECISIxQf/aAAgBAQAGPwIXHcvIlBOZs9iLdztn/8QAHBABAAEEAwAAAAAAAAAAAAAAAQARIUFRMWHR/9oACAEBAAE/IQ7O1JiebhKz6YToGNBVDyrA/Wf/2gAMAwEAAgADAAAAEGPf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERYf/aAAgBAwEBPxCqGB//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFR/9oACAECAQE/EI6TZ//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFRQWFxkbH/2gAIAQEAAT8QKhMuZNfJepb2giPXmYOXsiuXo27pnUx0g1NHFAo9T//Z",aspectRatio:1.5,src:"/static/2bd4e805b26c2fc2041ff074583bc177/775d9/charles-Ms9xBg3Gtr8-unsplash.jpg",srcSet:"/static/2bd4e805b26c2fc2041ff074583bc177/cb3d3/charles-Ms9xBg3Gtr8-unsplash.jpg 150w,\n/static/2bd4e805b26c2fc2041ff074583bc177/c83a6/charles-Ms9xBg3Gtr8-unsplash.jpg 300w,\n/static/2bd4e805b26c2fc2041ff074583bc177/775d9/charles-Ms9xBg3Gtr8-unsplash.jpg 600w,\n/static/2bd4e805b26c2fc2041ff074583bc177/2b1a3/charles-Ms9xBg3Gtr8-unsplash.jpg 900w,\n/static/2bd4e805b26c2fc2041ff074583bc177/81ef8/charles-Ms9xBg3Gtr8-unsplash.jpg 1200w,\n/static/2bd4e805b26c2fc2041ff074583bc177/39b3c/charles-Ms9xBg3Gtr8-unsplash.jpg 5472w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"emile-seguin-wf5ZJ2s-B7I-unsplash.jpg",name:"emile-seguin-wf5ZJ2s-B7I-unsplash",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAefpFs0opD//xAAaEAEBAAIDAAAAAAAAAAAAAAABAgADESEx/9oACAEBAAEFAq5sJkcn01gGrr//xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAwEBPwGI/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAgIBBQAAAAAAAAAAAAAAAAECIRExMlGBkf/aAAgBAQAGPwK4xXQ8Ju+Sk/TBqzcz/8QAGhABAQEBAAMAAAAAAAAAAAAAAREAITFBUf/aAAgBAQABPyHvMX1FydG4TeQjPhroBB3MYBD5d//aAAwDAQACAAMAAAAQZB//xAAXEQEAAwAAAAAAAAAAAAAAAAAAATHw/9oACAEDAQE/EIMp/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxBuGn//xAAdEAACAgMAAwAAAAAAAAAAAAABEQAhMUFxYcHR/9oACAEBAAE/ECUqYI8jI7D5QQEBVw2IBasHYXazAbiweYwCbVexExEaC+T/2Q==",aspectRatio:1.5,src:"/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/775d9/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg",srcSet:"/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/cb3d3/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 150w,\n/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/c83a6/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 300w,\n/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/775d9/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 600w,\n/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/2b1a3/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 900w,\n/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/81ef8/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 1200w,\n/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/2728f/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 5184w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"about.md",name:"about",childImageSharp:null}},{node:{relativePath:"privacy-policy.md",name:"privacy-policy",childImageSharp:null}},{node:{relativePath:"imprint.md",name:"imprint",childImageSharp:null}},{node:{relativePath:"",name:"config",childImageSharp:null}}]}}}}}]);
//# sourceMappingURL=1-79175bd5a46a5472fb4d.js.map