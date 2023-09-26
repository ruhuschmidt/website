console.log('javascript');

$(function() {
$('#slideshow img:gt(0)').hide();
setInterval(function() {
$('#slideshow :first-child')
.fadeOut(1000)
.next('img')
.fadeIn(1000)
.end()

.appendTo('#slideshow');
}, 4000);
$(function redirect() {
            window.location.href = "work.html"; 
        }
});