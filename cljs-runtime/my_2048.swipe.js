goog.provide('my_2048.swipe');
var module$node_modules$rxjs$dist$cjs$index=shadow.js.require("module$node_modules$rxjs$dist$cjs$index", {});
my_2048.swipe.one_touch_QMARK_ = module$node_modules$rxjs$dist$cjs$index.filter((function (t){
return (t.touches.length === (1));
}));
my_2048.swipe.prevent_def = module$node_modules$rxjs$dist$cjs$index.tap((function (p1__11325_SHARP_){
return p1__11325_SHARP_.preventDefault();
}));
my_2048.swipe.get_xy = (function my_2048$swipe$get_xy(event){
var touches = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event.type,"touchend"))?event.changedTouches:event.touches);
var point = (touches[(0)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [point.pageX,point.pageY], null);
});
my_2048.swipe.log = (function my_2048$swipe$log(msg){
return (function (event){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg,my_2048.swipe.get_xy(event)], 0));
});
});
my_2048.swipe.get_direction = (function my_2048$swipe$get_direction(dx,dy){
if((Math.abs(dx) >= Math.abs(dy))){
if((dx > (0))){
return new cljs.core.Keyword(null,"right","right",-452581833);
} else {
return new cljs.core.Keyword(null,"left","left",-399115937);
}
} else {
if((Math.abs(dx) < Math.abs(dy))){
if((dy > (0))){
return new cljs.core.Keyword(null,"up","up",-269712113);
} else {
return new cljs.core.Keyword(null,"down","down",1565245570);
}
} else {
return null;
}
}
});
my_2048.swipe.arrowSwipe = (function my_2048$swipe$arrowSwipe(){
return module$node_modules$rxjs$dist$cjs$index.fromEvent(document,"keydown").pipe(module$node_modules$rxjs$dist$cjs$index.map((function (event){
return (my_2048.utils.arrow_direction.cljs$core$IFn$_invoke$arity$1 ? my_2048.utils.arrow_direction.cljs$core$IFn$_invoke$arity$1(event.key) : my_2048.utils.arrow_direction.call(null,event.key));
})));
});
my_2048.swipe.touchSwipe = (function my_2048$swipe$touchSwipe(el){
var get_stream = (function (p1__11326_SHARP_){
var G__11327 = module$node_modules$rxjs$dist$cjs$index.fromEvent(el,p1__11326_SHARP_);
return (my_2048.swipe.prevent_def.cljs$core$IFn$_invoke$arity$1 ? my_2048.swipe.prevent_def.cljs$core$IFn$_invoke$arity$1(G__11327) : my_2048.swipe.prevent_def.call(null,G__11327));
});
var touch_start = get_stream("touchstart");
var touch_move = get_stream("touchmove");
var touch_end = get_stream("touchend");
var changedDirection = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var is_growing_QMARK_ = (function (x0,y0,pt,nt){
var vec__11328 = pt;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11328,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11328,(1),null);
var vec__11331 = nt;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11331,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11331,(1),null);
var dpx = Math.abs((px - x0));
var dpy = Math.abs((y0 - py));
var dnx = Math.abs((nx - x0));
var dny = Math.abs((y0 - ny));
return (((dnx >= dpx)) && ((dny >= dpy)));
});
var swipe_pipe = (function (ts){
var touch0 = (ts.touches[(0)]);
var x0 = touch0.pageX;
var y0 = touch0.pageY;
return touch_move.pipe(module$node_modules$rxjs$dist$cjs$index.tap(cljs.core.println),my_2048.swipe.one_touch_QMARK_,module$node_modules$rxjs$dist$cjs$index.map(my_2048.swipe.get_xy),module$node_modules$rxjs$dist$cjs$index.map((function (p__11334,_){
var vec__11335 = p__11334;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11335,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11335,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nx,ny], null),my_2048.swipe.get_direction((nx - x0),(y0 - ny))], null);
})),module$node_modules$rxjs$dist$cjs$index.pairwise(),module$node_modules$rxjs$dist$cjs$index.tap((function (p__11338,_){
var vec__11339 = p__11338;
var vec__11342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11339,(0),null);
var pt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11342,(0),null);
var old_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11342,(1),null);
var vec__11345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11339,(1),null);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11345,(0),null);
var new_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11345,(1),null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(changedDirection,(function (){
if((((cljs.core.deref(changedDirection) === (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_direction,new_direction)))){
return (0);
} else {
return (1);
}
}));
})),module$node_modules$rxjs$dist$cjs$index.takeWhile((function (p__11348,_){
var vec__11349 = p__11348;
var vec__11352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11349,(0),null);
var pt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11352,(0),null);
var old_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11352,(1),null);
var vec__11355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11349,(1),null);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11355,(0),null);
var new_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11355,(1),null);
return is_growing_QMARK_(x0,y0,pt,nt);
})),module$node_modules$rxjs$dist$cjs$index.takeWhile((function (p__11358,_){
var vec__11359 = p__11358;
var vec__11362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11359,(0),null);
var pt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11362,(0),null);
var old_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11362,(1),null);
var vec__11365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11359,(1),null);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11365,(0),null);
var new_direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11365,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_direction,new_direction)) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_direction,new_direction)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(changedDirection),(1))))));
})),module$node_modules$rxjs$dist$cjs$index.takeUntil(touch_end),module$node_modules$rxjs$dist$cjs$index.takeLast((1)),module$node_modules$rxjs$dist$cjs$index.map((function (p__11368,_,___$1){
var vec__11369 = p__11368;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11369,(0),null);
var vec__11372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11369,(1),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11372,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11372,(1),null);
return direction;
})));
});
var drag = touch_start.pipe(my_2048.swipe.one_touch_QMARK_,module$node_modules$rxjs$dist$cjs$index.tap((function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ololo"], 0));
})),module$node_modules$rxjs$dist$cjs$index.switchMap(swipe_pipe));
touch_move.subscribe(cljs.core.println);

return drag;
});

//# sourceMappingURL=my_2048.swipe.js.map
