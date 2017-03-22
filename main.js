$(document).ready(function(){
	$("a").on('click', function(){
		$("section").removeClass('open')
		$(this).find("+ section").addClass('open')
	})

<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>


})