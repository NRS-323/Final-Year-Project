"use strict";(self["webpackChunkautomotive_vue_frontend"]=self["webpackChunkautomotive_vue_frontend"]||[]).push([[107],{9107:function(e,t,o){o.r(t),o.d(t,{default:function(){return Z}});var s=o(3396),r=o(9242),a=o(7139);const u={key:0,class:"edit-form"},n=(0,s._)("h4",null,"Customer",-1),l={class:"form-group"},c=(0,s._)("label",{for:"first_name"},"First Name",-1),m={class:"form-group"},i=(0,s._)("label",{for:"last_name"},"Last Name",-1),d={class:"form-group"},_=(0,s._)("label",{for:"email"},"Email",-1),p={class:"form-group"},h=(0,s._)("label",{for:"contact_no"},"Contact No.",-1),f={key:1},g=(0,s._)("br",null,null,-1),C=(0,s._)("p",null,"Please click on a Customer...",-1),b=[g,C];function v(e,t,o,g,C,v){return C.currentCustomer?((0,s.wg)(),(0,s.iD)("div",u,[n,(0,s._)("form",null,[(0,s._)("div",l,[c,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",id:"first_name",required:"","onUpdate:modelValue":t[0]||(t[0]=t=>e.customer.first_name=t),name:"first_name"},null,512),[[r.nr,e.customer.first_name]])]),(0,s._)("div",m,[i,(0,s.wy)((0,s._)("input",{class:"form-control",id:"last_name",required:"","onUpdate:modelValue":t[1]||(t[1]=t=>e.customer.last_name=t),name:"last_name"},null,512),[[r.nr,e.customer.last_name]])]),(0,s._)("div",d,[_,(0,s.wy)((0,s._)("input",{class:"form-control",id:"email",required:"","onUpdate:modelValue":t[2]||(t[2]=t=>e.customer.email=t),name:"email"},null,512),[[r.nr,e.customer.email]])]),(0,s._)("div",p,[h,(0,s.wy)((0,s._)("input",{class:"form-control",id:"contact_no",required:"","onUpdate:modelValue":t[3]||(t[3]=t=>e.customer.contact_no=t),name:"contact_no"},null,512),[[r.nr,e.customer.contact_no]])])]),(0,s._)("button",{class:"badge badge-danger mr-2",onClick:t[4]||(t[4]=(...e)=>v.deleteCustomer&&v.deleteCustomer(...e))}," Delete "),(0,s._)("button",{type:"submit",class:"badge badge-success",onClick:t[5]||(t[5]=(...e)=>v.updateCustomer&&v.updateCustomer(...e))}," Update "),(0,s._)("p",null,(0,a.zw)(C.message),1)])):((0,s.wg)(),(0,s.iD)("div",f,b))}o(7658);var w=o(8602),k={name:"view-customer",data(){return{currentCustomer:null,message:""}},methods:{getCustomer(e){w.Z.get(e).then((e=>{this.currentCustomer=e.data,console.log(e.data)})).catch((e=>{console.log(e)}))},updatePublished(e){var t={id:this.currentCustomer.id,title:this.currentCustomer.title,description:this.currentCustomer.description,published:e};w.Z.update(this.currentCustomer.id,t).then((t=>{this.currentCustomer.published=e,console.log(t.data)})).catch((e=>{console.log(e)}))},updateCustomer(){w.Z.update(this.currentCustomer.id,this.currentCustomer).then((e=>{console.log(e.data),this.message="The customer was updated successfully!"})).catch((e=>{console.log(e)}))},deleteCustomer(){w.Z["delete"](this.currentCustomer.id).then((e=>{console.log(e.data),this.$router.push({name:"customers"})})).catch((e=>{console.log(e)}))}},mounted(){this.message="",this.getCustomer(this.$route.params.id)}},y=o(89);const U=(0,y.Z)(k,[["render",v]]);var Z=U}}]);
//# sourceMappingURL=107.0b49f457.js.map