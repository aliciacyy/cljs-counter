goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20856 = arguments.length;
var i__5770__auto___20857 = (0);
while(true){
if((i__5770__auto___20857 < len__5769__auto___20856)){
args__5775__auto__.push((arguments[i__5770__auto___20857]));

var G__20858 = (i__5770__auto___20857 + (1));
i__5770__auto___20857 = G__20858;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20571){
var G__20572 = cljs.core.first(seq20571);
var seq20571__$1 = cljs.core.next(seq20571);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20572,seq20571__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20576 = cljs.core.seq(sources);
var chunk__20577 = null;
var count__20578 = (0);
var i__20579 = (0);
while(true){
if((i__20579 < count__20578)){
var map__20586 = chunk__20577.cljs$core$IIndexed$_nth$arity$2(null,i__20579);
var map__20586__$1 = cljs.core.__destructure_map(map__20586);
var src = map__20586__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20587){var e_20859 = e20587;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20859);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20859.message)].join('')));
}

var G__20860 = seq__20576;
var G__20861 = chunk__20577;
var G__20862 = count__20578;
var G__20863 = (i__20579 + (1));
seq__20576 = G__20860;
chunk__20577 = G__20861;
count__20578 = G__20862;
i__20579 = G__20863;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20576);
if(temp__5804__auto__){
var seq__20576__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20576__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20576__$1);
var G__20864 = cljs.core.chunk_rest(seq__20576__$1);
var G__20865 = c__5568__auto__;
var G__20866 = cljs.core.count(c__5568__auto__);
var G__20867 = (0);
seq__20576 = G__20864;
chunk__20577 = G__20865;
count__20578 = G__20866;
i__20579 = G__20867;
continue;
} else {
var map__20588 = cljs.core.first(seq__20576__$1);
var map__20588__$1 = cljs.core.__destructure_map(map__20588);
var src = map__20588__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20588__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20588__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20588__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20588__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20589){var e_20868 = e20589;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_20868);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_20868.message)].join('')));
}

var G__20869 = cljs.core.next(seq__20576__$1);
var G__20870 = null;
var G__20871 = (0);
var G__20872 = (0);
seq__20576 = G__20869;
chunk__20577 = G__20870;
count__20578 = G__20871;
i__20579 = G__20872;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20592 = cljs.core.seq(js_requires);
var chunk__20593 = null;
var count__20594 = (0);
var i__20595 = (0);
while(true){
if((i__20595 < count__20594)){
var js_ns = chunk__20593.cljs$core$IIndexed$_nth$arity$2(null,i__20595);
var require_str_20873 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20873);


var G__20874 = seq__20592;
var G__20875 = chunk__20593;
var G__20876 = count__20594;
var G__20877 = (i__20595 + (1));
seq__20592 = G__20874;
chunk__20593 = G__20875;
count__20594 = G__20876;
i__20595 = G__20877;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20592);
if(temp__5804__auto__){
var seq__20592__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20592__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20592__$1);
var G__20878 = cljs.core.chunk_rest(seq__20592__$1);
var G__20879 = c__5568__auto__;
var G__20880 = cljs.core.count(c__5568__auto__);
var G__20881 = (0);
seq__20592 = G__20878;
chunk__20593 = G__20879;
count__20594 = G__20880;
i__20595 = G__20881;
continue;
} else {
var js_ns = cljs.core.first(seq__20592__$1);
var require_str_20882 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_20882);


