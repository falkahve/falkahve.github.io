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
	"http://code.jquery.com/jquery-1.10.2.min.js",
    "http://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js",
	"http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
    "http://cdn.soruonline.com/js/jquery.fittext.js",
    "http://cdn.soruonline.com/js/bootstrap-maxlength.min.js",
    // "http://cdn.soruonline.com/js/token/bootstrap-tagsinput.min.js",
    "http://timschlechter.github.io/bootstrap-tagsinput/examples/bower_components/angular/angular.min.js",
    "http://timschlechter.github.io/bootstrap-tagsinput/examples/bower_components/typeahead.js/dist/typeahead.min.js",
    "http://timschlechter.github.io/bootstrap-tagsinput/dist/bootstrap-tagsinput-angular.js",
    "http://timschlechter.github.io/bootstrap-tagsinput/examples/bower_components/typeahead.js/test/vendor/hogan-2.0.0.js",
    "http://timschlechter.github.io/bootstrap-tagsinput/dist/bootstrap-tagsinput.js",
	"http://cdn.soruonline.com/js/application.light.web.js"
],function(){
    console.info('loaded.');
});
