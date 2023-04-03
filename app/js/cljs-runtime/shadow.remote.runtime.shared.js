goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13229){
var map__13233 = p__13229;
var map__13233__$1 = cljs.core.__destructure_map(map__13233);
var runtime = map__13233__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13233__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13496 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13496)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13249 = runtime;
var G__13250 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13496);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13249,G__13250) : shadow.remote.runtime.shared.process.call(null,G__13249,G__13250));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13259,res){
var map__13261 = p__13259;
var map__13261__$1 = cljs.core.__destructure_map(map__13261);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13261__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13261__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13267 = res;
var G__13267__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13267,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13267);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13267__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13267__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13272 = arguments.length;
switch (G__13272) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13273,msg,handlers,timeout_after_ms){
var map__13275 = p__13273;
var map__13275__$1 = cljs.core.__destructure_map(map__13275);
var runtime = map__13275__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13275__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13508 = arguments.length;
var i__5770__auto___13509 = (0);
while(true){
if((i__5770__auto___13509 < len__5769__auto___13508)){
args__5775__auto__.push((arguments[i__5770__auto___13509]));

var G__13510 = (i__5770__auto___13509 + (1));
i__5770__auto___13509 = G__13510;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13288,ev,args){
var map__13289 = p__13288;
var map__13289__$1 = cljs.core.__destructure_map(map__13289);
var runtime = map__13289__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13289__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13293 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13296 = null;
var count__13297 = (0);
var i__13298 = (0);
while(true){
if((i__13298 < count__13297)){
var ext = chunk__13296.cljs$core$IIndexed$_nth$arity$2(null,i__13298);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13518 = seq__13293;
var G__13519 = chunk__13296;
var G__13520 = count__13297;
var G__13521 = (i__13298 + (1));
seq__13293 = G__13518;
chunk__13296 = G__13519;
count__13297 = G__13520;
i__13298 = G__13521;
continue;
} else {
var G__13522 = seq__13293;
var G__13523 = chunk__13296;
var G__13524 = count__13297;
var G__13525 = (i__13298 + (1));
seq__13293 = G__13522;
chunk__13296 = G__13523;
count__13297 = G__13524;
i__13298 = G__13525;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13293);
if(temp__5804__auto__){
var seq__13293__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13293__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13293__$1);
var G__13529 = cljs.core.chunk_rest(seq__13293__$1);
var G__13530 = c__5568__auto__;
var G__13531 = cljs.core.count(c__5568__auto__);
var G__13532 = (0);
seq__13293 = G__13529;
chunk__13296 = G__13530;
count__13297 = G__13531;
i__13298 = G__13532;
continue;
} else {
var ext = cljs.core.first(seq__13293__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13533 = cljs.core.next(seq__13293__$1);
var G__13534 = null;
var G__13535 = (0);
var G__13536 = (0);
seq__13293 = G__13533;
chunk__13296 = G__13534;
count__13297 = G__13535;
i__13298 = G__13536;
continue;
} else {
var G__13537 = cljs.core.next(seq__13293__$1);
var G__13538 = null;
var G__13539 = (0);
var G__13540 = (0);
seq__13293 = G__13537;
chunk__13296 = G__13538;
count__13297 = G__13539;
i__13298 = G__13540;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13284){
var G__13285 = cljs.core.first(seq13284);
var seq13284__$1 = cljs.core.next(seq13284);
var G__13286 = cljs.core.first(seq13284__$1);
var seq13284__$2 = cljs.core.next(seq13284__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13285,G__13286,seq13284__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13335,p__13336){
var map__13337 = p__13335;
var map__13337__$1 = cljs.core.__destructure_map(map__13337);
var runtime = map__13337__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13337__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13338 = p__13336;
var map__13338__$1 = cljs.core.__destructure_map(map__13338);
var msg = map__13338__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13338__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__13340 = cljs.core.deref(state_ref);
var map__13340__$1 = cljs.core.__destructure_map(map__13340);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13340__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13340__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13347,msg){
var map__13351 = p__13347;
var map__13351__$1 = cljs.core.__destructure_map(map__13351);
var runtime = map__13351__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13351__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13359,key,p__13360){
var map__13361 = p__13359;
var map__13361__$1 = cljs.core.__destructure_map(map__13361);
var state = map__13361__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13361__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13362 = p__13360;
var map__13362__$1 = cljs.core.__destructure_map(map__13362);
var spec = map__13362__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13362__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13370,key,spec){
var map__13371 = p__13370;
var map__13371__$1 = cljs.core.__destructure_map(map__13371);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13371__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13372_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13372_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13374_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13374_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13375_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13375_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13377_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13377_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13378_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13378_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13382,key){
var map__13384 = p__13382;
var map__13384__$1 = cljs.core.__destructure_map(map__13384);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13384__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13396,msg){
var map__13397 = p__13396;
var map__13397__$1 = cljs.core.__destructure_map(map__13397);
var runtime = map__13397__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13397__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13416,p__13417){
var map__13419 = p__13416;
var map__13419__$1 = cljs.core.__destructure_map(map__13419);
var runtime = map__13419__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13419__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13420 = p__13417;
var map__13420__$1 = cljs.core.__destructure_map(map__13420);
var msg = map__13420__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13446 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13448 = null;
var count__13449 = (0);
var i__13450 = (0);
while(true){
if((i__13450 < count__13449)){
var map__13458 = chunk__13448.cljs$core$IIndexed$_nth$arity$2(null,i__13450);
var map__13458__$1 = cljs.core.__destructure_map(map__13458);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13458__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__13559 = seq__13446;
var G__13560 = chunk__13448;
var G__13561 = count__13449;
var G__13562 = (i__13450 + (1));
seq__13446 = G__13559;
chunk__13448 = G__13560;
count__13449 = G__13561;
i__13450 = G__13562;
continue;
} else {
var G__13563 = seq__13446;
var G__13564 = chunk__13448;
var G__13565 = count__13449;
var G__13566 = (i__13450 + (1));
seq__13446 = G__13563;
chunk__13448 = G__13564;
count__13449 = G__13565;
i__13450 = G__13566;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13446);
if(temp__5804__auto__){
var seq__13446__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13446__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13446__$1);
var G__13568 = cljs.core.chunk_rest(seq__13446__$1);
var G__13569 = c__5568__auto__;
var G__13570 = cljs.core.count(c__5568__auto__);
var G__13571 = (0);
seq__13446 = G__13568;
chunk__13448 = G__13569;
count__13449 = G__13570;
i__13450 = G__13571;
continue;
} else {
var map__13460 = cljs.core.first(seq__13446__$1);
var map__13460__$1 = cljs.core.__destructure_map(map__13460);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__13572 = cljs.core.next(seq__13446__$1);
var G__13573 = null;
var G__13574 = (0);
var G__13575 = (0);
seq__13446 = G__13572;
chunk__13448 = G__13573;
count__13449 = G__13574;
i__13450 = G__13575;
continue;
} else {
var G__13577 = cljs.core.next(seq__13446__$1);
var G__13578 = null;
var G__13579 = (0);
var G__13580 = (0);
seq__13446 = G__13577;
chunk__13448 = G__13578;
count__13449 = G__13579;
i__13450 = G__13580;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
