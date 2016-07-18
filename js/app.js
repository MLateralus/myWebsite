(function(){
    angular.module('my_projects',[])
    .controller('tabCtrl',['$scope',function($scope){
        $scope.tabs = [
		{
            id:"Currency Follower",
			introduction: "This is an introduction",
            content:'This is a default tab on loadThis is a default tab on ' +
			'loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default ' +
			'tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on load'
		},
		{
			id:"Embedded clock",
			content: "tab2"
		},
		{
			id:"Voice Assistant",
			content:'This is a default tab on loadThis is a default tab on ' +
			'loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default tab on loadThis is a default '
		},
		{
			id:"Book Downloader",
			introduction: "This one is actualy one that I am kind of proude of.",
			content: 'It started as a thought why not automate what I do daily ? This little thing is a Java program that works using a bit of Selenium extension for Chrome simulation.'
			+ ' It goes to a packtpub website (https://www.packtpub.com/), logs in, navigates to book of a day a saves it to your profile for further investigation' 
			+ ' Whats more... it logs a dialog box to the screen with information what dook has been saved !'
			+ ' Whats even more, the program works in background so it wont interfere with anything you currently do'
			+ ' All that is requires it a chromedriver.exe, which you cna download anywhere.'
		},
		{
			id:"Scripts",
			content: "tab4"
		}]

        $scope.selectedTab = 0; 
        $scope.selectTab = function(index){
            $scope.selectedTab = index;
			appendCode($scope.tabs[index].id)
        }
    }])
	
	function appendCode(i){
		console.log(i);
		
	}
	
})();