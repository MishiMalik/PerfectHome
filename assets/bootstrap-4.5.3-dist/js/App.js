


//   Video Pause Play

var tl = new TimelineMax(),
    $videoContainer = $('.cb-video-container'),
    $video = $videoContainer.find('.video'),
    $playPauseClickArea = $videoContainer.find('.play-pause--click-area'),
    $playPauseContainer = $videoContainer.find('.play-pause--container'),
    $playIcon = $videoContainer.find('.play-icon'),
    $pauseIcon = $videoContainer.find('.pause-icon'),

    iconIsToggled = false,
    iconEase = Back.easeInOut.config(1.7),
    iconDuration = 0.3;

setupVideo();

// functions 
function setupVideo() {
  TweenMax.set($pauseIcon, {autoAlpha:0, scale:0});
  TweenMax.set($playPauseClickArea, {backgroundColor:'rgba(0, 0, 0, 0)'})
};

function showPaused() {
  iconIsToggled = true;

  tl.play();
  tl.to($playIcon, iconDuration, {autoAlpha:0, scale:0, ease:iconEase}, 0);
  tl.to($pauseIcon, iconDuration, {autoAlpha:1, scale:1, ease:iconEase}, 0);

  TweenMax.to($playPauseClickArea, iconDuration, {backgroundColor:'rgba(0, 0, 0, 0)'}, 0)

  console.log('playing - show pause');
  $video.get(0).play();
}

function showPlay() {
  iconIsToggled = false;

  tl.reverse();

  TweenMax.to($playPauseClickArea, iconDuration, {backgroundColor:'rgba(0, 0, 0, 0)'}, 0)

  console.log('paused - show play'); 
  $video.get(0).pause();
}

// event handlers
$playPauseClickArea.on('click', function(){
  !iconIsToggled ? showPaused() : showPlay();
});

$playPauseClickArea.on('mouseleave', function() {
  if (iconIsToggled === true) TweenMax.to($playPauseContainer, iconDuration, {autoAlpha:0}, 0);
  console.log('mouseleave');
});

$playPauseClickArea.on('mouseenter', function() {
  TweenMax.to($playPauseContainer, iconDuration, {autoAlpha:1}, 0);
  console.log('mouseenter');
});

$video.on('ended',function(){ 
  // TODO: showReplay()
  console.log('video ended')
});
