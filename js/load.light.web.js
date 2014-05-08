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

$('.example_tagclass >> input').tagsinput({
  tagClass: function(item) {
    switch (item.continent) {
      case 'Europe'   : return 'label label-primary';
      case 'America'  : return 'label label-danger label-important';
      case 'Australia': return 'label label-success';
      case 'Africa'   : return 'label label-default';
      case 'Asia'     : return 'label label-warning';
    }
  },
  itemValue: 'value',
  itemText: 'text'
});
$('input').tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
$('input').tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
$('input').tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
$('input').tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
$('input').tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });
 
// Adding custom typeahead support using http://twitter.github.io/typeahead.js
$('input').tagsinput('input').typeahead({
  valueKey: 'text',
  prefetch: 'cities.json',
  template: '<p>{{text}}</p>',                                      
  engine: Hogan
}).bind('typeahead:selected', $.proxy(function (obj, datum) {  
  this.tagsinput('add', datum);
  this.tagsinput('input').typeahead('setQuery', '');
}, $('input')));

loadScripts([
	"http://code.jquery.com/jquery-1.10.2.min.js",
	"http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
    "http://cdnjs.cloudflare.com/ajax/libs/typeahead.js/0.10.2/typeahead.bundle.min.js",
    "http://cdn.soruonline.com/js/jquery.fittext.js",
    "http://cdn.soruonline.com/js/bootstrap-maxlength.min.js",
    "http://cdn.soruonline.com/js/bootstrap-tagsinput.js",
	"http://cdn.soruonline.com/js/application.light.web.js"
],function(){
    console.info('loaded.');
});
