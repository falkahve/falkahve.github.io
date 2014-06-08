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
	"http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
  "http://cdn.falkahve.com/js/jquery.fittext.js",
	"http://cdn.falkahve.com/js/jasny-bootstrap.min.js",
	"http://cdn.falkahve.com/js/application.android.js"
],function(){
    console.info('loaded.');
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-48834615-1', 'falkahve.com');
ga('require', 'displayfeatures');
ga('send', 'pageview');