var G__20883 = cljs.core.next(seq__20592__$1);
var G__20884 = null;
var G__20885 = (0);
var G__20886 = (0);
seq__20592 = G__20883;
chunk__20593 = G__20884;
count__20594 = G__20885;
i__20595 = G__20886;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20597){
var map__20598 = p__20597;
var map__20598__$1 = cljs.core.__destructure_map(map__20598);
var msg = map__20598__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20598__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20598__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20599(s__20600){
return (new cljs.core.LazySeq(null,(function (){
var s__20600__$1 = s__20600;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20600__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20605 = cljs.core.first(xs__6360__auto__);
var map__20605__$1 = cljs.core.__destructure_map(map__20605);
var src = map__20605__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20605__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20605__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20600__$1,map__20605,map__20605__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20598,map__20598__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20599_$_iter__20601(s__20602){
return (new cljs.core.LazySeq(null,((function (s__20600__$1,map__20605,map__20605__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20598,map__20598__$1,msg,info,reload_info){
return (function (){
var s__20602__$1 = s__20602;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20602__$1);
if(temp__5804__auto____$1){
var s__20602__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20602__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20602__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20604 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20603 = (0);
while(true){
if((i__20603 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20603);
cljs.core.chunk_append(b__20604,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__20887 = (i__20603 + (1));
i__20603 = G__20887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20604),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20599_$_iter__20601(cljs.core.chunk_rest(s__20602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20604),null);
}
} else {
var warning = cljs.core.first(s__20602__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20599_$_iter__20601(cljs.core.rest(s__20602__$2)));
}
} else {
return null;
}
break;
}
});})(s__20600__$1,map__20605,map__20605__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20598,map__20598__$1,msg,info,reload_info))
,null,null));
});})(s__20600__$1,map__20605,map__20605__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20598,map__20598__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20599(cljs.core.rest(s__20600__$1)));
} else {
var G__20888 = cljs.core.rest(s__20600__$1);
s__20600__$1 = G__20888;
continue;
}
} else {
var G__20889 = cljs.core.rest(s__20600__$1);
s__20600__$1 = G__20889;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20606_20890 = cljs.core.seq(warnings);
var chunk__20607_20891 = null;
var count__20608_20892 = (0);
var i__20609_20893 = (0);
while(true){
if((i__20609_20893 < count__20608_20892)){
var map__20612_20894 = chunk__20607_20891.cljs$core$IIndexed$_nth$arity$2(null,i__20609_20893);
var map__20612_20895__$1 = cljs.core.__destructure_map(map__20612_20894);
var w_20896 = map__20612_20895__$1;
var msg_20897__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20612_20895__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20612_20895__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20612_20895__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20612_20895__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20900)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20898),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20899),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20897__$1)].join(''));


var G__20901 = seq__20606_20890;
var G__20902 = chunk__20607_20891;
var G__20903 = count__20608_20892;
var G__20904 = (i__20609_20893 + (1));
seq__20606_20890 = G__20901;
chunk__20607_20891 = G__20902;
count__20608_20892 = G__20903;
i__20609_20893 = G__20904;
continue;
} else {
var temp__5804__auto___20905 = cljs.core.seq(seq__20606_20890);
if(temp__5804__auto___20905){
var seq__20606_20906__$1 = temp__5804__auto___20905;
if(cljs.core.chunked_seq_QMARK_(seq__20606_20906__$1)){
var c__5568__auto___20907 = cljs.core.chunk_first(seq__20606_20906__$1);
var G__20908 = cljs.core.chunk_rest(seq__20606_20906__$1);
var G__20909 = c__5568__auto___20907;
var G__20910 = cljs.core.count(c__5568__auto___20907);
var G__20911 = (0);
seq__20606_20890 = G__20908;
chunk__20607_20891 = G__20909;
count__20608_20892 = G__20910;
i__20609_20893 = G__20911;
continue;
} else {
var map__20613_20912 = cljs.core.first(seq__20606_20906__$1);
var map__20613_20913__$1 = cljs.core.__destructure_map(map__20613_20912);
var w_20914 = map__20613_20913__$1;
var msg_20915__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20613_20913__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_20916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20613_20913__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_20917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20613_20913__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_20918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20613_20913__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_20918)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_20916),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_20917),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_20915__$1)].join(''));


