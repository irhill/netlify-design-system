const t="mcc-alert",e={create({createComponent:e,html:s}){e(t,function(t){return{methods:{show(){this.classList.contains("mcc-alert--hide")&&this.classList.remove("mcc-alert--hide")},hide(){this.classList.contains("mcc-alert--hide")||(this.classList.add("mcc-alert--hide"),this.emit("hide",{instance:this}))}},mounted(){const t=this.querySelector(".mcc-alert__button--hide");t&&t.addEventListener("click",(()=>{this.methods.hide()}))},styles:()=>"\n      .mcc-alert--hide {\n        display: none;\n      }\n      .mcc-alert__button--hide {\n        position: absolute;\n        top: 0;\n        right: 0;\n      }\n      ",render(){return t`${this.slots.default}`}}}(s))}};export{e as alert};