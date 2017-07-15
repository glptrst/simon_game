window.onload = function() {

    // random game sequence 
    var sequence = randomSequence();

    var counter = 1;

    // Game's buttons
    var buttons= [
    	{
    	    id: 'btn0',
	    node: document.getElementById('btn0'),
    	    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
	    color: '#CC0000',
	    lightColor: '#F40000',
	    activate: function() {
		var btn = this;
		btn.node.setAttribute('style', 'background-color: ' + this.lightColor);
		btn.audio.play();
		setTimeout(function() {
		    btn.node.setAttribute('style', 'background-color: ' + this.color)
		}, 500);
	    }
    	},
    	{
    	    id: 'btn1',
	    node: document.getElementById('btn1'),
    	    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
	    color: '#E5D600',
	    lightColor: '#FFF028',
	    activate: function() {
		var btn = this;
		btn.node.setAttribute('style', 'background-color: ' + this.lightColor);
		btn.audio.play();
		setTimeout(function() {
		    btn.node.setAttribute('style', 'background-color: ' + this.color)
		}, 500);
	    }
	},
    	{
    	    id: 'btn2',
	    node: document.getElementById('btn2'),
    	    audio :new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
	    color: '#029E00',
	    lightColor: '#31FF2D',
	    activate: function() {
		var btn = this;
		btn.node.setAttribute('style', 'background-color: ' + this.lightColor);
		btn.audio.play();
		setTimeout(function() {
		    btn.node.setAttribute('style', 'background-color: ' + this.color)
		}, 500);
	    }
	},
    	{
    	    id: 'btn3',
	    node: document.getElementById('btn3'),
    	    audio: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'),
	    color: '#003ADB',
	    lightColor: '#2861FF',
	    activate: function() {
		var btn = this;
		btn.node.setAttribute('style', 'background-color: ' + this.lightColor);
		btn.audio.play();
		setTimeout(function() {
		    btn.node.setAttribute('style', 'background-color: ' + this.color)
		}, 500);
	    }
	}
    ];

    showSequence(sequence, counter);

    // show sequence of buttons till n
    function showSequence(seq, n) {
	var i = 1;
	var activateSequence = setInterval(function() {
	    buttons[seq[i]].activate();
    	    i++;
	    if (i = n) {
		// stop showing sequence
    		clearInterval(activateSequence);
		userPlay(i);
	    }
	}, 1000);
    }

    // check for n moves of the player
    function userPlay(n) {
	// check for user moves
	TODO
	
	//update counter
	counter++;
    }
    
    // return array of random sequence of 20 buttons
    function randomSequence() {
	var arr = [];
	for (var i = 0; i < 20; i ++) {
	    arr.push(randomRange(0,3));
	}
	return arr;
    }
    
    // generate random number between a range
    function randomRange(myMin, myMax) {
    	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line
    }
    
    buttons[0].node.addEventListener('mouseup', function(){
	buttons[0].activate();
    });

    buttons[1].node.addEventListener('mouseup', function(){
	buttons[1].activate();
    });

    buttons[2].node.addEventListener('mouseup', function(){
	buttons[2].activate();
    });

    buttons[3].node.addEventListener('mouseup', function(){
	buttons[3].activate();
    });
};