var G__20919 = cljs.core.next(seq__20606_20906__$1);
var G__20920 = null;
var G__20921 = (0);
var G__20922 = (0);
seq__20606_20890 = G__20919;
chunk__20607_20891 = G__20920;
count__20608_20892 = G__20921;
i__20609_20893 = G__20922;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20596_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20596_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20614){
var map__20615 = p__20614;
var map__20615__$1 = cljs.core.__destructure_map(map__20615);
var msg = map__20615__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20615__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20615__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20616 = cljs.core.seq(updates);
var chunk__20618 = null;
var count__20619 = (0);
var i__20620 = (0);
while(true){
if((i__20620 < count__20619)){
var path = chunk__20618.cljs$core$IIndexed$_nth$arity$2(null,i__20620);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20730_20923 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20734_20924 = null;
var count__20735_20925 = (0);
var i__20736_20926 = (0);
while(true){
if((i__20736_20926 < count__20735_20925)){
var node_20927 = chunk__20734_20924.cljs$core$IIndexed$_nth$arity$2(null,i__20736_20926);
if(cljs.core.not(node_20927.shadow$old)){
var path_match_20928 = shadow.cljs.devtools.client.browser.match_paths(node_20927.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20928)){
var new_link_20929 = (function (){var G__20762 = node_20927.cloneNode(true);
G__20762.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20928),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20762;
})();
(node_20927.shadow$old = true);

(new_link_20929.onload = ((function (seq__20730_20923,chunk__20734_20924,count__20735_20925,i__20736_20926,seq__20616,chunk__20618,count__20619,i__20620,new_link_20929,path_match_20928,node_20927,path,map__20615,map__20615__$1,msg,updates,reload_info){
return (function (e){
var seq__20763_20930 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20765_20931 = null;
var count__20766_20932 = (0);
var i__20767_20933 = (0);
while(true){
if((i__20767_20933 < count__20766_20932)){
var map__20771_20934 = chunk__20765_20931.cljs$core$IIndexed$_nth$arity$2(null,i__20767_20933);
var map__20771_20935__$1 = cljs.core.__destructure_map(map__20771_20934);
var task_20936 = map__20771_20935__$1;
var fn_str_20937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20771_20935__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20771_20935__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20939 = goog.getObjectByName(fn_str_20937,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20938)].join(''));

(fn_obj_20939.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20939.cljs$core$IFn$_invoke$arity$2(path,new_link_20929) : fn_obj_20939.call(null,path,new_link_20929));


var G__20940 = seq__20763_20930;
var G__20941 = chunk__20765_20931;
var G__20942 = count__20766_20932;
var G__20943 = (i__20767_20933 + (1));
seq__20763_20930 = G__20940;
chunk__20765_20931 = G__20941;
count__20766_20932 = G__20942;
i__20767_20933 = G__20943;
continue;
} else {
var temp__5804__auto___20944 = cljs.core.seq(seq__20763_20930);
if(temp__5804__auto___20944){
var seq__20763_20945__$1 = temp__5804__auto___20944;
if(cljs.core.chunked_seq_QMARK_(seq__20763_20945__$1)){
var c__5568__auto___20946 = cljs.core.chunk_first(seq__20763_20945__$1);
var G__20947 = cljs.core.chunk_rest(seq__20763_20945__$1);
var G__20948 = c__5568__auto___20946;
var G__20949 = cljs.core.count(c__5568__auto___20946);
var G__20950 = (0);
seq__20763_20930 = G__20947;
chunk__20765_20931 = G__20948;
count__20766_20932 = G__20949;
i__20767_20933 = G__20950;
continue;
} else {
var map__20772_20951 = cljs.core.first(seq__20763_20945__$1);
var map__20772_20952__$1 = cljs.core.__destructure_map(map__20772_20951);
var task_20953 = map__20772_20952__$1;
var fn_str_20954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20772_20952__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20772_20952__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20956 = goog.getObjectByName(fn_str_20954,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20955)].join(''));

(fn_obj_20956.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20956.cljs$core$IFn$_invoke$arity$2(path,new_link_20929) : fn_obj_20956.call(null,path,new_link_20929));


var G__20957 = cljs.core.next(seq__20763_20945__$1);
var G__20958 = null;
var G__20959 = (0);
var G__20960 = (0);
seq__20763_20930 = G__20957;
chunk__20765_20931 = G__20958;
count__20766_20932 = G__20959;
i__20767_20933 = G__20960;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20927);
});})(seq__20730_20923,chunk__20734_20924,count__20735_20925,i__20736_20926,seq__20616,chunk__20618,count__20619,i__20620,new_link_20929,path_match_20928,node_20927,path,map__20615,map__20615__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20928], 0));

goog.dom.insertSiblingAfter(new_link_20929,node_20927);


var G__20961 = seq__20730_20923;
var G__20962 = chunk__20734_20924;
var G__20963 = count__20735_20925;
var G__20964 = (i__20736_20926 + (1));
seq__20730_20923 = G__20961;
chunk__20734_20924 = G__20962;
count__20735_20925 = G__20963;
i__20736_20926 = G__20964;
continue;
} else {
var G__20965 = seq__20730_20923;
var G__20966 = chunk__20734_20924;
var G__20967 = count__20735_20925;
var G__20968 = (i__20736_20926 + (1));
seq__20730_20923 = G__20965;
chunk__20734_20924 = G__20966;
count__20735_20925 = G__20967;
i__20736_20926 = G__20968;
continue;
}
} else {
var G__20969 = seq__20730_20923;
var G__20970 = chunk__20734_20924;
var G__20971 = count__20735_20925;
var G__20972 = (i__20736_20926 + (1));
seq__20730_20923 = G__20969;
chunk__20734_20924 = G__20970;
count__20735_20925 = G__20971;
i__20736_20926 = G__20972;
continue;
}
} else {
var temp__5804__auto___20973 = cljs.core.seq(seq__20730_20923);
if(temp__5804__auto___20973){
var seq__20730_20974__$1 = temp__5804__auto___20973;
if(cljs.core.chunked_seq_QMARK_(seq__20730_20974__$1)){
var c__5568__auto___20975 = cljs.core.chunk_first(seq__20730_20974__$1);
var G__20976 = cljs.core.chunk_rest(seq__20730_20974__$1);
var G__20977 = c__5568__auto___20975;
var G__20978 = cljs.core.count(c__5568__auto___20975);
var G__20979 = (0);
seq__20730_20923 = G__20976;
chunk__20734_20924 = G__20977;
count__20735_20925 = G__20978;
i__20736_20926 = G__20979;
continue;
} else {
var node_20980 = cljs.core.first(seq__20730_20974__$1);
if(cljs.core.not(node_20980.shadow$old)){
var path_match_20981 = shadow.cljs.devtools.client.browser.match_paths(node_20980.getAttribute("href"),path);
if(cljs.core.truth_(path_match_20981)){
var new_link_20982 = (function (){var G__20773 = node_20980.cloneNode(true);
G__20773.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_20981),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20773;
})();
(node_20980.shadow$old = true);

(new_link_20982.onload = ((function (seq__20730_20923,chunk__20734_20924,count__20735_20925,i__20736_20926,seq__20616,chunk__20618,count__20619,i__20620,new_link_20982,path_match_20981,node_20980,seq__20730_20974__$1,temp__5804__auto___20973,path,map__20615,map__20615__$1,msg,updates,reload_info){
return (function (e){
var seq__20774_20983 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20776_20984 = null;
var count__20777_20985 = (0);
var i__20778_20986 = (0);
while(true){
if((i__20778_20986 < count__20777_20985)){
var map__20782_20987 = chunk__20776_20984.cljs$core$IIndexed$_nth$arity$2(null,i__20778_20986);
var map__20782_20988__$1 = cljs.core.__destructure_map(map__20782_20987);
var task_20989 = map__20782_20988__$1;
var fn_str_20990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782_20988__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_20991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20782_20988__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_20992 = goog.getObjectByName(fn_str_20990,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_20991)].join(''));

(fn_obj_20992.cljs$core$IFn$_invoke$arity$2 ? fn_obj_20992.cljs$core$IFn$_invoke$arity$2(path,new_link_20982) : fn_obj_20992.call(null,path,new_link_20982));


var G__20993 = seq__20774_20983;
var G__20994 = chunk__20776_20984;
var G__20995 = count__20777_20985;
var G__20996 = (i__20778_20986 + (1));
seq__20774_20983 = G__20993;
chunk__20776_20984 = G__20994;
count__20777_20985 = G__20995;
i__20778_20986 = G__20996;
continue;
} else {
var temp__5804__auto___20997__$1 = cljs.core.seq(seq__20774_20983);
if(temp__5804__auto___20997__$1){
var seq__20774_20998__$1 = temp__5804__auto___20997__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20774_20998__$1)){
var c__5568__auto___20999 = cljs.core.chunk_first(seq__20774_20998__$1);
var G__21000 = cljs.core.chunk_rest(seq__20774_20998__$1);
var G__21001 = c__5568__auto___20999;
var G__21002 = cljs.core.count(c__5568__auto___20999);
var G__21003 = (0);
seq__20774_20983 = G__21000;
chunk__20776_20984 = G__21001;
count__20777_20985 = G__21002;
i__20778_20986 = G__21003;
continue;
} else {
var map__20783_21004 = cljs.core.first(seq__20774_20998__$1);
var map__20783_21005__$1 = cljs.core.__destructure_map(map__20783_21004);
var task_21006 = map__20783_21005__$1;
var fn_str_21007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20783_21005__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20783_21005__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21009 = goog.getObjectByName(fn_str_21007,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21008)].join(''));

(fn_obj_21009.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21009.cljs$core$IFn$_invoke$arity$2(path,new_link_20982) : fn_obj_21009.call(null,path,new_link_20982));


var G__21010 = cljs.core.next(seq__20774_20998__$1);
var G__21011 = null;
var G__21012 = (0);
var G__21013 = (0);
seq__20774_20983 = G__21010;
chunk__20776_20984 = G__21011;
count__20777_20985 = G__21012;
i__20778_20986 = G__21013;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_20980);
});})(seq__20730_20923,chunk__20734_20924,count__20735_20925,i__20736_20926,seq__20616,chunk__20618,count__20619,i__20620,new_link_20982,path_match_20981,node_20980,seq__20730_20974__$1,temp__5804__auto___20973,path,map__20615,map__20615__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_20981], 0));

goog.dom.insertSiblingAfter(new_link_20982,node_20980);


var G__21014 = cljs.core.next(seq__20730_20974__$1);
var G__21015 = null;
var G__21016 = (0);
var G__21017 = (0);
seq__20730_20923 = G__21014;
chunk__20734_20924 = G__21015;
count__20735_20925 = G__21016;
i__20736_20926 = G__21017;
continue;
} else {
var G__21018 = cljs.core.next(seq__20730_20974__$1);
var G__21019 = null;
var G__21020 = (0);
var G__21021 = (0);
seq__20730_20923 = G__21018;
chunk__20734_20924 = G__21019;
count__20735_20925 = G__21020;
i__20736_20926 = G__21021;
continue;
}
} else {
var G__21022 = cljs.core.next(seq__20730_20974__$1);
var G__21023 = null;
var G__21024 = (0);
var G__21025 = (0);
seq__20730_20923 = G__21022;
chunk__20734_20924 = G__21023;
count__20735_20925 = G__21024;
i__20736_20926 = G__21025;
continue;
}
}
} else {
}
}
break;
}


