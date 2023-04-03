goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14335 = (function (f,blockable,meta14336){
this.f = f;
this.blockable = blockable;
this.meta14336 = meta14336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14337,meta14336__$1){
var self__ = this;
var _14337__$1 = this;
return (new cljs.core.async.t_cljs$core$async14335(self__.f,self__.blockable,meta14336__$1));
}));

(cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14337){
var self__ = this;
var _14337__$1 = this;
return self__.meta14336;
}));

(cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14336","meta14336",478001935,null)], null);
}));

(cljs.core.async.t_cljs$core$async14335.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14335");

(cljs.core.async.t_cljs$core$async14335.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14335");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14335.
 */
cljs.core.async.__GT_t_cljs$core$async14335 = (function cljs$core$async$__GT_t_cljs$core$async14335(f,blockable,meta14336){
return (new cljs.core.async.t_cljs$core$async14335(f,blockable,meta14336));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14331 = arguments.length;
switch (G__14331) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14335(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14362 = arguments.length;
switch (G__14362) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14377 = arguments.length;
switch (G__14377) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14385 = arguments.length;
switch (G__14385) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17543 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17543) : fn1.call(null,val_17543));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17543) : fn1.call(null,val_17543));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14396 = arguments.length;
switch (G__14396) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17545 = n;
var x_17546 = (0);
while(true){
if((x_17546 < n__5636__auto___17545)){
(a[x_17546] = x_17546);

var G__17547 = (x_17546 + (1));
x_17546 = G__17547;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14403 = (function (flag,meta14404){
this.flag = flag;
this.meta14404 = meta14404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14405,meta14404__$1){
var self__ = this;
var _14405__$1 = this;
return (new cljs.core.async.t_cljs$core$async14403(self__.flag,meta14404__$1));
}));

(cljs.core.async.t_cljs$core$async14403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14405){
var self__ = this;
var _14405__$1 = this;
return self__.meta14404;
}));

(cljs.core.async.t_cljs$core$async14403.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14403.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14404","meta14404",-1444863794,null)], null);
}));

(cljs.core.async.t_cljs$core$async14403.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14403");

(cljs.core.async.t_cljs$core$async14403.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14403");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14403.
 */
cljs.core.async.__GT_t_cljs$core$async14403 = (function cljs$core$async$__GT_t_cljs$core$async14403(flag,meta14404){
return (new cljs.core.async.t_cljs$core$async14403(flag,meta14404));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14403(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14421 = (function (flag,cb,meta14422){
this.flag = flag;
this.cb = cb;
this.meta14422 = meta14422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14423,meta14422__$1){
var self__ = this;
var _14423__$1 = this;
return (new cljs.core.async.t_cljs$core$async14421(self__.flag,self__.cb,meta14422__$1));
}));

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14423){
var self__ = this;
var _14423__$1 = this;
return self__.meta14422;
}));

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14422","meta14422",1963335004,null)], null);
}));

