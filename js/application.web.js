function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
        script.onreadystatechange = script.onload = null;
        	handler();
        }
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild( script );
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
	"//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
   	"jquery.fittext.js",
	"highlight.pack.js",
	"jasny-bootstrap.min.js",
	"docs.min.js",
	"bootstrap-maxlength.min.js"
],function(){
    console.info('All things are loaded');
});

if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
}

$(document).ready(function() {
		 $('textarea[id^="textarea_"]').maxlength({
			 alwaysShow: true,
             warningClass: 'label label-warning',
             limitReachedClass: 'label label-success'
	     });
});
