(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4zoT":function(e,t,i){"use strict";i.r(t),i.d(t,"TopupWithdrawalModule",(function(){return D}));var n=i("ofXK"),o=i("tyNb"),a=i("3Pt+"),r=i("fXoL"),c=i("qc5V"),s=i("5eHb");function b(e,t){if(1&e){const e=r.Ub();r.Tb(0,"div",11),r.fc("click",(function(){r.xc(e);const i=t.$implicit;return r.hc(3).accountNoClick(i)})),r.Ob(1,"img",12),r.Tb(2,"p",13),r.Gc(3),r.Sb(),r.Sb()}if(2&e){const e=t.$implicit;r.Ab(3),r.Ic("DBS - ",e.accountNumber,"")}}const u=function(){return["/pages/dashboard/edit-payment-method"]};function d(e,t){if(1&e&&(r.Tb(0,"div",8),r.Tb(1,"p"),r.Gc(2,"Withdraw funds to"),r.Sb(),r.Ec(3,b,4,1,"div",9),r.Tb(4,"a",10),r.Gc(5,"Edit Bank Accounts"),r.Sb(),r.Sb()),2&e){const e=r.hc(2);r.Ab(3),r.nc("ngForOf",e.bankDetails),r.Ab(1),r.nc("routerLink",r.qc(2,u))}}const l=function(){return["/pages/dashboard/add-payment-method"]};function f(e,t){1&e&&(r.Tb(0,"div",8),r.Tb(1,"a",10),r.Gc(2,"New Bank Accounts"),r.Sb(),r.Sb()),2&e&&(r.Ab(1),r.nc("routerLink",r.qc(1,l)))}function h(e,t){if(1&e&&(r.Tb(0,"div",5),r.Ec(1,d,6,3,"div",6),r.Ec(2,f,3,2,"ng-template",null,7,r.Fc),r.Sb()),2&e){const e=r.vc(3),t=r.hc();r.Ab(1),r.nc("ngIf",t.userInfo.bankStatus)("ngIfElse",e)}}function p(e,t){1&e&&(r.Tb(0,"div"),r.Gc(1," Transaction Receipt is Required. "),r.Sb())}function m(e,t){if(1&e&&(r.Tb(0,"div",24),r.Ec(1,p,2,0,"div",25),r.Sb()),2&e){const e=r.hc(2);r.Ab(1),r.nc("ngIf",e.f.transactionReceipt.errors.required)}}function g(e,t){1&e&&(r.Tb(0,"div"),r.Gc(1," Amount is Required. "),r.Sb())}function v(e,t){if(1&e&&(r.Tb(0,"div",24),r.Ec(1,g,2,0,"div",25),r.Sb()),2&e){const e=r.hc(2);r.Ab(1),r.nc("ngIf",e.f.amount.errors.required)}}function S(e,t){1&e&&(r.Tb(0,"div"),r.Gc(1," Transaction ID is Required. "),r.Sb())}function C(e,t){if(1&e&&(r.Tb(0,"div",24),r.Ec(1,S,2,0,"div",25),r.Sb()),2&e){const e=r.hc(2);r.Ab(1),r.nc("ngIf",e.f.transactionId.errors.required)}}function T(e,t){if(1&e){const e=r.Ub();r.Tb(0,"div",14),r.Tb(1,"div",8),r.Tb(2,"form",15),r.fc("ngSubmit",(function(){return r.xc(e),r.hc().topup()})),r.Tb(3,"div",16),r.Tb(4,"label",17),r.Gc(5,"Upload Transaction Receipt"),r.Sb(),r.Tb(6,"input",18),r.fc("change",(function(t){return r.xc(e),r.hc().uploadReceipt(t)})),r.Sb(),r.Ec(7,m,2,1,"div",19),r.Tb(8,"label",20),r.Gc(9,"Enter Amount"),r.Sb(),r.Ob(10,"input",21),r.Ec(11,v,2,1,"div",19),r.Tb(12,"label",20),r.Gc(13,"Enter Transaction ID"),r.Sb(),r.Ob(14,"input",22),r.Ec(15,C,2,1,"div",19),r.Sb(),r.Tb(16,"button",23),r.Gc(17,"TopUp"),r.Sb(),r.Sb(),r.Sb(),r.Sb()}if(2&e){const e=r.hc();r.Ab(2),r.nc("formGroup",e.topupForm),r.Ab(5),r.nc("ngIf",e.submitted&&e.f.transactionReceipt.errors||e.f.transactionReceipt.invalid&&(e.f.transactionReceipt.dirty||e.f.transactionReceipt.touched)),r.Ab(4),r.nc("ngIf",e.submitted&&e.f.amount.errors||e.f.amount.invalid&&(e.f.amount.dirty||e.f.amount.touched)),r.Ab(4),r.nc("ngIf",e.submitted&&e.f.transactionId.errors||e.f.transactionId.invalid&&(e.f.transactionId.dirty||e.f.transactionId.touched))}}let x=(()=>{class e{constructor(e,t,i,n){this.fb=e,this.apiService=t,this.toastr=i,this.router=n,this.topupForm=this.fb.group({transactionReceipt:["",a.t.required],amount:["",a.t.required],transactionId:["",a.t.required]}),this.documentUploadFailed=!1,this.step1=!1,this.step2=!0,this.submitted=!1,this.userInfo={},this.userDataAr={}}ngOnInit(){this.getUserData(),this.apiService.getBankDetails().subscribe(e=>{"success"===e.status&&(this.bankDetails=e.data)})}nextPageNavigate(){}get f(){return this.topupForm.controls}uploadReceipt(e){if(this.documentUploadFailed=!1,e.target.files.length>0){const t=e.target.files[0];this.topupForm.get("transactionReceipt").setValue(t)}}topup(){if(this.submitted=!0,this.topupForm.invalid)return;let e=new FormData;e.append("txnReceipt",this.topupForm.get("transactionReceipt").value),e.append("amount",this.topupForm.get("amount").value),e.append("txnId",this.topupForm.get("transactionId").value),e.forEach((e,t)=>{}),this.apiService.topUp(e).subscribe(e=>{"success"===e.status&&(this.toastr.success(e.message,"Success"),this.router.navigate(["/pages/topup-withdrawal/top-up-completed",this.topupForm.get("amount").value],{skipLocationChange:!0}))},e=>{this.toastr.error(e,"Invalid")})}accountNoClick(e){this.step1=!1,this.step2=!0,this.currentBankAccount=e}getUserData(){this.apiService.getUserData().subscribe(e=>{this.userDataAr=e;for(const[t,i]of Object.entries(this.userDataAr))"userInfo"===t&&(this.userInfo=i)})}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(a.d),r.Nb(c.a),r.Nb(s.b),r.Nb(o.d))},e.\u0275cmp=r.Hb({type:e,selectors:[["app-top-up"]],decls:7,vars:2,consts:[["id","Withdrawal-form",1,"mb-5"],[1,"container"],[1,"heading","text-center","mb-5"],["id","step1",4,"ngIf"],["id","step2",4,"ngIf"],["id","step1"],["class","card bg-white rounded p-5",4,"ngIf","ngIfElse"],["noBankData",""],[1,"card","bg-white","rounded","p-5"],["class","d-flex align-center border p-3 next-step mb-4",3,"click",4,"ngFor","ngForOf"],["routerLinkActive","router-link-active",1,"text-primary-color","font-weight-bold",3,"routerLink"],[1,"d-flex","align-center","border","p-3","next-step","mb-4",3,"click"],["src","assets/images/icon-29.png","alt","","width","29px","height","28px",1,"mr-4"],[1,"mb-0","account-name"],["id","step2"],["action","",3,"formGroup","ngSubmit"],[1,"d-flex","flex-column","p-3"],[1,"w-100","font-fam-titilum-bold","fs-14"],["type","file","formControlName","transactionReceipt","value","Upload","required","",1,"border","pl-3","pr-3","form-control",3,"change"],["class","text  text-danger",4,"ngIf"],[1,"w-100","font-fam-titilum-bold","fs-14","mt-5"],["type","text","name","amount","formControlName","amount",1,"border","pl-3","pr-3","form-control"],["type","text","name","transaction_id","formControlName","transactionId","required","",1,"border","pl-3","pr-3","form-control"],["type","submit",1,"bg-primary-color","text-center","text-white","btn-hover-tb","p-4","mb-4","next-step",2,"width","calc(100% - 1rem)"],[1,"text","text-danger"],[4,"ngIf"]],template:function(e,t){1&e&&(r.Tb(0,"section",0),r.Tb(1,"div",1),r.Tb(2,"p",2),r.Tb(3,"b"),r.Gc(4,"TopUp"),r.Sb(),r.Sb(),r.Ec(5,h,4,2,"div",3),r.Ec(6,T,18,4,"div",4),r.Sb(),r.Sb()),2&e&&(r.Ab(5),r.nc("ngIf",t.step1),r.Ab(1),r.nc("ngIf",t.step2))},directives:[n.n,n.m,o.f,o.e,a.v,a.l,a.f,a.c,a.k,a.e,a.r],styles:["[_nghost-%COMP%]{font-size:1.6rem;line-height:1.4;font-weight:400;box-sizing:border-box}.account-name[_ngcontent-%COMP%]{cursor:pointer}input.verification-code[_ngcontent-%COMP%]{border-left:none;border-right:none;border-top:none;width:18px;text-align:center}.not-valid-box[_ngcontent-%COMP%]   input.verification-code[_ngcontent-%COMP%]{border:1px solid #dc3545!important}"]}),e})();function w(e,t){if(1&e){const e=r.Ub();r.Tb(0,"div",52),r.fc("click",(function(){r.xc(e);const i=t.$implicit;return r.hc(3).accountNoClick(i)})),r.Ob(1,"img",53),r.Tb(2,"p",54),r.Gc(3),r.Sb(),r.Sb()}if(2&e){const e=t.$implicit;r.Ab(3),r.Ic("DBS - ",e.accountNumber,"")}}const y=function(){return["/pages/dashboard/edit-payment-method"]};function k(e,t){if(1&e&&(r.Tb(0,"div",49),r.Tb(1,"p"),r.Gc(2,"Withdraw funds to"),r.Sb(),r.Ec(3,w,4,1,"div",50),r.Tb(4,"a",51),r.Gc(5,"Edit Bank Accounts"),r.Sb(),r.Sb()),2&e){const e=r.hc(2);r.Ab(3),r.nc("ngForOf",e.bankDetails),r.Ab(1),r.nc("routerLink",r.qc(2,y))}}const A=function(){return["/pages/dashboard/add-payment-method"]};function F(e,t){1&e&&(r.Tb(0,"div",49),r.Tb(1,"a",51),r.Gc(2,"New Bank Accounts"),r.Sb(),r.Sb()),2&e&&(r.Ab(1),r.nc("routerLink",r.qc(1,A)))}function I(e,t){if(1&e&&(r.Tb(0,"div",46),r.Ec(1,k,6,3,"div",47),r.Ec(2,F,3,2,"ng-template",null,48,r.Fc),r.Sb()),2&e){const e=r.vc(3),t=r.hc();r.Ab(1),r.nc("ngIf",t.userInfo.bankStatus)("ngIfElse",e)}}function G(e,t){1&e&&(r.Tb(0,"b"),r.Tb(1,"button",68),r.Gc(2,"Next"),r.Sb(),r.Sb())}function N(e,t){if(1&e){const e=r.Ub();r.Tb(0,"button",69),r.fc("click",(function(){return r.xc(e),r.hc(2).nextPageNavigate()})),r.Gc(1,"Next"),r.Sb()}}function M(e,t){if(1&e){const e=r.Ub();r.Tb(0,"div",55),r.Tb(1,"div",49),r.Tb(2,"p",56),r.fc("click",(function(){return r.xc(e),r.hc().prevStep()})),r.Tb(3,"b"),r.Gc(4,"\u2190 Back"),r.Sb(),r.Sb(),r.Tb(5,"form",57),r.Tb(6,"div",58),r.Tb(7,"label",59),r.Gc(8,"Enter Withdrawal Amount"),r.Sb(),r.Tb(9,"div",60),r.Tb(10,"input",61),r.fc("ngModelChange",(function(t){return r.xc(e),r.hc().withdrwalAmount=t})),r.Sb(),r.Tb(11,"select",62),r.Tb(12,"option",63),r.Gc(13,"bizx "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(14,"p",64),r.Tb(15,"b"),r.Gc(16,"View transaction history"),r.Sb(),r.Sb(),r.Tb(17,"ul"),r.Tb(18,"li",65),r.Gc(19),r.ic(20,"number"),r.Sb(),r.Tb(21,"li",65),r.Gc(22),r.ic(23,"number"),r.Sb(),r.Tb(24,"li",65),r.Gc(25),r.ic(26,"number"),r.Sb(),r.Tb(27,"li",65),r.Gc(28),r.ic(29,"number"),r.Sb(),r.Sb(),r.Ec(30,G,3,0,"b",66),r.Ec(31,N,2,0,"ng-template",null,67,r.Fc),r.Sb(),r.Sb(),r.Sb()}if(2&e){const e=r.vc(32),t=r.hc();r.Ab(10),r.nc("ngModel",t.withdrwalAmount),r.Ab(9),r.Ic("Your account balance: bizx ",r.jc(20,7,t.fiatBalance.fiatBalance),""),r.Ab(3),r.Ic("Your withdrawal daily limit: bizx ",r.jc(23,9,t.fiatBalance.withdraw_limit)," "),r.Ab(3),r.Ic("Minimum withdrawal amount: bizx ",r.jc(26,11,t.fiatBalance.min_withdraw_amt)," "),r.Ab(3),r.Ic("If you have less than bizx ",r.jc(29,13,t.fiatBalance.min_withdraw_amt)," please withdrawall your funds."),r.Ab(2),r.nc("ngIf",!t.withdrwalAmount)("ngIfElse",e)}}function P(e,t){if(1&e){const e=r.Ub();r.Tb(0,"div",70),r.Tb(1,"div",49),r.Tb(2,"p"),r.Tb(3,"b"),r.Gc(4,"Withdrawal Overview"),r.Sb(),r.Sb(),r.Tb(5,"div",71),r.Tb(6,"div",72),r.Tb(7,"p",73),r.Gc(8,"Transfer from:"),r.Sb(),r.Sb(),r.Tb(9,"div",72),r.Tb(10,"p",74),r.Gc(11,"PinkSurfing Account"),r.Sb(),r.Sb(),r.Sb(),r.Tb(12,"div",71),r.Tb(13,"div",72),r.Tb(14,"p",73),r.Gc(15,"Transfer to:"),r.Sb(),r.Sb(),r.Tb(16,"div",72),r.Tb(17,"p",74),r.Gc(18),r.Sb(),r.Sb(),r.Sb(),r.Tb(19,"div",75),r.Tb(20,"div",72),r.Tb(21,"p",73),r.Gc(22,"Amount:"),r.Sb(),r.Sb(),r.Tb(23,"div",72),r.Tb(24,"p",74),r.Gc(25),r.ic(26,"number"),r.Sb(),r.Sb(),r.Sb(),r.Tb(27,"p",76),r.Gc(28,"Total amount you will receive"),r.Sb(),r.Tb(29,"p",77),r.Tb(30,"b"),r.Gc(31),r.ic(32,"number"),r.Sb(),r.Sb(),r.Tb(33,"div",44),r.Tb(34,"button",78),r.fc("click",(function(){return r.xc(e),r.hc().cancel()})),r.Gc(35,"Cancel"),r.Sb(),r.Tb(36,"button",79),r.fc("click",(function(){return r.xc(e),r.hc().confirmClick()})),r.Gc(37,"Confirm"),r.Sb(),r.Sb(),r.Sb(),r.Sb()}if(2&e){const e=r.hc();r.Ab(18),r.Ic("DBS - ",e.currentBankAccount.accountNumber,""),r.Ab(7),r.Ic("bizx ",r.jc(26,3,e.withdrwalAmount),""),r.Ab(6),r.Ic("bizx ",r.jc(32,5,e.withdrwalAmount),"")}}function q(e,t){if(1&e&&(r.Tb(0,"p",80),r.Gc(1),r.Sb()),2&e){const e=r.hc();r.Ab(1),r.Hc(e.verifyFailedErrorMessage)}}function L(e,t){1&e&&(r.Tb(0,"p",81),r.Gc(1,"Sms Sent successfully to your registered mobile number"),r.Sb())}function O(e,t){if(1&e&&(r.Tb(0,"p",80),r.Gc(1),r.Sb()),2&e){const e=r.hc();r.Ab(1),r.Hc(e.verifyPhoneFailederrorMessage)}}const B=function(e){return{"not-valid-box":e}},E=[{path:"",component:x},{path:"top-up",component:x},{path:"withdrawal",component:(()=>{class e{constructor(e,t,i,n){this.apiService=e,this.fb=t,this.toastr=i,this.router=n,this.step1Show=!0,this.step2Show=!1,this.step3Show=!1,this.step4Show=!1,this.verificationForm=this.fb.group({verificationCode1:["",[a.t.required,a.t.maxLength(1)]],verificationCode2:["",[a.t.required,a.t.maxLength(1)]],verificationCode3:["",[a.t.required,a.t.maxLength(1)]],verificationCode4:["",[a.t.required,a.t.maxLength(1)]],verificationCode5:["",[a.t.required,a.t.maxLength(1)]],verificationCode6:["",[a.t.required,a.t.maxLength(1)]],verificationCode7:["",[a.t.required,a.t.maxLength(1)]]}),this.verificationPhoneForm=this.fb.group({verificationCode1:["",[a.t.required,a.t.maxLength(1)]],verificationCode2:["",[a.t.required,a.t.maxLength(1)]],verificationCode3:["",[a.t.required,a.t.maxLength(1)]],verificationCode4:["",[a.t.required,a.t.maxLength(1)]],verificationCode5:["",[a.t.required,a.t.maxLength(1)]],verificationCode6:["",[a.t.required,a.t.maxLength(1)]],verificationCode7:["",[a.t.required,a.t.maxLength(1)]]}),this.verifyFailedMessage=!1,this.verifyPhoneFailedMessage=!1,this.verifyFailedErrorMessage=!1,this.verifyPhoneFailederrorMessage=!1,this.maxlength=1,this.currentUser={},this.userInfo={},this.userDataAr={}}ngOnInit(){this.getUserInfoData(),this.apiService.getBankDetails().subscribe(e=>{"success"===e.status&&(this.bankDetails=e.data)}),this.apiService.getFiatBalance().subscribe(e=>{this.fiatBalance=e});const e=this;$("input").keyup((function(){e.f.verificationCode1.value.toString().length===e.maxlength&&$(this).next("input").focus()})),$("input").bind("paste",(function(t){setTimeout(()=>{e.f.verificationCode1.value.toString().split("").forEach((t,i)=>{t.length==e.maxlength&&(e.verificationForm.get("verificationCode"+(i+1)).setValue(t),$(this).next("input").focus())}),$("#verificationCode6").focus(),e.verifyCode("1")},0)})),$(":input").keyup((function(e){8==e.which||46==e.which?$(this).prev("input").focus():$(this).next("input").focus()}))}get f(){return this.verificationForm.controls}get m(){return this.verificationPhoneForm.controls}accountNoClick(e){this.step1Show=!1,this.step2Show=!0,this.currentBankAccount=e}nextPageNavigate(){this.withdrwalAmount&&(this.step2Show=!1,this.step3Show=!0)}confirmClick(){this.step3Show=!1,$("#authentication").modal({backdrop:"static",keyboard:!1})}prevStep(){this.step1Show=!0,this.step2Show=!1}cancel(){this.step2Show=!0,this.step3Show=!1}cancelWithdrawal(){$("#authentication").modal("hide"),this.router.navigate(["/pages/portfolio"])}verifyCode(e){this.apiService.withdrawal({name:this.currentBankAccount.accountHolderName,accountNumber:this.currentBankAccount.accountNumber,ifsc:this.currentBankAccount.ifsc,swift:this.currentBankAccount.swiftCode,bankName:this.currentBankAccount.bankName,amount:this.withdrwalAmount,type:"gCode",authCode:this.f.verificationCode1.value+""+this.f.verificationCode2.value+this.f.verificationCode3.value+this.f.verificationCode4.value+this.f.verificationCode5.value+this.f.verificationCode6.value}).subscribe(e=>{$("#authentication").modal("hide"),this.toastr.success(e.message,"Success"),this.router.navigate(["/pages/portfolio"])},e=>{this.verifyFailedMessage=!0,this.verifyFailedErrorMessage=e,this.verificationForm.get("verificationCode1").setValue(""),this.verificationForm.get("verificationCode2").setValue(""),this.verificationForm.get("verificationCode3").setValue(""),this.verificationForm.get("verificationCode4").setValue(""),this.verificationForm.get("verificationCode5").setValue(""),this.verificationForm.get("verificationCode6").setValue("")})}verifyPhoneCode(e){this.apiService.withdrawal({name:this.currentBankAccount.accountHolderName,accountNumber:this.currentBankAccount.accountNumber,ifsc:this.currentBankAccount.ifsc,swift:this.currentBankAccount.swiftCode,bankName:this.currentBankAccount.bankName,amount:this.withdrwalAmount,type:"phone",authCode:this.m.verificationCode1.value+""+this.m.verificationCode2.value+this.m.verificationCode3.value+this.m.verificationCode4.value+this.m.verificationCode5.value+this.m.verificationCode6.value}).subscribe(e=>{$("#authentication").modal("hide"),this.toastr.success(e.message,"Success"),this.router.navigate(["/pages/portfolio"])},e=>{this.verifyPhoneFailedMessage=!0,this.verifyPhoneFailederrorMessage=e,this.toastr.error(e,"Invalid"),this.verificationPhoneForm.get("verificationCode1").setValue(""),this.verificationPhoneForm.get("verificationCode2").setValue(""),this.verificationPhoneForm.get("verificationCode3").setValue(""),this.verificationPhoneForm.get("verificationCode4").setValue(""),this.verificationPhoneForm.get("verificationCode5").setValue(""),this.verificationPhoneForm.get("verificationCode6").setValue("")})}tabClick(e){this.verifyPhoneFailedMessage=!1,"sms"==e?(this.verifyPhoneFailedMessage=!1,this.verificationPhoneForm.get("verificationCode1").setValue(""),this.verificationPhoneForm.get("verificationCode2").setValue(""),this.verificationPhoneForm.get("verificationCode3").setValue(""),this.verificationPhoneForm.get("verificationCode4").setValue(""),this.verificationPhoneForm.get("verificationCode5").setValue(""),this.verificationPhoneForm.get("verificationCode6").setValue(""),this.apiService.sendSms().subscribe(e=>{"Verification is sent!!"==e.message&&(this.toastr.success(e.message,"Success"),this.smsSentMessageShow=!0)})):(this.verifyFailedMessage=!1,this.verificationForm.get("verificationCode1").setValue(""),this.verificationForm.get("verificationCode2").setValue(""),this.verificationForm.get("verificationCode3").setValue(""),this.verificationForm.get("verificationCode4").setValue(""),this.verificationForm.get("verificationCode5").setValue(""),this.verificationForm.get("verificationCode6").setValue(""))}googleAuthTabClicked(){this.verificationPhoneForm=this.fb.group({verificationCode1:["",[a.t.required,a.t.maxLength(1)]],verificationCode2:["",[a.t.required,a.t.maxLength(1)]],verificationCode3:["",[a.t.required,a.t.maxLength(1)]],verificationCode4:["",[a.t.required,a.t.maxLength(1)]],verificationCode5:["",[a.t.required,a.t.maxLength(1)]],verificationCode6:["",[a.t.required,a.t.maxLength(1)]],verificationCode7:["",[a.t.required,a.t.maxLength(1)]]})}smsTabClicked(){this.verificationForm=this.fb.group({verificationCode1:["",[a.t.required,a.t.maxLength(1)]],verificationCode2:["",[a.t.required,a.t.maxLength(1)]],verificationCode3:["",[a.t.required,a.t.maxLength(1)]],verificationCode4:["",[a.t.required,a.t.maxLength(1)]],verificationCode5:["",[a.t.required,a.t.maxLength(1)]],verificationCode6:["",[a.t.required,a.t.maxLength(1)]],verificationCode7:["",[a.t.required,a.t.maxLength(1)]]}),this.apiService.sendSms().subscribe(e=>{"Verification is sent!!"==e.message&&(this.toastr.success(e.message,"Success"),this.smsSentMessageShow=!0)})}getUserInfoData(){this.apiService.getUserData().subscribe(e=>{this.userDataAr=e;for(const[t,i]of Object.entries(this.userDataAr))"userInfo"===t&&(this.userInfo=i)})}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(c.a),r.Nb(a.d),r.Nb(s.b),r.Nb(o.d))},e.\u0275cmp=r.Hb({type:e,selectors:[["app-withdrawal"]],decls:67,vars:44,consts:[["id","Withdrawal-form",1,"mb-5"],[1,"container"],[1,"heading","text-center","mb-5"],["id","step1",4,"ngIf"],["id","step2",4,"ngIf"],["id","step3",4,"ngIf"],["id","authentication","tabindex","-1","role","dialog","aria-labelledby","authenticationLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-body"],["id","authentication_tab","role","tablist",1,"nav","nav-pills","mb-3"],["role","presentation",1,"nav-item"],["id","pills-google-tab","data-toggle","pill","href","#pills-google","role","tab","aria-controls","pills-google","aria-selected","true",1,"nav-link","active",3,"click"],["id","pills-sms-tab","data-toggle","pill","href","#pills-sms","role","tab","aria-controls","pills-sms","aria-selected","false",1,"nav-link",3,"click"],["id","authentication_tabContent",1,"tab-content"],["id","pills-google","role","tabpanel","aria-labelledby","pills-google-tab",1,"tab-pane","fade","show","active"],[1,"text-center","mt-5"],["src","assets/images/icon-28.png","alt","",1,"google-auth-image"],[1,"mt-4","mb-4"],["action","",3,"formGroup"],[1,"d-flex","align-center","justify-between","mb-5"],["formControlName","verificationCode1","id","verificationCode1","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass"],["formControlName","verificationCode2","id","verificationCode2","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass"],["formControlName","verificationCode3","id","verificationCode3","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass"],["formControlName","verificationCode4","id","verificationCode4","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass"],["formControlName","verificationCode5","id","verificationCode5","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass"],["formControlName","verificationCode6","id","verificationCode6","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass","input"],["class","error-message",4,"ngIf"],["id","pills-sms","role","tabpanel","aria-labelledby","pills-sms-tab",1,"tab-pane","fade"],["class","text-center font-fam-lat-regular fs-12",4,"ngIf"],["src","assets/images/icon-10.png","alt","",1,"google-auth-image"],["formControlName","verificationCode1","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass"],["formControlName","verificationCode2","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass"],["formControlName","verificationCode3","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass"],["formControlName","verificationCode4","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass"],["formControlName","verificationCode5","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass"],["formControlName","verificationCode6","max","999","onkeypress","if (value.length > 0) return false;","type","number",1,"verification-code",3,"ngClass","input"],[1,"modal-footer"],["type","button",1,"btn","btn-lg","btn-danger",3,"click"],["id","note_message","tabindex","-1","role","dialog","aria-labelledby","note_messageLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-header","border-bottom-0"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"text-center"],[1,"d-flex","align-center","justify-center","mt-5"],["data-dismiss","modal",1,"btn-primary-border","text-center","fs-14","pt-2","pb-2","pl-4","pr-4","ml-2","mr-2"],["id","step1"],["class","card bg-white rounded p-5",4,"ngIf","ngIfElse"],["noBankData",""],[1,"card","bg-white","rounded","p-5"],["class","d-flex align-center border p-3 next-step mb-4",3,"click",4,"ngFor","ngForOf"],["routerLinkActive","router-link-active",1,"text-primary-color","font-weight-bold",3,"routerLink"],[1,"d-flex","align-center","border","p-3","next-step","mb-4",3,"click"],["src","assets/images/icon-29.png","alt","","width","29px","height","28px",1,"mr-4"],[1,"mb-0","account-name"],["id","step2"],[1,"text-gray","prev-step","text-gray-2","cursor-pointer",3,"click"],["action",""],[1,"form-group","mb-4"],["for",""],[1,"d-flex"],["type","text","name","withdrawalAmount","required","",1,"form-control","border-right-0",3,"ngModel","ngModelChange"],["name","","id","",1,"form-control",2,"transform","translateX(-1rem)"],["value","aed","selected",""],[1,"text-primary-color","mb-0"],[1,"text-gray-2"],[4,"ngIf","ngIfElse"],["nXtPage",""],["type","submit","disabled","disabled",1,"text-gray-2","text-center","text-dark","p-4","mb-4","next-step",2,"width","calc(100% - 1rem)"],["type","submit",1,"bg-primary-color","text-center","text-white","btn-hover-tb","p-4","mb-4","next-step",2,"width","calc(100% - 1rem)",3,"click"],["id","step3"],[1,"row","mb-4"],[1,"col-6"],[1,"text-gray-2","mb-0"],[1,"mb-0"],[1,"row","mb-5"],[1,"text-center","mb-0"],[1,"text-primary-color","text-center","mb-0"],[1,"btn-primary-border","text-center","p-2","col-3","mr-4","text-center","prev-step",3,"click"],[1,"bg-primary-color","text-center","text-white","btn-hover-tb","col-3","p-2","next-step",3,"click"],[1,"error-message"],[1,"text-center","font-fam-lat-regular","fs-12"]],template:function(e,t){1&e&&(r.Tb(0,"section",0),r.Tb(1,"div",1),r.Tb(2,"p",2),r.Tb(3,"b"),r.Gc(4,"Make Withdrawal"),r.Sb(),r.Sb(),r.Ec(5,I,4,2,"div",3),r.Ec(6,M,33,15,"div",4),r.Ec(7,P,38,7,"div",5),r.Sb(),r.Sb(),r.Tb(8,"div",6),r.Tb(9,"div",7),r.Tb(10,"div",8),r.Tb(11,"div",9),r.Tb(12,"ul",10),r.Tb(13,"li",11),r.Tb(14,"a",12),r.fc("click",(function(){return t.googleAuthTabClicked()})),r.Gc(15,"Google Authentication"),r.Sb(),r.Sb(),r.Tb(16,"li",11),r.Tb(17,"a",13),r.fc("click",(function(){return t.smsTabClicked()})),r.Gc(18,"SMS Authentication"),r.Sb(),r.Sb(),r.Sb(),r.Tb(19,"div",14),r.Tb(20,"div",15),r.Tb(21,"div",16),r.Ob(22,"img",17),r.Tb(23,"p",18),r.Gc(24,"Please input 6 digits from Google Authentication App"),r.Sb(),r.Tb(25,"form",19),r.Tb(26,"div",20),r.Ob(27,"input",21),r.Ob(28,"input",22),r.Ob(29,"input",23),r.Ob(30,"input",24),r.Ob(31,"input",25),r.Tb(32,"input",26),r.fc("input",(function(e){return e.target.value.length>0&&t.verifyCode(e.target.value)})),r.Sb(),r.Sb(),r.Sb(),r.Ec(33,q,2,1,"p",27),r.Sb(),r.Sb(),r.Tb(34,"div",28),r.Tb(35,"div",16),r.Ec(36,L,2,0,"p",29),r.Ob(37,"img",30),r.Tb(38,"p",18),r.Gc(39,"Please input 6 digits Authentication code"),r.Sb(),r.Tb(40,"form",19),r.Tb(41,"div",20),r.Ob(42,"input",31),r.Ob(43,"input",32),r.Ob(44,"input",33),r.Ob(45,"input",34),r.Ob(46,"input",35),r.Tb(47,"input",36),r.fc("input",(function(e){return e.target.value.length>0&&t.verifyPhoneCode(e.target.value)})),r.Sb(),r.Sb(),r.Sb(),r.Ec(48,O,2,1,"p",27),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(49,"div",37),r.Tb(50,"button",38),r.fc("click",(function(){return t.cancelWithdrawal()})),r.Gc(51,"Cancel"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(52,"div",39),r.Tb(53,"div",7),r.Tb(54,"div",8),r.Tb(55,"div",40),r.Tb(56,"button",41),r.Tb(57,"span",42),r.Gc(58,"\xd7"),r.Sb(),r.Sb(),r.Sb(),r.Tb(59,"div",9),r.Tb(60,"p",43),r.Gc(61,"For security reasons, please fill all the forms in the screen..!!"),r.Sb(),r.Tb(62,"p",43),r.Gc(63,"Please make sure you phone number and email id updated..!!"),r.Sb(),r.Tb(64,"div",44),r.Tb(65,"button",45),r.Gc(66,"OK"),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Ab(5),r.nc("ngIf",t.step1Show),r.Ab(1),r.nc("ngIf",t.step2Show),r.Ab(1),r.nc("ngIf",t.step3Show),r.Ab(18),r.nc("formGroup",t.verificationForm),r.Ab(2),r.nc("ngClass",r.rc(20,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngClass",r.rc(22,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngClass",r.rc(24,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngClass",r.rc(26,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngClass",r.rc(28,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngClass",r.rc(30,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngIf",t.verifyFailedMessage),r.Ab(3),r.nc("ngIf",t.smsSentMessageShow),r.Ab(4),r.nc("formGroup",t.verificationPhoneForm),r.Ab(2),r.nc("ngClass",r.rc(32,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngClass",r.rc(34,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngClass",r.rc(36,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngClass",r.rc(38,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngClass",r.rc(40,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngClass",r.rc(42,B,t.verifyFailedMessage)),r.Ab(1),r.nc("ngIf",t.verifyPhoneFailedMessage))},directives:[n.n,a.v,a.l,a.f,a.c,a.p,a.k,a.e,n.l,n.m,o.f,o.e,a.m,a.r,a.n,a.o,a.u],pipes:[n.e],styles:["[_nghost-%COMP%]{font-size:1.6rem;line-height:1.4;font-weight:400;box-sizing:border-box}.account-name[_ngcontent-%COMP%]{cursor:pointer}input.verification-code[_ngcontent-%COMP%]{border-left:none;border-right:none;border-top:none;width:18px;text-align:center}.not-valid-box[_ngcontent-%COMP%]   input.verification-code[_ngcontent-%COMP%]{border:1px solid #dc3545!important}"]}),e})()},{path:"withdrawal-completed/:amount",component:(()=>{class e{constructor(e,t){this.apiService=e,this.route=t}ngOnInit(){this.amount=this.route.snapshot.paramMap.get("amount"),this.apiService.getFiatBalance().subscribe(e=>{this.fiatBalance=e})}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(c.a),r.Nb(o.a))},e.\u0275cmp=r.Hb({type:e,selectors:[["app-withdrawal-completed"]],decls:14,vars:1,consts:[["id","Withdrawal-form",1,"mb-5"],[1,"container"],[1,"heading","text-center","mb-5"],[1,"card","bg-white","rounded","p-5"],["src","assets/images/icon-11.png","alt","","width","56px","height","57px",1,"m-auto"],[1,"text-center","fs-14","pt-4"],[1,"text-center","pt-4","fs-14"],[1,"text-center","fs-14"]],template:function(e,t){1&e&&(r.Tb(0,"section",0),r.Tb(1,"div",1),r.Tb(2,"p",2),r.Tb(3,"b"),r.Gc(4,"Make Withdrawal"),r.Sb(),r.Sb(),r.Tb(5,"div"),r.Tb(6,"div",3),r.Ob(7,"img",4),r.Tb(8,"p",5),r.Gc(9,"Your Withdrawal is now being processed."),r.Sb(),r.Tb(10,"p",6),r.Gc(11,"Your PinkSurfing Account Balance"),r.Sb(),r.Tb(12,"p",7),r.Gc(13),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Ab(13),r.Ic("Withdrawal amount: bizx ",t.amount,""))},styles:[""]}),e})()},{path:"top-up-completed/:amount",component:(()=>{class e{constructor(e,t){this.apiService=e,this.route=t}ngOnInit(){this.amount=this.route.snapshot.paramMap.get("amount"),this.apiService.getFiatBalance().subscribe(e=>{this.fiatBalance=e})}}return e.\u0275fac=function(t){return new(t||e)(r.Nb(c.a),r.Nb(o.a))},e.\u0275cmp=r.Hb({type:e,selectors:[["app-top-up-completed"]],decls:16,vars:2,consts:[["id","Withdrawal-form",1,"mb-5"],[1,"container"],[1,"heading","text-center","mb-5"],[1,"card","bg-white","rounded","p-5"],["src","assets/images/icon-11.png","alt","","width","56px","height","57px",1,"m-auto"],[1,"text-center","fs-14","pt-4"],[1,"text-center","pt-4","fs-14"],[1,"text-center","fs-14"]],template:function(e,t){1&e&&(r.Tb(0,"section",0),r.Tb(1,"div",1),r.Tb(2,"p",2),r.Tb(3,"b"),r.Gc(4,"TopUP"),r.Sb(),r.Sb(),r.Tb(5,"div"),r.Tb(6,"div",3),r.Ob(7,"img",4),r.Tb(8,"p",5),r.Gc(9,"Your TopUp is now being processed."),r.Sb(),r.Tb(10,"p",6),r.Gc(11,"Your PinkSurfing Account Balance"),r.Sb(),r.Tb(12,"p",7),r.Gc(13),r.Sb(),r.Tb(14,"p",7),r.Gc(15),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb()),2&e&&(r.Ab(13),r.Ic("TopUp amount: bizx ",t.amount,""),r.Ab(2),r.Ic("PinkSurfing account balance: bizx ",t.fiatBalance.fiatBalance,""))},styles:[""]}),e})()}];let V=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},imports:[[o.g.forChild(E)],o.g]}),e})(),D=(()=>{class e{}return e.\u0275mod=r.Lb({type:e}),e.\u0275inj=r.Kb({factory:function(t){return new(t||e)},providers:[s.b],imports:[[n.b,V,a.q,s.a.forRoot({timeOut:1e4,positionClass:"toast-bottom-right",preventDuplicates:!0}),a.g]]}),e})()}}]);