var G__21026 = seq__20616;
var G__21027 = chunk__20618;
var G__21028 = count__20619;
var G__21029 = (i__20620 + (1));
seq__20616 = G__21026;
chunk__20618 = G__21027;
count__20619 = G__21028;
i__20620 = G__21029;
continue;
} else {
var G__21030 = seq__20616;
var G__21031 = chunk__20618;
var G__21032 = count__20619;
var G__21033 = (i__20620 + (1));
seq__20616 = G__21030;
chunk__20618 = G__21031;
count__20619 = G__21032;
i__20620 = G__21033;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20616);
if(temp__5804__auto__){
var seq__20616__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20616__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20616__$1);
var G__21034 = cljs.core.chunk_rest(seq__20616__$1);
var G__21035 = c__5568__auto__;
var G__21036 = cljs.core.count(c__5568__auto__);
var G__21037 = (0);
seq__20616 = G__21034;
chunk__20618 = G__21035;
count__20619 = G__21036;
i__20620 = G__21037;
continue;
} else {
var path = cljs.core.first(seq__20616__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__20784_21038 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__20788_21039 = null;
var count__20789_21040 = (0);
var i__20790_21041 = (0);
while(true){
if((i__20790_21041 < count__20789_21040)){
var node_21042 = chunk__20788_21039.cljs$core$IIndexed$_nth$arity$2(null,i__20790_21041);
if(cljs.core.not(node_21042.shadow$old)){
var path_match_21043 = shadow.cljs.devtools.client.browser.match_paths(node_21042.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21043)){
var new_link_21044 = (function (){var G__20816 = node_21042.cloneNode(true);
G__20816.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21043),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20816;
})();
(node_21042.shadow$old = true);

(new_link_21044.onload = ((function (seq__20784_21038,chunk__20788_21039,count__20789_21040,i__20790_21041,seq__20616,chunk__20618,count__20619,i__20620,new_link_21044,path_match_21043,node_21042,path,seq__20616__$1,temp__5804__auto__,map__20615,map__20615__$1,msg,updates,reload_info){
return (function (e){
var seq__20817_21045 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20819_21046 = null;
var count__20820_21047 = (0);
var i__20821_21048 = (0);
while(true){
if((i__20821_21048 < count__20820_21047)){
var map__20825_21049 = chunk__20819_21046.cljs$core$IIndexed$_nth$arity$2(null,i__20821_21048);
var map__20825_21050__$1 = cljs.core.__destructure_map(map__20825_21049);
var task_21051 = map__20825_21050__$1;
var fn_str_21052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825_21050__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20825_21050__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21054 = goog.getObjectByName(fn_str_21052,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21053)].join(''));

(fn_obj_21054.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21054.cljs$core$IFn$_invoke$arity$2(path,new_link_21044) : fn_obj_21054.call(null,path,new_link_21044));


var G__21055 = seq__20817_21045;
var G__21056 = chunk__20819_21046;
var G__21057 = count__20820_21047;
var G__21058 = (i__20821_21048 + (1));
seq__20817_21045 = G__21055;
chunk__20819_21046 = G__21056;
count__20820_21047 = G__21057;
i__20821_21048 = G__21058;
continue;
} else {
var temp__5804__auto___21059__$1 = cljs.core.seq(seq__20817_21045);
if(temp__5804__auto___21059__$1){
var seq__20817_21060__$1 = temp__5804__auto___21059__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20817_21060__$1)){
var c__5568__auto___21061 = cljs.core.chunk_first(seq__20817_21060__$1);
var G__21062 = cljs.core.chunk_rest(seq__20817_21060__$1);
var G__21063 = c__5568__auto___21061;
var G__21064 = cljs.core.count(c__5568__auto___21061);
var G__21065 = (0);
seq__20817_21045 = G__21062;
chunk__20819_21046 = G__21063;
count__20820_21047 = G__21064;
i__20821_21048 = G__21065;
continue;
} else {
var map__20826_21066 = cljs.core.first(seq__20817_21060__$1);
var map__20826_21067__$1 = cljs.core.__destructure_map(map__20826_21066);
var task_21068 = map__20826_21067__$1;
var fn_str_21069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20826_21067__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20826_21067__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21071 = goog.getObjectByName(fn_str_21069,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21070)].join(''));

(fn_obj_21071.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21071.cljs$core$IFn$_invoke$arity$2(path,new_link_21044) : fn_obj_21071.call(null,path,new_link_21044));


var G__21072 = cljs.core.next(seq__20817_21060__$1);
var G__21073 = null;
var G__21074 = (0);
var G__21075 = (0);
seq__20817_21045 = G__21072;
chunk__20819_21046 = G__21073;
count__20820_21047 = G__21074;
i__20821_21048 = G__21075;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21042);
});})(seq__20784_21038,chunk__20788_21039,count__20789_21040,i__20790_21041,seq__20616,chunk__20618,count__20619,i__20620,new_link_21044,path_match_21043,node_21042,path,seq__20616__$1,temp__5804__auto__,map__20615,map__20615__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21043], 0));

goog.dom.insertSiblingAfter(new_link_21044,node_21042);


var G__21076 = seq__20784_21038;
var G__21077 = chunk__20788_21039;
var G__21078 = count__20789_21040;
var G__21079 = (i__20790_21041 + (1));
seq__20784_21038 = G__21076;
chunk__20788_21039 = G__21077;
count__20789_21040 = G__21078;
i__20790_21041 = G__21079;
continue;
} else {
var G__21080 = seq__20784_21038;
var G__21081 = chunk__20788_21039;
var G__21082 = count__20789_21040;
var G__21083 = (i__20790_21041 + (1));
seq__20784_21038 = G__21080;
chunk__20788_21039 = G__21081;
count__20789_21040 = G__21082;
i__20790_21041 = G__21083;
continue;
}
} else {
var G__21084 = seq__20784_21038;
var G__21085 = chunk__20788_21039;
var G__21086 = count__20789_21040;
var G__21087 = (i__20790_21041 + (1));
seq__20784_21038 = G__21084;
chunk__20788_21039 = G__21085;
count__20789_21040 = G__21086;
i__20790_21041 = G__21087;
continue;
}
} else {
var temp__5804__auto___21088__$1 = cljs.core.seq(seq__20784_21038);
if(temp__5804__auto___21088__$1){
var seq__20784_21089__$1 = temp__5804__auto___21088__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20784_21089__$1)){
var c__5568__auto___21090 = cljs.core.chunk_first(seq__20784_21089__$1);
var G__21091 = cljs.core.chunk_rest(seq__20784_21089__$1);
var G__21092 = c__5568__auto___21090;
var G__21093 = cljs.core.count(c__5568__auto___21090);
var G__21094 = (0);
seq__20784_21038 = G__21091;
chunk__20788_21039 = G__21092;
count__20789_21040 = G__21093;
i__20790_21041 = G__21094;
continue;
} else {
var node_21095 = cljs.core.first(seq__20784_21089__$1);
if(cljs.core.not(node_21095.shadow$old)){
var path_match_21096 = shadow.cljs.devtools.client.browser.match_paths(node_21095.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21096)){
var new_link_21097 = (function (){var G__20827 = node_21095.cloneNode(true);
G__20827.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21096),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__20827;
})();
(node_21095.shadow$old = true);

(new_link_21097.onload = ((function (seq__20784_21038,chunk__20788_21039,count__20789_21040,i__20790_21041,seq__20616,chunk__20618,count__20619,i__20620,new_link_21097,path_match_21096,node_21095,seq__20784_21089__$1,temp__5804__auto___21088__$1,path,seq__20616__$1,temp__5804__auto__,map__20615,map__20615__$1,msg,updates,reload_info){
return (function (e){
var seq__20828_21098 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__20830_21099 = null;
var count__20831_21100 = (0);
var i__20832_21101 = (0);
while(true){
if((i__20832_21101 < count__20831_21100)){
var map__20836_21102 = chunk__20830_21099.cljs$core$IIndexed$_nth$arity$2(null,i__20832_21101);
var map__20836_21103__$1 = cljs.core.__destructure_map(map__20836_21102);
var task_21104 = map__20836_21103__$1;
var fn_str_21105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836_21103__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20836_21103__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21107 = goog.getObjectByName(fn_str_21105,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21106)].join(''));

(fn_obj_21107.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21107.cljs$core$IFn$_invoke$arity$2(path,new_link_21097) : fn_obj_21107.call(null,path,new_link_21097));


var G__21108 = seq__20828_21098;
var G__21109 = chunk__20830_21099;
var G__21110 = count__20831_21100;
var G__21111 = (i__20832_21101 + (1));
seq__20828_21098 = G__21108;
chunk__20830_21099 = G__21109;
count__20831_21100 = G__21110;
i__20832_21101 = G__21111;
continue;
} else {
var temp__5804__auto___21112__$2 = cljs.core.seq(seq__20828_21098);
if(temp__5804__auto___21112__$2){
var seq__20828_21113__$1 = temp__5804__auto___21112__$2;
if(cljs.core.chunked_seq_QMARK_(seq__20828_21113__$1)){
var c__5568__auto___21114 = cljs.core.chunk_first(seq__20828_21113__$1);
var G__21115 = cljs.core.chunk_rest(seq__20828_21113__$1);
var G__21116 = c__5568__auto___21114;
var G__21117 = cljs.core.count(c__5568__auto___21114);
var G__21118 = (0);
seq__20828_21098 = G__21115;
chunk__20830_21099 = G__21116;
count__20831_21100 = G__21117;
i__20832_21101 = G__21118;
continue;
} else {
var map__20837_21119 = cljs.core.first(seq__20828_21113__$1);
var map__20837_21120__$1 = cljs.core.__destructure_map(map__20837_21119);
var task_21121 = map__20837_21120__$1;
var fn_str_21122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20837_21120__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20837_21120__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21124 = goog.getObjectByName(fn_str_21122,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21123)].join(''));

(fn_obj_21124.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21124.cljs$core$IFn$_invoke$arity$2(path,new_link_21097) : fn_obj_21124.call(null,path,new_link_21097));


var G__21125 = cljs.core.next(seq__20828_21113__$1);
var G__21126 = null;
var G__21127 = (0);
var G__21128 = (0);
seq__20828_21098 = G__21125;
chunk__20830_21099 = G__21126;
count__20831_21100 = G__21127;
i__20832_21101 = G__21128;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21095);
});})(seq__20784_21038,chunk__20788_21039,count__20789_21040,i__20790_21041,seq__20616,chunk__20618,count__20619,i__20620,new_link_21097,path_match_21096,node_21095,seq__20784_21089__$1,temp__5804__auto___21088__$1,path,seq__20616__$1,temp__5804__auto__,map__20615,map__20615__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21096], 0));

