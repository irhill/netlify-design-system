function createDialog(e){return{props:{open:{type:Boolean,default:!1},showCloseButton:{type:Boolean,default:!1}},methods:{getDialog(){return((e=(()=>!0),t=1e4)=>new Promise(((o,s)=>{const check=()=>{const i=e();i?o(i):(t-=100)<0?s(new Error("Tessera UI: timed out waiting!")):setTimeout(check,100)};setTimeout(check,100)})))((()=>{const e=this.querySelector("dialog");return e&&e.showModal&&e.close?e:void 0}))},show(){this.methods.getDialog().then((e=>{e.parentElement.style.display="flex",e.show(),this.methods.handleBodyShift()}))},showModal(){this.methods.getDialog().then((e=>{e.parentElement.style.display="flex",e.showModal(),this.methods.handleBodyShift()}))},close(){this.methods.getDialog().then((e=>{e.parentElement.style.display="none",this.methods.handleBodyShift(!1),e.close()}))},handleBodyShift(e=!0){const t=document.body;t.offsetHeight>window.innerHeight&&(t.style.paddingRight=e?window.innerWidth-t.clientWidth+"px":"unset",t.style.overflow=e?"hidden":"auto")}},created(){this.show=()=>this.methods.show(),this.showModal=()=>this.methods.showModal(),this.close=()=>this.methods.close()},mounted(){this.classList.add("mcc-dialog");const e=this.querySelector("dialog");this.classList.forEach((t=>{e.classList.add(t)})),window.HTMLDialogElement||e.showModal||import("./polyfill-186edae0.js").then((t=>t.dialogPolyfill.registerDialog(e)))},render(){return e`<div class="mcc-dialog-overlay"><dialog>${this.slots.default}</dialog></div>`}}}const e="mcc-dialog",t={create({createComponent:t,html:o}){t(e,createDialog(o))}};export{t as dialog};