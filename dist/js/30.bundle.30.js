(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{179:function(n,e,t){const o=t(5),s=t(1),i=t(238);n.exports=o.View.extend({template:i,className:"modal-dialog",ui:{form:"form",buttons:".modal-footer button",cancel:"button.cancel",save:"button.save"},events:{"click @ui.save":function(n){n.preventDefault(),s.Api.Nginx.RedirectionHosts.delete(this.model.get("id")).then(()=>{s.Controller.showNginxRedirection(),s.UI.closeModal()}).catch(n=>{alert(n.message),this.ui.buttons.prop("disabled",!1).removeClass("btn-disabled")})}}})},238:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<div class="modal-content">\n    <div class="modal-header">\n        <h5 class="modal-title">'+__e(i18n("redirection-hosts","delete"))+'</h5>\n        <button type="button" class="close cancel" aria-label="Close" data-dismiss="modal">&nbsp;</button>\n    </div>\n    <div class="modal-body">\n        <form>\n            <div class="row">\n                <div class="col-sm-12 col-md-12">\n                    '+(null==(__t=i18n("redirection-hosts","delete-confirm",{domains:domain_names.join(", ")}))?"":__t)+"\n                    ",certificate_id&&(__p+="\n                        <br><br>\n                        "+__e(i18n("ssl","delete-ssl"))+"\n                    "),__p+='\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class="modal-footer">\n        <button type="button" class="btn btn-secondary cancel" data-dismiss="modal">'+__e(i18n("str","cancel"))+'</button>\n        <button type="button" class="btn btn-danger save">'+__e(i18n("str","sure"))+"</button>\n    </div>\n</div>\n";return __p}}).call(this,__webpack_require__(2))}}]);