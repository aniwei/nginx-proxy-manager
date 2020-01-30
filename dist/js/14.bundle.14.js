(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{184:function(e,s,t){(function(s){const n=t(5),i=t(1),a=t(208),l=t(252),o=t(204),c=t(142);t(200),t(203),e.exports=n.View.extend({template:l,className:"modal-dialog",ui:{form:"form",domain_names:'input[name="domain_names"]',buttons:".modal-footer button",cancel:"button.cancel",save:"button.save",certificate_select:'select[name="certificate_id"]',ssl_forced:'input[name="ssl_forced"]',hsts_enabled:'input[name="hsts_enabled"]',hsts_subdomains:'input[name="hsts_subdomains"]',http2_support:'input[name="http2_support"]',letsencrypt:".letsencrypt"},events:{"change @ui.certificate_select":function(){let e=this.ui.certificate_select.val();"new"===e?this.ui.letsencrypt.show().find("input").prop("disabled",!1):this.ui.letsencrypt.hide().find("input").prop("disabled",!0);let s="new"===e||parseInt(e,10)>0,t=this.ui.ssl_forced.add(this.ui.http2_support);t.prop("disabled",!s).parents(".form-group").css("opacity",s?1:.5),s||t.prop("checked",!1),t.trigger("change")},"change @ui.ssl_forced":function(){let e=this.ui.ssl_forced.prop("checked");this.ui.hsts_enabled.prop("disabled",!e).parents(".form-group").css("opacity",e?1:.5),e||this.ui.hsts_enabled.prop("checked",!1),this.ui.hsts_enabled.trigger("change")},"change @ui.hsts_enabled":function(){let e=this.ui.hsts_enabled.prop("checked");this.ui.hsts_subdomains.prop("disabled",!e).parents(".form-group").css("opacity",e?1:.5),e||this.ui.hsts_subdomains.prop("checked",!1)},"click @ui.save":function(e){if(e.preventDefault(),!this.ui.form[0].checkValidity())return void s('<input type="submit">').hide().appendTo(this.ui.form).click().remove();let t=this,n=this.ui.form.serializeJSON();if(n.hsts_enabled=!!n.hsts_enabled,n.hsts_subdomains=!!n.hsts_subdomains,n.http2_support=!!n.http2_support,n.ssl_forced=!!n.ssl_forced,"string"==typeof n.domain_names&&n.domain_names&&(n.domain_names=n.domain_names.split(",")),"new"===n.certificate_id){let e=!1;if(n.domain_names.map((function(s){s.match(/\*/im)&&(e=!0)})),e)return void alert("Cannot request Let's Encrypt Certificate for wildcard domains");n.meta.letsencrypt_agree="1"===n.meta.letsencrypt_agree}else n.certificate_id=parseInt(n.certificate_id,10);let a=i.Api.Nginx.DeadHosts.create,l=!0;this.model.get("id")&&(l=!1,a=i.Api.Nginx.DeadHosts.update,n.id=this.model.get("id")),this.ui.buttons.prop("disabled",!0).addClass("btn-disabled"),a(n).then(e=>{t.model.set(e),i.UI.closeModal((function(){l&&i.Controller.showNginxDead()}))}).catch(e=>{alert(e.message),this.ui.buttons.prop("disabled",!1).removeClass("btn-disabled")})}},templateContext:{getLetsencryptEmail:function(){return i.Cache.User.get("email")}},onRender:function(){let e=this;this.ui.domain_names.selectize({delimiter:",",persist:!1,maxOptions:15,create:function(e){return{value:e,text:e}},createFilter:/^(?:\*\.)?(?:[^.*]+\.?)+[^.]$/}),this.ui.letsencrypt.hide(),this.ui.certificate_select.selectize({valueField:"id",labelField:"nice_name",searchField:["nice_name","domain_names"],create:!1,preload:!0,allowEmptyOption:!0,render:{option:function(e){return e.i18n=i.i18n,e.formatDbDate=c.formatDbDate,o(e)}},load:function(e,s){i.Api.Nginx.Certificates.getAll().then(e=>{s(e)}).catch(e=>{console.error(e),s()})},onLoad:function(){e.ui.certificate_select[0].selectize.setValue(e.model.get("certificate_id"))}})},initialize:function(e){void 0!==e.model&&e.model||(this.model=new a.Model)}})}).call(this,t(3))},204:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+="<div>\n    ","new"===id?__p+='\n        <div class="title">\n            <i class="fe fe-shield text-success"></i> '+__e(i18n("all-hosts","new-cert"))+'\n        </div>\n        <span class="description">'+__e(i18n("all-hosts","with-le"))+"</span>\n    ":id>0?__p+='\n        <div class="title">\n            <i class="fe fe-shield text-pink"></i> '+__e("other"===provider?nice_name:domain_names.join(", "))+'\n        </div>\n        <span class="description">'+__e(i18n("ssl",provider))+" &ndash; Expires: "+__e(formatDbDate(expires_on,"Do MMMM YYYY, h:mm a"))+"</span>\n    ":__p+='\n        <div class="title">\n            <i class="fe fe-shield-off text-danger"></i> '+__e(i18n("all-hosts","none"))+'\n        </div>\n        <span class="description">'+__e(i18n("all-hosts","no-ssl"))+"</span>\n    ",__p+="\n</div>\n";return __p}}).call(this,__webpack_require__(2))},208:function(e,s,t){const n=t(4),i=n.Model.extend({idAttribute:"id",defaults:function(){return{id:void 0,created_on:null,modified_on:null,domain_names:[],certificate_id:0,ssl_forced:!1,http2_support:!1,hsts_enabled:!1,hsts_subdomains:!1,enabled:!0,meta:{},advanced_config:"",owner:null,certificate:null}}});e.exports={Model:i,Collection:n.Collection.extend({model:i})}},252:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape;with(obj)__p+='<div class="modal-content">\n    <div class="modal-header">\n        <h5 class="modal-title">'+__e(i18n("dead-hosts","form-title",{id:id}))+'</h5>\n        <button type="button" class="close cancel" aria-label="Close" data-dismiss="modal">&nbsp;</button>\n    </div>\n    <div class="modal-body has-tabs">\n        <form>\n            <ul class="nav nav-tabs" role="tablist">\n                <li role="presentation" class="nav-item"><a href="#details" aria-controls="tab1" role="tab" data-toggle="tab" class="nav-link active"><i class="fe fe-zap"></i> '+__e(i18n("all-hosts","details"))+'</a></li>\n                <li role="presentation" class="nav-item"><a href="#ssl-options" aria-controls="tab2" role="tab" data-toggle="tab" class="nav-link"><i class="fe fe-shield"></i> '+__e(i18n("str","ssl"))+'</a></li>\n                <li role="presentation" class="nav-item"><a href="#advanced" aria-controls="tab3" role="tab" data-toggle="tab" class="nav-link"><i class="fe fe-settings"></i> '+__e(i18n("all-hosts","advanced"))+'</a></li>\n            </ul>\n            <div class="tab-content">\n                \x3c!-- Details --\x3e\n                <div role="tabpanel" class="tab-pane active" id="details">\n                    <div class="row">\n\n                        <div class="col-sm-12 col-md-12">\n                            <div class="form-group">\n                                <label class="form-label">'+__e(i18n("all-hosts","domain-names"))+' <span class="form-required">*</span></label>\n                                <input type="text" name="domain_names" class="form-control" id="input-domains" value="'+__e(domain_names.join(","))+'" required>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                \x3c!-- SSL --\x3e\n                <div role="tabpanel" class="tab-pane" id="ssl-options">\n                    <div class="row">\n                        <div class="col-sm-12 col-md-12">\n                            <div class="form-group">\n                                <label class="form-label">'+__e(i18n("all-hosts","ssl-certificate"))+'</label>\n                                <select name="certificate_id" class="form-control custom-select" placeholder="'+__e(i18n("all-hosts","none"))+'">\n                                    <option selected value="0" data-data="{&quot;id&quot;:0}" '+__e(certificate_id?"":"selected")+">"+__e(i18n("all-hosts","none"))+'</option>\n                                    <option selected value="new" data-data="{&quot;id&quot;:&quot;new&quot;}">'+__e(i18n("all-hosts","new-cert"))+'</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class="col-sm-6 col-md-6">\n                            <div class="form-group">\n                                <label class="custom-switch">\n                                    <input type="checkbox" class="custom-switch-input" name="ssl_forced" value="1"'+__e(ssl_forced?" checked":"")+__e(certificate_id?"":" disabled")+'>\n                                    <span class="custom-switch-indicator"></span>\n                                    <span class="custom-switch-description">'+__e(i18n("all-hosts","force-ssl"))+'</span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class="col-sm-6 col-md-6">\n                            <div class="form-group">\n                                <label class="custom-switch">\n                                    <input type="checkbox" class="custom-switch-input" name="http2_support" value="1"'+__e(http2_support?" checked":"")+__e(certificate_id?"":" disabled")+'>\n                                    <span class="custom-switch-indicator"></span>\n                                    <span class="custom-switch-description">'+__e(i18n("all-hosts","http2-support"))+'</span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class="col-sm-6 col-md-6">\n                            <div class="form-group">\n                                <label class="custom-switch">\n                                    <input type="checkbox" class="custom-switch-input" name="hsts_enabled" value="1"'+__e(hsts_enabled?" checked":"")+__e(certificate_id&&ssl_forced?"":" disabled")+'>\n                                    <span class="custom-switch-indicator"></span>\n                                    <span class="custom-switch-description">'+__e(i18n("all-hosts","hsts-enabled"))+' <a href="https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security" target="_blank"><i class="fe fe-help-circle"></i></a></span>\n                                </label>\n                            </div>\n                        </div>\n                        <div class="col-sm-6 col-md-6">\n                            <div class="form-group">\n                                <label class="custom-switch">\n                                    <input type="checkbox" class="custom-switch-input" name="hsts_subdomains" value="1"'+__e(hsts_subdomains?" checked":"")+__e(certificate_id&&ssl_forced&&hsts_enabled?"":" disabled")+'>\n                                    <span class="custom-switch-indicator"></span>\n                                    <span class="custom-switch-description">'+__e(i18n("all-hosts","hsts-subdomains"))+'</span>\n                                </label>\n                            </div>\n                        </div>\n\n                        \x3c!-- Lets encrypt --\x3e\n                        <div class="col-sm-12 col-md-12 letsencrypt">\n                            <div class="form-group">\n                                <label class="form-label">'+__e(i18n("ssl","letsencrypt-email"))+' <span class="form-required">*</span></label>\n                                <input name="meta[letsencrypt_email]" type="email" class="form-control" placeholder="" value="'+__e(getLetsencryptEmail())+'" required disabled>\n                            </div>\n                        </div>\n                        <div class="col-sm-12 col-md-12 letsencrypt">\n                            <div class="form-group">\n                                <label class="custom-switch">\n                                    <input type="checkbox" class="custom-switch-input" name="meta[letsencrypt_agree]" value="1" required disabled>\n                                    <span class="custom-switch-indicator"></span>\n                                    <span class="custom-switch-description">'+(null==(__t=i18n("ssl","letsencrypt-agree",{url:"https://letsencrypt.org/repository/"}))?"":__t)+' <span class="form-required">*</span></span>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                \x3c!-- Advanced --\x3e\n                <div role="tabpanel" class="tab-pane" id="advanced">\n                    <div class="row">\n                        <div class="col-md-12">\n                            <div class="form-group mb-0">\n                                <label class="form-label">'+__e(i18n("all-hosts","advanced-config"))+'</label>\n                                <textarea name="advanced_config" rows="8" class="form-control text-monospace" placeholder="# '+__e(i18n("all-hosts","advanced-warning"))+'">'+__e(advanced_config)+'</textarea>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class="modal-footer">\n        <button type="button" class="btn btn-secondary cancel" data-dismiss="modal">'+__e(i18n("str","cancel"))+'</button>\n        <button type="button" class="btn btn-teal save">'+__e(i18n("str","save"))+"</button>\n    </div>\n</div>\n";return __p}}).call(this,__webpack_require__(2))}}]);