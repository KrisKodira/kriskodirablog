(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{206:function(A,a,e){"use strict";e.d(a,"b",function(){return d});var t=e(0),i=e.n(t),c=e(68),r=e.n(c);e.d(a,"a",function(){return r.a});e(215),e(10).default.enqueue;var o=i.a.createContext({});function n(A){var a=A.staticQueryData,e=A.data,t=A.query,c=A.render,r=e?e.data:a[t]&&a[t].data;return i.a.createElement(i.a.Fragment,null,r&&c(r),!r&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(A){var a=A.data,e=A.query,t=A.render,c=A.children;return i.a.createElement(o.Consumer,null,function(A){return i.a.createElement(n,{data:a,query:e,render:t||c,staticQueryData:A})})}},207:function(A,a,e){"use strict";e.d(a,"a",function(){return n}),e.d(a,"b",function(){return d});var t=e(221),i=e.n(t),c=e(223),r=e.n(c);r.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete r.a.googleFonts;var o=new i.a(r.a);var n=o.rhythm,d=o.scale},210:function(A,a,e){"use strict";var t=e(0),i=e.n(t),c=e(206),r=e(207),o=(e(226),e(50),e(227));var n=function(){var A=Object(t.useState)(!1),a=A[0],e=A[1];return i.a.createElement(c.b,{query:"793409878",render:function(A){return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",null,i.a.createElement(c.a,{to:"/"},i.a.createElement("div",{className:"logo"},"KrisKodira")),i.a.createElement("ul",{style:{display:"flex",flex:1}},i.a.createElement("li",{className:(a?"block":"hidden")+" mobileNav",onClick:function(){return e(!a)}},"Menu"),A.site.siteMetadata.menuLinks.map(function(A){return i.a.createElement("li",{key:A.name,style:{listStyleType:"none"}},i.a.createElement(c.a,{to:A.link,activeClassName:"active"},A.name))}))))},data:o})},d=(e(218),e(228)),g=e(212),s=e.n(g),l=function(){var A=d.data,a=A.site.siteMetadata.author;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(r.a)(2.5),width:300,alignItems:"center"}},i.a.createElement(s.a,{fixed:A.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(r.a)(.5),marginBottom:0,minWidth:100,height:100,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",{style:{marginBottom:0}},"Written by ",i.a.createElement("strong",null,a)," who lives and works in Frankfurt am Main."))},b=function(){return i.a.createElement("form",{action:"https://tinyletter.com/kriskodira",method:"post",target:"popupwindow",onsubmit:"window.open('https://tinyletter.com/kriskodira', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"},i.a.createElement("p",null,i.a.createElement("label",{for:"tlemail"},"Get new posts in your inbox")),i.a.createElement("p",null,i.a.createElement("input",{type:"text",name:"email",id:"tlemail",placeholder:"E-Mail"})),i.a.createElement("input",{type:"hidden",value:"1",name:"embed"}),i.a.createElement("input",{className:"submitBtn",type:"submit",value:"Subscribe"}))};var E=function(A){var a,e;function t(){return A.apply(this,arguments)||this}return e=A,(a=t).prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e,t.prototype.render=function(){var A=this.props,a=(A.location,A.title,A.children);return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(r.a)(48),padding:Object(r.a)(1.5)+" "+Object(r.a)(.75)}},i.a.createElement("header",null,i.a.createElement(n,null)),i.a.createElement("main",null,a),i.a.createElement("footer",null,i.a.createElement("div",null,i.a.createElement(l,null),i.a.createElement("p",null,i.a.createElement(c.a,{to:"/privacy-policy"},"Datenschutzerklärung")," | ",i.a.createElement(c.a,{to:"/imprint"},"Impressum")),i.a.createElement("p",null,"© ",(new Date).getFullYear(),", made by KrisKodira")),i.a.createElement(b,null)))},t}(i.a.Component);a.a=E},211:function(A,a,e){"use strict";var t=e(229),i=e(0),c=e.n(i),r=e(230),o=e.n(r),n=(e(134),e(135),e(13),e(213),e(236)),d=function(A){if("undefined"!=typeof window){var a=n.data.images.edges.find(function(a){var e=A.replace(/\//gi,"");return a.node.relativePath.includes(e)});return a?"http://"+window.location.host+a.node.childImageSharp.fluid.src:null}};function g(A){var a,e=A.description,i=A.lang,r=A.meta,n=A.title,g=A.image,s=t.data.site;a=""!==g&&void 0!==g?d(g):"";var l=e||s.siteMetadata.description;return c.a.createElement(o.a,{htmlAttributes:{lang:i},title:n,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:n},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:l},{name:"image",content:a},{name:"og:image",content:a},{name:"twitter:image",content:a}].concat(r)})}g.defaultProps={lang:"en",meta:[],description:"",image:""};a.a=g},215:function(A,a,e){var t;A.exports=(t=e(220))&&t.default||t},220:function(A,a,e){"use strict";e.r(a);e(18);var t=e(0),i=e.n(t),c=e(128);a.default=function(A){var a=A.location,e=A.pageResources;return e?i.a.createElement(c.a,Object.assign({location:a,pageResources:e},e.json)):null}},227:function(A){A.exports={data:{site:{siteMetadata:{title:"Kriskodira Blog",menuLinks:[{name:"Start",link:"/"},{name:"About me",link:"/about"},{name:"Code",link:"/category/code"},{name:"Art of Coding",link:"/category/art-of-coding"}]}}}}},228:function(A){A.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB9aeqMvZHHcOgP//EABwQAAICAgMAAAAAAAAAAAAAAAECAAMQEQQSIf/aAAgBAQABBQKxiqVWMWj66cfeB7AAMf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAEDBQEAAAAAAAAAAAAAAAEAETECEBIgIVH/2gAIAQEABj8CJEpq8S/li66I1//EABwQAAICAgMAAAAAAAAAAAAAAAERACEQMUFxof/aAAgBAQABPyETIPBwUN4EUYwgtxyo07xRc1gx/9oADAMBAAIAAwAAABCAxwD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAeEAEBAAICAgMAAAAAAAAAAAABEQAhMUEQUWGBkf/aAAgBAQABPxAArgFCrN/G8TSh2YuWPsd5PrIk+469P7hBc1cNuuOpefG+ERojk1l94Bn/2Q==",width:50,height:50,src:"/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/9b664/profile-pic.jpg",srcSet:"/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/9b664/profile-pic.jpg 1x,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/06a10/profile-pic.jpg 1.5x,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"KrisKodira"}}}}},229:function(A){A.exports={data:{site:{siteMetadata:{title:"Kriskodira Blog",description:"Fresh blog made by Kris about development and other cool stuff =]",author:"KrisKodira"}}}}},236:function(A){A.exports={data:{images:{edges:[{node:{relativePath:"craft-cms-3-simple-language-redirect.md",name:"craft-cms-3-simple-language-redirect",childImageSharp:null}},{node:{relativePath:"google-tagmanager-cookie-consent-using-google-tag-manager.md",name:"google-tagmanager-cookie-consent-using-google-tag-manager",childImageSharp:null}},{node:{relativePath:"my-opinion-on-where-to-start-if-you-want-to-become-a-developer.md",name:"my-opinion-on-where-to-start-if-you-want-to-become-a-developer",childImageSharp:null}},{node:{relativePath:"tips-on-landing-your-first-development-job.md",name:"tips-on-landing-your-first-development-job",childImageSharp:null}},{node:{relativePath:"keeping-uo-with-new-coding-standards-libraries-and-much-more.md",name:"keeping-uo-with-new-coding-standards-libraries-and-much-more",childImageSharp:null}},{node:{relativePath:"gitlab-ci-cd-basics.md",name:"gitlab-ci-cd-basics",childImageSharp:null}},{node:{relativePath:"what-to-plan-before-starting-to-code-a-website.md",name:"what-to-plan-before-starting-to-code-a-website",childImageSharp:null}},{node:{relativePath:"add-new-tag.png",name:"add-new-tag",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABuUlEQVQoz4VSTY/TMBDdP8SJX8WBXwM/AHFBQty7e0Cc9orggNgmW9o0m4+2qWPHzped+O047jZstYKRniYzjp9n3sxV2/Uw2qPvPYzxvrtE57xGr80E7f5vW7Rth0oq8EriCmSitROGEai1xUFZWMo7XJq1lh7UVAARUzye8lLVT4QWv3YWn34MuF4OiDnwbTVSbKD0TDSO/up6vcZiscD1zQ2+vn+Hh48fgDSBpMq5qHyFSikUTEDIBoJe4UIizBRKQW3wElrPzJxzsLJEJQT42zeoXr+C+fIZyp2V3BMWRYHVfYjN+g8e4hjxdovDLp18luWkUXsmlFKipgIaypV0bx9FTgfIupk1zPMcm02ELREkSYKXzSvqyB2pcmga9MPwXMOBEsYYP2FqTbvpUWyMz7vzv+G0PMPFp/y5wq7rJo0G42EH53uMxq9S18/r9LRKl99unRjpd245EsAtSZFUwM+cJlkC31NgX+O/1lDbrtpDcaQh0pTdQPKixDZnyPYMUcaQkl+nDDHlOE2UMfYy6Kw4HqehJmnmKwzuV7hbBgjCAMtg9uHJ/17+G+7uXRBidyho7RQeAYLeRnq/Qpw/AAAAAElFTkSuQmCC",aspectRatio:1.8693181818181819,src:"/kriskodirablog/static/0256e621368a23f1adaf3f9c4da04801/59139/add-new-tag.png",srcSet:"/kriskodirablog/static/0256e621368a23f1adaf3f9c4da04801/d3809/add-new-tag.png 150w,\n/kriskodirablog/static/0256e621368a23f1adaf3f9c4da04801/fdbb0/add-new-tag.png 300w,\n/kriskodirablog/static/0256e621368a23f1adaf3f9c4da04801/59139/add-new-tag.png 600w,\n/kriskodirablog/static/0256e621368a23f1adaf3f9c4da04801/6eaa4/add-new-tag.png 658w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"Screenshot 2019-11-15 at 23.26.37.png",name:"Screenshot 2019-11-15 at 23.26.37",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAABZ0lEQVQ4y52T23KDMAxE+f+P7FP7krTg+x1vtSYkYdpk0jIj7IB1slqJSVsHpTUWpTEvCj4EpJQRU/pjZBjnMFm5uRARGN5jXVf893I+CFBuxXwiR49S6wD23se6RX8htrNOBE0uZuDrDckuUMaiCpTALXC3fxyrBPMG0IqHPlWEmNCHug3SWhuHuO42PINeSyY1xgAtjWEzJG28JIy/c85jvwN/u45A5yUxwQu4loLaOgrXi5/3SS8pZJfZXWutdFqUhhVW/sTJc6p7pOzw7AjcFBLAtRSWWa6qWcHeKCrmu9bW5x4ycZ7nAdkSm+wjlAy7kc6PxvTNClZSazuMS7tYM4CL8Tgrj4/TgtmK0rRChQbtM6wxN6AkEeglaff3J1DGZrEBJxXwflI46wiXuwC7AKnGIImPe0kE7xbcGnW1cHy2kxYVbAzL4z7EKGMUhw1am+27lhllUB1V0Jo4zt1WzrGWar4BBiX7565TRwYAAAAASUVORK5CYII=",aspectRatio:1.5086887835703002,src:"/kriskodirablog/static/aace2f62cf7810ea05a013651fbcade7/59139/Screenshot%202019-11-15%20at%2023.26.37.png",srcSet:"/kriskodirablog/static/aace2f62cf7810ea05a013651fbcade7/d3809/Screenshot%202019-11-15%20at%2023.26.37.png 150w,\n/kriskodirablog/static/aace2f62cf7810ea05a013651fbcade7/fdbb0/Screenshot%202019-11-15%20at%2023.26.37.png 300w,\n/kriskodirablog/static/aace2f62cf7810ea05a013651fbcade7/59139/Screenshot%202019-11-15%20at%2023.26.37.png 600w,\n/kriskodirablog/static/aace2f62cf7810ea05a013651fbcade7/cb30f/Screenshot%202019-11-15%20at%2023.26.37.png 900w,\n/kriskodirablog/static/aace2f62cf7810ea05a013651fbcade7/ba299/Screenshot%202019-11-15%20at%2023.26.37.png 1200w,\n/kriskodirablog/static/aace2f62cf7810ea05a013651fbcade7/06670/Screenshot%202019-11-15%20at%2023.26.37.png 1910w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"trigger-config.png",name:"trigger-config",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABQ0lEQVQoz51Sa2+DMBDr//+V+zCpWwXkTcgL7xwe3aRW2xrJoBDis313sdZBKYVhHDFOE3LOqLWi/AelorYGH2ZcnPcIS0ZKG9G6ri+BK8xCOMujjW8IzsA69zJp6wrDRgh3Q81J7JZ+cFQ81l/IiEDLZDU+gNZLKedPKTOGdGb6G/Hdcoz9ItlJKNf6IYPmnmjtTvho/SD0oi4KKUElSTj5PrJ8Zvs5oVgOtG1Mb7v2Bdbavl+W5czokaqHlknGWZwm1VUWac4RgdK6z+iRLWeOAti8rdBWrLbvhPJgQ3iZDeCPtBtFHZU65/dLrZ9HjplkunIadtTdwdkUqjHG9kZwkYCDzkJUdEQ2p4oPJcpDgUvo0FGIMnbCiItSGlry4ntT5DpYQItqgnvvHUbt8H7TuA4Gn5MXOFxHh0G+M7pJOL4ALTetduk8GpIAAAAASUVORK5CYII=",aspectRatio:1.6643109540636043,src:"/kriskodirablog/static/54e11a63ccd040a28a524fbcc8adc046/59139/trigger-config.png",srcSet:"/kriskodirablog/static/54e11a63ccd040a28a524fbcc8adc046/d3809/trigger-config.png 150w,\n/kriskodirablog/static/54e11a63ccd040a28a524fbcc8adc046/fdbb0/trigger-config.png 300w,\n/kriskodirablog/static/54e11a63ccd040a28a524fbcc8adc046/59139/trigger-config.png 600w,\n/kriskodirablog/static/54e11a63ccd040a28a524fbcc8adc046/cb30f/trigger-config.png 900w,\n/kriskodirablog/static/54e11a63ccd040a28a524fbcc8adc046/ba299/trigger-config.png 1200w,\n/kriskodirablog/static/54e11a63ccd040a28a524fbcc8adc046/a642a/trigger-config.png 1884w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"close-code.jpg",name:"close-code",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABlc5WJlLgv//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMREBP/2gAIAQEAAQUCenyUnl1zaZk//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgIDAAAAAAAAAAAAAAAAARAAMRESIf/aAAgBAQAGPwI2ch6jkpf/xAAcEAADAQACAwAAAAAAAAAAAAABESEAEDFRYYH/2gAIAQEAAT8hrfKKDEIDa4cTDv3lrD5Mpt3/2gAMAwEAAgADAAAAEAT/AP/EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oACAEDAQE/EFf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAgEBPxBH/8QAHhABAAICAQUAAAAAAAAAAAAAAQARITGhEEFRwdH/2gAIAQEAAT8Qo6RWoEPHMRLAUPQrmPY38R5EO7ycTXIvso+p/9k=",aspectRatio:1.5,src:"/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/775d9/close-code.jpg",srcSet:"/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/cb3d3/close-code.jpg 150w,\n/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/c83a6/close-code.jpg 300w,\n/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/775d9/close-code.jpg 600w,\n/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/2b1a3/close-code.jpg 900w,\n/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/81ef8/close-code.jpg 1200w,\n/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/14dee/close-code.jpg 1920w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"close-up-code-coding-160107.jpg",name:"close-up-code-coding-160107",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUBAwT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAABlc5WJlLgv//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMREBP/2gAIAQEAAQUCenyUnl1zaZk//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAgIDAAAAAAAAAAAAAAAAARAAMRESIf/aAAgBAQAGPwI2ch6jkpf/xAAcEAADAQACAwAAAAAAAAAAAAABESEAEDFRYYH/2gAIAQEAAT8hrfKKDEIDa4cTDv3lrD5Mpt3/2gAMAwEAAgADAAAAEAT/AP/EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oACAEDAQE/EFf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAgEBPxBH/8QAHhABAAICAQUAAAAAAAAAAAAAAQARITGhEEFRwdH/2gAIAQEAAT8Qo6RWoEPHMRLAUPQrmPY38R5EO7ycTXIvso+p/9k=",aspectRatio:1.5,src:"/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/775d9/close-up-code-coding-160107.jpg",srcSet:"/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/cb3d3/close-up-code-coding-160107.jpg 150w,\n/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/c83a6/close-up-code-coding-160107.jpg 300w,\n/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/775d9/close-up-code-coding-160107.jpg 600w,\n/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/2b1a3/close-up-code-coding-160107.jpg 900w,\n/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/81ef8/close-up-code-coding-160107.jpg 1200w,\n/kriskodirablog/static/00051dbb5b9c7a7f4dfdf04f1b633445/14dee/close-up-code-coding-160107.jpg 1920w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"tag-not-fired.png",name:"tag-not-fired",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABIklEQVQY032QT0+DQBDFORut38diT6bfkAVKeqzhoMGexHpUD0aKlYRSeml68qKUAgvln89lI4aDcZJf3mR230xmBHU0woihaRrEcxG93gmGwws4jgPDMKDrOkzTRDfyPMd4PIaqqtzbRVBkAlmWoSgKBmIfp8dHGPTPcD+b8SEyIbicTBCGIdI0RZZlCIKAN5MkiXsJIb8qWIsllq4L1/NxZ97CuL7CdHqDp8cH2HMLbwsb1sszXu05ttstNpsNZ71ew/M8uMy7Wq24+r4PYU9zfNU1InrALilQ/6xVs1pZVowSVVVxmlVbmnpRFDzvqrDbBTyJaYb3jwifYYwo2jMiTtxqHCNJEq7/ITSTmziw20T7EJQmDMppGvxF+97+6eo3wamgO5+SKoQAAAAASUVORK5CYII=",aspectRatio:3.280550774526678,src:"/kriskodirablog/static/8946d6374b2602a1e4cd2eb5d6727d3a/59139/tag-not-fired.png",srcSet:"/kriskodirablog/static/8946d6374b2602a1e4cd2eb5d6727d3a/d3809/tag-not-fired.png 150w,\n/kriskodirablog/static/8946d6374b2602a1e4cd2eb5d6727d3a/fdbb0/tag-not-fired.png 300w,\n/kriskodirablog/static/8946d6374b2602a1e4cd2eb5d6727d3a/59139/tag-not-fired.png 600w,\n/kriskodirablog/static/8946d6374b2602a1e4cd2eb5d6727d3a/cb30f/tag-not-fired.png 900w,\n/kriskodirablog/static/8946d6374b2602a1e4cd2eb5d6727d3a/ba299/tag-not-fired.png 1200w,\n/kriskodirablog/static/8946d6374b2602a1e4cd2eb5d6727d3a/6a2c6/tag-not-fired.png 3812w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"cookie-overlay.png",name:"cookie-overlay",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABq0lEQVQoz5WSy4vSYRSGv8VAFjQa3XRGB6NaFMGsZtNmiHAhbScQIiIyNyqiZgiuZhaKIOINr5OQP0NmGJp0kkBcCIIb/w53miKICy9P/T5oOVQHHs63OOd93w+OcDqduFwu3G436jscDlMqlcjlcuTz+UvJZrMkk0kSiYQklUqRTqcRSrVKtfoFRVEol8tSrFAoUCwW/4o6q/LHRA0h3r97y5vXr/j4wc9wOGQymfwT4/GY6XTKYDCQQVRB1UQYtFfRbQie7j5itVrxvzWbzahUKlJM/Zkwm3fQ373N82f7/ByNeHlwgM1mw+FwYLVasVgsBINB1us1i8WC5XIpu4pao987mUyGeDwuk4qdx0+4ab7PvvWFHKidnHJ6dka9Xuf4+JN0brfblyacz+eEQiF8Ph+xWAxhevAQg/keu3t7KPkMP2oVmic1GvVzmhd1mt8v+Hb+FaXymX6/T6/Xo9Vq0el06Ha7NBoN/H6/xOv1Ira3DZhMRraMRsy3rnNHCG5c2UCn06LXatBc07Cp3WTLoOfw6IhAIIDdbpcn5vF4ZLJIJCLPLRqN8gvsocUL7BmefgAAAABJRU5ErkJggg==",aspectRatio:2.484090909090909,src:"/kriskodirablog/static/9935fa33ca3a48312040a47b8527f17e/59139/cookie-overlay.png",srcSet:"/kriskodirablog/static/9935fa33ca3a48312040a47b8527f17e/d3809/cookie-overlay.png 150w,\n/kriskodirablog/static/9935fa33ca3a48312040a47b8527f17e/fdbb0/cookie-overlay.png 300w,\n/kriskodirablog/static/9935fa33ca3a48312040a47b8527f17e/59139/cookie-overlay.png 600w,\n/kriskodirablog/static/9935fa33ca3a48312040a47b8527f17e/cb30f/cookie-overlay.png 900w,\n/kriskodirablog/static/9935fa33ca3a48312040a47b8527f17e/ba299/cookie-overlay.png 1200w,\n/kriskodirablog/static/9935fa33ca3a48312040a47b8527f17e/a444b/cookie-overlay.png 2186w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"profile-pic-2.jpg",name:"profile-pic-2",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB9aeqMvZHHcOgP//EABwQAAICAgMAAAAAAAAAAAAAAAECAAMQEQQSIf/aAAgBAQABBQKxiqVWMWj66cfeB7AAMf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAEDBQEAAAAAAAAAAAAAAAEAETECEBIgIVH/2gAIAQEABj8CJEpq8S/li66I1//EABwQAAICAgMAAAAAAAAAAAAAAAERACEQMUFxof/aAAgBAQABPyETIPBwUN4EUYwgtxyo07xRc1gx/9oADAMBAAIAAwAAABCAxwD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAeEAEBAAICAgMAAAAAAAAAAAABEQAhMUEQUWGBkf/aAAgBAQABPxAArgFCrN/G8TSh2YuWPsd5PrIk+469P7hBc1cNuuOpefG+ERojk1l94Bn/2Q==",aspectRatio:1,src:"/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/775d9/profile-pic-2.jpg",srcSet:"/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/cb3d3/profile-pic-2.jpg 150w,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/c83a6/profile-pic-2.jpg 300w,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/775d9/profile-pic-2.jpg 600w,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/2b1a3/profile-pic-2.jpg 900w,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/81ef8/profile-pic-2.jpg 1200w,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/883ab/profile-pic-2.jpg 2000w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"profile-pic.jpg",name:"profile-pic",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAQBAgMF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB9aeqMvZHHcOgP//EABwQAAICAgMAAAAAAAAAAAAAAAECAAMQEQQSIf/aAAgBAQABBQKxiqVWMWj66cfeB7AAMf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAEDBQEAAAAAAAAAAAAAAAEAETECEBIgIVH/2gAIAQEABj8CJEpq8S/li66I1//EABwQAAICAgMAAAAAAAAAAAAAAAERACEQMUFxof/aAAgBAQABPyETIPBwUN4EUYwgtxyo07xRc1gx/9oADAMBAAIAAwAAABCAxwD/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/EB//xAAeEAEBAAICAgMAAAAAAAAAAAABEQAhMUEQUWGBkf/aAAgBAQABPxAArgFCrN/G8TSh2YuWPsd5PrIk+469P7hBc1cNuuOpefG+ERojk1l94Bn/2Q==",aspectRatio:1,src:"/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/775d9/profile-pic.jpg",srcSet:"/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/cb3d3/profile-pic.jpg 150w,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/c83a6/profile-pic.jpg 300w,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/775d9/profile-pic.jpg 600w,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/2b1a3/profile-pic.jpg 900w,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/81ef8/profile-pic.jpg 1200w,\n/kriskodirablog/static/b4ddf2e681056136238320866b9d1cff/883ab/profile-pic.jpg 2000w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg",name:"amauri-acosta-montiel-mtuCpK4EzbY-unsplash",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABAP/aAAwDAQACEAMQAAAByxpFC8j/xAAZEAACAwEAAAAAAAAAAAAAAAAQIQABEjH/2gAIAQEAAQUCQQruZ//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABoQAAMAAwEAAAAAAAAAAAAAAAABESFRkWH/2gAIAQEAAT8hmxiujQl1wTNEecP/2gAMAwEAAgADAAAAEBA//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EIyv/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8QV//EABwQAQEBAAIDAQAAAAAAAAAAAAERACFRMUGBwf/aAAgBAQABPxAWfrA3E+4M59d6L4F6GuiUKM1vJj//2Q==",aspectRatio:1.5,src:"/kriskodirablog/static/83e71db84b0296e4e44b80182ee2d14b/775d9/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg",srcSet:"/kriskodirablog/static/83e71db84b0296e4e44b80182ee2d14b/cb3d3/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 150w,\n/kriskodirablog/static/83e71db84b0296e4e44b80182ee2d14b/c83a6/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 300w,\n/kriskodirablog/static/83e71db84b0296e4e44b80182ee2d14b/775d9/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 600w,\n/kriskodirablog/static/83e71db84b0296e4e44b80182ee2d14b/2b1a3/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 900w,\n/kriskodirablog/static/83e71db84b0296e4e44b80182ee2d14b/81ef8/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 1200w,\n/kriskodirablog/static/83e71db84b0296e4e44b80182ee2d14b/2728f/amauri-acosta-montiel-mtuCpK4EzbY-unsplash.jpg 5184w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"charles-Ms9xBg3Gtr8-unsplash.jpg",name:"charles-Ms9xBg3Gtr8-unsplash",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABQBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAdUj0DAD/8QAGhAAAwADAQAAAAAAAAAAAAAAAQIDABEUEv/aAAgBAQABBQKzKjbWkxYASbpQT8jnXP/EABYRAQEBAAAAAAAAAAAAAAAAAAACEf/aAAgBAwEBPwFsv//EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oACAECAQE/AVf/xAAbEAEAAgIDAAAAAAAAAAAAAAABABECISIxQf/aAAgBAQAGPwIXHcvIlBOZs9iLdztn/8QAHBABAAEEAwAAAAAAAAAAAAAAAQARIUFRMWHR/9oACAEBAAE/IQ7O1JiebhKz6YToGNBVDyrA/Wf/2gAMAwEAAgADAAAAEGPf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERYf/aAAgBAwEBPxCqGB//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFR/9oACAECAQE/EI6TZ//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFRQWFxkbH/2gAIAQEAAT8QKhMuZNfJepb2giPXmYOXsiuXo27pnUx0g1NHFAo9T//Z",aspectRatio:1.5,src:"/kriskodirablog/static/2bd4e805b26c2fc2041ff074583bc177/775d9/charles-Ms9xBg3Gtr8-unsplash.jpg",srcSet:"/kriskodirablog/static/2bd4e805b26c2fc2041ff074583bc177/cb3d3/charles-Ms9xBg3Gtr8-unsplash.jpg 150w,\n/kriskodirablog/static/2bd4e805b26c2fc2041ff074583bc177/c83a6/charles-Ms9xBg3Gtr8-unsplash.jpg 300w,\n/kriskodirablog/static/2bd4e805b26c2fc2041ff074583bc177/775d9/charles-Ms9xBg3Gtr8-unsplash.jpg 600w,\n/kriskodirablog/static/2bd4e805b26c2fc2041ff074583bc177/2b1a3/charles-Ms9xBg3Gtr8-unsplash.jpg 900w,\n/kriskodirablog/static/2bd4e805b26c2fc2041ff074583bc177/81ef8/charles-Ms9xBg3Gtr8-unsplash.jpg 1200w,\n/kriskodirablog/static/2bd4e805b26c2fc2041ff074583bc177/39b3c/charles-Ms9xBg3Gtr8-unsplash.jpg 5472w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"emile-seguin-wf5ZJ2s-B7I-unsplash.jpg",name:"emile-seguin-wf5ZJ2s-B7I-unsplash",childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAgX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAefpFs0opD//xAAaEAEBAAIDAAAAAAAAAAAAAAABAgADESEx/9oACAEBAAEFAq5sJkcn01gGrr//xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAgBAwEBPwGI/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAgIBBQAAAAAAAAAAAAAAAAECIRExMlGBkf/aAAgBAQAGPwK4xXQ8Ju+Sk/TBqzcz/8QAGhABAQEBAAMAAAAAAAAAAAAAAREAITFBUf/aAAgBAQABPyHvMX1FydG4TeQjPhroBB3MYBD5d//aAAwDAQACAAMAAAAQZB//xAAXEQEAAwAAAAAAAAAAAAAAAAAAATHw/9oACAEDAQE/EIMp/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxBuGn//xAAdEAACAgMAAwAAAAAAAAAAAAABEQAhMUFxYcHR/9oACAEBAAE/ECUqYI8jI7D5QQEBVw2IBasHYXazAbiweYwCbVexExEaC+T/2Q==",aspectRatio:1.5,src:"/kriskodirablog/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/775d9/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg",srcSet:"/kriskodirablog/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/cb3d3/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 150w,\n/kriskodirablog/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/c83a6/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 300w,\n/kriskodirablog/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/775d9/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 600w,\n/kriskodirablog/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/2b1a3/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 900w,\n/kriskodirablog/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/81ef8/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 1200w,\n/kriskodirablog/static/ae27cad3bce0b846fa83cc8a1f1cbc1a/2728f/emile-seguin-wf5ZJ2s-B7I-unsplash.jpg 5184w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"about.md",name:"about",childImageSharp:null}},{node:{relativePath:"privacy-policy.md",name:"privacy-policy",childImageSharp:null}},{node:{relativePath:"imprint.md",name:"imprint",childImageSharp:null}},{node:{relativePath:"",name:"config",childImageSharp:null}}]}}}}}]);
//# sourceMappingURL=1-0fad50b43401b7c838cf.js.map