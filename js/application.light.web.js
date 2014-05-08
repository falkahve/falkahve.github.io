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

// $('#tokenfield').tokenfield({
// 				  typeahead: [null, { source: ['red','blue','green','yellow','violet','brown','purple','black','white'] }]
// 				  // autocomplete: {
// 				  //   source: ['red','blue','green','yellow','violet','brown','purple','black','white'],
// 				  //   delay: 100
// 				  // },
// 				  // showAutocompleteOnFocus: true
// 				})

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

$('input').tagsinput({
  itemValue: 'value',
  itemText: 'text'
});
$('input').tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
$('input').tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
$('input').tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
$('input').tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
$('input').tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });
 
$('input').tagsinput('input').typeahead({
  valueKey: 'text',
  prefetch: 'assets/cities.json',
  template: '<p>{{text}}</p>',
  engine: Hogan
 
}).bind('typeahead:selected', $.proxy(function (obj, datum) {
	this.tagsinput('add', datum);
	this.tagsinput('input').typeahead('setQuery', '');
}, $('input')));



