webpackJsonp([10],{Ak4B:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("PBmY");var a=e("I4Nl"),c=e.n(a),i=e("4YfN"),n=e.n(i),o=e("LOkV"),l=e("vgQg"),h=e("9rMa"),r={data:function(){return{mask:!1,canClick:!0,phone:"",captcha1:"",captcha2:"",count:0,msg:"",imgCode:l.b}},mounted:function(){console.log(l.b)},methods:n()({},Object(h.b)(["setUserInfo"]),{doLogin:function(){var t=this;""!==this.phone&&""!==this.captcha2?Object(o.a)(this.phone)?this.$api.requestsmsLogin({mobile:this.phone,mCode:this.captcha2,tk:""}).then(function(s){s.success?(console.log(s),t.captcha2="",t.setUserInfo(s),t.$router.push("/home")):c()(s.msg)}):c()("手机号有误"):c()("手机或验证码不能为空")},sure:function(){var t=this;""!==this.captcha1?this.$api.requestchkCode({randCode:this.captcha1}).then(function(s){console.log(s),s.success?t.$api.requestSend({mobile:t.phone,flag:2}).then(function(s){if(console.log(s),s.success){c()({message:"验证码已发送",position:"bottom"}),t.canClick=!1,t.closeMask(),t.count=60;var e=setInterval(function(){t.count--,0===t.count&&(t.canClick=!0,clearInterval(e))},1e3)}else c()(s.msg)}):t.msg=s.msg}):this.msg="验证码不能为空"},showCode:function(){""!==this.phone&&Object(o.a)(this.phone)?this.canClick&&(this.mask=!0):c()("手机号有误")},closeMask:function(){this.mask=!1,this.captcha1="",this.msg=""},changeCode:function(){this.imgCode=l.b+"?"+(new Date).getTime()}})},p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("h3",{staticClass:"tx-c fz500"},[t._v("请登录")]),t._v(" "),a("div",{staticClass:"wrapper"},[a("mt-field",{attrs:{placeholder:"请输入手机号",type:"tel"},model:{value:t.phone,callback:function(s){t.phone=s},expression:"phone"}}),t._v(" "),a("mt-field",{attrs:{label:"验证码",placeholder:"请输入验证码"},model:{value:t.captcha2,callback:function(s){t.captcha2=s},expression:"captcha2"}},[a("span",{staticClass:"get-code",on:{click:t.showCode}},[t._v(t._s(t.canClick?"获取验证码":"还剩"+t.count+"s"))])]),t._v(" "),a("mt-button",{staticClass:"login",attrs:{size:"large",type:"primary"},on:{click:t.doLogin}},[t._v("登录")]),t._v(" "),a("div",{staticClass:"pwd-login fr",on:{click:function(s){t.$router.push("/login")}}},[t._v("密码登录")])],1),t._v(" "),t.mask?a("div",{staticClass:"mask fx fx-ac fx-jc"},[a("div",{staticClass:"code-alert"},[a("div",{staticClass:"top"},[a("span",[t._v("请先完成下方的验证")]),t._v(" "),a("span",{staticClass:"fz-20 iconfont icon-shanchudelete30",on:{click:t.closeMask}})]),t._v(" "),a("div",{staticClass:"code"},[a("div",{staticClass:"content fx fx-ac"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha1,expression:"captcha1"}],staticClass:"input",attrs:{type:"text",maxlength:"4"},domProps:{value:t.captcha1},on:{input:function(s){s.target.composing||(t.captcha1=s.target.value)}}}),t._v(" "),a("img",{attrs:{src:t.imgCode,width:"70",height:"30"}}),t._v(" "),a("img",{attrs:{src:e("j1JE"),width:"25",height:"20"},on:{click:t.changeCode}})]),t._v(" "),a("div",{staticClass:"mistake"},[t._v(t._s(t.msg))]),t._v(" "),a("mt-button",{staticClass:"btn",attrs:{size:"large",type:"primary"},on:{click:t.sure}},[t._v("确定")])],1)])]):t._e()])},staticRenderFns:[]};var u=e("vSla")(r,p,!1,function(t){e("m9ki")},"data-v-5b30c831",null);s.default=u.exports},m9ki:function(t,s){}});
//# sourceMappingURL=10.8f5a5db1c25a0cf52393.js.map