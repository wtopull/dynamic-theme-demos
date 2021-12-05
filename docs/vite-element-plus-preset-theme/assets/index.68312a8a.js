import{E as C,a as O,b as q,c as G,d as I,e as S,f as U,g as z,h as T,i as L,j as B,k as N,l as R,o as b,m as Z,w as l,n as t,p as m,q as v,r as j,s as D,t as K,u,v as M,x as H,y as J,z as Q}from"./vendor.32548960.js";const W=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&p(a)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}};W();var F=(n,o)=>{const d=n.__vccOpts||n;for(const[p,e]of o)d[p]=e;return d};const X={data(){return{ruleForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},rules:{name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}],region:[{required:!0,message:"Please select Activity zone",trigger:"change"}],date1:[{type:"date",required:!0,message:"Please pick a date",trigger:"change"}],date2:[{type:"date",required:!0,message:"Please pick a time",trigger:"change"}],type:[{type:"array",required:!0,message:"Please select at least one activity type",trigger:"change"}],resource:[{required:!0,message:"Please select activity resource",trigger:"change"}],desc:[{required:!0,message:"Please input activity form",trigger:"blur"}]}}},methods:{submitForm(n){this.$refs[n].validate(o=>{if(o)alert("submit!");else return console.log("error submit!!"),!1})},resetForm(n){this.$refs[n].resetFields()}}},Y=m("-"),$=m("Create"),ee=m("Reset");function te(n,o,d,p,e,r){const a=C,i=O,_=q,V=G,k=I,g=S,x=U,E=z,f=T,w=L,y=B,P=N,h=v,A=R;return b(),Z(A,{ref:"ruleForm",model:e.ruleForm,rules:e.rules,"label-width":"120px",class:"demo-ruleForm"},{default:l(()=>[t(i,{label:"Activity name",prop:"name"},{default:l(()=>[t(a,{modelValue:e.ruleForm.name,"onUpdate:modelValue":o[0]||(o[0]=s=>e.ruleForm.name=s)},null,8,["modelValue"])]),_:1}),t(i,{label:"Activity zone",prop:"region"},{default:l(()=>[t(V,{modelValue:e.ruleForm.region,"onUpdate:modelValue":o[1]||(o[1]=s=>e.ruleForm.region=s),placeholder:"Activity zone"},{default:l(()=>[t(_,{label:"Zone one",value:"shanghai"}),t(_,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"Activity time",required:""},{default:l(()=>[t(g,{span:11},{default:l(()=>[t(i,{prop:"date1"},{default:l(()=>[t(k,{modelValue:e.ruleForm.date1,"onUpdate:modelValue":o[2]||(o[2]=s=>e.ruleForm.date1=s),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{class:"line",span:2},{default:l(()=>[Y]),_:1}),t(g,{span:11},{default:l(()=>[t(i,{prop:"date2"},{default:l(()=>[t(x,{modelValue:e.ruleForm.date2,"onUpdate:modelValue":o[3]||(o[3]=s=>e.ruleForm.date2=s),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(i,{label:"Instant delivery",prop:"delivery"},{default:l(()=>[t(E,{modelValue:e.ruleForm.delivery,"onUpdate:modelValue":o[4]||(o[4]=s=>e.ruleForm.delivery=s)},null,8,["modelValue"])]),_:1}),t(i,{label:"Activity type",prop:"type"},{default:l(()=>[t(w,{modelValue:e.ruleForm.type,"onUpdate:modelValue":o[5]||(o[5]=s=>e.ruleForm.type=s)},{default:l(()=>[t(f,{label:"Online activities",name:"type"}),t(f,{label:"Promotion activities",name:"type"}),t(f,{label:"Offline activities",name:"type"}),t(f,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"Resources",prop:"resource"},{default:l(()=>[t(P,{modelValue:e.ruleForm.resource,"onUpdate:modelValue":o[6]||(o[6]=s=>e.ruleForm.resource=s)},{default:l(()=>[t(y,{label:"Sponsorship"}),t(y,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),t(i,{label:"Activity form",prop:"desc"},{default:l(()=>[t(a,{modelValue:e.ruleForm.desc,"onUpdate:modelValue":o[7]||(o[7]=s=>e.ruleForm.desc=s),type:"textarea"},null,8,["modelValue"])]),_:1}),t(i,null,{default:l(()=>[t(h,{type:"primary",onClick:o[8]||(o[8]=s=>r.submitForm("ruleForm"))},{default:l(()=>[$]),_:1}),t(h,{onClick:o[9]||(o[9]=s=>r.resetForm("ruleForm"))},{default:l(()=>[ee]),_:1})]),_:1})]),_:1},8,["model","rules"])}var oe=F(X,[["render",te]]);const c=n=>(M("data-v-6b823bd8"),n=n(),H(),n),le={style:{padding:"20px"}},re=c(()=>u("h1",{style:{"text-align":"center"}},"vite + elment-plus \u9884\u8BBE\u4E3B\u9898\u5207\u6362\u793A\u4F8B",-1)),se=c(()=>u("h3",{style:{"text-align":"center"}}," element-plus \u7684\u6309\u94AE\u4E3B\u9898\u8272\u662F\u5185\u8054\u7684\uFF0C\u53EA\u80FD\u8BBE\u7F6Ecolor\u5C5E\u6027\u7ED9button ",-1)),ne=c(()=>u("div",{style:{"text-align":"center"}},[m(" \u6709\u4EBA\u63D0\u4E86\u8FD9\u4E2A\u95EE\u9898 "),u("a",{href:"https://github.com/element-plus/element-plus/issues/4263"},"https://github.com/element-plus/element-plus/issues/4263")],-1)),ae={style:{"text-align":"center","margin-top":"20px"}},ie=m("\u9ED8\u8BA4"),ue=m("\u7EA2\u8272"),me=c(()=>u("h3",{class:"sub-title"}," \u8FD9\u884C\u6587\u5B57\u662F\u975E\u7EC4\u4EF6\u5E93\u7684\u989C\u8272\u5207\u6362\u6F14\u793A\uFF0C\u4E4B\u4E0B\u662F\u7EC4\u4EF6\u5E93\u7684\u989C\u8272\u5207\u6362 ",-1)),de=m("Default"),pe=m("\u8BBE\u7F6E\u4E86color"),ce=m("\u6CA1\u6709\u8BBE\u7F6Ecolor"),_e=m("\u4E2D\u6587"),fe=c(()=>u("div",{class:"my-plugins"},[u("h4",null,"webpack\u7248\u672C\u63D2\u4EF6\u652F\u6301"),u("a",{href:"https://github.com/GitOfZGT/some-loader-utils",target:"_blank"},"@zougt/some-loader-utils"),u("a",{href:"https://github.com/GitOfZGT/theme-css-extract-webpack-plugin",target:"_blank"},"@zougt/theme-css-extract-webpack-plugin"),u("h4",null,"vite\u7248\u672C\u63D2\u4EF6\u652F\u6301"),u("a",{href:"https://github.com/GitOfZGT/vite-plugin-theme-preprocessor",target:"_blank"},"@zougt/vite-plugin-theme-preprocessor")],-1)),ge={setup(n){const o={"theme-default":"#7546C9","theme-red":"#ed0a5a"},d=j(o["theme-default"]),p=e=>{d.value=o[e],J({scopeName:e})};return(e,r)=>{const a=v,i=D;return b(),K("div",le,[re,se,ne,u("div",ae,[t(a,{color:o["theme-default"],type:"primary",plain:"",onClick:r[0]||(r[0]=_=>p("theme-default"))},{default:l(()=>[ie]),_:1},8,["color"]),t(a,{type:"primary",color:o["theme-red"],plain:"",onClick:r[1]||(r[1]=_=>p("theme-red")),style:{"margin-left":"20px"}},{default:l(()=>[ue]),_:1},8,["color"])]),me,t(i,{style:{"margin-bottom":"20px"}},{default:l(()=>[t(a,null,{default:l(()=>[de]),_:1}),t(a,{color:d.value,type:"primary"},{default:l(()=>[pe]),_:1},8,["color"]),t(a,{type:"primary"},{default:l(()=>[ce]),_:1}),t(a,null,{default:l(()=>[_e]),_:1})]),_:1}),t(oe),fe])}}};var ye=F(ge,[["__scopeId","data-v-6b823bd8"]]);Q(ye).mount("#app");
