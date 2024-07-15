$(function () {
	$('input.calendar').click(function(){
		$(this).removeAttr('value');
	});
	$('input.calendar').pignoseCalendar({
		format: 'YYYY-MM-DD',
		lang: 'en'//한글을 원하면 ko로 값 바꾸기
	});
});