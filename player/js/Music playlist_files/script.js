var app = angular.module('myApp', []);


app.factory('songfactory', function(){
	var songs = [
		{
			id : '01',
			name : 'I love Music',
			runtime : '1:00',
			url : 'media/01.mp3'

		},
		{
			id : '02',
			name : 'Patting The Beat',
			runtime : '2:27',
			url : 'media/02.mp3'

		},
		{
			id : '03',
			name : 'My Old Dog',
			runtime : '1:15',
			url : 'media/03.mp3'

		},
		{
			id : '04',
			name : 'ABC Medley',
			runtime : '2:27',
			url : 'media/04.mp3'

		}
	]; 

		var factory = {};
		factory.getsongs = function(){
			return songs;
		}
		return factory;
});


app.controller('maincntr', function($scope, player, songfactory){

	$scope.player = player;
	//$scope.playlist = songfactory.getsongs(); 

	$scope.player.playlist.add(songfactory.getsongs());
});


app.factory('player', function(audio, $rootScope) {
	var player,
		playlist = [],
		paused = false,
		current = {
			track : 0
		};
  	
  	player = {
	    playlist: playlist,
	    current: current,
	    playing: false,

	    play: function(track) {
	    	//console.log(track);
	    	console.log(playlist[0][track]);
	    	if (!playlist.length) return;
	    	if (angular.isDefined(track))
	    		current.track = track;

	    	if (!paused) 
	    		audio.src = playlist[0][current.track].url;
	    	audio.play();
	    	player.playing = true;
  		},
  		next: function(){
  			if (!playlist.length) return;
  			paused = false;
  			if(playlist[0].length > current.track){
  				current.track++;
  			}else{
  				current.track = 0;
  			}
  			console.log(current.track);
  			
  			player.play();
  		}

  	};

  	playlist.add = function(album) {
  		
      if (playlist.indexOf(album) != -1) return;
      playlist.push(album);
    };

  	audio.addEventListener('ended', function(){
  		$rootScope.$apply(player.next);
  	}, false);
  	return player;
});

app.factory('audio', function($document) {
	var audio = $document[0].createElement('audio');
	return audio;
});


