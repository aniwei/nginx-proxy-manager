(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{196:function(e,t,n){const i=n(5),o=n(1),r=n(279),s=n(280),_=n(198),a=n(284);e.exports=i.View.extend({id:"settings",template:a,ui:{list_region:".list-region",add:".add-item",dimmer:".dimmer"},regions:{list_region:"@ui.list_region"},onRender:function(){let e=this;o.Api.Settings.getAll().then(t=>{!e.isDestroyed()&&t&&t.length&&e.showChildView("list_region",new s({collection:new r.Collection(t)}))}).catch(t=>{e.showChildView("list_region",new _({code:t.code,message:t.message,retry:function(){o.Controller.showSettings()}})),console.error(t)}).then(()=>{e.ui.dimmer.removeClass("active")})}})},198:function(e,t,n){const i=n(5),o=n(199);e.exports=i.View.extend({template:o,className:"alert alert-icon alert-warning m-5",ui:{retry:"a.retry"},events:{"click @ui.retry":function(e){e.preventDefault(),this.getOption("retry")()}},templateContext:function(){return{message:this.getOption("message"),code:this.getOption("code"),retry:"function"==typeof this.getOption("retry")}}})},199:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+='<i class="fe fe-alert-triangle mr-2" aria-hidden="true"></i>\n'+(null==(__t=code?"<strong>"+code+"</strong> &mdash; ":"")?"":__t)+"\n"+__e(message)+"\n\n",retry&&(__p+='\n    <br><br><a href="#" class="btn btn-sm btn-warning retry">'+__e(i18n("str","try-again"))+"</a>\n"),__p+="\n";return __p}}).call(this,__webpack_require__(2))},279:function(e,t,n){const i=n(4),o=i.Model.extend({idAttribute:"id",defaults:function(){return{id:void 0,name:"",description:"",value:null,meta:[]}}});e.exports={Model:o,Collection:i.Collection.extend({model:o})}},280:function(e,t,n){const i=n(5),o=n(281),r=n(283),s=i.CollectionView.extend({tagName:"tbody",childView:o});e.exports=i.View.extend({tagName:"table",className:"table table-hover table-outline table-vcenter text-nowrap card-table",template:r,regions:{body:{el:"tbody",replaceElement:!0}},onRender:function(){this.showChildView("body",new s({collection:this.collection}))}})},281:function(e,t,n){const i=n(5),o=n(1),r=n(282);e.exports=i.View.extend({template:r,tagName:"tr",ui:{edit:"a.edit"},events:{"click @ui.edit":function(e){e.preventDefault(),o.Controller.showSettingForm(this.model)}},initialize:function(){this.listenTo(this.model,"change",this.render)}})},282:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,"")}with(obj)__p+="<td>\n    <div>"+__e(name)+'</div>\n    <div class="small text-muted">\n        '+__e(description)+"\n    </div>\n</td>\n<td>\n    <div>\n        ","default-site"===id&&(__p+="\n            "+__e(i18n("settings","default-site-"+value))+"\n        "),__p+='\n    </div>\n</td>\n<td class="text-right">\n    <div class="item-action dropdown">\n        <a href="#" data-toggle="dropdown" class="icon"><i class="fe fe-more-vertical"></i></a>\n        <div class="dropdown-menu dropdown-menu-right">\n            <a href="#" class="edit dropdown-item"><i class="dropdown-icon fe fe-edit"></i> '+__e(i18n("str","edit"))+"</a>\n        </div>\n    </div>\n</td>";return __p}}).call(this,__webpack_require__(2))},283:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape;with(obj)__p+="<thead>\n    <th>"+__e(i18n("str","name"))+"</th>\n    <th>"+__e(i18n("str","value"))+"</th>\n    <th>&nbsp;</th>\n</thead>\n<tbody>\n    \x3c!-- items --\x3e\n</tbody>\n";return __p}}).call(this,__webpack_require__(2))},284:function(module,exports,__webpack_require__){(function(_){module.exports=function(obj){obj||(obj={});var __t,__p="",__e=_.escape;with(obj)__p+='<div class="card">\n    <div class="card-status bg-teal"></div>\n    <div class="card-header">\n        <h3 class="card-title">'+__e(i18n("settings","title"))+'</h3>\n    </div>\n    <div class="card-body no-padding min-100">\n        <div class="dimmer active">\n            <div class="loader"></div>\n            <div class="dimmer-content list-region">\n                \x3c!-- List Region --\x3e\n            </div>\n        </div>\n    </div>\n</div>\n';return __p}}).call(this,__webpack_require__(2))}}]);