goog.dom.insertSiblingAfter(new_link_21097,node_21095);


var G__21129 = cljs.core.next(seq__20784_21089__$1);
var G__21130 = null;
var G__21131 = (0);
var G__21132 = (0);
seq__20784_21038 = G__21129;
chunk__20788_21039 = G__21130;
count__20789_21040 = G__21131;
i__20790_21041 = G__21132;
continue;
} else {
var G__21133 = cljs.core.next(seq__20784_21089__$1);
var G__21134 = null;
var G__21135 = (0);
var G__21136 = (0);
seq__20784_21038 = G__21133;
chunk__20788_21039 = G__21134;
count__20789_21040 = G__21135;
i__20790_21041 = G__21136;
continue;
}
} else {
var G__21137 = cljs.core.next(seq__20784_21089__$1);
var G__21138 = null;
var G__21139 = (0);
var G__21140 = (0);
seq__20784_21038 = G__21137;
chunk__20788_21039 = G__21138;
count__20789_21040 = G__21139;
i__20790_21041 = G__21140;
continue;
}
}
} else {
}
}
break;
}


var G__21141 = cljs.core.next(seq__20616__$1);
var G__21142 = null;
var G__21143 = (0);
var G__21144 = (0);
seq__20616 = G__21141;
chunk__20618 = G__21142;
count__20619 = G__21143;
i__20620 = G__21144;
continue;
} else {
var G__21145 = cljs.core.next(seq__20616__$1);
var G__21146 = null;
var G__21147 = (0);
var G__21148 = (0);
seq__20616 = G__21145;
chunk__20618 = G__21146;
count__20619 = G__21147;
i__20620 = G__21148;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__20838){
var map__20839 = p__20838;
var map__20839__$1 = cljs.core.__destructure_map(map__20839);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20839__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__20840,done,error){
var map__20841 = p__20840;
var map__20841__$1 = cljs.core.__destructure_map(map__20841);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20841__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__20842,done,error){
var map__20843 = p__20842;
var map__20843__$1 = cljs.core.__destructure_map(map__20843);
var msg = map__20843__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__20844){
var map__20845 = p__20844;
var map__20845__$1 = cljs.core.__destructure_map(map__20845);
var src = map__20845__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20845__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__20846 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20846) : done.call(null,G__20846));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__20847){
var map__20848 = p__20847;
var map__20848__$1 = cljs.core.__destructure_map(map__20848);
var msg__$1 = map__20848__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20848__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e20849){var ex = e20849;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__20850){
var map__20851 = p__20850;
var map__20851__$1 = cljs.core.__destructure_map(map__20851);
var env = map__20851__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20851__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__20852){
var map__20853 = p__20852;
var map__20853__$1 = cljs.core.__destructure_map(map__20853);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20853__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20853__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__20854){
var map__20855 = p__20854;
var map__20855__$1 = cljs.core.__destructure_map(map__20855);
var svc = map__20855__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
