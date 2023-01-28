"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2690],{8043:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var i=n(3117),r=n(102),a=(n(7294),n(3905)),o=n(1402),p=["components"],l={id:"virtual-deploy",title:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",sidebar_label:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72"},s=void 0,c={unversionedId:"virtual-deploy",id:"virtual-deploy",title:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",description:"",source:"@site/docs/virtual-deploy.mdx",sourceDirName:".",slug:"/virtual-deploy",permalink:"/docs/virtual-deploy",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/virtual-deploy.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1652857793,formattedLastUpdatedAt:"May 18, 2022",frontMatter:{id:"virtual-deploy",title:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",sidebar_label:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72"},sidebar:"docs",previous:{title:"34.3 \u5728 Nginx \u90e8\u7f72",permalink:"/docs/deploy-nginx"},next:{title:"34.5. \u5355\u6587\u4ef6\u53d1\u5e03",permalink:"/docs/singlefile"}},u={},m=[{value:"34.4.1 \u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55",id:"3441-\u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55",level:2},{value:"34.4.2 \u9488\u5bf9\u5728 <code>IIS</code> \u7f51\u7ad9\u4e0b\u6dfb\u52a0 <code>Application</code> \u60c5\u51b5",id:"3442-\u9488\u5bf9\u5728-iis-\u7f51\u7ad9\u4e0b\u6dfb\u52a0-application-\u60c5\u51b5",level:2},{value:"34.4.3 \u9488\u5bf9\u975e <code>IIS</code> \u4e0b\u90e8\u7f72\u60c5\u51b5",id:"3443-\u9488\u5bf9\u975e-iis-\u4e0b\u90e8\u7f72\u60c5\u51b5",level:2},{value:"34.4.3.1 \u914d\u7f6e <code>AppSettings</code>",id:"34431-\u914d\u7f6e-appsettings",level:3},{value:"34.4.3.2 <code>.NET6 WebApplication \u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e</code>",id:"34432-net6-webapplication-\u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e",level:3},{value:"34.4.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3444-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u89c6\u9891\u6559\u7a0b",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1Rv4y1P7ZB"},"https://www.bilibili.com/video/BV1Rv4y1P7ZB"))),(0,a.kt)("h2",{id:"3441-\u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55"},"34.4.1 \u5173\u4e8e\u4e8c\u7ea7\u865a\u62df\u76ee\u5f55"),(0,a.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u7684\u7ad9\u70b9\u90fd\u662f\u90e8\u7f72\u5728\u7f51\u7ad9\u7684\u6839\u76ee\u5f55\u4e0b\u7684\uff0c\u4f46\u662f\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u80fd\u5c06\u7f51\u7ad9\u6839\u76ee\u5f55\u4e0b\u7684\u76ee\u5f55\u4f5c\u4e3a\u4e8c\u7ea7\u7ad9\u70b9\u6216\u5b50\u7ad9\u70b9\uff0c\u8fd9\u4e2a\u65f6\u5019\uff0c\u5c31\u4f1a\u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"404")," \u9519\u8bef\u4e86\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u8fdb\u884c\u4e00\u4e9b\u7279\u6b8a\u914d\u7f6e\u4e86\u3002"),(0,a.kt)("h2",{id:"3442-\u9488\u5bf9\u5728-iis-\u7f51\u7ad9\u4e0b\u6dfb\u52a0-application-\u60c5\u51b5"},"34.4.2 \u9488\u5bf9\u5728 ",(0,a.kt)("inlineCode",{parentName:"h2"},"IIS")," \u7f51\u7ad9\u4e0b\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Application")," \u60c5\u51b5"),(0,a.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 3.2.0 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u7f51\u7ad9\u662f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Site")," \u4e0b\u9762\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Application")," \u4e0b\u90e8\u7f72\uff0c\u5219\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"Application Pool")," \u5e94\u7528\u7a0b\u5e8f\u6c60\uff0c\u5e76\u8bbe\u7f6e\u4e3a\u975e\u6258\u7ba1\u6a21\u5f0f")),(0,a.kt)("img",{src:(0,o.Z)("img/vr1.png")}),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"Application")," \u5e76\u9009\u62e9\u521a\u521a\u521b\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u6c60")),(0,a.kt)("img",{src:(0,o.Z)("img/vr2.png")}),(0,a.kt)("br",null),(0,a.kt)("img",{src:(0,o.Z)("img/vr3.png")}),(0,a.kt)("br",null),(0,a.kt)("img",{src:(0,o.Z)("img/vr4.png")}),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u5e94\u7528\u914d\u7f6e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers  {2,3}",showLineNumbers:!0,"":!0,"{2,3}":!0},'{\n  "SpecificationDocumentSettings": {\n    "ServerDir": "IIS\u4e2d\u5e94\u7528\u7a0b\u5e8f\u540d\uff08Applicaiton\uff09"\n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8be5\u914d\u7f6e\u4e3b\u8981\u662f\u89e3\u51b3 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Swagger")," \u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"strong"},"404")," \u95ee\u9898\u3002")),(0,a.kt)("admonition",{title:"\u4e2a\u522b\u60c5\u51b5",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u914d\u7f6e\u4e4b\u540e\u8fd8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Swagger")," \u8fd8\u51fa\u73b0\u4e0d\u80fd\u52a0\u8f7d ",(0,a.kt)("inlineCode",{parentName:"p"},"swagger.json")," \u6587\u4ef6\u95ee\u9898\uff0c\u90a3\u4e48\u9700\u4fee\u6539\u542f\u52a8\u6ce8\u518c\u4ee3\u7801\uff1a"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"app.UseInject(string.Empty);  // \u786e\u4fdd\u53c2\u6570\u662f strng.Empty\n"))),(0,a.kt)("h2",{id:"3443-\u9488\u5bf9\u975e-iis-\u4e0b\u90e8\u7f72\u60c5\u51b5"},"34.4.3 \u9488\u5bf9\u975e ",(0,a.kt)("inlineCode",{parentName:"h2"},"IIS")," \u4e0b\u90e8\u7f72\u60c5\u51b5"),(0,a.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u662f\u9488\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u975e IIS")," \u90e8\u7f72\u4f7f\u7528\u7684\uff01\uff01\uff01")),(0,a.kt)("h3",{id:"34431-\u914d\u7f6e-appsettings"},"34.4.3.1 \u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"h3"},"AppSettings")),(0,a.kt)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"AppSettings")," \u5373\u53ef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers  {2,3}",showLineNumbers:!0,"":!0,"{2,3}":!0},'{\n  "AppSettings": {\n    "VirtualPath": "/\u865a\u62df\u76ee\u5f55"\n  }\n}\n')),(0,a.kt)("h3",{id:"34432-net6-webapplication-\u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e"},"34.4.3.2 ",(0,a.kt)("inlineCode",{parentName:"h3"},".NET6 WebApplication \u6a21\u5f0f\u4e0b\u865a\u62df\u76ee\u5f55\u914d\u7f6e")),(0,a.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion 3.2.0 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,a.kt)("p",null,"\u7531\u4e8e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".NET6")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"WebApplication")," \u6a21\u5f0f\u4e0b\u5fae\u8f6f\u5e95\u5c42\u53d1\u751f\u4e86\u6539\u53d8\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6240\u4ee5\u9700\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"app.UseVirtualPath()")," \u5305\u88f9 ",(0,a.kt)("inlineCode",{parentName:"strong"},"app.UseInject()")," \u548c ",(0,a.kt)("inlineCode",{parentName:"strong"},"app.MapRouteControllers()")),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,4}",showLineNumbers:!0,"":!0,"{1,4}":!0},"app.UseVirtualPath(app =>\n{\n    app.UseInject(String.Empty);  // \u6ce8\u610f String.Empty \u53ea\u662f\u4f8b\u5b50\uff0c\u53ef\u4ee5\u4e0d\u586b\u6216\u586b\u5176\u4ed6\u7684\uff0c\u89c1\u4e00\u5206\u949f\u5165\u95e8\n    app.MapRouteControllers();\n});\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"strong"},"app.MapRouteControllers()")," \u662f\u66ff\u6362 ",(0,a.kt)("inlineCode",{parentName:"strong"},"app.MapControllers()")," \u7684\uff01")),(0,a.kt)("h2",{id:"3444-\u53cd\u9988\u4e0e\u5efa\u8bae"},"34.4.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}k.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?i.createElement(k,o(o({ref:t},c),{},{components:n})):i.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);