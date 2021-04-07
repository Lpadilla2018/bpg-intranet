// function myMap() {
//     var mapOptions = {
//         center: new google.maps.LatLng(33.3521419,-111.9681314,17),
//         zoom: 5,};
//         mapTypeId: google.maps.MapTypeId.ROADMAP;
// var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// }

// $(document).ready(function(){
//   $("li").hover(function(){
//     $(this).css("background-color", "rgb(235,184,36, .4)");
//   }, function(){
//     $(this).css("background-color", " #333");
//   });
//   })

$(document).ready(function () {
  fadeInImages();
  goToSite();
  showMore();
  appImageHover();
  myMap();

  writeTo();
});

function fadeInImages() {
  $('#photoGallery img').hover(
    function () {
      $(this).animate(
        {
          height: '305px',
          padding: '8px',
        },
        300
      );
    },
    function () {
      $(this).animate(
        {
          height: '300px',
          padding: '5',
        },
        300
      );
    }
  );
}

function showMore() {
  $('#moreButton').click(function () {
    if ($('#additionalApps').is(':hidden')) {
      $('#additionalApps').show('slow');
      $('#moreButton').text('Show Less');
    } else {
      $('#additionalApps').slideUp('slow');
      $('#moreButton').text('Show More');
    }
  });
}

// images will have opacity effect
function appImageHover() {
  $('#resourceBlock img, .appBox img').hover(
    function () {
      $(this).css({
        opacity: '.8',
        'background-color': 'rgb(253, 247, 239, .2)',
      });
    },
    function () {
      $(this).css({
        opacity: '1',
        'background-color': 'transparent',
      });
    }
  );
}

function goToSite() {
  var appImages = $('#resourceBlock img, .appBox img');
  appImages.click(function (event) {
    alert(`Opening the ${event.currentTarget.alt} in a new page.`);
  });
}

// From Google add more comments
function myMap() {
  var mapCanvas = document.getElementById('map');
  var myCenter = new google.maps.LatLng(33.3521058, -111.965907);
  var mapOptions = {
    center: myCenter,
    zoom: 15,
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.DROP,
  });
  marker.setMap(map);
  var infowindow = new google.maps.InfoWindow({
    content: 'BPG Designs',
  });
  infowindow.open(map, marker);
}

function formValidate() {
  let alphaCharCheck = /^[a-zA-Z]*$/;
  let firstName = document.getElementById('firstName');
  let lastName = document.getElementById('lastName');
  let outputFname = firstName.value;
  let outputLname = lastName.value;
  if (firstName.value.length <= 2 || !alphaCharCheck.exec(firstName.value)) {
    alert('First name is invalid. Please complete the form.');
    firstName.style.backgroundColor = '#ffb3b3';
    $('#resultsFirstName').text('-Invalid-');
    firstName.focus();
    return false;
  } else if (
    lastName.value.length <= 2 ||
    !alphaCharCheck.exec(lastName.value)
  ) {
    alert('Last name is invalid. Please complete the form.');
    lastName.style.backgroundColor = '#ffb3b3';
    $('#resultsFirstName').text('');
    $('#resultsLastName').text('-Invalid-');
    lastName.focus();
    return false;
  } else {
    alert(`Thanks for submitting your form ${outputFname} ${outputLname}!`);
    return true;
  }
}
