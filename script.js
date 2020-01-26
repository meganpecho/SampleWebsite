
// document.getElementById("formSubmit").onSubmit = onSubmitForm(
//     document.getElementById("nameInput").innerHTML,
//     document.getElementById("gradeInput").innerHTML
// )

function onSubmitForm() {
    let finalName = document.getElementById('nameInput').value
    let finalGrade = document.getElementById('gradeInput').value
    console.log(finalName)
    console.log(finalGrade)
    if (finalName === undefined || finalName === "") {
        finalName = "there"
    }

    if (finalGrade === undefined || finalGrade === "") {
        finalGrade = "All grades are"
    } else {
        finalGrade = finalGrade + " grade is"
    }
    alert("Hey " + finalName + "!! " + finalGrade + " great!")
}

function onPressHelloButton() {
    alert("Hi there!")
}

function toggleActive() {
	$('.menu-toggle').toggleClass('active');
	$('.nav').toggleClass('activeNav');
}

// Smooth scroll from https://css-tricks.com/smooth-scrolling-accessibility/
function filterPath(string) {
  return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
}

var locationPath = filterPath(location.pathname);
$('a[href*="#"]').each(function () {
  var thisPath = filterPath(this.pathname) || locationPath;
  var hash = this.hash;
  var header_height = $('.nav').outerHeight();
  if ($("#" + hash.replace(/#/, '')).length) {
    if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
      var $target = $(hash), target = this.hash;
      if (target) {
        $(this).click(function (event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: ($target.offset().top) - header_height}, 1000);       
        });
      }
    }
  }
});