(function(){
    angular.module('my_projects',[])
    .controller('tabCtrl',['$scope',function($scope){
        $scope.tabs = [
		{
			linker: 'curr-folow',
            id:"Currency Follower",
			introduction: "This is an introduction",
            content:'This is a default tab on loadThis is a default tab on ' +
			'loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default ' +
			'tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on load'
		},
		{
			linker: 'embed-clock',
			id:"Embedded clock",
			content: "As part of university project I did clock for ARM processor board. After clicking the button to set the hour, the time counter starts, and using Quartz it precisely measures time."
		},
		{
			linker: 'voice-assist',
			id:"Voice Assistant",
			content:'This is a default tab on loadThis is a default tab on ' +
			'loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default '
		},
		{
			linker: 'packtpub',
			id:"Book Downloader",
			introduction: "This one is actualy one that I am kind of proude of." 
			+ 'It started as a thought why not automate what I do daily ? This little thing is a Java program that works using a bit of Selenium extension for Chrome simulation.'
			+ ' It goes to a packtpub website (https://www.packtpub.com/), logs in, navigates to book of a day a saves it to your profile for further investigation' 
			+ ' Whats more... it logs a dialog box to the screen with information what dook has been saved !'
			+ ' Whats even more, the program works in background so it wont interfere with anything you currently do'
			+ ' All that is requires it a chromedriver.exe, which you cna download anywhere.',
			content: ' Quick review: '
			
		},
		{
			linker: 'custom-scripts',
			id:"Scripts",
			content: "tab4"
		}]

        $scope.selectedTab = 0; 
        $scope.selectTab = function(index){
            $scope.selectedTab = index;
			appendCode($scope.tabs[index].linker)
        }
    }])
	
	function appendCode(i){		
		var my_code = document.getElementById(i);
		var wtp = document.getElementById('my-code');
		wtp.innerHTML = '';
		if (my_code && i){
			var nodeClone = my_code.cloneNode(true);
			wtp.appendChild(nodeClone);
		}
	}
})();