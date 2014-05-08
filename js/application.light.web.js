if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
}

// $.backstretch("http://cdn.soruonline.com/img/bg1.jpg", {speed: 500});
// $('.cropme').simpleCropper();

// $('input').tagsinput({
// 	typeahead: {
// 	  source: ['Amsterdam', 'Washington', 'Sydney', 'Beijing', 'Cairo']
// 	}
// });

var elt = $('input');
elt.tagsinput({
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

elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });

elt.tagsinput('input').typeahead({
  valueKey: 'text',
  source: ['Amsterdam', 'Washington', 'Sydney', 'Beijing', 'Cairo'],
  template: '<p>{{text}}</p>',                                       
  engine: Hogan
}).bind('typeahead:selected', $.proxy(function (obj, datum) {  
	this.tagsinput('add', datum);
	this.tagsinput('input').typeahead('setQuery', '');
}, elt));


function show(obj) {
		    var el = document.getElementById(obj);
		    el.style.display = 'block';
		}

$(document).ready(function() {
 	$('textarea[id^="textarea_"]').maxlength({
		alwaysShow: true,
     		warningClass: 'label label-warning',
     		limitReachedClass: 'label label-success'
     	});
});



 


