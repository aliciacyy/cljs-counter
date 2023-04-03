goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__11572 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11573 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11573);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__11577 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11578 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11578);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11577);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11572);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__11601 = arguments.length;
switch (G__11601) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__11612 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11612,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11612,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__11615_11634 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__11616_11635 = null;
var count__11617_11636 = (0);
var i__11618_11637 = (0);
while(true){
if((i__11618_11637 < count__11617_11636)){
var vec__11625_11638 = chunk__11616_11635.cljs$core$IIndexed$_nth$arity$2(null,i__11618_11637);
var container_11639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11625_11638,(0),null);
var comp_11640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11625_11638,(1),null);
reagent.dom.re_render_component(comp_11640,container_11639);


var G__11642 = seq__11615_11634;
var G__11643 = chunk__11616_11635;
var G__11644 = count__11617_11636;
var G__11645 = (i__11618_11637 + (1));
seq__11615_11634 = G__11642;
chunk__11616_11635 = G__11643;
count__11617_11636 = G__11644;
i__11618_11637 = G__11645;
continue;
} else {
var temp__5804__auto___11646 = cljs.core.seq(seq__11615_11634);
if(temp__5804__auto___11646){
var seq__11615_11647__$1 = temp__5804__auto___11646;
if(cljs.core.chunked_seq_QMARK_(seq__11615_11647__$1)){
var c__5568__auto___11648 = cljs.core.chunk_first(seq__11615_11647__$1);
var G__11650 = cljs.core.chunk_rest(seq__11615_11647__$1);
var G__11651 = c__5568__auto___11648;
var G__11652 = cljs.core.count(c__5568__auto___11648);
var G__11653 = (0);
seq__11615_11634 = G__11650;
chunk__11616_11635 = G__11651;
count__11617_11636 = G__11652;
i__11618_11637 = G__11653;
continue;
} else {
var vec__11628_11654 = cljs.core.first(seq__11615_11647__$1);
var container_11655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11628_11654,(0),null);
var comp_11656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11628_11654,(1),null);
reagent.dom.re_render_component(comp_11656,container_11655);


var G__11657 = cljs.core.next(seq__11615_11647__$1);
var G__11658 = null;
var G__11659 = (0);
var G__11660 = (0);
seq__11615_11634 = G__11657;
chunk__11616_11635 = G__11658;
count__11617_11636 = G__11659;
i__11618_11637 = G__11660;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
