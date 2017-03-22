$(document).ready(function(){
	$("label").on('click', function(e){
		e.preventDefault()
		if($(this).find("+ section").hasClass('open')) {
			$("section").removeClass('open')
		} else {
			$("section").removeClass('open')
			$(this).find("+ section").addClass('open')
			}
		})
	})

<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>


})