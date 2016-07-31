audiojs.events.ready(function() {
    var audio = document.getElementsByTagName('audio')[0];
    var as = audiojs.create(audio, {
        css:false,
        createPlayer: {
            markup:false,
            playPauseClass: 'play-pauseZ',
            scrubberClass: 'scrubberZ',
            progressClass: 'progressZ',
            loaderClass: 'loadedZ',
            timeClass: 'timeZ',
            durationClass: 'durationZ',
            playedClass: 'playedZ',
            errorMessageClass: 'error-messageZ',
            playingClass: 'playingZ',
            loadingClass: 'loadingZ',
            errorClass: 'errorZ'
        }
    })
});
