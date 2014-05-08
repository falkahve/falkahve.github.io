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

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

$('.tagsinput').tagsinput({
  typeahead: {
    source: substringMatcher(states)
  }
});

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



 


