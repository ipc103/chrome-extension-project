

var date = new Date("2015/12/02");
var oneDay = 24*60*60*1000; 

var images = [
  "http://cdn.wonderfulengineering.com/wp-content/uploads/2015/05/paris-wallpaper-7.jpg", 
  "http://cdn.wonderfulengineering.com/wp-content/uploads/2015/05/paris-wallpaper-4.jpeg",
  "http://www.siwallpaper.com/wp-content/uploads/2015/05/beautiful_paris_wallpaper_widescreen_9.jpg",
  "https://www.explore-europe.de/wp-content/uploads/2015/04/hapenny-bridge-dublin-world-hd-wallpaper-1920x1200-4511.jpg",
  "http://img1.gtsstatic.com/wallpapers/33961c7aa5b6a767f3050fda532a9544_large.jpeg"
]

$(document).ready(function(){
  var dateText = new Date;
  var countDown = Math.abs( (dateText.getTime() - date.getTime()) / oneDay);
  $('#date').html(Math.round(countDown));
  $('body').css({'background-image': 'url(' + images[Math.floor(Math.random() * images.length)] + ')'});
});