import{a as r}from"./axios-28bc18a3.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as o,t as p,b as m,d}from"./index-01c3ac57.js";import"vuex";const _="http://10.32.61.211:8085",y={data(){return{data:null}},methods:{async fetchData(){try{const e=await r.post(_+"/api/hellow");this.data=e.data,console.log(this.data)}catch(e){console.error("获取数据时发生错误:",e)}},async fetchDataWithNum(e){try{const t=await r.post(_+"/api/hellow",{Num:e});this.data=t.data,console.log(this.data)}catch(t){console.error("获取数据时发生错误:",t)}}}},f={class:"communication-example"},w=o("h3",null,"与后端通信的示例",-1),v={class:"button-container"},k={key:0},x=o("h5",null,"从后端获取的数据：",-1);function D(e,t,i,u,c,n){return s(),a("div",f,[w,o("div",v,[o("button",{class:"piano-key",onClick:t[0]||(t[0]=(...l)=>n.fetchData&&n.fetchData(...l))},"获取数据"),o("button",{class:"piano-key",onClick:t[1]||(t[1]=l=>n.fetchDataWithNum(1))},"发送1")]),c.data?(s(),a("div",k,[x,o("pre",null,p(c.data),1)])):m("",!0)])}const $=h(y,[["render",D]]),g={mounted(){window.addEventListener("keydown",this.handleKeyDown)},destroyed(){window.removeEventListener("keydown",this.handleKeyDown)},methods:{handleKeyDown(e){e.key==="a"&&this.sendRequest("A")},sendRequest(e){r.post("http://localhost:8085/api/listener",{data:e}).then(t=>{console.log("请求成功",t.data)}).catch(t=>{console.error("请求失败",t)})}}},C=o("p",null,"按下 'A' 键发送请求",-1),b=[C];function N(e,t,i,u,c,n){return s(),a("div",null,b)}const P=h(g,[["render",N]]);const B={methods:{handleButtonClick(){console.log("按钮被点击了！")}}},A=Object.assign(B,{__name:"PlayThePiano",setup(e){return(t,i)=>(s(),a("main",null,[d($),d(P)]))}});export{A as default};
