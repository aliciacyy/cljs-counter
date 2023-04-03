
shadow.cljs.devtools.client.env.module_loaded('main');

try { counter.app.init(); } catch (e) { console.error("An error occurred when calling (counter.app/init)"); throw(e); }