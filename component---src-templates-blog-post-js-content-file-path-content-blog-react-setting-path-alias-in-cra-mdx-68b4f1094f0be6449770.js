"use strict";(self.webpackChunkleego_dev_log=self.webpackChunkleego_dev_log||[]).push([[460],{102:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return v}});var a=n(1151),l=n(7294);function c(e){const t=Object.assign({p:"p",code:"code",h1:"h1",a:"a",span:"span",pre:"pre",em:"em",strong:"strong"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement("img",{src:"https://blog.kakaocdn.net/dn/3Bk6V/btrRAEkQ3Xj/pD8kYkD7DjwvgCVtbttbVK/img.gif",width:"500",className:"m-auto"}),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.p,null,"이전 프로젝트에서는 괜찮았으나, 이번 React-Query 프로젝트에서는 Atomic system에서 착안한 새로운 폴더 구조를 시도해본 만큼 코드 상단의 무수한 ",l.createElement(t.code,null,"../../../")," 들이 신경 쓰이기 시작했다."),"\n",l.createElement("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FwDjkK%2FbtrRzkno7h1%2F4pfhW1CwlQ6jClT6ua17p0%2Fimg.png",width:"500",className:"m-auto"}),"\n",l.createElement(t.p,null,"그동안 미뤄왔던 path alias를 설정을 드디어 프로젝트에 적용했고, 그 과정을 여기에 기록해보려 한다."),"\n",l.createElement(t.p,null,"(‘미루고 미루다가 드디어 적용한 것’이라 말하니 뭔가 엄청난 작업을 해야 할 것 같지만 사실 설정은 매우 간단하다.)"),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.h1,{id:"path-alias란",style:{position:"relative"}},l.createElement(t.a,{href:"#path-alias%EB%9E%80","aria-label":"path alias란 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Path Alias란"),"\n",l.createElement(t.p,null,"path alias는 경로에 별칭을 붙인다는 뜻으로,"),"\n",l.createElement(t.p,null,"path alias를 사용하면 ",l.createElement(t.code,null,'"../../../hooks/quires/useMovieDetail"'),"과 같은 경로를"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,'"@hooks/quires/useMovieDetail"')," 이런 식으로 훨씬 깔끔하게 만들 수 있다."),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.h1,{id:"tsconfig설정",style:{position:"relative"}},l.createElement(t.a,{href:"#tsconfig%EC%84%A4%EC%A0%95","aria-label":"tsconfig설정 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"tsconfig 설정"),"\n",l.createElement(t.p,null,"먼저, 컴파일 시 path alias를 인식할 수 있도록 typescript 컴파일러에게 우리가 설정할 path alias를 알려주자."),"\n",l.createElement(t.p,null,"이때 주의할 점은 ",l.createElement(t.code,null,"tsconfig.json"),"에 직접 path를 설정하는 것이 아닌, 별도의 파일에 설정해야 한다는 것이다."),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'// tsconfig.paths.json\n\n{\n    "compilerOptions": {\n      "baseUrl": "src",\n      "paths": {\n        "@apis/*": ["apis/*"],\n        "@assets/*": ["assets/*"],\n        "@atoms/*": ["components/atoms/*"],\n        "@blocks/*": ["components/blocks/*"],\n        "@pages/*": ["components/pages/*"],\n        "@hooks/*": ["hooks/*"],\n        "@styles/*": ["styles/*"],\n        "@utils/*": ["utils/*"],\n      },\n    }\n}\n')),"\n",l.createElement(t.p,null,"cra는 start시 ",l.createElement(t.code,null,"tsconfig.json")," 에서 몇몇 설정만을 남겨놓고 초기화시키는데, path설정은 이때 지워지는 설정 중 하나이다."),"\n",l.createElement(t.p,null,"따라서 기존 ",l.createElement(t.code,null,"tsconfig.json")," 파일에 paths를 정의해주면 설정이 적용되지 않기 때문에, 별도의 파일을 생성해주어야 한다."),"\n",l.createElement(t.p,null,"여기에서는 ",l.createElement(t.code,null,"tsconfig.paths.json")," 이름의 파일을 새로 생성하고 그 안에 path를 정의해주었다."),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'// tsconfig.json\n\n{\n    ...\n    "extends": "./tsconfig.paths.json"\n}\n')),"\n",l.createElement(t.p,null,"마지막으로 ",l.createElement(t.code,null,"tsconfig.json"),"에 확장 경로 파일을 추가해주었다."),"\n",l.createElement("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvbsKp%2FbtrRzlGCoXL%2FkeHbyWrXDBbdllwHAzEUnk%2Fimg.png",width:"400",className:"m-auto"}),"\n",l.createElement(t.p,null,"제대로 설정이 되었다면, path alias 사용했을 때 에디터 상에서 나타나는 에러 표시가 사라졌을 것이다."),"\n",l.createElement(t.p,null,"이제 프로젝트 빌드 시에도 path alias를 보고 올바른 경로를 찾을 수 있도록 웹팩에게도 path alias를 알려줘야한다. 웹팩에서 path alias 설정은 ",l.createElement(t.code,null,"webpack.config.js")," 파일을 변경해줘야 하는데, cra로 만든 프로젝트라면 ",l.createElement(t.code,null,"eject"),"를 해야 해당 파일이 나타난다."),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.h1,{id:"craco-설치",style:{position:"relative"}},l.createElement(t.a,{href:"#craco-%EC%84%A4%EC%B9%98","aria-label":"craco 설치 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"craco 설치"),"\n",l.createElement(t.p,null,"여기서는 ",l.createElement(t.code,null,"eject"),"를 하지 않고 webpack 설정을 확장하기 위해 ",l.createElement(t.code,null,"craco"),"라는 라이브러리를 사용했다."),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.npmjs.com/package/@craco/craco"},"@craco/craco")),"\n",l.createElement(t.p,null,l.createElement(t.em,null,l.createElement(t.strong,null,"craco"))," 는 ",l.createElement(t.em,null,l.createElement(t.strong,null,"C"),"reate ",l.createElement(t.strong,null,"R"),"eact ",l.createElement(t.strong,null,"A"),"pp ",l.createElement(t.strong,null,"C"),"onfiguration ",l.createElement(t.strong,null,"O"),"verride")," 의 약자로, eject 없이 cra의 편리함과 자유로운 커스터마이징을 누리자! 라는 취지로 만들어진 라이브러리이다."),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"npm install @craco/craco\n")),"\n",l.createElement(t.p,null,"먼저 craco를 설치해준다."),"\n",l.createElement(t.p,null,"보통 path alias 설정을 위해 craco를 설치하면서 ",l.createElement(t.code,null,"craco-alias")," 도 같이 설치하는데,"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"craco-alias"),"는 현재 더 이상 지원되지 않는다."),"\n",l.createElement("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcc1xvi%2FbtrRDVMGR8x%2FVMER9NP7jiYrSTL4cGDjAK%2Fimg.png",width:"612",className:"m-auto"}),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"craco-alias")," 대신 웹팩 플러그인인 ",l.createElement(t.code,null,"tsconfig-paths-webpack-plugin")," 을 사용하면 간편하게 path alias를 설정해줄 수 있다."),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"npm install -D tsconfig-paths-webpack-plugin\n")),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://www.npmjs.com/package/tsconfig-paths-webpack-plugin"},"https://www.npmjs.com/package/tsconfig-paths-webpack-plugin")),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"tsconfig-paths-webpack-plugin")," 는 ",l.createElement(t.code,null,"tsconfig.json"),"에서 설정한 path를 웹팩에 그대로 설정해주는 플러그인이다."),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.h1,{id:"cracoconfigjs-파일-생성",style:{position:"relative"}},l.createElement(t.a,{href:"#cracoconfigjs-%ED%8C%8C%EC%9D%BC-%EC%83%9D%EC%84%B1","aria-label":"cracoconfigjs 파일 생성 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(t.code,null,"craco.config.js")," 파일 생성"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"package.json"),"과 동일한 depth에 ",l.createElement(t.code,null,"craco.config.js")," 파일을 만들어준다."),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"project_name\n  ├── node_modules\n+ ├── craco.config.js\n  └── package.json\n")),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.h1,{id:"packagejson-수정",style:{position:"relative"}},l.createElement(t.a,{href:"#packagejson-%EC%88%98%EC%A0%95","aria-label":"packagejson 수정 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),l.createElement(t.code,null,"package.json")," 수정"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"scripts"),"에서 ",l.createElement(t.code,null,"react-script")," 를 호출하는 부분을 ",l.createElement(t.code,null,"craco")," 로 변경해준다."),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'// package.json\n\n"scripts": {\n    "start": "craco start",\n    "build": "craco build"\n  },\n')),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement(t.h1,{id:"craco-설정-파일-변경",style:{position:"relative"}},l.createElement(t.a,{href:"#craco-%EC%84%A4%EC%A0%95-%ED%8C%8C%EC%9D%BC-%EB%B3%80%EA%B2%BD","aria-label":"craco 설정 파일 변경 permalink",className:"anchor before"},l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"craco 설정 파일 변경"),"\n",l.createElement(t.p,null,"이제 ",l.createElement(t.code,null,"craco.config.js")," 에서 웹팩 설정을 재정의해주면 된다."),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://craco.js.org/docs/configuration/webpack/"},"참고")),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"// craco.config.js\n\nconst TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');\n\nmodule.exports = {\n  plugins: [\n    {\n      plugin: {\n        overrideWebpackConfig: ({ webpackConfig }) => {\n          webpackConfig.resolve.plugins.push(new TsconfigPathsPlugin({}));\n          return webpackConfig;\n        }\n      }\n    }\n  ]\n};\n")),"\n",l.createElement("br"),"\n",l.createElement("br"),"\n",l.createElement("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbMjy1Z%2FbtrRDUtvrNX%2FgGNDSlYetdJI9pGz2dlim0%2Fimg.png",width:"500",className:"m-auto"}),"\n",l.createElement("img",{src:"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbdmUVd%2FbtrRzRdTVYL%2FIA7ieR7pbIeEIidnVDwAgK%2Fimg.png",width:"500",className:"m-auto"}),"\n",l.createElement(t.p,null,"코드가 훨씬 깔끔해졌다!"))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(c,e)):c(e)},s=n(1883),o=n(157),m=n(588),i=n(8709),p=n(9357),u=n(7174),h=n(4462),d=n(8336),E=n(1075);const g={img:e=>{let{src:t,alt:n}=e;return l.createElement("img",{src:t,alt:n,className:"m-auto md:w-3/4"})},pre:h.d,code:e=>l.createElement("code",Object.assign({},e,{className:"bg-background-primary text-accent-default bg-opacity-70"}))},f=e=>{var t;let{data:{previous:n,next:c,site:r,mdx:p},location:h,children:f}=e;const b=(null===(t=r.siteMetadata)||void 0===t?void 0:t.title)||"Title";return l.createElement(i.Z,{location:h,title:b},l.createElement("article",{className:"blog-post px-8 pt-10",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",{className:"text-center py-14"},l.createElement("h1",{itemProp:"headline"},p.frontmatter.title),l.createElement("p",{className:"text-accent-default text-xs mt-8"},p.frontmatter.date)),l.createElement("section",{className:"h-fit my-28 text-text-default",itemProp:"articleBody"},l.createElement(a.Zo,{components:g},f)),l.createElement(u.a,null,p.frontmatter.tags.map((e=>l.createElement(u.V,{key:e,text:e})))),l.createElement("hr",{className:"my-10"}),l.createElement(d.Z),l.createElement("footer")),l.createElement("nav",{className:"blog-post-nav px-8 mt-8"},l.createElement("ul",{className:"flex flex-wrap justify-between list-none p-0 text-text-default"},n?l.createElement(s.Link,{to:n.fields.slug,rel:"prev"},l.createElement("li",{className:"bg-background-primary/50 text-sm p-3 rounded-xl h-fit flex items-center gap-3"},l.createElement(m.D,{size:22,className:"text-accent-default"}),l.createElement("p",{className:"max-w-[28rem]"},n.frontmatter.title))):l.createElement("div"),c&&l.createElement(s.Link,{to:c.fields.slug,rel:"next"},l.createElement("li",{className:"bg-background-primary/50 text-sm p-3 rounded-xl h-fit flex items-center gap-3"},l.createElement("p",{className:"max-w-[28rem]"},c.frontmatter.title),l.createElement(o.M,{size:22,className:"text-accent-default"}))))),l.createElement(E.Z,{contents:p.tableOfContents}))},b=e=>{let{data:{mdx:t}}=e;return l.createElement(p.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};function v(e){return l.createElement(f,e,l.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-content-file-path-content-blog-react-setting-path-alias-in-cra-mdx-68b4f1094f0be6449770.js.map