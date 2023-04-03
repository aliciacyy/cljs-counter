goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18971 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18971(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18972 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18972(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17593 = coll;
var G__17594 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17593,G__17594) : shadow.dom.lazy_native_coll_seq.call(null,G__17593,G__17594));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17656 = arguments.length;
switch (G__17656) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17667 = arguments.length;
switch (G__17667) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17673 = arguments.length;
switch (G__17673) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17687 = arguments.length;
switch (G__17687) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17705 = arguments.length;
switch (G__17705) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17722 = arguments.length;
switch (G__17722) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17740){if((e17740 instanceof Object)){
var e = e17740;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17740;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17750 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17751 = null;
var count__17752 = (0);
var i__17753 = (0);
while(true){
if((i__17753 < count__17752)){
var el = chunk__17751.cljs$core$IIndexed$_nth$arity$2(null,i__17753);
var handler_19003__$1 = ((function (seq__17750,chunk__17751,count__17752,i__17753,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17750,chunk__17751,count__17752,i__17753,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19003__$1);


var G__19005 = seq__17750;
var G__19006 = chunk__17751;
var G__19007 = count__17752;
var G__19008 = (i__17753 + (1));
seq__17750 = G__19005;
chunk__17751 = G__19006;
count__17752 = G__19007;
i__17753 = G__19008;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17750);
if(temp__5804__auto__){
var seq__17750__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17750__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17750__$1);
var G__19010 = cljs.core.chunk_rest(seq__17750__$1);
var G__19011 = c__5568__auto__;
var G__19012 = cljs.core.count(c__5568__auto__);
var G__19013 = (0);
seq__17750 = G__19010;
chunk__17751 = G__19011;
count__17752 = G__19012;
i__17753 = G__19013;
continue;
} else {
var el = cljs.core.first(seq__17750__$1);
var handler_19015__$1 = ((function (seq__17750,chunk__17751,count__17752,i__17753,el,seq__17750__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17750,chunk__17751,count__17752,i__17753,el,seq__17750__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19015__$1);


var G__19016 = cljs.core.next(seq__17750__$1);
var G__19017 = null;
var G__19018 = (0);
var G__19019 = (0);
seq__17750 = G__19016;
chunk__17751 = G__19017;
count__17752 = G__19018;
i__17753 = G__19019;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17789 = arguments.length;
switch (G__17789) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17814 = cljs.core.seq(events);
var chunk__17815 = null;
var count__17816 = (0);
var i__17817 = (0);
while(true){
if((i__17817 < count__17816)){
var vec__17854 = chunk__17815.cljs$core$IIndexed$_nth$arity$2(null,i__17817);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17854,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17854,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19026 = seq__17814;
var G__19027 = chunk__17815;
var G__19028 = count__17816;
var G__19029 = (i__17817 + (1));
seq__17814 = G__19026;
chunk__17815 = G__19027;
count__17816 = G__19028;
i__17817 = G__19029;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17814);
if(temp__5804__auto__){
var seq__17814__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17814__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17814__$1);
var G__19030 = cljs.core.chunk_rest(seq__17814__$1);
var G__19031 = c__5568__auto__;
var G__19032 = cljs.core.count(c__5568__auto__);
var G__19033 = (0);
seq__17814 = G__19030;
chunk__17815 = G__19031;
count__17816 = G__19032;
i__17817 = G__19033;
continue;
} else {
var vec__17862 = cljs.core.first(seq__17814__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17862,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19046 = cljs.core.next(seq__17814__$1);
var G__19047 = null;
var G__19048 = (0);
var G__19049 = (0);
seq__17814 = G__19046;
chunk__17815 = G__19047;
count__17816 = G__19048;
i__17817 = G__19049;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17875 = cljs.core.seq(styles);
var chunk__17876 = null;
var count__17877 = (0);
var i__17878 = (0);
while(true){
if((i__17878 < count__17877)){
var vec__17900 = chunk__17876.cljs$core$IIndexed$_nth$arity$2(null,i__17878);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17900,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17900,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19050 = seq__17875;
var G__19051 = chunk__17876;
var G__19052 = count__17877;
var G__19053 = (i__17878 + (1));
seq__17875 = G__19050;
chunk__17876 = G__19051;
count__17877 = G__19052;
i__17878 = G__19053;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17875);
if(temp__5804__auto__){
var seq__17875__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17875__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17875__$1);
var G__19054 = cljs.core.chunk_rest(seq__17875__$1);
var G__19055 = c__5568__auto__;
var G__19056 = cljs.core.count(c__5568__auto__);
var G__19057 = (0);
seq__17875 = G__19054;
chunk__17876 = G__19055;
count__17877 = G__19056;
i__17878 = G__19057;
continue;
} else {
var vec__17913 = cljs.core.first(seq__17875__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17913,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17913,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19058 = cljs.core.next(seq__17875__$1);
var G__19059 = null;
var G__19060 = (0);
var G__19061 = (0);
seq__17875 = G__19058;
chunk__17876 = G__19059;
count__17877 = G__19060;
i__17878 = G__19061;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17927_19062 = key;
var G__17927_19063__$1 = (((G__17927_19062 instanceof cljs.core.Keyword))?G__17927_19062.fqn:null);
switch (G__17927_19063__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19068 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19068,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19068,"aria-");
}
})())){
el.setAttribute(ks_19068,value);
} else {
(el[ks_19068] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18046){
var map__18050 = p__18046;
var map__18050__$1 = cljs.core.__destructure_map(map__18050);
var props = map__18050__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18050__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18056 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18056,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18056,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18056,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18065 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18065,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18065;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18093 = arguments.length;
switch (G__18093) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18105){
var vec__18110 = p__18105;
var seq__18111 = cljs.core.seq(vec__18110);
var first__18112 = cljs.core.first(seq__18111);
var seq__18111__$1 = cljs.core.next(seq__18111);
var nn = first__18112;
var first__18112__$1 = cljs.core.first(seq__18111__$1);
var seq__18111__$2 = cljs.core.next(seq__18111__$1);
var np = first__18112__$1;
var nc = seq__18111__$2;
var node = vec__18110;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18113 = nn;
var G__18114 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18113,G__18114) : create_fn.call(null,G__18113,G__18114));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18115 = nn;
var G__18116 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18115,G__18116) : create_fn.call(null,G__18115,G__18116));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18133 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18133,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18133,(1),null);
var seq__18137_19080 = cljs.core.seq(node_children);
var chunk__18140_19081 = null;
var count__18141_19082 = (0);
var i__18142_19083 = (0);
while(true){
if((i__18142_19083 < count__18141_19082)){
var child_struct_19084 = chunk__18140_19081.cljs$core$IIndexed$_nth$arity$2(null,i__18142_19083);
var children_19085 = shadow.dom.dom_node(child_struct_19084);
if(cljs.core.seq_QMARK_(children_19085)){
var seq__18260_19086 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19085));
var chunk__18263_19087 = null;
var count__18265_19088 = (0);
var i__18266_19089 = (0);
while(true){
if((i__18266_19089 < count__18265_19088)){
var child_19090 = chunk__18263_19087.cljs$core$IIndexed$_nth$arity$2(null,i__18266_19089);
if(cljs.core.truth_(child_19090)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19090);


var G__19092 = seq__18260_19086;
var G__19093 = chunk__18263_19087;
var G__19094 = count__18265_19088;
var G__19095 = (i__18266_19089 + (1));
seq__18260_19086 = G__19092;
chunk__18263_19087 = G__19093;
count__18265_19088 = G__19094;
i__18266_19089 = G__19095;
continue;
} else {
var G__19097 = seq__18260_19086;
var G__19098 = chunk__18263_19087;
var G__19099 = count__18265_19088;
var G__19100 = (i__18266_19089 + (1));
seq__18260_19086 = G__19097;
chunk__18263_19087 = G__19098;
count__18265_19088 = G__19099;
i__18266_19089 = G__19100;
continue;
}
} else {
var temp__5804__auto___19101 = cljs.core.seq(seq__18260_19086);
if(temp__5804__auto___19101){
var seq__18260_19102__$1 = temp__5804__auto___19101;
if(cljs.core.chunked_seq_QMARK_(seq__18260_19102__$1)){
var c__5568__auto___19104 = cljs.core.chunk_first(seq__18260_19102__$1);
var G__19105 = cljs.core.chunk_rest(seq__18260_19102__$1);
var G__19106 = c__5568__auto___19104;
var G__19107 = cljs.core.count(c__5568__auto___19104);
var G__19108 = (0);
seq__18260_19086 = G__19105;
chunk__18263_19087 = G__19106;
count__18265_19088 = G__19107;
i__18266_19089 = G__19108;
continue;
} else {
var child_19109 = cljs.core.first(seq__18260_19102__$1);
if(cljs.core.truth_(child_19109)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19109);


var G__19111 = cljs.core.next(seq__18260_19102__$1);
var G__19112 = null;
var G__19113 = (0);
var G__19114 = (0);
seq__18260_19086 = G__19111;
chunk__18263_19087 = G__19112;
count__18265_19088 = G__19113;
i__18266_19089 = G__19114;
continue;
} else {
var G__19115 = cljs.core.next(seq__18260_19102__$1);
var G__19116 = null;
var G__19117 = (0);
var G__19118 = (0);
seq__18260_19086 = G__19115;
chunk__18263_19087 = G__19116;
count__18265_19088 = G__19117;
i__18266_19089 = G__19118;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19085);
}


var G__19121 = seq__18137_19080;
var G__19122 = chunk__18140_19081;
var G__19123 = count__18141_19082;
var G__19124 = (i__18142_19083 + (1));
seq__18137_19080 = G__19121;
chunk__18140_19081 = G__19122;
count__18141_19082 = G__19123;
i__18142_19083 = G__19124;
continue;
} else {
var temp__5804__auto___19125 = cljs.core.seq(seq__18137_19080);
if(temp__5804__auto___19125){
var seq__18137_19127__$1 = temp__5804__auto___19125;
if(cljs.core.chunked_seq_QMARK_(seq__18137_19127__$1)){
var c__5568__auto___19129 = cljs.core.chunk_first(seq__18137_19127__$1);
var G__19130 = cljs.core.chunk_rest(seq__18137_19127__$1);
var G__19131 = c__5568__auto___19129;
var G__19132 = cljs.core.count(c__5568__auto___19129);
var G__19133 = (0);
seq__18137_19080 = G__19130;
chunk__18140_19081 = G__19131;
count__18141_19082 = G__19132;
i__18142_19083 = G__19133;
continue;
} else {
var child_struct_19134 = cljs.core.first(seq__18137_19127__$1);
var children_19135 = shadow.dom.dom_node(child_struct_19134);
if(cljs.core.seq_QMARK_(children_19135)){
var seq__18320_19136 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19135));
var chunk__18322_19137 = null;
var count__18323_19138 = (0);
var i__18324_19139 = (0);
while(true){
if((i__18324_19139 < count__18323_19138)){
var child_19141 = chunk__18322_19137.cljs$core$IIndexed$_nth$arity$2(null,i__18324_19139);
if(cljs.core.truth_(child_19141)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19141);


var G__19143 = seq__18320_19136;
var G__19144 = chunk__18322_19137;
var G__19145 = count__18323_19138;
var G__19146 = (i__18324_19139 + (1));
seq__18320_19136 = G__19143;
chunk__18322_19137 = G__19144;
count__18323_19138 = G__19145;
i__18324_19139 = G__19146;
continue;
} else {
var G__19148 = seq__18320_19136;
var G__19149 = chunk__18322_19137;
var G__19150 = count__18323_19138;
var G__19151 = (i__18324_19139 + (1));
seq__18320_19136 = G__19148;
chunk__18322_19137 = G__19149;
count__18323_19138 = G__19150;
i__18324_19139 = G__19151;
continue;
}
} else {
var temp__5804__auto___19152__$1 = cljs.core.seq(seq__18320_19136);
if(temp__5804__auto___19152__$1){
var seq__18320_19153__$1 = temp__5804__auto___19152__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18320_19153__$1)){
var c__5568__auto___19154 = cljs.core.chunk_first(seq__18320_19153__$1);
var G__19155 = cljs.core.chunk_rest(seq__18320_19153__$1);
var G__19156 = c__5568__auto___19154;
var G__19157 = cljs.core.count(c__5568__auto___19154);
var G__19158 = (0);
seq__18320_19136 = G__19155;
chunk__18322_19137 = G__19156;
count__18323_19138 = G__19157;
i__18324_19139 = G__19158;
continue;
} else {
var child_19159 = cljs.core.first(seq__18320_19153__$1);
if(cljs.core.truth_(child_19159)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19159);


var G__19161 = cljs.core.next(seq__18320_19153__$1);
var G__19162 = null;
var G__19163 = (0);
var G__19164 = (0);
seq__18320_19136 = G__19161;
chunk__18322_19137 = G__19162;
count__18323_19138 = G__19163;
i__18324_19139 = G__19164;
continue;
} else {
var G__19165 = cljs.core.next(seq__18320_19153__$1);
var G__19166 = null;
var G__19167 = (0);
var G__19168 = (0);
seq__18320_19136 = G__19165;
chunk__18322_19137 = G__19166;
count__18323_19138 = G__19167;
i__18324_19139 = G__19168;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19135);
}


var G__19169 = cljs.core.next(seq__18137_19127__$1);
var G__19170 = null;
var G__19171 = (0);
var G__19172 = (0);
seq__18137_19080 = G__19169;
chunk__18140_19081 = G__19170;
count__18141_19082 = G__19171;
i__18142_19083 = G__19172;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18355 = cljs.core.seq(node);
var chunk__18356 = null;
var count__18357 = (0);
var i__18358 = (0);
while(true){
if((i__18358 < count__18357)){
var n = chunk__18356.cljs$core$IIndexed$_nth$arity$2(null,i__18358);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19176 = seq__18355;
var G__19177 = chunk__18356;
var G__19178 = count__18357;
var G__19179 = (i__18358 + (1));
seq__18355 = G__19176;
chunk__18356 = G__19177;
count__18357 = G__19178;
i__18358 = G__19179;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18355);
if(temp__5804__auto__){
var seq__18355__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18355__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18355__$1);
var G__19182 = cljs.core.chunk_rest(seq__18355__$1);
var G__19183 = c__5568__auto__;
var G__19184 = cljs.core.count(c__5568__auto__);
var G__19185 = (0);
seq__18355 = G__19182;
chunk__18356 = G__19183;
count__18357 = G__19184;
i__18358 = G__19185;
continue;
} else {
var n = cljs.core.first(seq__18355__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19190 = cljs.core.next(seq__18355__$1);
var G__19191 = null;
var G__19192 = (0);
var G__19193 = (0);
seq__18355 = G__19190;
chunk__18356 = G__19191;
count__18357 = G__19192;
i__18358 = G__19193;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18379 = arguments.length;
switch (G__18379) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18387 = arguments.length;
switch (G__18387) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18414 = arguments.length;
switch (G__18414) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19217 = arguments.length;
var i__5770__auto___19218 = (0);
while(true){
if((i__5770__auto___19218 < len__5769__auto___19217)){
args__5775__auto__.push((arguments[i__5770__auto___19218]));

var G__19220 = (i__5770__auto___19218 + (1));
i__5770__auto___19218 = G__19220;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18457_19222 = cljs.core.seq(nodes);
var chunk__18458_19223 = null;
var count__18459_19224 = (0);
var i__18460_19225 = (0);
while(true){
if((i__18460_19225 < count__18459_19224)){
var node_19226 = chunk__18458_19223.cljs$core$IIndexed$_nth$arity$2(null,i__18460_19225);
fragment.appendChild(shadow.dom._to_dom(node_19226));


var G__19227 = seq__18457_19222;
var G__19228 = chunk__18458_19223;
var G__19229 = count__18459_19224;
var G__19230 = (i__18460_19225 + (1));
seq__18457_19222 = G__19227;
chunk__18458_19223 = G__19228;
count__18459_19224 = G__19229;
i__18460_19225 = G__19230;
continue;
} else {
var temp__5804__auto___19231 = cljs.core.seq(seq__18457_19222);
if(temp__5804__auto___19231){
var seq__18457_19236__$1 = temp__5804__auto___19231;
if(cljs.core.chunked_seq_QMARK_(seq__18457_19236__$1)){
var c__5568__auto___19237 = cljs.core.chunk_first(seq__18457_19236__$1);
var G__19238 = cljs.core.chunk_rest(seq__18457_19236__$1);
var G__19239 = c__5568__auto___19237;
var G__19240 = cljs.core.count(c__5568__auto___19237);
var G__19241 = (0);
seq__18457_19222 = G__19238;
chunk__18458_19223 = G__19239;
count__18459_19224 = G__19240;
i__18460_19225 = G__19241;
continue;
} else {
var node_19242 = cljs.core.first(seq__18457_19236__$1);
fragment.appendChild(shadow.dom._to_dom(node_19242));


var G__19243 = cljs.core.next(seq__18457_19236__$1);
var G__19244 = null;
var G__19245 = (0);
var G__19246 = (0);
seq__18457_19222 = G__19243;
chunk__18458_19223 = G__19244;
count__18459_19224 = G__19245;
i__18460_19225 = G__19246;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18453){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18453));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18485_19248 = cljs.core.seq(scripts);
var chunk__18486_19249 = null;
var count__18487_19250 = (0);
var i__18488_19251 = (0);
while(true){
if((i__18488_19251 < count__18487_19250)){
var vec__18498_19252 = chunk__18486_19249.cljs$core$IIndexed$_nth$arity$2(null,i__18488_19251);
var script_tag_19253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18498_19252,(0),null);
var script_body_19254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18498_19252,(1),null);
eval(script_body_19254);


var G__19256 = seq__18485_19248;
var G__19257 = chunk__18486_19249;
var G__19258 = count__18487_19250;
var G__19259 = (i__18488_19251 + (1));
seq__18485_19248 = G__19256;
chunk__18486_19249 = G__19257;
count__18487_19250 = G__19258;
i__18488_19251 = G__19259;
continue;
} else {
var temp__5804__auto___19261 = cljs.core.seq(seq__18485_19248);
if(temp__5804__auto___19261){
var seq__18485_19262__$1 = temp__5804__auto___19261;
if(cljs.core.chunked_seq_QMARK_(seq__18485_19262__$1)){
var c__5568__auto___19263 = cljs.core.chunk_first(seq__18485_19262__$1);
var G__19264 = cljs.core.chunk_rest(seq__18485_19262__$1);
var G__19265 = c__5568__auto___19263;
var G__19266 = cljs.core.count(c__5568__auto___19263);
var G__19267 = (0);
seq__18485_19248 = G__19264;
chunk__18486_19249 = G__19265;
count__18487_19250 = G__19266;
i__18488_19251 = G__19267;
continue;
} else {
var vec__18505_19268 = cljs.core.first(seq__18485_19262__$1);
var script_tag_19269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18505_19268,(0),null);
var script_body_19270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18505_19268,(1),null);
eval(script_body_19270);


var G__19272 = cljs.core.next(seq__18485_19262__$1);
var G__19273 = null;
var G__19274 = (0);
var G__19275 = (0);
seq__18485_19248 = G__19272;
chunk__18486_19249 = G__19273;
count__18487_19250 = G__19274;
i__18488_19251 = G__19275;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18511){
var vec__18513 = p__18511;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18513,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18513,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18540 = arguments.length;
switch (G__18540) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18584 = cljs.core.seq(style_keys);
var chunk__18585 = null;
var count__18586 = (0);
var i__18587 = (0);
while(true){
if((i__18587 < count__18586)){
var it = chunk__18585.cljs$core$IIndexed$_nth$arity$2(null,i__18587);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19278 = seq__18584;
var G__19279 = chunk__18585;
var G__19280 = count__18586;
var G__19281 = (i__18587 + (1));
seq__18584 = G__19278;
chunk__18585 = G__19279;
count__18586 = G__19280;
i__18587 = G__19281;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18584);
if(temp__5804__auto__){
var seq__18584__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18584__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18584__$1);
var G__19282 = cljs.core.chunk_rest(seq__18584__$1);
var G__19283 = c__5568__auto__;
var G__19284 = cljs.core.count(c__5568__auto__);
var G__19285 = (0);
seq__18584 = G__19282;
chunk__18585 = G__19283;
count__18586 = G__19284;
i__18587 = G__19285;
continue;
} else {
var it = cljs.core.first(seq__18584__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19286 = cljs.core.next(seq__18584__$1);
var G__19287 = null;
var G__19288 = (0);
var G__19289 = (0);
seq__18584 = G__19286;
chunk__18585 = G__19287;
count__18586 = G__19288;
i__18587 = G__19289;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18597,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18613 = k18597;
var G__18613__$1 = (((G__18613 instanceof cljs.core.Keyword))?G__18613.fqn:null);
switch (G__18613__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18597,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18618){
var vec__18620 = p__18618;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18620,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18620,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18596){
var self__ = this;
var G__18596__$1 = this;
return (new cljs.core.RecordIter((0),G__18596__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18598,other18599){
var self__ = this;
var this18598__$1 = this;
return (((!((other18599 == null)))) && ((((this18598__$1.constructor === other18599.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18598__$1.x,other18599.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18598__$1.y,other18599.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18598__$1.__extmap,other18599.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18597){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18663 = k18597;
var G__18663__$1 = (((G__18663 instanceof cljs.core.Keyword))?G__18663.fqn:null);
switch (G__18663__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18597);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18596){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18667 = cljs.core.keyword_identical_QMARK_;
var expr__18668 = k__5352__auto__;
if(cljs.core.truth_((pred__18667.cljs$core$IFn$_invoke$arity$2 ? pred__18667.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18668) : pred__18667.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18668)))){
return (new shadow.dom.Coordinate(G__18596,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18667.cljs$core$IFn$_invoke$arity$2 ? pred__18667.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18668) : pred__18667.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18668)))){
return (new shadow.dom.Coordinate(self__.x,G__18596,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18596),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18596){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18596,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18601){
var extmap__5385__auto__ = (function (){var G__18686 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18601,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18601)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18686);
} else {
return G__18686;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18601),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18601),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18709,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18720 = k18709;
var G__18720__$1 = (((G__18720 instanceof cljs.core.Keyword))?G__18720.fqn:null);
switch (G__18720__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18709,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18725){
var vec__18727 = p__18725;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18727,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18727,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18708){
var self__ = this;
var G__18708__$1 = this;
return (new cljs.core.RecordIter((0),G__18708__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18710,other18711){
var self__ = this;
var this18710__$1 = this;
return (((!((other18711 == null)))) && ((((this18710__$1.constructor === other18711.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18710__$1.w,other18711.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18710__$1.h,other18711.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18710__$1.__extmap,other18711.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18709){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18756 = k18709;
var G__18756__$1 = (((G__18756 instanceof cljs.core.Keyword))?G__18756.fqn:null);
switch (G__18756__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18709);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18708){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18757 = cljs.core.keyword_identical_QMARK_;
var expr__18758 = k__5352__auto__;
if(cljs.core.truth_((pred__18757.cljs$core$IFn$_invoke$arity$2 ? pred__18757.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18758) : pred__18757.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18758)))){
return (new shadow.dom.Size(G__18708,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18757.cljs$core$IFn$_invoke$arity$2 ? pred__18757.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18758) : pred__18757.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18758)))){
return (new shadow.dom.Size(self__.w,G__18708,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18708),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18708){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18708,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18714){
var extmap__5385__auto__ = (function (){var G__18765 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18714,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18714)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18765);
} else {
return G__18765;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18714),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18714),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19383 = (i + (1));
var G__19384 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19383;
ret = G__19384;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18794){
var vec__18795 = p__18794;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18795,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18795,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18799 = arguments.length;
switch (G__18799) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19392 = ps;
var G__19393 = (i + (1));
el__$1 = G__19392;
i = G__19393;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18810 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18810,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18810,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18810,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18813_19400 = cljs.core.seq(props);
var chunk__18814_19401 = null;
var count__18815_19402 = (0);
var i__18816_19403 = (0);
while(true){
if((i__18816_19403 < count__18815_19402)){
var vec__18830_19404 = chunk__18814_19401.cljs$core$IIndexed$_nth$arity$2(null,i__18816_19403);
var k_19405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18830_19404,(0),null);
var v_19406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18830_19404,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19405);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19405),v_19406);


var G__19407 = seq__18813_19400;
var G__19408 = chunk__18814_19401;
var G__19409 = count__18815_19402;
var G__19410 = (i__18816_19403 + (1));
seq__18813_19400 = G__19407;
chunk__18814_19401 = G__19408;
count__18815_19402 = G__19409;
i__18816_19403 = G__19410;
continue;
} else {
var temp__5804__auto___19411 = cljs.core.seq(seq__18813_19400);
if(temp__5804__auto___19411){
var seq__18813_19412__$1 = temp__5804__auto___19411;
if(cljs.core.chunked_seq_QMARK_(seq__18813_19412__$1)){
var c__5568__auto___19414 = cljs.core.chunk_first(seq__18813_19412__$1);
var G__19415 = cljs.core.chunk_rest(seq__18813_19412__$1);
var G__19416 = c__5568__auto___19414;
var G__19417 = cljs.core.count(c__5568__auto___19414);
var G__19418 = (0);
seq__18813_19400 = G__19415;
chunk__18814_19401 = G__19416;
count__18815_19402 = G__19417;
i__18816_19403 = G__19418;
continue;
} else {
var vec__18833_19422 = cljs.core.first(seq__18813_19412__$1);
var k_19423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833_19422,(0),null);
var v_19424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833_19422,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19423);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19423),v_19424);


var G__19425 = cljs.core.next(seq__18813_19412__$1);
var G__19426 = null;
var G__19427 = (0);
var G__19428 = (0);
seq__18813_19400 = G__19425;
chunk__18814_19401 = G__19426;
count__18815_19402 = G__19427;
i__18816_19403 = G__19428;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18851 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18851,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18851,(1),null);
var seq__18856_19436 = cljs.core.seq(node_children);
var chunk__18858_19437 = null;
var count__18859_19438 = (0);
var i__18860_19439 = (0);
while(true){
if((i__18860_19439 < count__18859_19438)){
var child_struct_19444 = chunk__18858_19437.cljs$core$IIndexed$_nth$arity$2(null,i__18860_19439);
if((!((child_struct_19444 == null)))){
if(typeof child_struct_19444 === 'string'){
var text_19446 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19446),child_struct_19444].join(''));
} else {
var children_19451 = shadow.dom.svg_node(child_struct_19444);
if(cljs.core.seq_QMARK_(children_19451)){
var seq__18882_19452 = cljs.core.seq(children_19451);
var chunk__18884_19453 = null;
var count__18885_19454 = (0);
var i__18886_19455 = (0);
while(true){
if((i__18886_19455 < count__18885_19454)){
var child_19456 = chunk__18884_19453.cljs$core$IIndexed$_nth$arity$2(null,i__18886_19455);
if(cljs.core.truth_(child_19456)){
node.appendChild(child_19456);


var G__19458 = seq__18882_19452;
var G__19459 = chunk__18884_19453;
var G__19460 = count__18885_19454;
var G__19461 = (i__18886_19455 + (1));
seq__18882_19452 = G__19458;
chunk__18884_19453 = G__19459;
count__18885_19454 = G__19460;
i__18886_19455 = G__19461;
continue;
} else {
var G__19462 = seq__18882_19452;
var G__19463 = chunk__18884_19453;
var G__19464 = count__18885_19454;
var G__19465 = (i__18886_19455 + (1));
seq__18882_19452 = G__19462;
chunk__18884_19453 = G__19463;
count__18885_19454 = G__19464;
i__18886_19455 = G__19465;
continue;
}
} else {
var temp__5804__auto___19470 = cljs.core.seq(seq__18882_19452);
if(temp__5804__auto___19470){
var seq__18882_19471__$1 = temp__5804__auto___19470;
if(cljs.core.chunked_seq_QMARK_(seq__18882_19471__$1)){
var c__5568__auto___19473 = cljs.core.chunk_first(seq__18882_19471__$1);
var G__19476 = cljs.core.chunk_rest(seq__18882_19471__$1);
var G__19477 = c__5568__auto___19473;
var G__19478 = cljs.core.count(c__5568__auto___19473);
var G__19479 = (0);
seq__18882_19452 = G__19476;
chunk__18884_19453 = G__19477;
count__18885_19454 = G__19478;
i__18886_19455 = G__19479;
continue;
} else {
var child_19480 = cljs.core.first(seq__18882_19471__$1);
if(cljs.core.truth_(child_19480)){
node.appendChild(child_19480);


var G__19481 = cljs.core.next(seq__18882_19471__$1);
var G__19482 = null;
var G__19483 = (0);
var G__19484 = (0);
seq__18882_19452 = G__19481;
chunk__18884_19453 = G__19482;
count__18885_19454 = G__19483;
i__18886_19455 = G__19484;
continue;
} else {
var G__19485 = cljs.core.next(seq__18882_19471__$1);
var G__19486 = null;
var G__19487 = (0);
var G__19488 = (0);
seq__18882_19452 = G__19485;
chunk__18884_19453 = G__19486;
count__18885_19454 = G__19487;
i__18886_19455 = G__19488;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19451);
}
}


var G__19489 = seq__18856_19436;
var G__19490 = chunk__18858_19437;
var G__19491 = count__18859_19438;
var G__19492 = (i__18860_19439 + (1));
seq__18856_19436 = G__19489;
chunk__18858_19437 = G__19490;
count__18859_19438 = G__19491;
i__18860_19439 = G__19492;
continue;
} else {
var G__19493 = seq__18856_19436;
var G__19494 = chunk__18858_19437;
var G__19495 = count__18859_19438;
var G__19496 = (i__18860_19439 + (1));
seq__18856_19436 = G__19493;
chunk__18858_19437 = G__19494;
count__18859_19438 = G__19495;
i__18860_19439 = G__19496;
continue;
}
} else {
var temp__5804__auto___19497 = cljs.core.seq(seq__18856_19436);
if(temp__5804__auto___19497){
var seq__18856_19498__$1 = temp__5804__auto___19497;
if(cljs.core.chunked_seq_QMARK_(seq__18856_19498__$1)){
var c__5568__auto___19499 = cljs.core.chunk_first(seq__18856_19498__$1);
var G__19500 = cljs.core.chunk_rest(seq__18856_19498__$1);
var G__19501 = c__5568__auto___19499;
var G__19502 = cljs.core.count(c__5568__auto___19499);
var G__19503 = (0);
seq__18856_19436 = G__19500;
chunk__18858_19437 = G__19501;
count__18859_19438 = G__19502;
i__18860_19439 = G__19503;
continue;
} else {
var child_struct_19504 = cljs.core.first(seq__18856_19498__$1);
if((!((child_struct_19504 == null)))){
if(typeof child_struct_19504 === 'string'){
var text_19505 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19505),child_struct_19504].join(''));
} else {
var children_19506 = shadow.dom.svg_node(child_struct_19504);
if(cljs.core.seq_QMARK_(children_19506)){
var seq__18893_19507 = cljs.core.seq(children_19506);
var chunk__18895_19508 = null;
var count__18896_19509 = (0);
var i__18897_19510 = (0);
while(true){
if((i__18897_19510 < count__18896_19509)){
var child_19511 = chunk__18895_19508.cljs$core$IIndexed$_nth$arity$2(null,i__18897_19510);
if(cljs.core.truth_(child_19511)){
node.appendChild(child_19511);


var G__19512 = seq__18893_19507;
var G__19513 = chunk__18895_19508;
var G__19514 = count__18896_19509;
var G__19515 = (i__18897_19510 + (1));
seq__18893_19507 = G__19512;
chunk__18895_19508 = G__19513;
count__18896_19509 = G__19514;
i__18897_19510 = G__19515;
continue;
} else {
var G__19516 = seq__18893_19507;
var G__19517 = chunk__18895_19508;
var G__19518 = count__18896_19509;
var G__19519 = (i__18897_19510 + (1));
seq__18893_19507 = G__19516;
chunk__18895_19508 = G__19517;
count__18896_19509 = G__19518;
i__18897_19510 = G__19519;
continue;
}
} else {
var temp__5804__auto___19520__$1 = cljs.core.seq(seq__18893_19507);
if(temp__5804__auto___19520__$1){
var seq__18893_19521__$1 = temp__5804__auto___19520__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18893_19521__$1)){
var c__5568__auto___19522 = cljs.core.chunk_first(seq__18893_19521__$1);
var G__19523 = cljs.core.chunk_rest(seq__18893_19521__$1);
var G__19524 = c__5568__auto___19522;
var G__19525 = cljs.core.count(c__5568__auto___19522);
var G__19526 = (0);
seq__18893_19507 = G__19523;
chunk__18895_19508 = G__19524;
count__18896_19509 = G__19525;
i__18897_19510 = G__19526;
continue;
} else {
var child_19528 = cljs.core.first(seq__18893_19521__$1);
if(cljs.core.truth_(child_19528)){
node.appendChild(child_19528);


var G__19530 = cljs.core.next(seq__18893_19521__$1);
var G__19531 = null;
var G__19532 = (0);
var G__19533 = (0);
seq__18893_19507 = G__19530;
chunk__18895_19508 = G__19531;
count__18896_19509 = G__19532;
i__18897_19510 = G__19533;
continue;
} else {
var G__19535 = cljs.core.next(seq__18893_19521__$1);
var G__19536 = null;
var G__19537 = (0);
var G__19538 = (0);
seq__18893_19507 = G__19535;
chunk__18895_19508 = G__19536;
count__18896_19509 = G__19537;
i__18897_19510 = G__19538;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19506);
}
}


var G__19539 = cljs.core.next(seq__18856_19498__$1);
var G__19540 = null;
var G__19541 = (0);
var G__19542 = (0);
seq__18856_19436 = G__19539;
chunk__18858_19437 = G__19540;
count__18859_19438 = G__19541;
i__18860_19439 = G__19542;
continue;
} else {
var G__19543 = cljs.core.next(seq__18856_19498__$1);
var G__19544 = null;
var G__19545 = (0);
var G__19547 = (0);
seq__18856_19436 = G__19543;
chunk__18858_19437 = G__19544;
count__18859_19438 = G__19545;
i__18860_19439 = G__19547;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19554 = arguments.length;
var i__5770__auto___19555 = (0);
while(true){
if((i__5770__auto___19555 < len__5769__auto___19554)){
args__5775__auto__.push((arguments[i__5770__auto___19555]));

var G__19556 = (i__5770__auto___19555 + (1));
i__5770__auto___19555 = G__19556;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18921){
var G__18922 = cljs.core.first(seq18921);
var seq18921__$1 = cljs.core.next(seq18921);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18922,seq18921__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18941 = arguments.length;
switch (G__18941) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__14230__auto___19559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_18949){
var state_val_18950 = (state_18949[(1)]);
if((state_val_18950 === (1))){
var state_18949__$1 = state_18949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18949__$1,(2),once_or_cleanup);
} else {
if((state_val_18950 === (2))){
var inst_18946 = (state_18949[(2)]);
var inst_18947 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18949__$1 = (function (){var statearr_18951 = state_18949;
(statearr_18951[(7)] = inst_18946);

return statearr_18951;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18949__$1,inst_18947);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13159__auto__ = null;
var shadow$dom$state_machine__13159__auto____0 = (function (){
var statearr_18952 = [null,null,null,null,null,null,null,null];
(statearr_18952[(0)] = shadow$dom$state_machine__13159__auto__);

(statearr_18952[(1)] = (1));

return statearr_18952;
});
var shadow$dom$state_machine__13159__auto____1 = (function (state_18949){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_18949);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e18953){var ex__13162__auto__ = e18953;
var statearr_18955_19564 = state_18949;
(statearr_18955_19564[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_18949[(4)]))){
var statearr_18956_19565 = state_18949;
(statearr_18956_19565[(1)] = cljs.core.first((state_18949[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19566 = state_18949;
state_18949 = G__19566;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
shadow$dom$state_machine__13159__auto__ = function(state_18949){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13159__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13159__auto____1.call(this,state_18949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13159__auto____0;
shadow$dom$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13159__auto____1;
return shadow$dom$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_18957 = f__14231__auto__();
(statearr_18957[(6)] = c__14230__auto___19559);

return statearr_18957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
