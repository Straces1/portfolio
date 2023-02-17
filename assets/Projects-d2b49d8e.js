import{f as S,j as e,c as w,a as y,b as r,u as v,F as C,V as i,H as o,G as l,I as P,T as I,L as c}from"./index-b4121f8f.js";import{G as p}from"./chunk-IWVFML3N-060f7511.js";var h=S(function(n,t){const{direction:a,align:d,justify:m,wrap:g,basis:u,grow:f,shrink:x,...b}=n,k={display:"flex",flexDirection:a,alignItems:d,justifyContent:m,flexWrap:g,flexBasis:u,flexGrow:f,flexShrink:x};return e(w.div,{ref:t,__css:k,...b})});h.displayName="Flex";var E=y({displayName:"ExternalLinkIcon",path:r("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[e("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),e("path",{d:"M15 3h6v6"}),e("path",{d:"M10 14L21 3"})]})});function R(){const{theme:s}=v();return e(C,{bg:s==="light"?"hsl(221,21%,60%)":"rgb(35,35,35)",width:"100%",px:["5vw","5vw","10vw","10vw"],mb:8,children:r(i,{id:"Portfolio",py:"80px",spacing:"50px",children:[e(o,{alignSelf:"flex-start",mb:"-20px",size:"xl",children:"Projects"}),[{heading:"Amateur Outdoor Photographer's Portfolio",imgSrc:"./images/pavla-portfolio.webp",text:"Responsive photographer's web portfolio built in React JS, using Chakra UI component library.",linkPage:"https://pavlabphoto.org/",linkCode:"https://github.com/Straces1/pavla-breska-photography"},{heading:"REST Countries API with Color theme Switcher",imgSrc:"./images/rest-api-countries.webp",text:"App displaying flags, capitals and population of all countries in the world, using REST Countries API. User can use input field to search for a country or filter coutries by region.",linkPage:"https://straces1.github.io/rest-country-api-app/",linkCode:"https://github.com/Straces1/rest-country-api-app"},{heading:"Ecommerce Product Page",imgSrc:"./images/sneakers.webp",text:"Responsive Ecommerce according to FrontEnd Mentors design template. Built with use of Style Components. User can add items to the cart, cart section will display items and calculate total price.",linkPage:"https://straces1.github.io/ecommerce/#/",linkCode:"https://github.com/Straces1/ecommerce"}].map((t,a)=>r(i,{alignItems:"left",px:5,children:[e(o,{size:"lg",children:t.heading}),r(l,{templateColumns:{base:"repeat(1, 1fr)",sm:"repeat(4, 1fr)",md:"repeat(4, 1fr)"},gap:"15px",children:[e(p,{colSpan:{base:4,sm:2,md:1},children:e(P,{src:t.imgSrc})}),e(p,{colSpan:{base:4,sm:2,md:3},children:r(i,{fontSize:["md","md","md","lg"],children:[e(I,{align:"left",children:t.text}),r(l,{templateColumns:{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},gap:"15px",alignSelf:"start",children:[r(c,{mr:"5px",href:t.linkPage,isExternal:!0,children:["See more ",e(E,{mx:"2px",mb:"4px"})]}),e(c,{href:t.linkCode,isExternal:!0,children:e(h,{gap:"5px",children:e("span",{children:"Code "})})})]})]})})]})]},a))]})})}export{R as default};
