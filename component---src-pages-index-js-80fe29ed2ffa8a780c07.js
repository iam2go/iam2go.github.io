"use strict";(self.webpackChunkleego_dev_log=self.webpackChunkleego_dev_log||[]).push([[678],{3431:function(e,t,l){var a=l(7294),n=l(1883),r=l(7174),c=l(8032);t.Z=e=>{var t;let{slug:l,post:o}=e;const m=(0,c.c)(o.thumbnail);return a.createElement("li",{className:"bg-background-sub min-h-[12rem] rounded-xl p-5 md:p-8 my-8 flex flex-col md:flex-row"},m&&a.createElement(c.G,{image:m,alt:o.title,className:"w-100p md:w-56 md:min-w-56 rounded-lg mb-5 md:mb-0 md:mr-10"}),a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("h2",null,a.createElement(n.Link,{to:l,itemProp:"url"},a.createElement("span",{itemProp:"headline"},o.title))),a.createElement(r.a,null,null===(t=o.tags)||void 0===t?void 0:t.map((e=>a.createElement(r.V,{key:e,className:"text-text-default px-4 bg-background-primary rounded-2xl text-sm  font-light leading-6",text:e})))),a.createElement("div",{className:"text-text-default text-sm  font-light my-1 md:my-5  line-clamp-2"},a.createElement("p",{dangerouslySetInnerHTML:{__html:o.description||o.excerpt},itemProp:"description"})),a.createElement("div",{className:"text-accent-default text-xs"},o.date)))}},7174:function(e,t,l){l.d(t,{V:function(){return c},a:function(){return r}});var a=l(1883),n=l(7294);const r=e=>{let{children:t}=e;return n.createElement("div",{className:"flex gap-1.5 my-3 flex-wrap"},t)},c=e=>{let{text:t}=e;return n.createElement(a.Link,{to:`/tags/${t}`},n.createElement("div",{className:"text-text-default px-4 font-normal text-opacity-80 bg-background-primary bg-opacity-30 border-text-default border border-opacity-20 rounded-2xl text-xs  leading-6 hover:bg-accent-default hover:bg-opacity-50 hover:border-accent-default cursor-pointer transition "},t))}},6558:function(e,t,l){l.r(t),l.d(t,{Head:function(){return o}});var a=l(7294),n=l(8709),r=l(9357),c=l(3431);t.default=e=>{var t;let{data:l,location:r}=e;const o=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMdx.nodes;return 0===m.length?a.createElement(n.Z,{location:r,title:o},a.createElement("div",{className:"w-2/3 mx-auto text-center my-32 text-text-default"},"게시글이 없습니다😥")):a.createElement(n.Z,{location:r,title:o},a.createElement("ol",{style:{listStyle:"none"}},m.map((e=>a.createElement(c.Z,{key:e.fields.slug,slug:e.fields.slug,post:e.frontmatter})))))};const o=()=>a.createElement(r.Z,{title:"Home"})}}]);
//# sourceMappingURL=component---src-pages-index-js-80fe29ed2ffa8a780c07.js.map