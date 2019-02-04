var app= angular.module("myApp",[]);

	<p>Email <input type="text" ng-model="name"></p>
app.controller("myController",function($scope){

	$scope.name="Ajinkya Bodade";
	$scope.designation="AngulaJs Developer";

}); 


app.controller("myController1",function($scope,$rootScope){

	$scope.name="This is 1st Controller";
	$rootScope.msg1="This is variable form 1st controller";


}); 


app.controller("myController2",function($scope,$rootScope){

	$scope.name="This is 2nd Controller";
	$rootScope.msg2="This is variable form 2nd controller";
	
	

}); 



// Custom Directive in AngularJs 

app.directive("myFirstDirective", function(){//name should be in camel case

return{
template:"<h1>Ajinkya Bodade</h1>"
};

});






app.controller("myController3",function($scope,$rootScope){

	$scope.userss=[
	  {gname:'Zoro',contact:'123',gender:1},
	  {gname:'Bhagyashri',contact:'345',gender:2},
	  {gname:'Ajinkya',contact:'678',gender:3}
	  ];
	
}); 



//Custom Filter in AngularJs
app.filter("converter",function(){
return function(input)
	{
		switch(input)
		{
		case 1:
		return"Male";
		case 2:
		return "Female";
		case 3:
		return "Not Disclosed";
		}
	}

});


//for ng-click and ng-change event
app.controller("myController4",function($scope){

	$scope.count=0;
	$scope.test=function()
	{
		$scope.count++;
	}
	
}); 


//$timeout service 
app.controller("myController5",function($scope,$timeout){
	$scope.msg="Welcome to my site";
	$timeout(function(){
	$scope.msg="I am Ajinkya";
	},5000);
	}); 


//$interval service 
app.controller("myController6",function($scope,$interval){
	$scope.count=0;
	$interval(function(){
    $scope.count++;
	},2000);

	}); 



//$log service 
app.controller("myController7",function($log){
	$log.log('This is log');
	$log.error('This is error');
	$log.info('This is info');
	$log.warn('This is warning');
	$log.debug('This is debugging');

	}); 

//$log service 
app.controller("myController8",function($scope,$location){
	$scope.curl=$location.absUrl();
	$scope.protocol=$location.protocol();
	$scope.port=$location.port();
	$scope.host=$location.host();
	}); 



//Session in AngularJs
app.controller("myController9",function($scope,$sessionStorage){
	$scope.add=function(){
	$sessionStorage.name="Ajinkya Bodade";
	$sessionStorage.city="Buldana";
	console.log("Data stored to session")
}
$scope.fetch=function(){
console.log($sessionStorage.name);
console.log($sessionStorage.city);
}
	}); 