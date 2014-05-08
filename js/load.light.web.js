function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
        script.onreadystatechange = script.onload = null;
        	handler();
        }
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
        //(head || document.body).appendChild( script );
    };
    (function(){
        if(array.length!=0){
        	loader(array.shift(),arguments.callee);
        }else{
        	callback && callback();
        }
    })();
}

loadScripts([
	"http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js",
	"http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
    "http://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.10.2/typeahead.bundle.min.js",
    "http://cdn.soruonline.com/js/jquery.fittext.js",
    "http://cdn.soruonline.com/js/bootstrap-maxlength.min.js",
    "http://cdn.soruonline.com/js/bootstrap-tagsinput.js",
	"http://cdn.soruonline.com/js/application.light.web.js"
],function(){
    console.info('loaded.');
});
