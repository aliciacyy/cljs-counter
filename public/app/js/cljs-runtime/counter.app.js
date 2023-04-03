goog.provide('counter.app');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Code reloaded!"], 0));
counter.app.init = (function counter$app$init(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["App initialization!"], 0));
});
if((typeof counter !== 'undefined') && (typeof counter.app !== 'undefined') && (typeof counter.app.current_count !== 'undefined')){
} else {
counter.app.current_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
if((typeof counter !== 'undefined') && (typeof counter.app !== 'undefined') && (typeof counter.app.counters !== 'undefined')){
} else {
counter.app.counters = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
counter.app.vec_delete = (function counter$app$vec_delete(v,i){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(i + (1))));
});
counter.app.Counter = (function counter$app$Counter(i,counter__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),counter__$1," ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counter.app.counters,cljs.core.update,i,cljs.core.inc);
})], null),"+1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(counter.app.counters,cljs.core.update,i,cljs.core.dec);
})], null),"-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(counter.app.counters,counter.app.vec_delete,i);
})], null),"X"], null)], null);
});
counter.app.Application = (function counter$app$Application(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Counter"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function counter$app$Application_$_iter__11965(s__11966){
return (new cljs.core.LazySeq(null,(function (){
var s__11966__$1 = s__11966;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11966__$1);
if(temp__5804__auto__){
var s__11966__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11966__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__11966__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__11968 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__11967 = (0);
while(true){
if((i__11967 < size__5522__auto__)){
var vec__11969 = cljs.core._nth(c__5521__auto__,i__11967);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11969,(0),null);
var counter__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11969,(1),null);
cljs.core.chunk_append(b__11968,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.Counter,i,counter__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)));

var G__11975 = (i__11967 + (1));
i__11967 = G__11975;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11968),counter$app$Application_$_iter__11965(cljs.core.chunk_rest(s__11966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11968),null);
}
} else {
var vec__11972 = cljs.core.first(s__11966__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11972,(0),null);
var counter__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11972,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.Counter,i,counter__$1], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)], null)),counter$app$Application_$_iter__11965(cljs.core.rest(s__11966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.deref(counter.app.counters)));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(counter.app.counters,cljs.core.conj,(0));
})], null),"Add counter"], null)], null);
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [counter.app.Application], null),document.getElementById("app"));

//# sourceMappingURL=counter.app.js.map
