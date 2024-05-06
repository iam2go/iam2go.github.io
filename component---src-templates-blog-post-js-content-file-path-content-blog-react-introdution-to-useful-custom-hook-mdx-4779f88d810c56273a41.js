"use strict";(self.webpackChunkleego_dev_log=self.webpackChunkleego_dev_log||[]).push([[860],{7184:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return b}});var r=n(1151),a=n(7294);function l(e){const t=Object.assign({h1:"h1",a:"a",span:"span",pre:"pre",code:"code",p:"p",strong:"strong",br:"br"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,{id:"useprevious",style:{position:"relative"}},a.createElement(t.a,{href:"#useprevious","aria-label":"useprevious permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"usePrevious"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"import { useEffect, useRef } from 'react';\n\nfunction usePrevious(stateOrProp) {\n  const previous = useRef(null);\n\n  useEffect(() => {\n    previous.current = stateOrProp;\n  }, [stateOrProp]);\n\n  return previous.current;\n}\n\nexport default usePrevious;\n")),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,"가끔 이전 state의 값이 필요할 때가 있다."),"\n",a.createElement(t.p,null,"예를 들어 ",a.createElement(t.code,null,"useEffect"),"는 deps에 명시한 값이 하나라도 변경되면 로직을 실행한다."),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"useEffect(() => {\n    ...\n    ...\n}, [ one, two, three, four ]);\n")),"\n",a.createElement("br"),"\n",a.createElement(t.p,null,"이때 특정 state가 바뀔때만 ",a.createElement(t.code,null,"useEffect"),"를 실행하고 싶다면, ",a.createElement(t.code,null,"usePrevious"),"를 사용하여 이전 값과 현재 값을 비교하는 조건문을 추가해주면 된다."),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"const prevOne = usePrevious(one);\n\nuseEffect(() => {\n    if(prevOne !== one){\n        ...\n         ...\n    }\n}, [ one, two, three, four ]);\n")),"\n",a.createElement("br"),"\n",a.createElement("br"),"\n",a.createElement(t.h1,{id:"useupdateeffect",style:{position:"relative"}},a.createElement(t.a,{href:"#useupdateeffect","aria-label":"useupdateeffect permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"useUpdateEffect"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"import { useEffect, useRef } from 'react';\n\nfunction useUpdateEffect(callback, deps) {\n  const ref = useRef(false);\n\n  useEffect(() => {\n    if (ref.current) {\n      callback();\n    }else {\n      ref.current = true;\n    }\n  }, [...deps]);\n}\n\nexport default useUpdateEffect;\n")),"\n",a.createElement(t.p,null,"deps에 추가한 state가 변경될 때마다 callback이 실행된다. 단, ",a.createElement(t.strong,null,"최초 마운트 시에는 실행되지 않는다."),a.createElement(t.br),"\n",a.createElement(t.code,null,"useEffect"),"와 동일하지만, 마운트 시에는 실행을 건너뛰고 싶을 때 유용하게 사용한다."),"\n",a.createElement("br"),"\n",a.createElement("br"),"\n",a.createElement(t.h1,{id:"useoutsideclick",style:{position:"relative"}},a.createElement(t.a,{href:"#useoutsideclick","aria-label":"useoutsideclick permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"useOutSideClick"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"import { useEffect } from 'react';\n\nfunction useOutSideClick(ref, callback) {\n  useEffect(() => {\n    const handleClick = (event) => {\n      if (ref.current && !ref.current.contains(event.target)) {\n        callback?.();\n      }\n    };\n\n    window.addEventListener('mousedown', handleClick);\n\n    return () => window.removeEventListener('mousedown', handleClick);\n  }, [ref, callback]);\n}\n\nexport default useOutSideClick;\n")),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"ref"),"로 지정한 요소의 밖을 클릭했을 때의 이벤트 매서드를 정의할 때 사용한다."),"\n",a.createElement("img",{src:"https://blog.kakaocdn.net/dn/dqsgjL/btrhVDmWYSK/zMFgyjKEkU5X8in6S5lVu0/img.gif",width:"200",className:"m-auto"}),"\n",a.createElement(t.p,null,"위와 같이 생성된 메뉴 밖을 클릭하면 자동으로 메뉴창이 닫히는 기능을 구현할 때 유용하다. "))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},s=n(1883),o=n(157),m=n(588),u=n(8709),i=n(9357),f=n(7174),d=n(4462),p=n(8336),E=n(1075);const h={img:e=>{let{src:t,alt:n}=e;return a.createElement("img",{src:t,alt:n,className:"m-auto md:w-3/4"})},pre:d.d,code:e=>a.createElement("code",Object.assign({},e,{className:"bg-background-primary text-accent-default bg-opacity-70"}))},v=e=>{var t;let{data:{previous:n,next:l,site:c,mdx:i},location:d,children:v}=e;const g=(null===(t=c.siteMetadata)||void 0===t?void 0:t.title)||"Title";return a.createElement(u.Z,{location:d,title:g},a.createElement("article",{className:"blog-post px-8 pt-10",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",{className:"text-center py-14"},a.createElement("h1",{itemProp:"headline"},i.frontmatter.title),a.createElement("p",{className:"text-accent-default text-xs mt-8"},i.frontmatter.date)),a.createElement("section",{className:"h-fit my-28 text-text-default",itemProp:"articleBody"},a.createElement(r.Zo,{components:h},v)),a.createElement(f.a,null,i.frontmatter.tags.map((e=>a.createElement(f.V,{key:e,text:e})))),a.createElement("hr",{className:"my-10"}),a.createElement(p.Z),a.createElement("footer")),a.createElement("nav",{className:"blog-post-nav px-8 mt-8"},a.createElement("ul",{className:"flex flex-wrap justify-between list-none p-0 text-text-default"},n?a.createElement(s.Link,{to:n.fields.slug,rel:"prev"},a.createElement("li",{className:"bg-background-primary/50 text-sm p-3 rounded-xl h-fit flex items-center gap-3"},a.createElement(m.D,{size:22,className:"text-accent-default"}),a.createElement("p",{className:"max-w-[28rem]"},n.frontmatter.title))):a.createElement("div"),l&&a.createElement(s.Link,{to:l.fields.slug,rel:"next"},a.createElement("li",{className:"bg-background-primary/50 text-sm p-3 rounded-xl h-fit flex items-center gap-3"},a.createElement("p",{className:"max-w-[28rem]"},l.frontmatter.title),a.createElement(o.M,{size:22,className:"text-accent-default"}))))),a.createElement(E.Z,{contents:i.tableOfContents}))},g=e=>{let{data:{mdx:t}}=e;return a.createElement(i.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};function b(e){return a.createElement(v,e,a.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-content-blog-react-introdution-to-useful-custom-hook-mdx-4779f88d810c56273a41.js.map