(cljs.core.async.t_cljs$core$async14421.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14421");

(cljs.core.async.t_cljs$core$async14421.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14421");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14421.
 */
cljs.core.async.__GT_t_cljs$core$async14421 = (function cljs$core$async$__GT_t_cljs$core$async14421(flag,cb,meta14422){
return (new cljs.core.async.t_cljs$core$async14421(flag,cb,meta14422));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14421(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14431_SHARP_){
var G__14438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14431_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14438) : fret.call(null,G__14438));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14433_SHARP_){
var G__14439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14433_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14439) : fret.call(null,G__14439));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17557 = (i + (1));
i = G__17557;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17558 = arguments.length;
var i__5770__auto___17559 = (0);
while(true){
if((i__5770__auto___17559 < len__5769__auto___17558)){
args__5775__auto__.push((arguments[i__5770__auto___17559]));

var G__17560 = (i__5770__auto___17559 + (1));
i__5770__auto___17559 = G__17560;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14453){
var map__14454 = p__14453;
var map__14454__$1 = cljs.core.__destructure_map(map__14454);
var opts = map__14454__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14445){
var G__14447 = cljs.core.first(seq14445);
var seq14445__$1 = cljs.core.next(seq14445);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14447,seq14445__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14464 = arguments.length;
switch (G__14464) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14230__auto___17562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_14509){
var state_val_14511 = (state_14509[(1)]);
if((state_val_14511 === (7))){
var inst_14499 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
var statearr_14520_17563 = state_14509__$1;
(statearr_14520_17563[(2)] = inst_14499);

(statearr_14520_17563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (1))){
var state_14509__$1 = state_14509;
var statearr_14521_17564 = state_14509__$1;
(statearr_14521_17564[(2)] = null);

(statearr_14521_17564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (4))){
var inst_14477 = (state_14509[(7)]);
var inst_14477__$1 = (state_14509[(2)]);
var inst_14481 = (inst_14477__$1 == null);
var state_14509__$1 = (function (){var statearr_14524 = state_14509;
(statearr_14524[(7)] = inst_14477__$1);

return statearr_14524;
})();
if(cljs.core.truth_(inst_14481)){
var statearr_14525_17565 = state_14509__$1;
(statearr_14525_17565[(1)] = (5));

} else {
var statearr_14526_17566 = state_14509__$1;
(statearr_14526_17566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (13))){
var state_14509__$1 = state_14509;
var statearr_14531_17567 = state_14509__$1;
(statearr_14531_17567[(2)] = null);

(statearr_14531_17567[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (6))){
var inst_14477 = (state_14509[(7)]);
var state_14509__$1 = state_14509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14509__$1,(11),to,inst_14477);
} else {
if((state_val_14511 === (3))){
var inst_14501 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14509__$1,inst_14501);
} else {
if((state_val_14511 === (12))){
var state_14509__$1 = state_14509;
var statearr_14534_17572 = state_14509__$1;
(statearr_14534_17572[(2)] = null);

(statearr_14534_17572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (2))){
var state_14509__$1 = state_14509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14509__$1,(4),from);
} else {
if((state_val_14511 === (11))){
var inst_14491 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
if(cljs.core.truth_(inst_14491)){
var statearr_14535_17576 = state_14509__$1;
(statearr_14535_17576[(1)] = (12));

} else {
var statearr_14536_17577 = state_14509__$1;
(statearr_14536_17577[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (9))){
var state_14509__$1 = state_14509;
var statearr_14537_17578 = state_14509__$1;
(statearr_14537_17578[(2)] = null);

(statearr_14537_17578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (5))){
var state_14509__$1 = state_14509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14538_17579 = state_14509__$1;
(statearr_14538_17579[(1)] = (8));

} else {
var statearr_14539_17580 = state_14509__$1;
(statearr_14539_17580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (14))){
var inst_14497 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
var statearr_14541_17581 = state_14509__$1;
(statearr_14541_17581[(2)] = inst_14497);

(statearr_14541_17581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (10))){
var inst_14488 = (state_14509[(2)]);
var state_14509__$1 = state_14509;
var statearr_14542_17582 = state_14509__$1;
(statearr_14542_17582[(2)] = inst_14488);

(statearr_14542_17582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14511 === (8))){
var inst_14484 = cljs.core.async.close_BANG_(to);
var state_14509__$1 = state_14509;
var statearr_14544_17586 = state_14509__$1;
(statearr_14544_17586[(2)] = inst_14484);

(statearr_14544_17586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13159__auto__ = null;
var cljs$core$async$state_machine__13159__auto____0 = (function (){
var statearr_14546 = [null,null,null,null,null,null,null,null];
(statearr_14546[(0)] = cljs$core$async$state_machine__13159__auto__);

(statearr_14546[(1)] = (1));

return statearr_14546;
});
var cljs$core$async$state_machine__13159__auto____1 = (function (state_14509){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_14509);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e14547){var ex__13162__auto__ = e14547;
var statearr_14548_17587 = state_14509;
(statearr_14548_17587[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_14509[(4)]))){
var statearr_14549_17588 = state_14509;
(statearr_14549_17588[(1)] = cljs.core.first((state_14509[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17589 = state_14509;
state_14509 = G__17589;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$state_machine__13159__auto__ = function(state_14509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13159__auto____1.call(this,state_14509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13159__auto____0;
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13159__auto____1;
return cljs$core$async$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_14550 = f__14231__auto__();
(statearr_14550[(6)] = c__14230__auto___17562);

return statearr_14550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14558){
var vec__14559 = p__14558;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14559,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14559,(1),null);
var job = vec__14559;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14230__auto___17590 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_14567){
var state_val_14568 = (state_14567[(1)]);
if((state_val_14568 === (1))){
var state_14567__$1 = state_14567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14567__$1,(2),res,v);
} else {
if((state_val_14568 === (2))){
var inst_14564 = (state_14567[(2)]);
var inst_14565 = cljs.core.async.close_BANG_(res);
var state_14567__$1 = (function (){var statearr_14569 = state_14567;
(statearr_14569[(7)] = inst_14564);

return statearr_14569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14567__$1,inst_14565);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0 = (function (){
var statearr_14571 = [null,null,null,null,null,null,null,null];
(statearr_14571[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__);

(statearr_14571[(1)] = (1));

return statearr_14571;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1 = (function (state_14567){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_14567);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e14573){var ex__13162__auto__ = e14573;
var statearr_14574_17591 = state_14567;
(statearr_14574_17591[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_14567[(4)]))){
var statearr_14575_17592 = state_14567;
(statearr_14575_17592[(1)] = cljs.core.first((state_14567[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17595 = state_14567;
state_14567 = G__17595;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__ = function(state_14567){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1.call(this,state_14567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_14576 = f__14231__auto__();
(statearr_14576[(6)] = c__14230__auto___17590);

return statearr_14576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14577){
var vec__14579 = p__14577;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14579,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14579,(1),null);
var job = vec__14579;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17597 = n;
var __17598 = (0);
while(true){
if((__17598 < n__5636__auto___17597)){
var G__14592_17599 = type;
var G__14592_17600__$1 = (((G__14592_17599 instanceof cljs.core.Keyword))?G__14592_17599.fqn:null);
switch (G__14592_17600__$1) {
case "compute":
var c__14230__auto___17602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17598,c__14230__auto___17602,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async){
return (function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = ((function (__17598,c__14230__auto___17602,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async){
return (function (state_14606){
var state_val_14607 = (state_14606[(1)]);
if((state_val_14607 === (1))){
var state_14606__$1 = state_14606;
var statearr_14611_17603 = state_14606__$1;
(statearr_14611_17603[(2)] = null);

(statearr_14611_17603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (2))){
var state_14606__$1 = state_14606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14606__$1,(4),jobs);
} else {
if((state_val_14607 === (3))){
var inst_14604 = (state_14606[(2)]);
var state_14606__$1 = state_14606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14606__$1,inst_14604);
} else {
if((state_val_14607 === (4))){
var inst_14596 = (state_14606[(2)]);
var inst_14597 = process__$1(inst_14596);
var state_14606__$1 = state_14606;
if(cljs.core.truth_(inst_14597)){
var statearr_14617_17604 = state_14606__$1;
(statearr_14617_17604[(1)] = (5));

} else {
var statearr_14618_17605 = state_14606__$1;
(statearr_14618_17605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (5))){
var state_14606__$1 = state_14606;
var statearr_14619_17606 = state_14606__$1;
(statearr_14619_17606[(2)] = null);

(statearr_14619_17606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (6))){
var state_14606__$1 = state_14606;
var statearr_14620_17607 = state_14606__$1;
(statearr_14620_17607[(2)] = null);

(statearr_14620_17607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (7))){
var inst_14602 = (state_14606[(2)]);
var state_14606__$1 = state_14606;
var statearr_14621_17608 = state_14606__$1;
(statearr_14621_17608[(2)] = inst_14602);

(statearr_14621_17608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17598,c__14230__auto___17602,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async))
;
return ((function (__17598,switch__13158__auto__,c__14230__auto___17602,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0 = (function (){
var statearr_14623 = [null,null,null,null,null,null,null];
(statearr_14623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__);

(statearr_14623[(1)] = (1));

return statearr_14623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1 = (function (state_14606){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_14606);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e14626){var ex__13162__auto__ = e14626;
var statearr_14627_17609 = state_14606;
(statearr_14627_17609[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_14606[(4)]))){
var statearr_14628_17610 = state_14606;
(statearr_14628_17610[(1)] = cljs.core.first((state_14606[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17611 = state_14606;
state_14606 = G__17611;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__ = function(state_14606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1.call(this,state_14606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__;
})()
;})(__17598,switch__13158__auto__,c__14230__auto___17602,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async))
})();
var state__14232__auto__ = (function (){var statearr_14629 = f__14231__auto__();
(statearr_14629[(6)] = c__14230__auto___17602);

return statearr_14629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
});})(__17598,c__14230__auto___17602,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async))
);


break;
case "async":
var c__14230__auto___17612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17598,c__14230__auto___17612,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async){
return (function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = ((function (__17598,c__14230__auto___17612,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async){
return (function (state_14642){
var state_val_14643 = (state_14642[(1)]);
if((state_val_14643 === (1))){
var state_14642__$1 = state_14642;
var statearr_14645_17613 = state_14642__$1;
(statearr_14645_17613[(2)] = null);

(statearr_14645_17613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14643 === (2))){
var state_14642__$1 = state_14642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14642__$1,(4),jobs);
} else {
if((state_val_14643 === (3))){
var inst_14640 = (state_14642[(2)]);
var state_14642__$1 = state_14642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14642__$1,inst_14640);
} else {
if((state_val_14643 === (4))){
var inst_14632 = (state_14642[(2)]);
var inst_14633 = async(inst_14632);
var state_14642__$1 = state_14642;
if(cljs.core.truth_(inst_14633)){
var statearr_14652_17614 = state_14642__$1;
(statearr_14652_17614[(1)] = (5));

} else {
var statearr_14654_17615 = state_14642__$1;
(statearr_14654_17615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14643 === (5))){
var state_14642__$1 = state_14642;
var statearr_14657_17616 = state_14642__$1;
(statearr_14657_17616[(2)] = null);

(statearr_14657_17616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14643 === (6))){
var state_14642__$1 = state_14642;
var statearr_14663_17617 = state_14642__$1;
(statearr_14663_17617[(2)] = null);

(statearr_14663_17617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14643 === (7))){
var inst_14638 = (state_14642[(2)]);
var state_14642__$1 = state_14642;
var statearr_14665_17618 = state_14642__$1;
(statearr_14665_17618[(2)] = inst_14638);

(statearr_14665_17618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17598,c__14230__auto___17612,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async))
;
return ((function (__17598,switch__13158__auto__,c__14230__auto___17612,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0 = (function (){
var statearr_14666 = [null,null,null,null,null,null,null];
(statearr_14666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__);

(statearr_14666[(1)] = (1));

return statearr_14666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1 = (function (state_14642){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_14642);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e14667){var ex__13162__auto__ = e14667;
var statearr_14668_17619 = state_14642;
(statearr_14668_17619[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_14642[(4)]))){
var statearr_14669_17620 = state_14642;
(statearr_14669_17620[(1)] = cljs.core.first((state_14642[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17621 = state_14642;
state_14642 = G__17621;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__ = function(state_14642){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1.call(this,state_14642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__;
})()
;})(__17598,switch__13158__auto__,c__14230__auto___17612,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async))
})();
var state__14232__auto__ = (function (){var statearr_14670 = f__14231__auto__();
(statearr_14670[(6)] = c__14230__auto___17612);

return statearr_14670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
});})(__17598,c__14230__auto___17612,G__14592_17599,G__14592_17600__$1,n__5636__auto___17597,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14592_17600__$1)].join('')));

}

var G__17622 = (__17598 + (1));
__17598 = G__17622;
continue;
} else {
}
break;
}

var c__14230__auto___17623 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_14694){
var state_val_14695 = (state_14694[(1)]);
if((state_val_14695 === (7))){
var inst_14690 = (state_14694[(2)]);
var state_14694__$1 = state_14694;
var statearr_14704_17627 = state_14694__$1;
(statearr_14704_17627[(2)] = inst_14690);

(statearr_14704_17627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (1))){
var state_14694__$1 = state_14694;
var statearr_14705_17628 = state_14694__$1;
(statearr_14705_17628[(2)] = null);

(statearr_14705_17628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (4))){
var inst_14674 = (state_14694[(7)]);
var inst_14674__$1 = (state_14694[(2)]);
var inst_14675 = (inst_14674__$1 == null);
var state_14694__$1 = (function (){var statearr_14707 = state_14694;
(statearr_14707[(7)] = inst_14674__$1);

return statearr_14707;
})();
if(cljs.core.truth_(inst_14675)){
var statearr_14708_17629 = state_14694__$1;
(statearr_14708_17629[(1)] = (5));

} else {
var statearr_14709_17630 = state_14694__$1;
(statearr_14709_17630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (6))){
var inst_14674 = (state_14694[(7)]);
var inst_14679 = (state_14694[(8)]);
var inst_14679__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14681 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14682 = [inst_14674,inst_14679__$1];
var inst_14683 = (new cljs.core.PersistentVector(null,2,(5),inst_14681,inst_14682,null));
var state_14694__$1 = (function (){var statearr_14710 = state_14694;
(statearr_14710[(8)] = inst_14679__$1);

return statearr_14710;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14694__$1,(8),jobs,inst_14683);
} else {
if((state_val_14695 === (3))){
var inst_14692 = (state_14694[(2)]);
var state_14694__$1 = state_14694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14694__$1,inst_14692);
} else {
if((state_val_14695 === (2))){
var state_14694__$1 = state_14694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14694__$1,(4),from);
} else {
if((state_val_14695 === (9))){
var inst_14687 = (state_14694[(2)]);
var state_14694__$1 = (function (){var statearr_14712 = state_14694;
(statearr_14712[(9)] = inst_14687);

return statearr_14712;
})();
var statearr_14713_17640 = state_14694__$1;
(statearr_14713_17640[(2)] = null);

(statearr_14713_17640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (5))){
var inst_14677 = cljs.core.async.close_BANG_(jobs);
var state_14694__$1 = state_14694;
var statearr_14718_17641 = state_14694__$1;
(statearr_14718_17641[(2)] = inst_14677);

(statearr_14718_17641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14695 === (8))){
var inst_14679 = (state_14694[(8)]);
var inst_14685 = (state_14694[(2)]);
var state_14694__$1 = (function (){var statearr_14719 = state_14694;
(statearr_14719[(10)] = inst_14685);

return statearr_14719;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14694__$1,(9),results,inst_14679);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0 = (function (){
var statearr_14728 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__);

(statearr_14728[(1)] = (1));

return statearr_14728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1 = (function (state_14694){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_14694);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e14733){var ex__13162__auto__ = e14733;
var statearr_14736_17642 = state_14694;
(statearr_14736_17642[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_14694[(4)]))){
var statearr_14738_17643 = state_14694;
(statearr_14738_17643[(1)] = cljs.core.first((state_14694[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17644 = state_14694;
state_14694 = G__17644;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__ = function(state_14694){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1.call(this,state_14694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_14743 = f__14231__auto__();
(statearr_14743[(6)] = c__14230__auto___17623);

return statearr_14743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


var c__14230__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_14788){
var state_val_14789 = (state_14788[(1)]);
if((state_val_14789 === (7))){
var inst_14782 = (state_14788[(2)]);
var state_14788__$1 = state_14788;
var statearr_14796_17645 = state_14788__$1;
(statearr_14796_17645[(2)] = inst_14782);

(statearr_14796_17645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (20))){
var state_14788__$1 = state_14788;
var statearr_14797_17646 = state_14788__$1;
(statearr_14797_17646[(2)] = null);

(statearr_14797_17646[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (1))){
var state_14788__$1 = state_14788;
var statearr_14799_17647 = state_14788__$1;
(statearr_14799_17647[(2)] = null);

(statearr_14799_17647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (4))){
var inst_14750 = (state_14788[(7)]);
var inst_14750__$1 = (state_14788[(2)]);
var inst_14752 = (inst_14750__$1 == null);
var state_14788__$1 = (function (){var statearr_14803 = state_14788;
(statearr_14803[(7)] = inst_14750__$1);

return statearr_14803;
})();
if(cljs.core.truth_(inst_14752)){
var statearr_14806_17649 = state_14788__$1;
(statearr_14806_17649[(1)] = (5));

} else {
var statearr_14807_17650 = state_14788__$1;
(statearr_14807_17650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (15))){
var inst_14764 = (state_14788[(8)]);
var state_14788__$1 = state_14788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14788__$1,(18),to,inst_14764);
} else {
if((state_val_14789 === (21))){
var inst_14777 = (state_14788[(2)]);
var state_14788__$1 = state_14788;
var statearr_14810_17651 = state_14788__$1;
(statearr_14810_17651[(2)] = inst_14777);

(statearr_14810_17651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (13))){
var inst_14779 = (state_14788[(2)]);
var state_14788__$1 = (function (){var statearr_14814 = state_14788;
(statearr_14814[(9)] = inst_14779);

return statearr_14814;
})();
var statearr_14815_17652 = state_14788__$1;
(statearr_14815_17652[(2)] = null);

(statearr_14815_17652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (6))){
var inst_14750 = (state_14788[(7)]);
var state_14788__$1 = state_14788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14788__$1,(11),inst_14750);
} else {
if((state_val_14789 === (17))){
var inst_14772 = (state_14788[(2)]);
var state_14788__$1 = state_14788;
if(cljs.core.truth_(inst_14772)){
var statearr_14817_17653 = state_14788__$1;
(statearr_14817_17653[(1)] = (19));

} else {
var statearr_14819_17655 = state_14788__$1;
(statearr_14819_17655[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (3))){
var inst_14784 = (state_14788[(2)]);
var state_14788__$1 = state_14788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14788__$1,inst_14784);
} else {
if((state_val_14789 === (12))){
var inst_14761 = (state_14788[(10)]);
var state_14788__$1 = state_14788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14788__$1,(14),inst_14761);
} else {
if((state_val_14789 === (2))){
var state_14788__$1 = state_14788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14788__$1,(4),results);
} else {
if((state_val_14789 === (19))){
var state_14788__$1 = state_14788;
var statearr_14836_17657 = state_14788__$1;
(statearr_14836_17657[(2)] = null);

(statearr_14836_17657[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (11))){
var inst_14761 = (state_14788[(2)]);
var state_14788__$1 = (function (){var statearr_14839 = state_14788;
(statearr_14839[(10)] = inst_14761);

return statearr_14839;
})();
var statearr_14843_17658 = state_14788__$1;
(statearr_14843_17658[(2)] = null);

(statearr_14843_17658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (9))){
var state_14788__$1 = state_14788;
var statearr_14844_17659 = state_14788__$1;
(statearr_14844_17659[(2)] = null);

(statearr_14844_17659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (5))){
var state_14788__$1 = state_14788;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14846_17660 = state_14788__$1;
(statearr_14846_17660[(1)] = (8));

} else {
var statearr_14848_17661 = state_14788__$1;
(statearr_14848_17661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (14))){
var inst_14764 = (state_14788[(8)]);
var inst_14766 = (state_14788[(11)]);
var inst_14764__$1 = (state_14788[(2)]);
var inst_14765 = (inst_14764__$1 == null);
var inst_14766__$1 = cljs.core.not(inst_14765);
var state_14788__$1 = (function (){var statearr_14853 = state_14788;
(statearr_14853[(8)] = inst_14764__$1);

(statearr_14853[(11)] = inst_14766__$1);

return statearr_14853;
})();
if(inst_14766__$1){
var statearr_14857_17662 = state_14788__$1;
(statearr_14857_17662[(1)] = (15));

} else {
var statearr_14858_17663 = state_14788__$1;
(statearr_14858_17663[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (16))){
var inst_14766 = (state_14788[(11)]);
var state_14788__$1 = state_14788;
var statearr_14860_17664 = state_14788__$1;
(statearr_14860_17664[(2)] = inst_14766);

(statearr_14860_17664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (10))){
var inst_14758 = (state_14788[(2)]);
var state_14788__$1 = state_14788;
var statearr_14866_17666 = state_14788__$1;
(statearr_14866_17666[(2)] = inst_14758);

(statearr_14866_17666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (18))){
var inst_14769 = (state_14788[(2)]);
var state_14788__$1 = state_14788;
var statearr_14867_17668 = state_14788__$1;
(statearr_14867_17668[(2)] = inst_14769);

(statearr_14867_17668[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14789 === (8))){
var inst_14755 = cljs.core.async.close_BANG_(to);
var state_14788__$1 = state_14788;
var statearr_14872_17669 = state_14788__$1;
(statearr_14872_17669[(2)] = inst_14755);

(statearr_14872_17669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0 = (function (){
var statearr_14880 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14880[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__);

(statearr_14880[(1)] = (1));

return statearr_14880;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1 = (function (state_14788){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_14788);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e14887){var ex__13162__auto__ = e14887;
var statearr_14889_17670 = state_14788;
(statearr_14889_17670[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_14788[(4)]))){
var statearr_14890_17675 = state_14788;
(statearr_14890_17675[(1)] = cljs.core.first((state_14788[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17679 = state_14788;
state_14788 = G__17679;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__ = function(state_14788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1.call(this,state_14788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13159__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_14892 = f__14231__auto__();
(statearr_14892[(6)] = c__14230__auto__);

return statearr_14892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));

return c__14230__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14902 = arguments.length;
switch (G__14902) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14925 = arguments.length;
switch (G__14925) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14952 = arguments.length;
switch (G__14952) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14230__auto___17689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_14989){
var state_val_14991 = (state_14989[(1)]);
if((state_val_14991 === (7))){
var inst_14984 = (state_14989[(2)]);
var state_14989__$1 = state_14989;
var statearr_14994_17690 = state_14989__$1;
(statearr_14994_17690[(2)] = inst_14984);

(statearr_14994_17690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (1))){
var state_14989__$1 = state_14989;
var statearr_14998_17691 = state_14989__$1;
(statearr_14998_17691[(2)] = null);

(statearr_14998_17691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (4))){
var inst_14964 = (state_14989[(7)]);
var inst_14964__$1 = (state_14989[(2)]);
var inst_14965 = (inst_14964__$1 == null);
var state_14989__$1 = (function (){var statearr_15001 = state_14989;
(statearr_15001[(7)] = inst_14964__$1);

return statearr_15001;
})();
if(cljs.core.truth_(inst_14965)){
var statearr_15002_17692 = state_14989__$1;
(statearr_15002_17692[(1)] = (5));

} else {
var statearr_15005_17693 = state_14989__$1;
(statearr_15005_17693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (13))){
var state_14989__$1 = state_14989;
var statearr_15009_17694 = state_14989__$1;
(statearr_15009_17694[(2)] = null);

(statearr_15009_17694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (6))){
var inst_14964 = (state_14989[(7)]);
var inst_14971 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14964) : p.call(null,inst_14964));
var state_14989__$1 = state_14989;
if(cljs.core.truth_(inst_14971)){
var statearr_15015_17695 = state_14989__$1;
(statearr_15015_17695[(1)] = (9));

} else {
var statearr_15018_17696 = state_14989__$1;
(statearr_15018_17696[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (3))){
var inst_14986 = (state_14989[(2)]);
var state_14989__$1 = state_14989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14989__$1,inst_14986);
} else {
if((state_val_14991 === (12))){
var state_14989__$1 = state_14989;
var statearr_15024_17697 = state_14989__$1;
(statearr_15024_17697[(2)] = null);

(statearr_15024_17697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (2))){
var state_14989__$1 = state_14989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14989__$1,(4),ch);
} else {
if((state_val_14991 === (11))){
var inst_14964 = (state_14989[(7)]);
var inst_14975 = (state_14989[(2)]);
var state_14989__$1 = state_14989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14989__$1,(8),inst_14975,inst_14964);
} else {
if((state_val_14991 === (9))){
var state_14989__$1 = state_14989;
var statearr_15034_17699 = state_14989__$1;
(statearr_15034_17699[(2)] = tc);

(statearr_15034_17699[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (5))){
var inst_14967 = cljs.core.async.close_BANG_(tc);
var inst_14969 = cljs.core.async.close_BANG_(fc);
var state_14989__$1 = (function (){var statearr_15043 = state_14989;
(statearr_15043[(8)] = inst_14967);

return statearr_15043;
})();
var statearr_15044_17704 = state_14989__$1;
(statearr_15044_17704[(2)] = inst_14969);

(statearr_15044_17704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (14))){
var inst_14982 = (state_14989[(2)]);
var state_14989__$1 = state_14989;
var statearr_15048_17706 = state_14989__$1;
(statearr_15048_17706[(2)] = inst_14982);

(statearr_15048_17706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (10))){
var state_14989__$1 = state_14989;
var statearr_15050_17707 = state_14989__$1;
(statearr_15050_17707[(2)] = fc);

(statearr_15050_17707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14991 === (8))){
var inst_14977 = (state_14989[(2)]);
var state_14989__$1 = state_14989;
if(cljs.core.truth_(inst_14977)){
var statearr_15051_17708 = state_14989__$1;
(statearr_15051_17708[(1)] = (12));

} else {
var statearr_15053_17709 = state_14989__$1;
(statearr_15053_17709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13159__auto__ = null;
var cljs$core$async$state_machine__13159__auto____0 = (function (){
var statearr_15058 = [null,null,null,null,null,null,null,null,null];
(statearr_15058[(0)] = cljs$core$async$state_machine__13159__auto__);

(statearr_15058[(1)] = (1));

return statearr_15058;
});
var cljs$core$async$state_machine__13159__auto____1 = (function (state_14989){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_14989);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e15060){var ex__13162__auto__ = e15060;
var statearr_15061_17710 = state_14989;
(statearr_15061_17710[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_14989[(4)]))){
var statearr_15063_17711 = state_14989;
(statearr_15063_17711[(1)] = cljs.core.first((state_14989[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17712 = state_14989;
state_14989 = G__17712;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$state_machine__13159__auto__ = function(state_14989){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13159__auto____1.call(this,state_14989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13159__auto____0;
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13159__auto____1;
return cljs$core$async$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_15067 = f__14231__auto__();
(statearr_15067[(6)] = c__14230__auto___17689);

return statearr_15067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14230__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_15103){
var state_val_15104 = (state_15103[(1)]);
if((state_val_15104 === (7))){
var inst_15097 = (state_15103[(2)]);
var state_15103__$1 = state_15103;
var statearr_15116_17713 = state_15103__$1;
(statearr_15116_17713[(2)] = inst_15097);

(statearr_15116_17713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15104 === (1))){
var inst_15079 = init;
var inst_15080 = inst_15079;
var state_15103__$1 = (function (){var statearr_15118 = state_15103;
(statearr_15118[(7)] = inst_15080);

return statearr_15118;
})();
var statearr_15121_17714 = state_15103__$1;
(statearr_15121_17714[(2)] = null);

(statearr_15121_17714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15104 === (4))){
var inst_15083 = (state_15103[(8)]);
var inst_15083__$1 = (state_15103[(2)]);
var inst_15084 = (inst_15083__$1 == null);
var state_15103__$1 = (function (){var statearr_15124 = state_15103;
(statearr_15124[(8)] = inst_15083__$1);

return statearr_15124;
})();
if(cljs.core.truth_(inst_15084)){
var statearr_15126_17716 = state_15103__$1;
(statearr_15126_17716[(1)] = (5));

} else {
var statearr_15127_17718 = state_15103__$1;
(statearr_15127_17718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15104 === (6))){
var inst_15088 = (state_15103[(9)]);
var inst_15080 = (state_15103[(7)]);
var inst_15083 = (state_15103[(8)]);
var inst_15088__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15080,inst_15083) : f.call(null,inst_15080,inst_15083));
var inst_15089 = cljs.core.reduced_QMARK_(inst_15088__$1);
var state_15103__$1 = (function (){var statearr_15131 = state_15103;
(statearr_15131[(9)] = inst_15088__$1);

return statearr_15131;
})();
if(inst_15089){
var statearr_15132_17723 = state_15103__$1;
(statearr_15132_17723[(1)] = (8));

} else {
var statearr_15134_17724 = state_15103__$1;
(statearr_15134_17724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15104 === (3))){
var inst_15099 = (state_15103[(2)]);
var state_15103__$1 = state_15103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15103__$1,inst_15099);
} else {
if((state_val_15104 === (2))){
var state_15103__$1 = state_15103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15103__$1,(4),ch);
} else {
if((state_val_15104 === (9))){
var inst_15088 = (state_15103[(9)]);
var inst_15080 = inst_15088;
var state_15103__$1 = (function (){var statearr_15142 = state_15103;
(statearr_15142[(7)] = inst_15080);

return statearr_15142;
})();
var statearr_15144_17729 = state_15103__$1;
(statearr_15144_17729[(2)] = null);

(statearr_15144_17729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15104 === (5))){
var inst_15080 = (state_15103[(7)]);
var state_15103__$1 = state_15103;
var statearr_15149_17730 = state_15103__$1;
(statearr_15149_17730[(2)] = inst_15080);

(statearr_15149_17730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15104 === (10))){
var inst_15095 = (state_15103[(2)]);
var state_15103__$1 = state_15103;
var statearr_15151_17735 = state_15103__$1;
(statearr_15151_17735[(2)] = inst_15095);

(statearr_15151_17735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15104 === (8))){
var inst_15088 = (state_15103[(9)]);
var inst_15091 = cljs.core.deref(inst_15088);
var state_15103__$1 = state_15103;
var statearr_15157_17736 = state_15103__$1;
(statearr_15157_17736[(2)] = inst_15091);

(statearr_15157_17736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13159__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13159__auto____0 = (function (){
var statearr_15160 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15160[(0)] = cljs$core$async$reduce_$_state_machine__13159__auto__);

(statearr_15160[(1)] = (1));

return statearr_15160;
});
var cljs$core$async$reduce_$_state_machine__13159__auto____1 = (function (state_15103){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_15103);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e15164){var ex__13162__auto__ = e15164;
var statearr_15165_17737 = state_15103;
(statearr_15165_17737[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_15103[(4)]))){
var statearr_15169_17738 = state_15103;
(statearr_15169_17738[(1)] = cljs.core.first((state_15103[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17739 = state_15103;
state_15103 = G__17739;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13159__auto__ = function(state_15103){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13159__auto____1.call(this,state_15103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13159__auto____0;
cljs$core$async$reduce_$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13159__auto____1;
return cljs$core$async$reduce_$_state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_15174 = f__14231__auto__();
(statearr_15174[(6)] = c__14230__auto__);

return statearr_15174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));

return c__14230__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14230__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_15185){
var state_val_15186 = (state_15185[(1)]);
if((state_val_15186 === (1))){
var inst_15179 = cljs.core.async.reduce(f__$1,init,ch);
var state_15185__$1 = state_15185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15185__$1,(2),inst_15179);
} else {
if((state_val_15186 === (2))){
var inst_15181 = (state_15185[(2)]);
var inst_15182 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15181) : f__$1.call(null,inst_15181));
var state_15185__$1 = state_15185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15185__$1,inst_15182);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13159__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13159__auto____0 = (function (){
var statearr_15193 = [null,null,null,null,null,null,null];
(statearr_15193[(0)] = cljs$core$async$transduce_$_state_machine__13159__auto__);

(statearr_15193[(1)] = (1));

return statearr_15193;
});
var cljs$core$async$transduce_$_state_machine__13159__auto____1 = (function (state_15185){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_15185);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e15194){var ex__13162__auto__ = e15194;
var statearr_15195_17745 = state_15185;
(statearr_15195_17745[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_15185[(4)]))){
var statearr_15196_17746 = state_15185;
(statearr_15196_17746[(1)] = cljs.core.first((state_15185[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17747 = state_15185;
state_15185 = G__17747;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13159__auto__ = function(state_15185){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13159__auto____1.call(this,state_15185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13159__auto____0;
cljs$core$async$transduce_$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13159__auto____1;
return cljs$core$async$transduce_$_state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_15201 = f__14231__auto__();
(statearr_15201[(6)] = c__14230__auto__);

return statearr_15201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));

return c__14230__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15205 = arguments.length;
switch (G__15205) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14230__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_15230){
var state_val_15231 = (state_15230[(1)]);
if((state_val_15231 === (7))){
var inst_15212 = (state_15230[(2)]);
var state_15230__$1 = state_15230;
var statearr_15232_17749 = state_15230__$1;
(statearr_15232_17749[(2)] = inst_15212);

(statearr_15232_17749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (1))){
var inst_15206 = cljs.core.seq(coll);
var inst_15207 = inst_15206;
var state_15230__$1 = (function (){var statearr_15234 = state_15230;
(statearr_15234[(7)] = inst_15207);

return statearr_15234;
})();
var statearr_15235_17754 = state_15230__$1;
(statearr_15235_17754[(2)] = null);

(statearr_15235_17754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (4))){
var inst_15207 = (state_15230[(7)]);
var inst_15210 = cljs.core.first(inst_15207);
var state_15230__$1 = state_15230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15230__$1,(7),ch,inst_15210);
} else {
if((state_val_15231 === (13))){
var inst_15224 = (state_15230[(2)]);
var state_15230__$1 = state_15230;
var statearr_15241_17755 = state_15230__$1;
(statearr_15241_17755[(2)] = inst_15224);

(statearr_15241_17755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (6))){
var inst_15215 = (state_15230[(2)]);
var state_15230__$1 = state_15230;
if(cljs.core.truth_(inst_15215)){
var statearr_15243_17756 = state_15230__$1;
(statearr_15243_17756[(1)] = (8));

} else {
var statearr_15244_17757 = state_15230__$1;
(statearr_15244_17757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (3))){
var inst_15228 = (state_15230[(2)]);
var state_15230__$1 = state_15230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15230__$1,inst_15228);
} else {
if((state_val_15231 === (12))){
var state_15230__$1 = state_15230;
var statearr_15245_17758 = state_15230__$1;
(statearr_15245_17758[(2)] = null);

(statearr_15245_17758[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (2))){
var inst_15207 = (state_15230[(7)]);
var state_15230__$1 = state_15230;
if(cljs.core.truth_(inst_15207)){
var statearr_15250_17759 = state_15230__$1;
(statearr_15250_17759[(1)] = (4));

} else {
var statearr_15251_17760 = state_15230__$1;
(statearr_15251_17760[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (11))){
var inst_15221 = cljs.core.async.close_BANG_(ch);
var state_15230__$1 = state_15230;
var statearr_15252_17762 = state_15230__$1;
(statearr_15252_17762[(2)] = inst_15221);

(statearr_15252_17762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (9))){
var state_15230__$1 = state_15230;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15257_17764 = state_15230__$1;
(statearr_15257_17764[(1)] = (11));

} else {
var statearr_15259_17765 = state_15230__$1;
(statearr_15259_17765[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (5))){
var inst_15207 = (state_15230[(7)]);
var state_15230__$1 = state_15230;
var statearr_15260_17766 = state_15230__$1;
(statearr_15260_17766[(2)] = inst_15207);

(statearr_15260_17766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (10))){
var inst_15226 = (state_15230[(2)]);
var state_15230__$1 = state_15230;
var statearr_15261_17769 = state_15230__$1;
(statearr_15261_17769[(2)] = inst_15226);

(statearr_15261_17769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15231 === (8))){
var inst_15207 = (state_15230[(7)]);
var inst_15217 = cljs.core.next(inst_15207);
var inst_15207__$1 = inst_15217;
var state_15230__$1 = (function (){var statearr_15263 = state_15230;
(statearr_15263[(7)] = inst_15207__$1);

return statearr_15263;
})();
var statearr_15264_17773 = state_15230__$1;
(statearr_15264_17773[(2)] = null);

(statearr_15264_17773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13159__auto__ = null;
var cljs$core$async$state_machine__13159__auto____0 = (function (){
var statearr_15267 = [null,null,null,null,null,null,null,null];
(statearr_15267[(0)] = cljs$core$async$state_machine__13159__auto__);

(statearr_15267[(1)] = (1));

return statearr_15267;
});
var cljs$core$async$state_machine__13159__auto____1 = (function (state_15230){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_15230);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e15272){var ex__13162__auto__ = e15272;
var statearr_15273_17774 = state_15230;
(statearr_15273_17774[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_15230[(4)]))){
var statearr_15277_17779 = state_15230;
(statearr_15277_17779[(1)] = cljs.core.first((state_15230[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17780 = state_15230;
state_15230 = G__17780;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$state_machine__13159__auto__ = function(state_15230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13159__auto____1.call(this,state_15230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13159__auto____0;
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13159__auto____1;
return cljs$core$async$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_15279 = f__14231__auto__();
(statearr_15279[(6)] = c__14230__auto__);

return statearr_15279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));

return c__14230__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15300 = arguments.length;
switch (G__15300) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17782 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17782(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17788 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17788(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17790 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17790(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17797 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17797(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15344 = (function (ch,cs,meta15345){
this.ch = ch;
this.cs = cs;
this.meta15345 = meta15345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15346,meta15345__$1){
var self__ = this;
var _15346__$1 = this;
return (new cljs.core.async.t_cljs$core$async15344(self__.ch,self__.cs,meta15345__$1));
}));

(cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15346){
var self__ = this;
var _15346__$1 = this;
return self__.meta15345;
}));

(cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15344.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15345","meta15345",-1971163511,null)], null);
}));

(cljs.core.async.t_cljs$core$async15344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15344");

(cljs.core.async.t_cljs$core$async15344.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15344.
 */
cljs.core.async.__GT_t_cljs$core$async15344 = (function cljs$core$async$__GT_t_cljs$core$async15344(ch,cs,meta15345){
return (new cljs.core.async.t_cljs$core$async15344(ch,cs,meta15345));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15344(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14230__auto___17812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_15525){
var state_val_15526 = (state_15525[(1)]);
if((state_val_15526 === (7))){
var inst_15517 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15527_17813 = state_15525__$1;
(statearr_15527_17813[(2)] = inst_15517);

(statearr_15527_17813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (20))){
var inst_15410 = (state_15525[(7)]);
var inst_15422 = cljs.core.first(inst_15410);
var inst_15423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15422,(0),null);
var inst_15424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15422,(1),null);
var state_15525__$1 = (function (){var statearr_15532 = state_15525;
(statearr_15532[(8)] = inst_15423);

return statearr_15532;
})();
if(cljs.core.truth_(inst_15424)){
var statearr_15533_17822 = state_15525__$1;
(statearr_15533_17822[(1)] = (22));

} else {
var statearr_15534_17826 = state_15525__$1;
(statearr_15534_17826[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (27))){
var inst_15453 = (state_15525[(9)]);
var inst_15460 = (state_15525[(10)]);
var inst_15375 = (state_15525[(11)]);
var inst_15455 = (state_15525[(12)]);
var inst_15460__$1 = cljs.core._nth(inst_15453,inst_15455);
var inst_15461 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15460__$1,inst_15375,done);
var state_15525__$1 = (function (){var statearr_15538 = state_15525;
(statearr_15538[(10)] = inst_15460__$1);

return statearr_15538;
})();
if(cljs.core.truth_(inst_15461)){
var statearr_15543_17839 = state_15525__$1;
(statearr_15543_17839[(1)] = (30));

} else {
var statearr_15544_17840 = state_15525__$1;
(statearr_15544_17840[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (1))){
var state_15525__$1 = state_15525;
var statearr_15545_17841 = state_15525__$1;
(statearr_15545_17841[(2)] = null);

(statearr_15545_17841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (24))){
var inst_15410 = (state_15525[(7)]);
var inst_15430 = (state_15525[(2)]);
var inst_15431 = cljs.core.next(inst_15410);
var inst_15384 = inst_15431;
var inst_15385 = null;
var inst_15386 = (0);
var inst_15387 = (0);
var state_15525__$1 = (function (){var statearr_15548 = state_15525;
(statearr_15548[(13)] = inst_15386);

(statearr_15548[(14)] = inst_15430);

(statearr_15548[(15)] = inst_15387);

(statearr_15548[(16)] = inst_15385);

(statearr_15548[(17)] = inst_15384);

return statearr_15548;
})();
var statearr_15549_17850 = state_15525__$1;
(statearr_15549_17850[(2)] = null);

(statearr_15549_17850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (39))){
var state_15525__$1 = state_15525;
var statearr_15556_17851 = state_15525__$1;
(statearr_15556_17851[(2)] = null);

(statearr_15556_17851[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (4))){
var inst_15375 = (state_15525[(11)]);
var inst_15375__$1 = (state_15525[(2)]);
var inst_15376 = (inst_15375__$1 == null);
var state_15525__$1 = (function (){var statearr_15557 = state_15525;
(statearr_15557[(11)] = inst_15375__$1);

return statearr_15557;
})();
if(cljs.core.truth_(inst_15376)){
var statearr_15558_17857 = state_15525__$1;
(statearr_15558_17857[(1)] = (5));

} else {
var statearr_15559_17858 = state_15525__$1;
(statearr_15559_17858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (15))){
var inst_15386 = (state_15525[(13)]);
var inst_15387 = (state_15525[(15)]);
var inst_15385 = (state_15525[(16)]);
var inst_15384 = (state_15525[(17)]);
var inst_15406 = (state_15525[(2)]);
var inst_15407 = (inst_15387 + (1));
var tmp15552 = inst_15386;
var tmp15553 = inst_15385;
var tmp15554 = inst_15384;
var inst_15384__$1 = tmp15554;
var inst_15385__$1 = tmp15553;
var inst_15386__$1 = tmp15552;
var inst_15387__$1 = inst_15407;
var state_15525__$1 = (function (){var statearr_15560 = state_15525;
(statearr_15560[(18)] = inst_15406);

(statearr_15560[(13)] = inst_15386__$1);

(statearr_15560[(15)] = inst_15387__$1);

(statearr_15560[(16)] = inst_15385__$1);

(statearr_15560[(17)] = inst_15384__$1);

return statearr_15560;
})();
var statearr_15561_17860 = state_15525__$1;
(statearr_15561_17860[(2)] = null);

(statearr_15561_17860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (21))){
var inst_15434 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15569_17861 = state_15525__$1;
(statearr_15569_17861[(2)] = inst_15434);

(statearr_15569_17861[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (31))){
var inst_15460 = (state_15525[(10)]);
var inst_15464 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15460);
var state_15525__$1 = state_15525;
var statearr_15570_17869 = state_15525__$1;
(statearr_15570_17869[(2)] = inst_15464);

(statearr_15570_17869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (32))){
var inst_15453 = (state_15525[(9)]);
var inst_15454 = (state_15525[(19)]);
var inst_15455 = (state_15525[(12)]);
var inst_15452 = (state_15525[(20)]);
var inst_15466 = (state_15525[(2)]);
var inst_15471 = (inst_15455 + (1));
var tmp15566 = inst_15453;
var tmp15567 = inst_15454;
var tmp15568 = inst_15452;
var inst_15452__$1 = tmp15568;
var inst_15453__$1 = tmp15566;
var inst_15454__$1 = tmp15567;
var inst_15455__$1 = inst_15471;
var state_15525__$1 = (function (){var statearr_15572 = state_15525;
(statearr_15572[(9)] = inst_15453__$1);

(statearr_15572[(21)] = inst_15466);

(statearr_15572[(19)] = inst_15454__$1);

(statearr_15572[(12)] = inst_15455__$1);

(statearr_15572[(20)] = inst_15452__$1);

return statearr_15572;
})();
var statearr_15573_17871 = state_15525__$1;
(statearr_15573_17871[(2)] = null);

(statearr_15573_17871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (40))){
var inst_15490 = (state_15525[(22)]);
var inst_15494 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15490);
var state_15525__$1 = state_15525;
var statearr_15574_17872 = state_15525__$1;
(statearr_15574_17872[(2)] = inst_15494);

(statearr_15574_17872[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (33))){
var inst_15474 = (state_15525[(23)]);
var inst_15480 = cljs.core.chunked_seq_QMARK_(inst_15474);
var state_15525__$1 = state_15525;
if(inst_15480){
var statearr_15575_17874 = state_15525__$1;
(statearr_15575_17874[(1)] = (36));

} else {
var statearr_15576_17879 = state_15525__$1;
(statearr_15576_17879[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (13))){
var inst_15396 = (state_15525[(24)]);
var inst_15402 = cljs.core.async.close_BANG_(inst_15396);
var state_15525__$1 = state_15525;
var statearr_15577_17884 = state_15525__$1;
(statearr_15577_17884[(2)] = inst_15402);

(statearr_15577_17884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (22))){
var inst_15423 = (state_15525[(8)]);
var inst_15427 = cljs.core.async.close_BANG_(inst_15423);
var state_15525__$1 = state_15525;
var statearr_15579_17885 = state_15525__$1;
(statearr_15579_17885[(2)] = inst_15427);

(statearr_15579_17885[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (36))){
var inst_15474 = (state_15525[(23)]);
var inst_15484 = cljs.core.chunk_first(inst_15474);
var inst_15485 = cljs.core.chunk_rest(inst_15474);
var inst_15486 = cljs.core.count(inst_15484);
var inst_15452 = inst_15485;
var inst_15453 = inst_15484;
var inst_15454 = inst_15486;
var inst_15455 = (0);
var state_15525__$1 = (function (){var statearr_15581 = state_15525;
(statearr_15581[(9)] = inst_15453);

(statearr_15581[(19)] = inst_15454);

(statearr_15581[(12)] = inst_15455);

(statearr_15581[(20)] = inst_15452);

return statearr_15581;
})();
var statearr_15586_17890 = state_15525__$1;
(statearr_15586_17890[(2)] = null);

(statearr_15586_17890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (41))){
var inst_15474 = (state_15525[(23)]);
var inst_15496 = (state_15525[(2)]);
var inst_15497 = cljs.core.next(inst_15474);
var inst_15452 = inst_15497;
var inst_15453 = null;
var inst_15454 = (0);
var inst_15455 = (0);
var state_15525__$1 = (function (){var statearr_15587 = state_15525;
(statearr_15587[(9)] = inst_15453);

(statearr_15587[(19)] = inst_15454);

(statearr_15587[(25)] = inst_15496);

(statearr_15587[(12)] = inst_15455);

(statearr_15587[(20)] = inst_15452);

return statearr_15587;
})();
var statearr_15588_17891 = state_15525__$1;
(statearr_15588_17891[(2)] = null);

(statearr_15588_17891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (43))){
var state_15525__$1 = state_15525;
var statearr_15589_17893 = state_15525__$1;
(statearr_15589_17893[(2)] = null);

(statearr_15589_17893[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (29))){
var inst_15505 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15590_17894 = state_15525__$1;
(statearr_15590_17894[(2)] = inst_15505);

(statearr_15590_17894[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (44))){
var inst_15514 = (state_15525[(2)]);
var state_15525__$1 = (function (){var statearr_15594 = state_15525;
(statearr_15594[(26)] = inst_15514);

return statearr_15594;
})();
var statearr_15595_17895 = state_15525__$1;
(statearr_15595_17895[(2)] = null);

(statearr_15595_17895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (6))){
var inst_15444 = (state_15525[(27)]);
var inst_15443 = cljs.core.deref(cs);
var inst_15444__$1 = cljs.core.keys(inst_15443);
var inst_15445 = cljs.core.count(inst_15444__$1);
var inst_15446 = cljs.core.reset_BANG_(dctr,inst_15445);
var inst_15451 = cljs.core.seq(inst_15444__$1);
var inst_15452 = inst_15451;
var inst_15453 = null;
var inst_15454 = (0);
var inst_15455 = (0);
var state_15525__$1 = (function (){var statearr_15596 = state_15525;
(statearr_15596[(9)] = inst_15453);

(statearr_15596[(19)] = inst_15454);

(statearr_15596[(27)] = inst_15444__$1);

(statearr_15596[(28)] = inst_15446);

(statearr_15596[(12)] = inst_15455);

(statearr_15596[(20)] = inst_15452);

return statearr_15596;
})();
var statearr_15597_17899 = state_15525__$1;
(statearr_15597_17899[(2)] = null);

(statearr_15597_17899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (28))){
var inst_15474 = (state_15525[(23)]);
var inst_15452 = (state_15525[(20)]);
var inst_15474__$1 = cljs.core.seq(inst_15452);
var state_15525__$1 = (function (){var statearr_15598 = state_15525;
(statearr_15598[(23)] = inst_15474__$1);

return statearr_15598;
})();
if(inst_15474__$1){
var statearr_15599_17903 = state_15525__$1;
(statearr_15599_17903[(1)] = (33));

} else {
var statearr_15600_17904 = state_15525__$1;
(statearr_15600_17904[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (25))){
var inst_15454 = (state_15525[(19)]);
var inst_15455 = (state_15525[(12)]);
var inst_15457 = (inst_15455 < inst_15454);
var inst_15458 = inst_15457;
var state_15525__$1 = state_15525;
if(cljs.core.truth_(inst_15458)){
var statearr_15601_17908 = state_15525__$1;
(statearr_15601_17908[(1)] = (27));

} else {
var statearr_15602_17909 = state_15525__$1;
(statearr_15602_17909[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (34))){
var state_15525__$1 = state_15525;
var statearr_15603_17910 = state_15525__$1;
(statearr_15603_17910[(2)] = null);

(statearr_15603_17910[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (17))){
var state_15525__$1 = state_15525;
var statearr_15604_17911 = state_15525__$1;
(statearr_15604_17911[(2)] = null);

(statearr_15604_17911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (3))){
var inst_15519 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15525__$1,inst_15519);
} else {
if((state_val_15526 === (12))){
var inst_15439 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15605_17912 = state_15525__$1;
(statearr_15605_17912[(2)] = inst_15439);

(statearr_15605_17912[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (2))){
var state_15525__$1 = state_15525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15525__$1,(4),ch);
} else {
if((state_val_15526 === (23))){
var state_15525__$1 = state_15525;
var statearr_15606_17916 = state_15525__$1;
(statearr_15606_17916[(2)] = null);

(statearr_15606_17916[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (35))){
var inst_15503 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15615_17917 = state_15525__$1;
(statearr_15615_17917[(2)] = inst_15503);

(statearr_15615_17917[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (19))){
var inst_15410 = (state_15525[(7)]);
var inst_15414 = cljs.core.chunk_first(inst_15410);
var inst_15415 = cljs.core.chunk_rest(inst_15410);
var inst_15416 = cljs.core.count(inst_15414);
var inst_15384 = inst_15415;
var inst_15385 = inst_15414;
var inst_15386 = inst_15416;
var inst_15387 = (0);
var state_15525__$1 = (function (){var statearr_15620 = state_15525;
(statearr_15620[(13)] = inst_15386);

(statearr_15620[(15)] = inst_15387);

(statearr_15620[(16)] = inst_15385);

(statearr_15620[(17)] = inst_15384);

return statearr_15620;
})();
var statearr_15621_17920 = state_15525__$1;
(statearr_15621_17920[(2)] = null);

(statearr_15621_17920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (11))){
var inst_15384 = (state_15525[(17)]);
var inst_15410 = (state_15525[(7)]);
var inst_15410__$1 = cljs.core.seq(inst_15384);
var state_15525__$1 = (function (){var statearr_15624 = state_15525;
(statearr_15624[(7)] = inst_15410__$1);

return statearr_15624;
})();
if(inst_15410__$1){
var statearr_15625_17921 = state_15525__$1;
(statearr_15625_17921[(1)] = (16));

} else {
var statearr_15626_17922 = state_15525__$1;
(statearr_15626_17922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (9))){
var inst_15441 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15627_17923 = state_15525__$1;
(statearr_15627_17923[(2)] = inst_15441);

(statearr_15627_17923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (5))){
var inst_15382 = cljs.core.deref(cs);
var inst_15383 = cljs.core.seq(inst_15382);
var inst_15384 = inst_15383;
var inst_15385 = null;
var inst_15386 = (0);
var inst_15387 = (0);
var state_15525__$1 = (function (){var statearr_15628 = state_15525;
(statearr_15628[(13)] = inst_15386);

(statearr_15628[(15)] = inst_15387);

(statearr_15628[(16)] = inst_15385);

(statearr_15628[(17)] = inst_15384);

return statearr_15628;
})();
var statearr_15629_17925 = state_15525__$1;
(statearr_15629_17925[(2)] = null);

(statearr_15629_17925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (14))){
var state_15525__$1 = state_15525;
var statearr_15631_17926 = state_15525__$1;
(statearr_15631_17926[(2)] = null);

(statearr_15631_17926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (45))){
var inst_15511 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15633_17928 = state_15525__$1;
(statearr_15633_17928[(2)] = inst_15511);

(statearr_15633_17928[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (26))){
var inst_15444 = (state_15525[(27)]);
var inst_15507 = (state_15525[(2)]);
var inst_15508 = cljs.core.seq(inst_15444);
var state_15525__$1 = (function (){var statearr_15634 = state_15525;
(statearr_15634[(29)] = inst_15507);

return statearr_15634;
})();
if(inst_15508){
var statearr_15635_17929 = state_15525__$1;
(statearr_15635_17929[(1)] = (42));

} else {
var statearr_15636_17930 = state_15525__$1;
(statearr_15636_17930[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (16))){
var inst_15410 = (state_15525[(7)]);
var inst_15412 = cljs.core.chunked_seq_QMARK_(inst_15410);
var state_15525__$1 = state_15525;
if(inst_15412){
var statearr_15637_17931 = state_15525__$1;
(statearr_15637_17931[(1)] = (19));

} else {
var statearr_15640_17933 = state_15525__$1;
(statearr_15640_17933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (38))){
var inst_15500 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15642_17934 = state_15525__$1;
(statearr_15642_17934[(2)] = inst_15500);

(statearr_15642_17934[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (30))){
var state_15525__$1 = state_15525;
var statearr_15643_17935 = state_15525__$1;
(statearr_15643_17935[(2)] = null);

(statearr_15643_17935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (10))){
var inst_15387 = (state_15525[(15)]);
var inst_15385 = (state_15525[(16)]);
var inst_15395 = cljs.core._nth(inst_15385,inst_15387);
var inst_15396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15395,(0),null);
var inst_15400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15395,(1),null);
var state_15525__$1 = (function (){var statearr_15653 = state_15525;
(statearr_15653[(24)] = inst_15396);

return statearr_15653;
})();
if(cljs.core.truth_(inst_15400)){
var statearr_15655_17941 = state_15525__$1;
(statearr_15655_17941[(1)] = (13));

} else {
var statearr_15656_17942 = state_15525__$1;
(statearr_15656_17942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (18))){
var inst_15437 = (state_15525[(2)]);
var state_15525__$1 = state_15525;
var statearr_15657_17943 = state_15525__$1;
(statearr_15657_17943[(2)] = inst_15437);

(statearr_15657_17943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (42))){
var state_15525__$1 = state_15525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15525__$1,(45),dchan);
} else {
if((state_val_15526 === (37))){
var inst_15375 = (state_15525[(11)]);
var inst_15474 = (state_15525[(23)]);
var inst_15490 = (state_15525[(22)]);
var inst_15490__$1 = cljs.core.first(inst_15474);
var inst_15491 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15490__$1,inst_15375,done);
var state_15525__$1 = (function (){var statearr_15663 = state_15525;
(statearr_15663[(22)] = inst_15490__$1);

return statearr_15663;
})();
if(cljs.core.truth_(inst_15491)){
var statearr_15664_17950 = state_15525__$1;
(statearr_15664_17950[(1)] = (39));

} else {
var statearr_15668_17951 = state_15525__$1;
(statearr_15668_17951[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15526 === (8))){
var inst_15386 = (state_15525[(13)]);
var inst_15387 = (state_15525[(15)]);
var inst_15389 = (inst_15387 < inst_15386);
var inst_15390 = inst_15389;
var state_15525__$1 = state_15525;
if(cljs.core.truth_(inst_15390)){
var statearr_15672_17953 = state_15525__$1;
(statearr_15672_17953[(1)] = (10));

} else {
var statearr_15673_17954 = state_15525__$1;
(statearr_15673_17954[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13159__auto__ = null;
var cljs$core$async$mult_$_state_machine__13159__auto____0 = (function (){
var statearr_15685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15685[(0)] = cljs$core$async$mult_$_state_machine__13159__auto__);

(statearr_15685[(1)] = (1));

return statearr_15685;
});
var cljs$core$async$mult_$_state_machine__13159__auto____1 = (function (state_15525){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_15525);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e15689){var ex__13162__auto__ = e15689;
var statearr_15690_17956 = state_15525;
(statearr_15690_17956[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_15525[(4)]))){
var statearr_15693_17959 = state_15525;
(statearr_15693_17959[(1)] = cljs.core.first((state_15525[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17962 = state_15525;
state_15525 = G__17962;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13159__auto__ = function(state_15525){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13159__auto____1.call(this,state_15525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13159__auto____0;
cljs$core$async$mult_$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13159__auto____1;
return cljs$core$async$mult_$_state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_15695 = f__14231__auto__();
(statearr_15695[(6)] = c__14230__auto___17812);

return statearr_15695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15699 = arguments.length;
switch (G__15699) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17981 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17981(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17987 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17987(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17996 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17996(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18015 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18015(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18026 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18026(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18047 = arguments.length;
var i__5770__auto___18049 = (0);
while(true){
if((i__5770__auto___18049 < len__5769__auto___18047)){
args__5775__auto__.push((arguments[i__5770__auto___18049]));

var G__18051 = (i__5770__auto___18049 + (1));
i__5770__auto___18049 = G__18051;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15805){
var map__15808 = p__15805;
var map__15808__$1 = cljs.core.__destructure_map(map__15808);
var opts = map__15808__$1;
var statearr_15809_18062 = state;
(statearr_15809_18062[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15816_18063 = state;
(statearr_15816_18063[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15821_18064 = state;
(statearr_15821_18064[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15783){
var G__15784 = cljs.core.first(seq15783);
var seq15783__$1 = cljs.core.next(seq15783);
var G__15785 = cljs.core.first(seq15783__$1);
var seq15783__$2 = cljs.core.next(seq15783__$1);
var G__15786 = cljs.core.first(seq15783__$2);
var seq15783__$3 = cljs.core.next(seq15783__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15784,G__15785,G__15786,seq15783__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15844 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15845){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15845 = meta15845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15846,meta15845__$1){
var self__ = this;
var _15846__$1 = this;
return (new cljs.core.async.t_cljs$core$async15844(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15845__$1));
}));

(cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15846){
var self__ = this;
var _15846__$1 = this;
return self__.meta15845;
}));

(cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15844.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15845","meta15845",-431860461,null)], null);
}));

(cljs.core.async.t_cljs$core$async15844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15844");

(cljs.core.async.t_cljs$core$async15844.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15844.
 */
cljs.core.async.__GT_t_cljs$core$async15844 = (function cljs$core$async$__GT_t_cljs$core$async15844(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15845){
return (new cljs.core.async.t_cljs$core$async15844(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15845));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15844(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14230__auto___18118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_15968){
var state_val_15969 = (state_15968[(1)]);
if((state_val_15969 === (7))){
var inst_15920 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
if(cljs.core.truth_(inst_15920)){
var statearr_15971_18125 = state_15968__$1;
(statearr_15971_18125[(1)] = (8));

} else {
var statearr_15973_18126 = state_15968__$1;
(statearr_15973_18126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (20))){
var inst_15910 = (state_15968[(7)]);
var state_15968__$1 = state_15968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15968__$1,(23),out,inst_15910);
} else {
if((state_val_15969 === (1))){
var inst_15885 = calc_state();
var inst_15886 = cljs.core.__destructure_map(inst_15885);
var inst_15887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15886,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15886,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15886,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15890 = inst_15885;
var state_15968__$1 = (function (){var statearr_15977 = state_15968;
(statearr_15977[(8)] = inst_15888);

(statearr_15977[(9)] = inst_15887);

(statearr_15977[(10)] = inst_15890);

(statearr_15977[(11)] = inst_15889);

return statearr_15977;
})();
var statearr_15979_18136 = state_15968__$1;
(statearr_15979_18136[(2)] = null);

(statearr_15979_18136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (24))){
var inst_15896 = (state_15968[(12)]);
var inst_15890 = inst_15896;
var state_15968__$1 = (function (){var statearr_15984 = state_15968;
(statearr_15984[(10)] = inst_15890);

return statearr_15984;
})();
var statearr_15985_18145 = state_15968__$1;
(statearr_15985_18145[(2)] = null);

(statearr_15985_18145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (4))){
var inst_15910 = (state_15968[(7)]);
var inst_15912 = (state_15968[(13)]);
var inst_15909 = (state_15968[(2)]);
var inst_15910__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15909,(0),null);
var inst_15911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15909,(1),null);
var inst_15912__$1 = (inst_15910__$1 == null);
var state_15968__$1 = (function (){var statearr_15988 = state_15968;
(statearr_15988[(7)] = inst_15910__$1);

(statearr_15988[(13)] = inst_15912__$1);

(statearr_15988[(14)] = inst_15911);

return statearr_15988;
})();
if(cljs.core.truth_(inst_15912__$1)){
var statearr_15989_18153 = state_15968__$1;
(statearr_15989_18153[(1)] = (5));

} else {
var statearr_15990_18154 = state_15968__$1;
(statearr_15990_18154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (15))){
var inst_15938 = (state_15968[(15)]);
var inst_15897 = (state_15968[(16)]);
var inst_15938__$1 = cljs.core.empty_QMARK_(inst_15897);
var state_15968__$1 = (function (){var statearr_15995 = state_15968;
(statearr_15995[(15)] = inst_15938__$1);

return statearr_15995;
})();
if(inst_15938__$1){
var statearr_15996_18155 = state_15968__$1;
(statearr_15996_18155[(1)] = (17));

} else {
var statearr_15997_18162 = state_15968__$1;
(statearr_15997_18162[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (21))){
var inst_15896 = (state_15968[(12)]);
var inst_15890 = inst_15896;
var state_15968__$1 = (function (){var statearr_15998 = state_15968;
(statearr_15998[(10)] = inst_15890);

return statearr_15998;
})();
var statearr_15999_18187 = state_15968__$1;
(statearr_15999_18187[(2)] = null);

(statearr_15999_18187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (13))){
var inst_15930 = (state_15968[(2)]);
var inst_15932 = calc_state();
var inst_15890 = inst_15932;
var state_15968__$1 = (function (){var statearr_16000 = state_15968;
(statearr_16000[(17)] = inst_15930);

(statearr_16000[(10)] = inst_15890);

return statearr_16000;
})();
var statearr_16002_18193 = state_15968__$1;
(statearr_16002_18193[(2)] = null);

(statearr_16002_18193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (22))){
var inst_15958 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
var statearr_16003_18194 = state_15968__$1;
(statearr_16003_18194[(2)] = inst_15958);

(statearr_16003_18194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (6))){
var inst_15911 = (state_15968[(14)]);
var inst_15918 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15911,change);
var state_15968__$1 = state_15968;
var statearr_16004_18195 = state_15968__$1;
(statearr_16004_18195[(2)] = inst_15918);

(statearr_16004_18195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (25))){
var state_15968__$1 = state_15968;
var statearr_16005_18196 = state_15968__$1;
(statearr_16005_18196[(2)] = null);

(statearr_16005_18196[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (17))){
var inst_15901 = (state_15968[(18)]);
var inst_15911 = (state_15968[(14)]);
var inst_15940 = (inst_15901.cljs$core$IFn$_invoke$arity$1 ? inst_15901.cljs$core$IFn$_invoke$arity$1(inst_15911) : inst_15901.call(null,inst_15911));
var inst_15941 = cljs.core.not(inst_15940);
var state_15968__$1 = state_15968;
var statearr_16006_18199 = state_15968__$1;
(statearr_16006_18199[(2)] = inst_15941);

(statearr_16006_18199[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (3))){
var inst_15962 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15968__$1,inst_15962);
} else {
if((state_val_15969 === (12))){
var state_15968__$1 = state_15968;
var statearr_16012_18208 = state_15968__$1;
(statearr_16012_18208[(2)] = null);

(statearr_16012_18208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (2))){
var inst_15896 = (state_15968[(12)]);
var inst_15890 = (state_15968[(10)]);
var inst_15896__$1 = cljs.core.__destructure_map(inst_15890);
var inst_15897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15896__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15896__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15896__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15968__$1 = (function (){var statearr_16014 = state_15968;
(statearr_16014[(18)] = inst_15901);

(statearr_16014[(12)] = inst_15896__$1);

(statearr_16014[(16)] = inst_15897);

return statearr_16014;
})();
return cljs.core.async.ioc_alts_BANG_(state_15968__$1,(4),inst_15904);
} else {
if((state_val_15969 === (23))){
var inst_15949 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
if(cljs.core.truth_(inst_15949)){
var statearr_16016_18213 = state_15968__$1;
(statearr_16016_18213[(1)] = (24));

} else {
var statearr_16017_18214 = state_15968__$1;
(statearr_16017_18214[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (19))){
var inst_15944 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
var statearr_16020_18215 = state_15968__$1;
(statearr_16020_18215[(2)] = inst_15944);

(statearr_16020_18215[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (11))){
var inst_15911 = (state_15968[(14)]);
var inst_15927 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15911);
var state_15968__$1 = state_15968;
var statearr_16022_18216 = state_15968__$1;
(statearr_16022_18216[(2)] = inst_15927);

(statearr_16022_18216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (9))){
var inst_15935 = (state_15968[(19)]);
var inst_15911 = (state_15968[(14)]);
var inst_15897 = (state_15968[(16)]);
var inst_15935__$1 = (inst_15897.cljs$core$IFn$_invoke$arity$1 ? inst_15897.cljs$core$IFn$_invoke$arity$1(inst_15911) : inst_15897.call(null,inst_15911));
var state_15968__$1 = (function (){var statearr_16023 = state_15968;
(statearr_16023[(19)] = inst_15935__$1);

return statearr_16023;
})();
if(cljs.core.truth_(inst_15935__$1)){
var statearr_16024_18217 = state_15968__$1;
(statearr_16024_18217[(1)] = (14));

} else {
var statearr_16025_18218 = state_15968__$1;
(statearr_16025_18218[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (5))){
var inst_15912 = (state_15968[(13)]);
var state_15968__$1 = state_15968;
var statearr_16026_18219 = state_15968__$1;
(statearr_16026_18219[(2)] = inst_15912);

(statearr_16026_18219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (14))){
var inst_15935 = (state_15968[(19)]);
var state_15968__$1 = state_15968;
var statearr_16028_18224 = state_15968__$1;
(statearr_16028_18224[(2)] = inst_15935);

(statearr_16028_18224[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (26))){
var inst_15954 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
var statearr_16032_18230 = state_15968__$1;
(statearr_16032_18230[(2)] = inst_15954);

(statearr_16032_18230[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (16))){
var inst_15946 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
if(cljs.core.truth_(inst_15946)){
var statearr_16034_18242 = state_15968__$1;
(statearr_16034_18242[(1)] = (20));

} else {
var statearr_16035_18244 = state_15968__$1;
(statearr_16035_18244[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (10))){
var inst_15960 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
var statearr_16039_18250 = state_15968__$1;
(statearr_16039_18250[(2)] = inst_15960);

(statearr_16039_18250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (18))){
var inst_15938 = (state_15968[(15)]);
var state_15968__$1 = state_15968;
var statearr_16040_18252 = state_15968__$1;
(statearr_16040_18252[(2)] = inst_15938);

(statearr_16040_18252[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (8))){
var inst_15910 = (state_15968[(7)]);
var inst_15923 = (inst_15910 == null);
var state_15968__$1 = state_15968;
if(cljs.core.truth_(inst_15923)){
var statearr_16043_18253 = state_15968__$1;
(statearr_16043_18253[(1)] = (11));

} else {
var statearr_16046_18254 = state_15968__$1;
(statearr_16046_18254[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13159__auto__ = null;
var cljs$core$async$mix_$_state_machine__13159__auto____0 = (function (){
var statearr_16047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16047[(0)] = cljs$core$async$mix_$_state_machine__13159__auto__);

(statearr_16047[(1)] = (1));

return statearr_16047;
});
var cljs$core$async$mix_$_state_machine__13159__auto____1 = (function (state_15968){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_15968);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e16048){var ex__13162__auto__ = e16048;
var statearr_16049_18259 = state_15968;
(statearr_16049_18259[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_15968[(4)]))){
var statearr_16050_18272 = state_15968;
(statearr_16050_18272[(1)] = cljs.core.first((state_15968[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18273 = state_15968;
state_15968 = G__18273;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13159__auto__ = function(state_15968){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13159__auto____1.call(this,state_15968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13159__auto____0;
cljs$core$async$mix_$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13159__auto____1;
return cljs$core$async$mix_$_state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_16055 = f__14231__auto__();
(statearr_16055[(6)] = c__14230__auto___18118);

return statearr_16055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18295 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18295(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18302 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18302(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18316 = (function() {
var G__18317 = null;
var G__18317__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18317__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18317 = function(p,v){
switch(arguments.length){
case 1:
return G__18317__1.call(this,p);
case 2:
return G__18317__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18317.cljs$core$IFn$_invoke$arity$1 = G__18317__1;
G__18317.cljs$core$IFn$_invoke$arity$2 = G__18317__2;
return G__18317;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16084 = arguments.length;
switch (G__16084) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18316(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18316(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16115 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16116){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16116 = meta16116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16117,meta16116__$1){
var self__ = this;
var _16117__$1 = this;
return (new cljs.core.async.t_cljs$core$async16115(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16116__$1));
}));

(cljs.core.async.t_cljs$core$async16115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16117){
var self__ = this;
var _16117__$1 = this;
return self__.meta16116;
}));

(cljs.core.async.t_cljs$core$async16115.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16115.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16115.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16115.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16115.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16115.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16116","meta16116",-1068649359,null)], null);
}));

(cljs.core.async.t_cljs$core$async16115.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16115");

(cljs.core.async.t_cljs$core$async16115.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16115");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16115.
 */
cljs.core.async.__GT_t_cljs$core$async16115 = (function cljs$core$async$__GT_t_cljs$core$async16115(ch,topic_fn,buf_fn,mults,ensure_mult,meta16116){
return (new cljs.core.async.t_cljs$core$async16115(ch,topic_fn,buf_fn,mults,ensure_mult,meta16116));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16106 = arguments.length;
switch (G__16106) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16098_SHARP_){
if(cljs.core.truth_((p1__16098_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16098_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16098_SHARP_.call(null,topic)))){
return p1__16098_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16098_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16115(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14230__auto___18336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_16249){
var state_val_16250 = (state_16249[(1)]);
if((state_val_16250 === (7))){
var inst_16245 = (state_16249[(2)]);
var state_16249__$1 = state_16249;
var statearr_16252_18337 = state_16249__$1;
(statearr_16252_18337[(2)] = inst_16245);

(statearr_16252_18337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (20))){
var state_16249__$1 = state_16249;
var statearr_16253_18338 = state_16249__$1;
(statearr_16253_18338[(2)] = null);

(statearr_16253_18338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (1))){
var state_16249__$1 = state_16249;
var statearr_16254_18339 = state_16249__$1;
(statearr_16254_18339[(2)] = null);

(statearr_16254_18339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (24))){
var inst_16227 = (state_16249[(7)]);
var inst_16237 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16227);
var state_16249__$1 = state_16249;
var statearr_16259_18340 = state_16249__$1;
(statearr_16259_18340[(2)] = inst_16237);

(statearr_16259_18340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (4))){
var inst_16161 = (state_16249[(8)]);
var inst_16161__$1 = (state_16249[(2)]);
var inst_16166 = (inst_16161__$1 == null);
var state_16249__$1 = (function (){var statearr_16269 = state_16249;
(statearr_16269[(8)] = inst_16161__$1);

return statearr_16269;
})();
if(cljs.core.truth_(inst_16166)){
var statearr_16270_18346 = state_16249__$1;
(statearr_16270_18346[(1)] = (5));

} else {
var statearr_16271_18347 = state_16249__$1;
(statearr_16271_18347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (15))){
var inst_16221 = (state_16249[(2)]);
var state_16249__$1 = state_16249;
var statearr_16272_18348 = state_16249__$1;
(statearr_16272_18348[(2)] = inst_16221);

(statearr_16272_18348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (21))){
var inst_16242 = (state_16249[(2)]);
var state_16249__$1 = (function (){var statearr_16277 = state_16249;
(statearr_16277[(9)] = inst_16242);

return statearr_16277;
})();
var statearr_16279_18349 = state_16249__$1;
(statearr_16279_18349[(2)] = null);

(statearr_16279_18349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (13))){
var inst_16197 = (state_16249[(10)]);
var inst_16199 = cljs.core.chunked_seq_QMARK_(inst_16197);
var state_16249__$1 = state_16249;
if(inst_16199){
var statearr_16283_18351 = state_16249__$1;
(statearr_16283_18351[(1)] = (16));

} else {
var statearr_16284_18352 = state_16249__$1;
(statearr_16284_18352[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (22))){
var inst_16234 = (state_16249[(2)]);
var state_16249__$1 = state_16249;
if(cljs.core.truth_(inst_16234)){
var statearr_16287_18353 = state_16249__$1;
(statearr_16287_18353[(1)] = (23));

} else {
var statearr_16289_18354 = state_16249__$1;
(statearr_16289_18354[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (6))){
var inst_16227 = (state_16249[(7)]);
var inst_16161 = (state_16249[(8)]);
var inst_16229 = (state_16249[(11)]);
var inst_16227__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16161) : topic_fn.call(null,inst_16161));
var inst_16228 = cljs.core.deref(mults);
var inst_16229__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16228,inst_16227__$1);
var state_16249__$1 = (function (){var statearr_16293 = state_16249;
(statearr_16293[(7)] = inst_16227__$1);

(statearr_16293[(11)] = inst_16229__$1);

return statearr_16293;
})();
if(cljs.core.truth_(inst_16229__$1)){
var statearr_16294_18361 = state_16249__$1;
(statearr_16294_18361[(1)] = (19));

} else {
var statearr_16295_18362 = state_16249__$1;
(statearr_16295_18362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (25))){
var inst_16239 = (state_16249[(2)]);
var state_16249__$1 = state_16249;
var statearr_16302_18365 = state_16249__$1;
(statearr_16302_18365[(2)] = inst_16239);

(statearr_16302_18365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (17))){
var inst_16197 = (state_16249[(10)]);
var inst_16209 = cljs.core.first(inst_16197);
var inst_16213 = cljs.core.async.muxch_STAR_(inst_16209);
var inst_16214 = cljs.core.async.close_BANG_(inst_16213);
var inst_16215 = cljs.core.next(inst_16197);
var inst_16179 = inst_16215;
var inst_16180 = null;
var inst_16181 = (0);
var inst_16182 = (0);
var state_16249__$1 = (function (){var statearr_16309 = state_16249;
(statearr_16309[(12)] = inst_16179);

(statearr_16309[(13)] = inst_16182);

(statearr_16309[(14)] = inst_16180);

(statearr_16309[(15)] = inst_16181);

(statearr_16309[(16)] = inst_16214);

return statearr_16309;
})();
var statearr_16313_18366 = state_16249__$1;
(statearr_16313_18366[(2)] = null);

(statearr_16313_18366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (3))){
var inst_16247 = (state_16249[(2)]);
var state_16249__$1 = state_16249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16249__$1,inst_16247);
} else {
if((state_val_16250 === (12))){
var inst_16223 = (state_16249[(2)]);
var state_16249__$1 = state_16249;
var statearr_16318_18371 = state_16249__$1;
(statearr_16318_18371[(2)] = inst_16223);

(statearr_16318_18371[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (2))){
var state_16249__$1 = state_16249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16249__$1,(4),ch);
} else {
if((state_val_16250 === (23))){
var state_16249__$1 = state_16249;
var statearr_16319_18372 = state_16249__$1;
(statearr_16319_18372[(2)] = null);

(statearr_16319_18372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (19))){
var inst_16161 = (state_16249[(8)]);
var inst_16229 = (state_16249[(11)]);
var inst_16232 = cljs.core.async.muxch_STAR_(inst_16229);
var state_16249__$1 = state_16249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16249__$1,(22),inst_16232,inst_16161);
} else {
if((state_val_16250 === (11))){
var inst_16179 = (state_16249[(12)]);
var inst_16197 = (state_16249[(10)]);
var inst_16197__$1 = cljs.core.seq(inst_16179);
var state_16249__$1 = (function (){var statearr_16332 = state_16249;
(statearr_16332[(10)] = inst_16197__$1);

return statearr_16332;
})();
if(inst_16197__$1){
var statearr_16333_18374 = state_16249__$1;
(statearr_16333_18374[(1)] = (13));

} else {
var statearr_16334_18375 = state_16249__$1;
(statearr_16334_18375[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (9))){
var inst_16225 = (state_16249[(2)]);
var state_16249__$1 = state_16249;
var statearr_16335_18376 = state_16249__$1;
(statearr_16335_18376[(2)] = inst_16225);

(statearr_16335_18376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (5))){
var inst_16176 = cljs.core.deref(mults);
var inst_16177 = cljs.core.vals(inst_16176);
var inst_16178 = cljs.core.seq(inst_16177);
var inst_16179 = inst_16178;
var inst_16180 = null;
var inst_16181 = (0);
var inst_16182 = (0);
var state_16249__$1 = (function (){var statearr_16336 = state_16249;
(statearr_16336[(12)] = inst_16179);

(statearr_16336[(13)] = inst_16182);

(statearr_16336[(14)] = inst_16180);

(statearr_16336[(15)] = inst_16181);

return statearr_16336;
})();
var statearr_16337_18394 = state_16249__$1;
(statearr_16337_18394[(2)] = null);

(statearr_16337_18394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (14))){
var state_16249__$1 = state_16249;
var statearr_16341_18395 = state_16249__$1;
(statearr_16341_18395[(2)] = null);

(statearr_16341_18395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (16))){
var inst_16197 = (state_16249[(10)]);
var inst_16201 = cljs.core.chunk_first(inst_16197);
var inst_16202 = cljs.core.chunk_rest(inst_16197);
var inst_16206 = cljs.core.count(inst_16201);
var inst_16179 = inst_16202;
var inst_16180 = inst_16201;
var inst_16181 = inst_16206;
var inst_16182 = (0);
var state_16249__$1 = (function (){var statearr_16342 = state_16249;
(statearr_16342[(12)] = inst_16179);

(statearr_16342[(13)] = inst_16182);

(statearr_16342[(14)] = inst_16180);

(statearr_16342[(15)] = inst_16181);

return statearr_16342;
})();
var statearr_16343_18428 = state_16249__$1;
(statearr_16343_18428[(2)] = null);

(statearr_16343_18428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (10))){
var inst_16179 = (state_16249[(12)]);
var inst_16182 = (state_16249[(13)]);
var inst_16180 = (state_16249[(14)]);
var inst_16181 = (state_16249[(15)]);
var inst_16191 = cljs.core._nth(inst_16180,inst_16182);
var inst_16192 = cljs.core.async.muxch_STAR_(inst_16191);
var inst_16193 = cljs.core.async.close_BANG_(inst_16192);
var inst_16194 = (inst_16182 + (1));
var tmp16338 = inst_16179;
var tmp16339 = inst_16180;
var tmp16340 = inst_16181;
var inst_16179__$1 = tmp16338;
var inst_16180__$1 = tmp16339;
var inst_16181__$1 = tmp16340;
var inst_16182__$1 = inst_16194;
var state_16249__$1 = (function (){var statearr_16344 = state_16249;
(statearr_16344[(17)] = inst_16193);

(statearr_16344[(12)] = inst_16179__$1);

(statearr_16344[(13)] = inst_16182__$1);

(statearr_16344[(14)] = inst_16180__$1);

(statearr_16344[(15)] = inst_16181__$1);

return statearr_16344;
})();
var statearr_16345_18429 = state_16249__$1;
(statearr_16345_18429[(2)] = null);

(statearr_16345_18429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (18))){
var inst_16218 = (state_16249[(2)]);
var state_16249__$1 = state_16249;
var statearr_16357_18430 = state_16249__$1;
(statearr_16357_18430[(2)] = inst_16218);

(statearr_16357_18430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16250 === (8))){
var inst_16182 = (state_16249[(13)]);
var inst_16181 = (state_16249[(15)]);
var inst_16188 = (inst_16182 < inst_16181);
var inst_16189 = inst_16188;
var state_16249__$1 = state_16249;
if(cljs.core.truth_(inst_16189)){
var statearr_16361_18431 = state_16249__$1;
(statearr_16361_18431[(1)] = (10));

} else {
var statearr_16362_18432 = state_16249__$1;
(statearr_16362_18432[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13159__auto__ = null;
var cljs$core$async$state_machine__13159__auto____0 = (function (){
var statearr_16369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16369[(0)] = cljs$core$async$state_machine__13159__auto__);

(statearr_16369[(1)] = (1));

return statearr_16369;
});
var cljs$core$async$state_machine__13159__auto____1 = (function (state_16249){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_16249);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e16370){var ex__13162__auto__ = e16370;
var statearr_16371_18433 = state_16249;
(statearr_16371_18433[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_16249[(4)]))){
var statearr_16372_18434 = state_16249;
(statearr_16372_18434[(1)] = cljs.core.first((state_16249[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18435 = state_16249;
state_16249 = G__18435;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$state_machine__13159__auto__ = function(state_16249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13159__auto____1.call(this,state_16249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13159__auto____0;
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13159__auto____1;
return cljs$core$async$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_16381 = f__14231__auto__();
(statearr_16381[(6)] = c__14230__auto___18336);

return statearr_16381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16395 = arguments.length;
switch (G__16395) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16400 = arguments.length;
switch (G__16400) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16405 = arguments.length;
switch (G__16405) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14230__auto___18466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_16455){
var state_val_16456 = (state_16455[(1)]);
if((state_val_16456 === (7))){
var state_16455__$1 = state_16455;
var statearr_16457_18467 = state_16455__$1;
(statearr_16457_18467[(2)] = null);

(statearr_16457_18467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (1))){
var state_16455__$1 = state_16455;
var statearr_16458_18468 = state_16455__$1;
(statearr_16458_18468[(2)] = null);

(statearr_16458_18468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (4))){
var inst_16412 = (state_16455[(7)]);
var inst_16411 = (state_16455[(8)]);
var inst_16414 = (inst_16412 < inst_16411);
var state_16455__$1 = state_16455;
if(cljs.core.truth_(inst_16414)){
var statearr_16459_18469 = state_16455__$1;
(statearr_16459_18469[(1)] = (6));

} else {
var statearr_16460_18470 = state_16455__$1;
(statearr_16460_18470[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (15))){
var inst_16441 = (state_16455[(9)]);
var inst_16446 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16441);
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16455__$1,(17),out,inst_16446);
} else {
if((state_val_16456 === (13))){
var inst_16441 = (state_16455[(9)]);
var inst_16441__$1 = (state_16455[(2)]);
var inst_16442 = cljs.core.some(cljs.core.nil_QMARK_,inst_16441__$1);
var state_16455__$1 = (function (){var statearr_16463 = state_16455;
(statearr_16463[(9)] = inst_16441__$1);

return statearr_16463;
})();
if(cljs.core.truth_(inst_16442)){
var statearr_16465_18495 = state_16455__$1;
(statearr_16465_18495[(1)] = (14));

} else {
var statearr_16466_18496 = state_16455__$1;
(statearr_16466_18496[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (6))){
var state_16455__$1 = state_16455;
var statearr_16467_18501 = state_16455__$1;
(statearr_16467_18501[(2)] = null);

(statearr_16467_18501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (17))){
var inst_16448 = (state_16455[(2)]);
var state_16455__$1 = (function (){var statearr_16476 = state_16455;
(statearr_16476[(10)] = inst_16448);

return statearr_16476;
})();
var statearr_16480_18504 = state_16455__$1;
(statearr_16480_18504[(2)] = null);

(statearr_16480_18504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (3))){
var inst_16453 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16455__$1,inst_16453);
} else {
if((state_val_16456 === (12))){
var _ = (function (){var statearr_16487 = state_16455;
(statearr_16487[(4)] = cljs.core.rest((state_16455[(4)])));

return statearr_16487;
})();
var state_16455__$1 = state_16455;
var ex16474 = (state_16455__$1[(2)]);
var statearr_16491_18508 = state_16455__$1;
(statearr_16491_18508[(5)] = ex16474);


if((ex16474 instanceof Object)){
var statearr_16495_18509 = state_16455__$1;
(statearr_16495_18509[(1)] = (11));

(statearr_16495_18509[(5)] = null);

} else {
throw ex16474;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (2))){
var inst_16410 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16411 = cnt;
var inst_16412 = (0);
var state_16455__$1 = (function (){var statearr_16498 = state_16455;
(statearr_16498[(7)] = inst_16412);

(statearr_16498[(8)] = inst_16411);

(statearr_16498[(11)] = inst_16410);

return statearr_16498;
})();
var statearr_16502_18510 = state_16455__$1;
(statearr_16502_18510[(2)] = null);

(statearr_16502_18510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (11))){
var inst_16419 = (state_16455[(2)]);
var inst_16420 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16455__$1 = (function (){var statearr_16504 = state_16455;
(statearr_16504[(12)] = inst_16419);

return statearr_16504;
})();
var statearr_16505_18512 = state_16455__$1;
(statearr_16505_18512[(2)] = inst_16420);

(statearr_16505_18512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (9))){
var inst_16412 = (state_16455[(7)]);
var _ = (function (){var statearr_16510 = state_16455;
(statearr_16510[(4)] = cljs.core.cons((12),(state_16455[(4)])));

return statearr_16510;
})();
var inst_16427 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16412) : chs__$1.call(null,inst_16412));
var inst_16428 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16412) : done.call(null,inst_16412));
var inst_16429 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16427,inst_16428);
var ___$1 = (function (){var statearr_16512 = state_16455;
(statearr_16512[(4)] = cljs.core.rest((state_16455[(4)])));

return statearr_16512;
})();
var state_16455__$1 = state_16455;
var statearr_16513_18516 = state_16455__$1;
(statearr_16513_18516[(2)] = inst_16429);

(statearr_16513_18516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (5))){
var inst_16439 = (state_16455[(2)]);
var state_16455__$1 = (function (){var statearr_16517 = state_16455;
(statearr_16517[(13)] = inst_16439);

return statearr_16517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16455__$1,(13),dchan);
} else {
if((state_val_16456 === (14))){
var inst_16444 = cljs.core.async.close_BANG_(out);
var state_16455__$1 = state_16455;
var statearr_16518_18517 = state_16455__$1;
(statearr_16518_18517[(2)] = inst_16444);

(statearr_16518_18517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (16))){
var inst_16451 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16523_18518 = state_16455__$1;
(statearr_16523_18518[(2)] = inst_16451);

(statearr_16523_18518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (10))){
var inst_16412 = (state_16455[(7)]);
var inst_16432 = (state_16455[(2)]);
var inst_16433 = (inst_16412 + (1));
var inst_16412__$1 = inst_16433;
var state_16455__$1 = (function (){var statearr_16532 = state_16455;
(statearr_16532[(7)] = inst_16412__$1);

(statearr_16532[(14)] = inst_16432);

return statearr_16532;
})();
var statearr_16542_18519 = state_16455__$1;
(statearr_16542_18519[(2)] = null);

(statearr_16542_18519[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (8))){
var inst_16437 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16543_18520 = state_16455__$1;
(statearr_16543_18520[(2)] = inst_16437);

(statearr_16543_18520[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13159__auto__ = null;
var cljs$core$async$state_machine__13159__auto____0 = (function (){
var statearr_16559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16559[(0)] = cljs$core$async$state_machine__13159__auto__);

(statearr_16559[(1)] = (1));

return statearr_16559;
});
var cljs$core$async$state_machine__13159__auto____1 = (function (state_16455){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_16455);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e16570){var ex__13162__auto__ = e16570;
var statearr_16571_18521 = state_16455;
(statearr_16571_18521[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_16455[(4)]))){
var statearr_16573_18522 = state_16455;
(statearr_16573_18522[(1)] = cljs.core.first((state_16455[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18523 = state_16455;
state_16455 = G__18523;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$state_machine__13159__auto__ = function(state_16455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13159__auto____1.call(this,state_16455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13159__auto____0;
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13159__auto____1;
return cljs$core$async$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_16579 = f__14231__auto__();
(statearr_16579[(6)] = c__14230__auto___18466);

return statearr_16579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16588 = arguments.length;
switch (G__16588) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14230__auto___18525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_16643){
var state_val_16644 = (state_16643[(1)]);
if((state_val_16644 === (7))){
var inst_16621 = (state_16643[(7)]);
var inst_16620 = (state_16643[(8)]);
var inst_16620__$1 = (state_16643[(2)]);
var inst_16621__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16620__$1,(0),null);
var inst_16622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16620__$1,(1),null);
var inst_16625 = (inst_16621__$1 == null);
var state_16643__$1 = (function (){var statearr_16651 = state_16643;
(statearr_16651[(7)] = inst_16621__$1);

(statearr_16651[(8)] = inst_16620__$1);

(statearr_16651[(9)] = inst_16622);

return statearr_16651;
})();
if(cljs.core.truth_(inst_16625)){
var statearr_16652_18526 = state_16643__$1;
(statearr_16652_18526[(1)] = (8));

} else {
var statearr_16653_18527 = state_16643__$1;
(statearr_16653_18527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (1))){
var inst_16603 = cljs.core.vec(chs);
var inst_16604 = inst_16603;
var state_16643__$1 = (function (){var statearr_16655 = state_16643;
(statearr_16655[(10)] = inst_16604);

return statearr_16655;
})();
var statearr_16656_18530 = state_16643__$1;
(statearr_16656_18530[(2)] = null);

(statearr_16656_18530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (4))){
var inst_16604 = (state_16643[(10)]);
var state_16643__$1 = state_16643;
return cljs.core.async.ioc_alts_BANG_(state_16643__$1,(7),inst_16604);
} else {
if((state_val_16644 === (6))){
var inst_16639 = (state_16643[(2)]);
var state_16643__$1 = state_16643;
var statearr_16663_18532 = state_16643__$1;
(statearr_16663_18532[(2)] = inst_16639);

(statearr_16663_18532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (3))){
var inst_16641 = (state_16643[(2)]);
var state_16643__$1 = state_16643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16643__$1,inst_16641);
} else {
if((state_val_16644 === (2))){
var inst_16604 = (state_16643[(10)]);
var inst_16610 = cljs.core.count(inst_16604);
var inst_16611 = (inst_16610 > (0));
var state_16643__$1 = state_16643;
if(cljs.core.truth_(inst_16611)){
var statearr_16668_18533 = state_16643__$1;
(statearr_16668_18533[(1)] = (4));

} else {
var statearr_16670_18534 = state_16643__$1;
(statearr_16670_18534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (11))){
var inst_16604 = (state_16643[(10)]);
var inst_16632 = (state_16643[(2)]);
var tmp16666 = inst_16604;
var inst_16604__$1 = tmp16666;
var state_16643__$1 = (function (){var statearr_16671 = state_16643;
(statearr_16671[(10)] = inst_16604__$1);

(statearr_16671[(11)] = inst_16632);

return statearr_16671;
})();
var statearr_16672_18535 = state_16643__$1;
(statearr_16672_18535[(2)] = null);

(statearr_16672_18535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (9))){
var inst_16621 = (state_16643[(7)]);
var state_16643__$1 = state_16643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16643__$1,(11),out,inst_16621);
} else {
if((state_val_16644 === (5))){
var inst_16637 = cljs.core.async.close_BANG_(out);
var state_16643__$1 = state_16643;
var statearr_16678_18536 = state_16643__$1;
(statearr_16678_18536[(2)] = inst_16637);

(statearr_16678_18536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (10))){
var inst_16635 = (state_16643[(2)]);
var state_16643__$1 = state_16643;
var statearr_16682_18537 = state_16643__$1;
(statearr_16682_18537[(2)] = inst_16635);

(statearr_16682_18537[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16644 === (8))){
var inst_16604 = (state_16643[(10)]);
var inst_16621 = (state_16643[(7)]);
var inst_16620 = (state_16643[(8)]);
var inst_16622 = (state_16643[(9)]);
var inst_16627 = (function (){var cs = inst_16604;
var vec__16614 = inst_16620;
var v = inst_16621;
var c = inst_16622;
return (function (p1__16583_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16583_SHARP_);
});
})();
var inst_16628 = cljs.core.filterv(inst_16627,inst_16604);
var inst_16604__$1 = inst_16628;
var state_16643__$1 = (function (){var statearr_16683 = state_16643;
(statearr_16683[(10)] = inst_16604__$1);

return statearr_16683;
})();
var statearr_16684_18539 = state_16643__$1;
(statearr_16684_18539[(2)] = null);

(statearr_16684_18539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13159__auto__ = null;
var cljs$core$async$state_machine__13159__auto____0 = (function (){
var statearr_16689 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16689[(0)] = cljs$core$async$state_machine__13159__auto__);

(statearr_16689[(1)] = (1));

return statearr_16689;
});
var cljs$core$async$state_machine__13159__auto____1 = (function (state_16643){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_16643);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e16694){var ex__13162__auto__ = e16694;
var statearr_16698_18541 = state_16643;
(statearr_16698_18541[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_16643[(4)]))){
var statearr_16699_18542 = state_16643;
(statearr_16699_18542[(1)] = cljs.core.first((state_16643[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18543 = state_16643;
state_16643 = G__18543;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$state_machine__13159__auto__ = function(state_16643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13159__auto____1.call(this,state_16643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13159__auto____0;
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13159__auto____1;
return cljs$core$async$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_16703 = f__14231__auto__();
(statearr_16703[(6)] = c__14230__auto___18525);

return statearr_16703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16720 = arguments.length;
switch (G__16720) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14230__auto___18545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_16763){
var state_val_16764 = (state_16763[(1)]);
if((state_val_16764 === (7))){
var inst_16741 = (state_16763[(7)]);
var inst_16741__$1 = (state_16763[(2)]);
var inst_16742 = (inst_16741__$1 == null);
var inst_16743 = cljs.core.not(inst_16742);
var state_16763__$1 = (function (){var statearr_16772 = state_16763;
(statearr_16772[(7)] = inst_16741__$1);

return statearr_16772;
})();
if(inst_16743){
var statearr_16773_18546 = state_16763__$1;
(statearr_16773_18546[(1)] = (8));

} else {
var statearr_16774_18547 = state_16763__$1;
(statearr_16774_18547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (1))){
var inst_16732 = (0);
var state_16763__$1 = (function (){var statearr_16775 = state_16763;
(statearr_16775[(8)] = inst_16732);

return statearr_16775;
})();
var statearr_16776_18548 = state_16763__$1;
(statearr_16776_18548[(2)] = null);

(statearr_16776_18548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (4))){
var state_16763__$1 = state_16763;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16763__$1,(7),ch);
} else {
if((state_val_16764 === (6))){
var inst_16758 = (state_16763[(2)]);
var state_16763__$1 = state_16763;
var statearr_16778_18549 = state_16763__$1;
(statearr_16778_18549[(2)] = inst_16758);

(statearr_16778_18549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (3))){
var inst_16760 = (state_16763[(2)]);
var inst_16761 = cljs.core.async.close_BANG_(out);
var state_16763__$1 = (function (){var statearr_16780 = state_16763;
(statearr_16780[(9)] = inst_16760);

return statearr_16780;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16763__$1,inst_16761);
} else {
if((state_val_16764 === (2))){
var inst_16732 = (state_16763[(8)]);
var inst_16734 = (inst_16732 < n);
var state_16763__$1 = state_16763;
if(cljs.core.truth_(inst_16734)){
var statearr_16782_18554 = state_16763__$1;
(statearr_16782_18554[(1)] = (4));

} else {
var statearr_16783_18555 = state_16763__$1;
(statearr_16783_18555[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (11))){
var inst_16732 = (state_16763[(8)]);
var inst_16746 = (state_16763[(2)]);
var inst_16747 = (inst_16732 + (1));
var inst_16732__$1 = inst_16747;
var state_16763__$1 = (function (){var statearr_16784 = state_16763;
(statearr_16784[(10)] = inst_16746);

(statearr_16784[(8)] = inst_16732__$1);

return statearr_16784;
})();
var statearr_16786_18556 = state_16763__$1;
(statearr_16786_18556[(2)] = null);

(statearr_16786_18556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (9))){
var state_16763__$1 = state_16763;
var statearr_16788_18557 = state_16763__$1;
(statearr_16788_18557[(2)] = null);

(statearr_16788_18557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (5))){
var state_16763__$1 = state_16763;
var statearr_16789_18558 = state_16763__$1;
(statearr_16789_18558[(2)] = null);

(statearr_16789_18558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (10))){
var inst_16755 = (state_16763[(2)]);
var state_16763__$1 = state_16763;
var statearr_16790_18560 = state_16763__$1;
(statearr_16790_18560[(2)] = inst_16755);

(statearr_16790_18560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16764 === (8))){
var inst_16741 = (state_16763[(7)]);
var state_16763__$1 = state_16763;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16763__$1,(11),out,inst_16741);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13159__auto__ = null;
var cljs$core$async$state_machine__13159__auto____0 = (function (){
var statearr_16792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16792[(0)] = cljs$core$async$state_machine__13159__auto__);

(statearr_16792[(1)] = (1));

return statearr_16792;
});
var cljs$core$async$state_machine__13159__auto____1 = (function (state_16763){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_16763);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e16793){var ex__13162__auto__ = e16793;
var statearr_16794_18565 = state_16763;
(statearr_16794_18565[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_16763[(4)]))){
var statearr_16795_18566 = state_16763;
(statearr_16795_18566[(1)] = cljs.core.first((state_16763[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18567 = state_16763;
state_16763 = G__18567;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$state_machine__13159__auto__ = function(state_16763){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13159__auto____1.call(this,state_16763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13159__auto____0;
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13159__auto____1;
return cljs$core$async$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_16796 = f__14231__auto__();
(statearr_16796[(6)] = c__14230__auto___18545);

return statearr_16796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16813 = (function (f,ch,meta16811,_,fn1,meta16814){
this.f = f;
this.ch = ch;
this.meta16811 = meta16811;
this._ = _;
this.fn1 = fn1;
this.meta16814 = meta16814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16815,meta16814__$1){
var self__ = this;
var _16815__$1 = this;
return (new cljs.core.async.t_cljs$core$async16813(self__.f,self__.ch,self__.meta16811,self__._,self__.fn1,meta16814__$1));
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16815){
var self__ = this;
var _16815__$1 = this;
return self__.meta16814;
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16797_SHARP_){
var G__16819 = (((p1__16797_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16797_SHARP_) : self__.f.call(null,p1__16797_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16819) : f1.call(null,G__16819));
});
}));

(cljs.core.async.t_cljs$core$async16813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16811","meta16811",539107572,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16810","cljs.core.async/t_cljs$core$async16810",-933816404,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16814","meta16814",1225510402,null)], null);
}));

(cljs.core.async.t_cljs$core$async16813.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16813");

(cljs.core.async.t_cljs$core$async16813.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16813");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16813.
 */
cljs.core.async.__GT_t_cljs$core$async16813 = (function cljs$core$async$__GT_t_cljs$core$async16813(f,ch,meta16811,_,fn1,meta16814){
return (new cljs.core.async.t_cljs$core$async16813(f,ch,meta16811,_,fn1,meta16814));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16810 = (function (f,ch,meta16811){
this.f = f;
this.ch = ch;
this.meta16811 = meta16811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16812,meta16811__$1){
var self__ = this;
var _16812__$1 = this;
return (new cljs.core.async.t_cljs$core$async16810(self__.f,self__.ch,meta16811__$1));
}));

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16812){
var self__ = this;
var _16812__$1 = this;
return self__.meta16811;
}));

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16813(self__.f,self__.ch,self__.meta16811,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16831 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16831) : self__.f.call(null,G__16831));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16810.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16811","meta16811",539107572,null)], null);
}));

(cljs.core.async.t_cljs$core$async16810.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16810");

(cljs.core.async.t_cljs$core$async16810.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16810");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16810.
 */
cljs.core.async.__GT_t_cljs$core$async16810 = (function cljs$core$async$__GT_t_cljs$core$async16810(f,ch,meta16811){
return (new cljs.core.async.t_cljs$core$async16810(f,ch,meta16811));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16810(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16849 = (function (f,ch,meta16850){
this.f = f;
this.ch = ch;
this.meta16850 = meta16850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16851,meta16850__$1){
var self__ = this;
var _16851__$1 = this;
return (new cljs.core.async.t_cljs$core$async16849(self__.f,self__.ch,meta16850__$1));
}));

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16851){
var self__ = this;
var _16851__$1 = this;
return self__.meta16850;
}));

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16849.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16850","meta16850",-1091857400,null)], null);
}));

(cljs.core.async.t_cljs$core$async16849.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16849");

(cljs.core.async.t_cljs$core$async16849.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16849");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16849.
 */
cljs.core.async.__GT_t_cljs$core$async16849 = (function cljs$core$async$__GT_t_cljs$core$async16849(f,ch,meta16850){
return (new cljs.core.async.t_cljs$core$async16849(f,ch,meta16850));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16849(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16852 = (function (p,ch,meta16853){
this.p = p;
this.ch = ch;
this.meta16853 = meta16853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16854,meta16853__$1){
var self__ = this;
var _16854__$1 = this;
return (new cljs.core.async.t_cljs$core$async16852(self__.p,self__.ch,meta16853__$1));
}));

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16854){
var self__ = this;
var _16854__$1 = this;
return self__.meta16853;
}));

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16853","meta16853",-1358054935,null)], null);
}));

(cljs.core.async.t_cljs$core$async16852.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16852");

(cljs.core.async.t_cljs$core$async16852.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16852");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16852.
 */
cljs.core.async.__GT_t_cljs$core$async16852 = (function cljs$core$async$__GT_t_cljs$core$async16852(p,ch,meta16853){
return (new cljs.core.async.t_cljs$core$async16852(p,ch,meta16853));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16852(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16875 = arguments.length;
switch (G__16875) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14230__auto___18573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_16905){
var state_val_16906 = (state_16905[(1)]);
if((state_val_16906 === (7))){
var inst_16901 = (state_16905[(2)]);
var state_16905__$1 = state_16905;
var statearr_16907_18574 = state_16905__$1;
(statearr_16907_18574[(2)] = inst_16901);

(statearr_16907_18574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (1))){
var state_16905__$1 = state_16905;
var statearr_16908_18575 = state_16905__$1;
(statearr_16908_18575[(2)] = null);

(statearr_16908_18575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (4))){
var inst_16887 = (state_16905[(7)]);
var inst_16887__$1 = (state_16905[(2)]);
var inst_16888 = (inst_16887__$1 == null);
var state_16905__$1 = (function (){var statearr_16912 = state_16905;
(statearr_16912[(7)] = inst_16887__$1);

return statearr_16912;
})();
if(cljs.core.truth_(inst_16888)){
var statearr_16913_18576 = state_16905__$1;
(statearr_16913_18576[(1)] = (5));

} else {
var statearr_16914_18577 = state_16905__$1;
(statearr_16914_18577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (6))){
var inst_16887 = (state_16905[(7)]);
var inst_16892 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16887) : p.call(null,inst_16887));
var state_16905__$1 = state_16905;
if(cljs.core.truth_(inst_16892)){
var statearr_16915_18578 = state_16905__$1;
(statearr_16915_18578[(1)] = (8));

} else {
var statearr_16916_18579 = state_16905__$1;
(statearr_16916_18579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (3))){
var inst_16903 = (state_16905[(2)]);
var state_16905__$1 = state_16905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16905__$1,inst_16903);
} else {
if((state_val_16906 === (2))){
var state_16905__$1 = state_16905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16905__$1,(4),ch);
} else {
if((state_val_16906 === (11))){
var inst_16895 = (state_16905[(2)]);
var state_16905__$1 = state_16905;
var statearr_16919_18580 = state_16905__$1;
(statearr_16919_18580[(2)] = inst_16895);

(statearr_16919_18580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (9))){
var state_16905__$1 = state_16905;
var statearr_16924_18581 = state_16905__$1;
(statearr_16924_18581[(2)] = null);

(statearr_16924_18581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (5))){
var inst_16890 = cljs.core.async.close_BANG_(out);
var state_16905__$1 = state_16905;
var statearr_16925_18582 = state_16905__$1;
(statearr_16925_18582[(2)] = inst_16890);

(statearr_16925_18582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (10))){
var inst_16898 = (state_16905[(2)]);
var state_16905__$1 = (function (){var statearr_16927 = state_16905;
(statearr_16927[(8)] = inst_16898);

return statearr_16927;
})();
var statearr_16928_18583 = state_16905__$1;
(statearr_16928_18583[(2)] = null);

(statearr_16928_18583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16906 === (8))){
var inst_16887 = (state_16905[(7)]);
var state_16905__$1 = state_16905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16905__$1,(11),out,inst_16887);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13159__auto__ = null;
var cljs$core$async$state_machine__13159__auto____0 = (function (){
var statearr_16933 = [null,null,null,null,null,null,null,null,null];
(statearr_16933[(0)] = cljs$core$async$state_machine__13159__auto__);

(statearr_16933[(1)] = (1));

return statearr_16933;
});
var cljs$core$async$state_machine__13159__auto____1 = (function (state_16905){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_16905);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e16934){var ex__13162__auto__ = e16934;
var statearr_16935_18588 = state_16905;
(statearr_16935_18588[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_16905[(4)]))){
var statearr_16936_18589 = state_16905;
(statearr_16936_18589[(1)] = cljs.core.first((state_16905[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18590 = state_16905;
state_16905 = G__18590;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$state_machine__13159__auto__ = function(state_16905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13159__auto____1.call(this,state_16905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13159__auto____0;
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13159__auto____1;
return cljs$core$async$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_16938 = f__14231__auto__();
(statearr_16938[(6)] = c__14230__auto___18573);

return statearr_16938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16946 = arguments.length;
switch (G__16946) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14230__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_17051){
var state_val_17052 = (state_17051[(1)]);
if((state_val_17052 === (7))){
var inst_17042 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17066_18600 = state_17051__$1;
(statearr_17066_18600[(2)] = inst_17042);

(statearr_17066_18600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (20))){
var inst_16999 = (state_17051[(7)]);
var inst_17019 = (state_17051[(2)]);
var inst_17020 = cljs.core.next(inst_16999);
var inst_16976 = inst_17020;
var inst_16977 = null;
var inst_16978 = (0);
var inst_16979 = (0);
var state_17051__$1 = (function (){var statearr_17067 = state_17051;
(statearr_17067[(8)] = inst_16976);

(statearr_17067[(9)] = inst_16977);

(statearr_17067[(10)] = inst_16978);

(statearr_17067[(11)] = inst_16979);

(statearr_17067[(12)] = inst_17019);

return statearr_17067;
})();
var statearr_17069_18602 = state_17051__$1;
(statearr_17069_18602[(2)] = null);

(statearr_17069_18602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (1))){
var state_17051__$1 = state_17051;
var statearr_17070_18603 = state_17051__$1;
(statearr_17070_18603[(2)] = null);

(statearr_17070_18603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (4))){
var inst_16965 = (state_17051[(13)]);
var inst_16965__$1 = (state_17051[(2)]);
var inst_16966 = (inst_16965__$1 == null);
var state_17051__$1 = (function (){var statearr_17071 = state_17051;
(statearr_17071[(13)] = inst_16965__$1);

return statearr_17071;
})();
if(cljs.core.truth_(inst_16966)){
var statearr_17072_18605 = state_17051__$1;
(statearr_17072_18605[(1)] = (5));

} else {
var statearr_17073_18606 = state_17051__$1;
(statearr_17073_18606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (15))){
var state_17051__$1 = state_17051;
var statearr_17079_18607 = state_17051__$1;
(statearr_17079_18607[(2)] = null);

(statearr_17079_18607[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (21))){
var state_17051__$1 = state_17051;
var statearr_17085_18612 = state_17051__$1;
(statearr_17085_18612[(2)] = null);

(statearr_17085_18612[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (13))){
var inst_16976 = (state_17051[(8)]);
var inst_16977 = (state_17051[(9)]);
var inst_16978 = (state_17051[(10)]);
var inst_16979 = (state_17051[(11)]);
var inst_16995 = (state_17051[(2)]);
var inst_16996 = (inst_16979 + (1));
var tmp17076 = inst_16976;
var tmp17077 = inst_16977;
var tmp17078 = inst_16978;
var inst_16976__$1 = tmp17076;
var inst_16977__$1 = tmp17077;
var inst_16978__$1 = tmp17078;
var inst_16979__$1 = inst_16996;
var state_17051__$1 = (function (){var statearr_17089 = state_17051;
(statearr_17089[(8)] = inst_16976__$1);

(statearr_17089[(9)] = inst_16977__$1);

(statearr_17089[(10)] = inst_16978__$1);

(statearr_17089[(11)] = inst_16979__$1);

(statearr_17089[(14)] = inst_16995);

return statearr_17089;
})();
var statearr_17090_18614 = state_17051__$1;
(statearr_17090_18614[(2)] = null);

(statearr_17090_18614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (22))){
var state_17051__$1 = state_17051;
var statearr_17091_18615 = state_17051__$1;
(statearr_17091_18615[(2)] = null);

(statearr_17091_18615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (6))){
var inst_16965 = (state_17051[(13)]);
var inst_16974 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16965) : f.call(null,inst_16965));
var inst_16975 = cljs.core.seq(inst_16974);
var inst_16976 = inst_16975;
var inst_16977 = null;
var inst_16978 = (0);
var inst_16979 = (0);
var state_17051__$1 = (function (){var statearr_17096 = state_17051;
(statearr_17096[(8)] = inst_16976);

(statearr_17096[(9)] = inst_16977);

(statearr_17096[(10)] = inst_16978);

(statearr_17096[(11)] = inst_16979);

return statearr_17096;
})();
var statearr_17097_18616 = state_17051__$1;
(statearr_17097_18616[(2)] = null);

(statearr_17097_18616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (17))){
var inst_16999 = (state_17051[(7)]);
var inst_17003 = cljs.core.chunk_first(inst_16999);
var inst_17004 = cljs.core.chunk_rest(inst_16999);
var inst_17005 = cljs.core.count(inst_17003);
var inst_16976 = inst_17004;
var inst_16977 = inst_17003;
var inst_16978 = inst_17005;
var inst_16979 = (0);
var state_17051__$1 = (function (){var statearr_17103 = state_17051;
(statearr_17103[(8)] = inst_16976);

(statearr_17103[(9)] = inst_16977);

(statearr_17103[(10)] = inst_16978);

(statearr_17103[(11)] = inst_16979);

return statearr_17103;
})();
var statearr_17104_18617 = state_17051__$1;
(statearr_17104_18617[(2)] = null);

(statearr_17104_18617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (3))){
var inst_17044 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17051__$1,inst_17044);
} else {
if((state_val_17052 === (12))){
var inst_17032 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17105_18619 = state_17051__$1;
(statearr_17105_18619[(2)] = inst_17032);

(statearr_17105_18619[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (2))){
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17051__$1,(4),in$);
} else {
if((state_val_17052 === (23))){
var inst_17040 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17106_18623 = state_17051__$1;
(statearr_17106_18623[(2)] = inst_17040);

(statearr_17106_18623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (19))){
var inst_17027 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17107_18624 = state_17051__$1;
(statearr_17107_18624[(2)] = inst_17027);

(statearr_17107_18624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (11))){
var inst_16976 = (state_17051[(8)]);
var inst_16999 = (state_17051[(7)]);
var inst_16999__$1 = cljs.core.seq(inst_16976);
var state_17051__$1 = (function (){var statearr_17109 = state_17051;
(statearr_17109[(7)] = inst_16999__$1);

return statearr_17109;
})();
if(inst_16999__$1){
var statearr_17110_18625 = state_17051__$1;
(statearr_17110_18625[(1)] = (14));

} else {
var statearr_17111_18626 = state_17051__$1;
(statearr_17111_18626[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (9))){
var inst_17034 = (state_17051[(2)]);
var inst_17035 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17051__$1 = (function (){var statearr_17117 = state_17051;
(statearr_17117[(15)] = inst_17034);

return statearr_17117;
})();
if(cljs.core.truth_(inst_17035)){
var statearr_17121_18627 = state_17051__$1;
(statearr_17121_18627[(1)] = (21));

} else {
var statearr_17122_18628 = state_17051__$1;
(statearr_17122_18628[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (5))){
var inst_16968 = cljs.core.async.close_BANG_(out);
var state_17051__$1 = state_17051;
var statearr_17126_18629 = state_17051__$1;
(statearr_17126_18629[(2)] = inst_16968);

(statearr_17126_18629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (14))){
var inst_16999 = (state_17051[(7)]);
var inst_17001 = cljs.core.chunked_seq_QMARK_(inst_16999);
var state_17051__$1 = state_17051;
if(inst_17001){
var statearr_17128_18630 = state_17051__$1;
(statearr_17128_18630[(1)] = (17));

} else {
var statearr_17129_18631 = state_17051__$1;
(statearr_17129_18631[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (16))){
var inst_17030 = (state_17051[(2)]);
var state_17051__$1 = state_17051;
var statearr_17130_18632 = state_17051__$1;
(statearr_17130_18632[(2)] = inst_17030);

(statearr_17130_18632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17052 === (10))){
var inst_16977 = (state_17051[(9)]);
var inst_16979 = (state_17051[(11)]);
var inst_16993 = cljs.core._nth(inst_16977,inst_16979);
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17051__$1,(13),out,inst_16993);
} else {
if((state_val_17052 === (18))){
var inst_16999 = (state_17051[(7)]);
var inst_17015 = cljs.core.first(inst_16999);
var state_17051__$1 = state_17051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17051__$1,(20),out,inst_17015);
} else {
if((state_val_17052 === (8))){
var inst_16978 = (state_17051[(10)]);
var inst_16979 = (state_17051[(11)]);
var inst_16981 = (inst_16979 < inst_16978);
var inst_16982 = inst_16981;
var state_17051__$1 = state_17051;
if(cljs.core.truth_(inst_16982)){
var statearr_17134_18637 = state_17051__$1;
(statearr_17134_18637[(1)] = (10));

} else {
var statearr_17135_18638 = state_17051__$1;
(statearr_17135_18638[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13159__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13159__auto____0 = (function (){
var statearr_17141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17141[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13159__auto__);

(statearr_17141[(1)] = (1));

return statearr_17141;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13159__auto____1 = (function (state_17051){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_17051);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e17144){var ex__13162__auto__ = e17144;
var statearr_17145_18639 = state_17051;
(statearr_17145_18639[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_17051[(4)]))){
var statearr_17146_18642 = state_17051;
(statearr_17146_18642[(1)] = cljs.core.first((state_17051[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18644 = state_17051;
state_17051 = G__18644;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13159__auto__ = function(state_17051){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13159__auto____1.call(this,state_17051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13159__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13159__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_17147 = f__14231__auto__();
(statearr_17147[(6)] = c__14230__auto__);

return statearr_17147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));

return c__14230__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17151 = arguments.length;
switch (G__17151) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17163 = arguments.length;
switch (G__17163) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17169 = arguments.length;
switch (G__17169) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14230__auto___18655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_17212){
var state_val_17213 = (state_17212[(1)]);
if((state_val_17213 === (7))){
var inst_17207 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
var statearr_17217_18656 = state_17212__$1;
(statearr_17217_18656[(2)] = inst_17207);

(statearr_17217_18656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (1))){
var inst_17183 = null;
var state_17212__$1 = (function (){var statearr_17222 = state_17212;
(statearr_17222[(7)] = inst_17183);

return statearr_17222;
})();
var statearr_17223_18657 = state_17212__$1;
(statearr_17223_18657[(2)] = null);

(statearr_17223_18657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (4))){
var inst_17186 = (state_17212[(8)]);
var inst_17186__$1 = (state_17212[(2)]);
var inst_17187 = (inst_17186__$1 == null);
var inst_17188 = cljs.core.not(inst_17187);
var state_17212__$1 = (function (){var statearr_17224 = state_17212;
(statearr_17224[(8)] = inst_17186__$1);

return statearr_17224;
})();
if(inst_17188){
var statearr_17225_18660 = state_17212__$1;
(statearr_17225_18660[(1)] = (5));

} else {
var statearr_17226_18661 = state_17212__$1;
(statearr_17226_18661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (6))){
var state_17212__$1 = state_17212;
var statearr_17227_18662 = state_17212__$1;
(statearr_17227_18662[(2)] = null);

(statearr_17227_18662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (3))){
var inst_17209 = (state_17212[(2)]);
var inst_17210 = cljs.core.async.close_BANG_(out);
var state_17212__$1 = (function (){var statearr_17234 = state_17212;
(statearr_17234[(9)] = inst_17209);

return statearr_17234;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17212__$1,inst_17210);
} else {
if((state_val_17213 === (2))){
var state_17212__$1 = state_17212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17212__$1,(4),ch);
} else {
if((state_val_17213 === (11))){
var inst_17186 = (state_17212[(8)]);
var inst_17201 = (state_17212[(2)]);
var inst_17183 = inst_17186;
var state_17212__$1 = (function (){var statearr_17235 = state_17212;
(statearr_17235[(10)] = inst_17201);

(statearr_17235[(7)] = inst_17183);

return statearr_17235;
})();
var statearr_17236_18666 = state_17212__$1;
(statearr_17236_18666[(2)] = null);

(statearr_17236_18666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (9))){
var inst_17186 = (state_17212[(8)]);
var state_17212__$1 = state_17212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17212__$1,(11),out,inst_17186);
} else {
if((state_val_17213 === (5))){
var inst_17186 = (state_17212[(8)]);
var inst_17183 = (state_17212[(7)]);
var inst_17196 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17186,inst_17183);
var state_17212__$1 = state_17212;
if(inst_17196){
var statearr_17244_18670 = state_17212__$1;
(statearr_17244_18670[(1)] = (8));

} else {
var statearr_17245_18671 = state_17212__$1;
(statearr_17245_18671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (10))){
var inst_17204 = (state_17212[(2)]);
var state_17212__$1 = state_17212;
var statearr_17246_18672 = state_17212__$1;
(statearr_17246_18672[(2)] = inst_17204);

(statearr_17246_18672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17213 === (8))){
var inst_17183 = (state_17212[(7)]);
var tmp17243 = inst_17183;
var inst_17183__$1 = tmp17243;
var state_17212__$1 = (function (){var statearr_17247 = state_17212;
(statearr_17247[(7)] = inst_17183__$1);

return statearr_17247;
})();
var statearr_17249_18673 = state_17212__$1;
(statearr_17249_18673[(2)] = null);

(statearr_17249_18673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13159__auto__ = null;
var cljs$core$async$state_machine__13159__auto____0 = (function (){
var statearr_17250 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17250[(0)] = cljs$core$async$state_machine__13159__auto__);

(statearr_17250[(1)] = (1));

return statearr_17250;
});
var cljs$core$async$state_machine__13159__auto____1 = (function (state_17212){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_17212);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e17252){var ex__13162__auto__ = e17252;
var statearr_17253_18674 = state_17212;
(statearr_17253_18674[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_17212[(4)]))){
var statearr_17254_18675 = state_17212;
(statearr_17254_18675[(1)] = cljs.core.first((state_17212[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18676 = state_17212;
state_17212 = G__18676;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$state_machine__13159__auto__ = function(state_17212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13159__auto____1.call(this,state_17212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13159__auto____0;
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13159__auto____1;
return cljs$core$async$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_17258 = f__14231__auto__();
(statearr_17258[(6)] = c__14230__auto___18655);

return statearr_17258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17268 = arguments.length;
switch (G__17268) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14230__auto___18678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_17313){
var state_val_17314 = (state_17313[(1)]);
if((state_val_17314 === (7))){
var inst_17308 = (state_17313[(2)]);
var state_17313__$1 = state_17313;
var statearr_17323_18683 = state_17313__$1;
(statearr_17323_18683[(2)] = inst_17308);

(statearr_17323_18683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (1))){
var inst_17274 = (new Array(n));
var inst_17275 = inst_17274;
var inst_17276 = (0);
var state_17313__$1 = (function (){var statearr_17324 = state_17313;
(statearr_17324[(7)] = inst_17276);

(statearr_17324[(8)] = inst_17275);

return statearr_17324;
})();
var statearr_17325_18684 = state_17313__$1;
(statearr_17325_18684[(2)] = null);

(statearr_17325_18684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (4))){
var inst_17279 = (state_17313[(9)]);
var inst_17279__$1 = (state_17313[(2)]);
var inst_17280 = (inst_17279__$1 == null);
var inst_17281 = cljs.core.not(inst_17280);
var state_17313__$1 = (function (){var statearr_17329 = state_17313;
(statearr_17329[(9)] = inst_17279__$1);

return statearr_17329;
})();
if(inst_17281){
var statearr_17330_18687 = state_17313__$1;
(statearr_17330_18687[(1)] = (5));

} else {
var statearr_17331_18688 = state_17313__$1;
(statearr_17331_18688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (15))){
var inst_17302 = (state_17313[(2)]);
var state_17313__$1 = state_17313;
var statearr_17332_18689 = state_17313__$1;
(statearr_17332_18689[(2)] = inst_17302);

(statearr_17332_18689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (13))){
var state_17313__$1 = state_17313;
var statearr_17333_18690 = state_17313__$1;
(statearr_17333_18690[(2)] = null);

(statearr_17333_18690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (6))){
var inst_17276 = (state_17313[(7)]);
var inst_17298 = (inst_17276 > (0));
var state_17313__$1 = state_17313;
if(cljs.core.truth_(inst_17298)){
var statearr_17334_18691 = state_17313__$1;
(statearr_17334_18691[(1)] = (12));

} else {
var statearr_17335_18692 = state_17313__$1;
(statearr_17335_18692[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (3))){
var inst_17310 = (state_17313[(2)]);
var state_17313__$1 = state_17313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17313__$1,inst_17310);
} else {
if((state_val_17314 === (12))){
var inst_17275 = (state_17313[(8)]);
var inst_17300 = cljs.core.vec(inst_17275);
var state_17313__$1 = state_17313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17313__$1,(15),out,inst_17300);
} else {
if((state_val_17314 === (2))){
var state_17313__$1 = state_17313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17313__$1,(4),ch);
} else {
if((state_val_17314 === (11))){
var inst_17292 = (state_17313[(2)]);
var inst_17293 = (new Array(n));
var inst_17275 = inst_17293;
var inst_17276 = (0);
var state_17313__$1 = (function (){var statearr_17340 = state_17313;
(statearr_17340[(7)] = inst_17276);

(statearr_17340[(8)] = inst_17275);

(statearr_17340[(10)] = inst_17292);

return statearr_17340;
})();
var statearr_17341_18697 = state_17313__$1;
(statearr_17341_18697[(2)] = null);

(statearr_17341_18697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (9))){
var inst_17275 = (state_17313[(8)]);
var inst_17290 = cljs.core.vec(inst_17275);
var state_17313__$1 = state_17313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17313__$1,(11),out,inst_17290);
} else {
if((state_val_17314 === (5))){
var inst_17285 = (state_17313[(11)]);
var inst_17276 = (state_17313[(7)]);
var inst_17279 = (state_17313[(9)]);
var inst_17275 = (state_17313[(8)]);
var inst_17284 = (inst_17275[inst_17276] = inst_17279);
var inst_17285__$1 = (inst_17276 + (1));
var inst_17286 = (inst_17285__$1 < n);
var state_17313__$1 = (function (){var statearr_17342 = state_17313;
(statearr_17342[(11)] = inst_17285__$1);

(statearr_17342[(12)] = inst_17284);

return statearr_17342;
})();
if(cljs.core.truth_(inst_17286)){
var statearr_17343_18703 = state_17313__$1;
(statearr_17343_18703[(1)] = (8));

} else {
var statearr_17344_18704 = state_17313__$1;
(statearr_17344_18704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (14))){
var inst_17305 = (state_17313[(2)]);
var inst_17306 = cljs.core.async.close_BANG_(out);
var state_17313__$1 = (function (){var statearr_17350 = state_17313;
(statearr_17350[(13)] = inst_17305);

return statearr_17350;
})();
var statearr_17354_18707 = state_17313__$1;
(statearr_17354_18707[(2)] = inst_17306);

(statearr_17354_18707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (10))){
var inst_17296 = (state_17313[(2)]);
var state_17313__$1 = state_17313;
var statearr_17355_18712 = state_17313__$1;
(statearr_17355_18712[(2)] = inst_17296);

(statearr_17355_18712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17314 === (8))){
var inst_17285 = (state_17313[(11)]);
var inst_17275 = (state_17313[(8)]);
var tmp17349 = inst_17275;
var inst_17275__$1 = tmp17349;
var inst_17276 = inst_17285;
var state_17313__$1 = (function (){var statearr_17359 = state_17313;
(statearr_17359[(7)] = inst_17276);

(statearr_17359[(8)] = inst_17275__$1);

return statearr_17359;
})();
var statearr_17363_18713 = state_17313__$1;
(statearr_17363_18713[(2)] = null);

(statearr_17363_18713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13159__auto__ = null;
var cljs$core$async$state_machine__13159__auto____0 = (function (){
var statearr_17364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17364[(0)] = cljs$core$async$state_machine__13159__auto__);

(statearr_17364[(1)] = (1));

return statearr_17364;
});
var cljs$core$async$state_machine__13159__auto____1 = (function (state_17313){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_17313);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e17365){var ex__13162__auto__ = e17365;
var statearr_17366_18715 = state_17313;
(statearr_17366_18715[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_17313[(4)]))){
var statearr_17367_18717 = state_17313;
(statearr_17367_18717[(1)] = cljs.core.first((state_17313[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18718 = state_17313;
state_17313 = G__18718;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$state_machine__13159__auto__ = function(state_17313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13159__auto____1.call(this,state_17313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13159__auto____0;
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13159__auto____1;
return cljs$core$async$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_17371 = f__14231__auto__();
(statearr_17371[(6)] = c__14230__auto___18678);

return statearr_17371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17376 = arguments.length;
switch (G__17376) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14230__auto___18724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14231__auto__ = (function (){var switch__13158__auto__ = (function (state_17424){
var state_val_17425 = (state_17424[(1)]);
if((state_val_17425 === (7))){
var inst_17420 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
var statearr_17426_18726 = state_17424__$1;
(statearr_17426_18726[(2)] = inst_17420);

(statearr_17426_18726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (1))){
var inst_17377 = [];
var inst_17378 = inst_17377;
var inst_17379 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17424__$1 = (function (){var statearr_17430 = state_17424;
(statearr_17430[(7)] = inst_17379);

(statearr_17430[(8)] = inst_17378);

return statearr_17430;
})();
var statearr_17431_18730 = state_17424__$1;
(statearr_17431_18730[(2)] = null);

(statearr_17431_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (4))){
var inst_17382 = (state_17424[(9)]);
var inst_17382__$1 = (state_17424[(2)]);
var inst_17383 = (inst_17382__$1 == null);
var inst_17384 = cljs.core.not(inst_17383);
var state_17424__$1 = (function (){var statearr_17432 = state_17424;
(statearr_17432[(9)] = inst_17382__$1);

return statearr_17432;
})();
if(inst_17384){
var statearr_17433_18731 = state_17424__$1;
(statearr_17433_18731[(1)] = (5));

} else {
var statearr_17434_18732 = state_17424__$1;
(statearr_17434_18732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (15))){
var inst_17378 = (state_17424[(8)]);
var inst_17412 = cljs.core.vec(inst_17378);
var state_17424__$1 = state_17424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17424__$1,(18),out,inst_17412);
} else {
if((state_val_17425 === (13))){
var inst_17407 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
var statearr_17435_18733 = state_17424__$1;
(statearr_17435_18733[(2)] = inst_17407);

(statearr_17435_18733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (6))){
var inst_17378 = (state_17424[(8)]);
var inst_17409 = inst_17378.length;
var inst_17410 = (inst_17409 > (0));
var state_17424__$1 = state_17424;
if(cljs.core.truth_(inst_17410)){
var statearr_17436_18734 = state_17424__$1;
(statearr_17436_18734[(1)] = (15));

} else {
var statearr_17437_18735 = state_17424__$1;
(statearr_17437_18735[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (17))){
var inst_17417 = (state_17424[(2)]);
var inst_17418 = cljs.core.async.close_BANG_(out);
var state_17424__$1 = (function (){var statearr_17439 = state_17424;
(statearr_17439[(10)] = inst_17417);

return statearr_17439;
})();
var statearr_17440_18736 = state_17424__$1;
(statearr_17440_18736[(2)] = inst_17418);

(statearr_17440_18736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (3))){
var inst_17422 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17424__$1,inst_17422);
} else {
if((state_val_17425 === (12))){
var inst_17378 = (state_17424[(8)]);
var inst_17397 = cljs.core.vec(inst_17378);
var state_17424__$1 = state_17424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17424__$1,(14),out,inst_17397);
} else {
if((state_val_17425 === (2))){
var state_17424__$1 = state_17424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17424__$1,(4),ch);
} else {
if((state_val_17425 === (11))){
var inst_17378 = (state_17424[(8)]);
var inst_17386 = (state_17424[(11)]);
var inst_17382 = (state_17424[(9)]);
var inst_17394 = inst_17378.push(inst_17382);
var tmp17441 = inst_17378;
var inst_17378__$1 = tmp17441;
var inst_17379 = inst_17386;
var state_17424__$1 = (function (){var statearr_17447 = state_17424;
(statearr_17447[(7)] = inst_17379);

(statearr_17447[(8)] = inst_17378__$1);

(statearr_17447[(12)] = inst_17394);

return statearr_17447;
})();
var statearr_17448_18737 = state_17424__$1;
(statearr_17448_18737[(2)] = null);

(statearr_17448_18737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (9))){
var inst_17379 = (state_17424[(7)]);
var inst_17390 = cljs.core.keyword_identical_QMARK_(inst_17379,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17424__$1 = state_17424;
var statearr_17449_18738 = state_17424__$1;
(statearr_17449_18738[(2)] = inst_17390);

(statearr_17449_18738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (5))){
var inst_17379 = (state_17424[(7)]);
var inst_17387 = (state_17424[(13)]);
var inst_17386 = (state_17424[(11)]);
var inst_17382 = (state_17424[(9)]);
var inst_17386__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17382) : f.call(null,inst_17382));
var inst_17387__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17386__$1,inst_17379);
var state_17424__$1 = (function (){var statearr_17451 = state_17424;
(statearr_17451[(13)] = inst_17387__$1);

(statearr_17451[(11)] = inst_17386__$1);

return statearr_17451;
})();
if(inst_17387__$1){
var statearr_17455_18739 = state_17424__$1;
(statearr_17455_18739[(1)] = (8));

} else {
var statearr_17456_18740 = state_17424__$1;
(statearr_17456_18740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (14))){
var inst_17386 = (state_17424[(11)]);
var inst_17382 = (state_17424[(9)]);
var inst_17399 = (state_17424[(2)]);
var inst_17400 = [];
var inst_17404 = inst_17400.push(inst_17382);
var inst_17378 = inst_17400;
var inst_17379 = inst_17386;
var state_17424__$1 = (function (){var statearr_17457 = state_17424;
(statearr_17457[(14)] = inst_17404);

(statearr_17457[(7)] = inst_17379);

(statearr_17457[(8)] = inst_17378);

(statearr_17457[(15)] = inst_17399);

return statearr_17457;
})();
var statearr_17458_18741 = state_17424__$1;
(statearr_17458_18741[(2)] = null);

(statearr_17458_18741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (16))){
var state_17424__$1 = state_17424;
var statearr_17459_18742 = state_17424__$1;
(statearr_17459_18742[(2)] = null);

(statearr_17459_18742[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (10))){
var inst_17392 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
if(cljs.core.truth_(inst_17392)){
var statearr_17460_18743 = state_17424__$1;
(statearr_17460_18743[(1)] = (11));

} else {
var statearr_17461_18744 = state_17424__$1;
(statearr_17461_18744[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (18))){
var inst_17414 = (state_17424[(2)]);
var state_17424__$1 = state_17424;
var statearr_17462_18745 = state_17424__$1;
(statearr_17462_18745[(2)] = inst_17414);

(statearr_17462_18745[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17425 === (8))){
var inst_17387 = (state_17424[(13)]);
var state_17424__$1 = state_17424;
var statearr_17463_18747 = state_17424__$1;
(statearr_17463_18747[(2)] = inst_17387);

(statearr_17463_18747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13159__auto__ = null;
var cljs$core$async$state_machine__13159__auto____0 = (function (){
var statearr_17464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17464[(0)] = cljs$core$async$state_machine__13159__auto__);

(statearr_17464[(1)] = (1));

return statearr_17464;
});
var cljs$core$async$state_machine__13159__auto____1 = (function (state_17424){
while(true){
var ret_value__13160__auto__ = (function (){try{while(true){
var result__13161__auto__ = switch__13158__auto__(state_17424);
if(cljs.core.keyword_identical_QMARK_(result__13161__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13161__auto__;
}
break;
}
}catch (e17465){var ex__13162__auto__ = e17465;
var statearr_17466_18749 = state_17424;
(statearr_17466_18749[(2)] = ex__13162__auto__);


if(cljs.core.seq((state_17424[(4)]))){
var statearr_17467_18750 = state_17424;
(statearr_17467_18750[(1)] = cljs.core.first((state_17424[(4)])));

} else {
throw ex__13162__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13160__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18751 = state_17424;
state_17424 = G__18751;
continue;
} else {
return ret_value__13160__auto__;
}
break;
}
});
cljs$core$async$state_machine__13159__auto__ = function(state_17424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13159__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13159__auto____1.call(this,state_17424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13159__auto____0;
cljs$core$async$state_machine__13159__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13159__auto____1;
return cljs$core$async$state_machine__13159__auto__;
})()
})();
var state__14232__auto__ = (function (){var statearr_17468 = f__14231__auto__();
(statearr_17468[(6)] = c__14230__auto___18724);

return statearr_17468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14232__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
