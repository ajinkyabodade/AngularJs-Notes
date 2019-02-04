# Angular Js Notes By Ajinkya

AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.


## How to understand and follow the notes:

 In this notes, I have mainly focused on the practical aspects of AngularJs, And for the same, I will suggest you to have a google along with you to clear your theoretical doubts on the way.

 To learn AngularJs from these notes just follow the exercises given in the notes and try to implement them for better understanding


## Getting Started:

1. To start using AngularJs use ng-app="app_name" in your desired html tag.
```
<body ng-app="myApp" ><!--Accessing App module in body tag-->
```

2. Then create and link a js file which will include the Controller and Services for your angularJs app
```
<script src="app.js"></script>
```


### Prerequisites:

 For getting started with the AngularJs first you need to link the AngularJs CDN or offline file in your page:

```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.5/angular.min.js"></script>
```
You can get the CDN link or file from https://angularjs.org/


### First Exercise:

Inputting and Displaying the values

```
<div >
	<p>Enter your name: <input type="text" ng-model="name"></p>
	<p>Hello <span ng-bind="name"></span></p>
</div>
```
Try this yourself or see the implementation by running the index.html file provided by me. 


### Second Exercise:

Fetching name from controller app.js myController Using $Scope

Write the follwing in index.html file:
```
<h1 ng-controller="myController">{{name}}</h1>
```
In app.js create the controller as follows:

```
var app= angular.module("myApp",[]);

app.controller("myController",function($scope){

	$scope.name="Ajinkya Bodade";
	$scope.designation="AngulaJs Developer";

}); 
``` 
Try this yourself or see the implementation by running the index.html file provided by me.(store app.js in the same location as index.html )


### Third Exercise:

Using $rootScope to access the variable from different controller's of app.js

Write the follwing in index.html file:
```
<div ng-controller="myController1"> 
	{{name}}<br>
	{{msg2}}
</div>
<div ng-controller="myController2"> 
	{{name}}<br>
	{{msg1}}
</div>
```
Write the following in app.js
```
app.controller("myController1",function($scope,$rootScope){

	$scope.name="This is 1st Controller";
	$rootScope.msg1="This is variable form 1st controller";


}); 


app.controller("myController2",function($scope,$rootScope){

	$scope.name="This is 2nd Controller";
	$rootScope.msg2="This is variable form 2nd controller";
	
	

}); 
```


### Fourth Exercise:

Initializing default variable values using ng-init

Write the follwing in index.html file:
```
<div ng-init="dname='alkesh';">
<p>Enter your name:<input type="text" ng-model="dname"></p>
</div>
```


### Fifth Exercise:

Using ng-repeat to implement for loop in HTML

Write the follwing in index.html file:
```
<div ng-init="ename=['Ajinkya','Vivek','Anand','Ankit','Vaibhav'];">
	<ul>
	<li ng-repeat="x in ename"> {{x}} </li>
	</ul>
</div>

<div ng-init="users=[
	{gname:'Ajinkya',contact:'123',city:'buldana'},
	{gname:'Anand',contact:'345',city:'buldana'},
	{gname:'Ankit',contact:'678',city:'buldana'}
	]">
	<table>
		<tr>
				<td>Name </td>
				<td>Contact</td>
				<td>City</td>
		</tr>
		<tr ng-repeat="x in users"> 
				<td>{{x.gname}} </td>
				<td>{{x.contact}}</td>
				<td>{{x.city}}</td>
		</tr>
	</table>
</div>

```

### Sixth Exercise:

Use ng-hide to hide any html context upon user action

Write the follwing in index.html file:
```
<p>Hide Checkbox: <input type="checkbox" ng-model="hide"></p>

<div ng-hide="hide">
	<h1>This text will get hide</h1>
</div>
```


### Seventh Exercise:

Use ng-show to show any HTML context upon user action

Write the follwing in index.html file:
```
<p>Hide Checkbox: <input type="checkbox" ng-model="show"></p>

<div ng-show="show">
	<h1>This text will get hide</h1>
</div>

```



### Eight Exercise:

Expressions in AngularJs

Write the follwing in index.html file:
```
<div ng-init="hname='Ajinkya'; surname='Bodade'; first=10; second=2; eename={firstname:'Ajinkya',lastname:'Vaibhav'}; points=[1,5,6,7,5]; ">
	<p>Multiplication:{{first*second}}</p>
	<p>String Concadination:{{hname+""+surname}}</p>
	<p>Using Object:{{eename.firstname}}</p>
	<p>Using Array:{{points[4]}}</p>
</div>


```

### Nineth Exercise:

Filters in AngularJs
```
currency:	 Format a number to a currency format.
date: 	Format a date to a specified format.
filter: 	Select a subset of items from an array.
json:	 Format an object to a JSON string.
limitTo: 	Limits an array/string, into a specified number of elements/characters.
lowercase:	 Format a string to lower case.
number:	 Format a number to a string.
orderBy:	 Orders an array by an expression.
uppercase:	 Format a string to upper case.
```
Write the follwing in index.html file:
```
 <div >
	<p>Enter your name: <input type="text" ng-model="ffname"></p>
	<p>Uppercase Filter:{{ffname|uppercase}}</p>
	<p>Lowercase Filter:{{ffname|lowercase}}</p>
     <br><br>


	<p>Enter Price: <input type="text" ng-model="price"></p>
	<p>Currency Filter:{{price|currency}}</p>
	<p>{{price|currency:'RS'}}</p>
     <br><br>

	<p>Enter Date: <input type="date" ng-model="datevalue"></p>
	<p>Date Filter:{{datevalue|date:'yyyy-MM-dd'}}</p>
	<p>{{datevalue|date:'fullDate'}}</p>
	 <br><br>

	<p>Enter Float: <input type="text" ng-model="numberv"></p>
	<p>Number Filter:{{numberv|number:'3'}}</p>
	 
     
     <p>Orderby Filter:</p>
     <div ng-init="userss=[
	  {gname:'Zoro',contact:'123',city:'buldana'},
	  {gname:'Bhagyashri',contact:'345',city:'buldana'},
	  {gname:'Ajinkya',contact:'678',city:'buldana'}
	  ]">
	  <table>
	  <tr>
			<td>Name </td>
			<td>Contact</td>
			<td>City</td>
	  </tr>
	  <tr ng-repeat="x in userss|orderBy:'gname'"> <!--Use :'true'  for desending-->

				<td>{{x.gname}} </td>
			<td>{{x.contact}}</td>
			<td>{{x.city}}</td>
	  </tr>
	  </table>
	   </div>


	 <p> Filter Output:</p>
      <div ng-init="userss=[
	  {gname:'Zoro',contact:'123',city:'buldana'},
	  {gname:'Bhagyashri',contact:'345',city:'buldana'},
	  {gname:'Ajinkya',contact:'678',city:'buldana'}
	  ]">
	  <table>
	  <tr>
			<td>Name </td>
			<td>Contact</td>
			<td>City</td>
	  </tr>
	  <tr ng-repeat="x in userss|filter:'z'"> 

			<td>{{x.gname}} </td>
			<td>{{x.contact}}</td>
			<td>{{x.city}}</td>
	  </tr>
	  </table>
	   </div>

     <p> LimitTo Filter:</p>
      <div ng-init="userss=[
	  {gname:'Zoro',contact:'123',city:'buldana'},
	  {gname:'Bhagyashri',contact:'345',city:'buldana'},
	  {gname:'Ajinkya',contact:'678',city:'buldana'}
	  ]">
	  <table>
	  <tr>
			<td>Name </td>
			<td>Contact</td>
			<td>City</td>
	  </tr>
	  <tr ng-repeat="x in userss|limitTo:'2'"> 

			<td>{{x.gname}} </td>
			<td>{{x.contact}}</td>
			<td>{{x.city}}</td>
	  </tr>
	  </table>
	   </div>

```

### Data Binding In AngularJs:

Data binding in Angular JS is the synchronization between the model and view: 

Two types of Data binding:-

-one way data binding -> model is the single source of truth. whatever happens on UI triggers a message to model to update a part of data. So data flow in a single direction and which becomes easy to understand.

-Two way data binding -> any change in UI field updates the model and any change in model updates the UI field.	


### Tenth Exercise:

One way data binding:
```
<div ng-controller="myController" >
	<p>one way data binding: <input type="text" ng-model="name"></p>
	<!-- When you update values in model then values is views will change and the vice verca will not happen-->
</div>
```

### Eleventh Exercise:

Two way data binding:
```
<div ng-controller="myController" >
	<p>Two way data binding: <input type="text" ng-model="name"></p>
	<p>{{name}}</p>
	<!-- When you update values in model then values is views will change and the vice verca will also happen-->
</div>
```


### Twelfth Exercise:


Creating Custom Directive in AngularJs:
```
// Custom Directive in AngularJs 

app.directive("myFirstDirective", function(){//name should be in camel case

return{
template:"<h1>Ajinkya Bodade</h1>"
};

});

```

Accesing Custom Directive of app.js in View::
```
<!--First Method as a Tag-->
<my-first-directive></my-first-directive>

<!--Second Method as a Attribute-->
<div my-first-directive></div><!--If you dont write restrict in directive defination then by default only first two methods will work-->

<!--Third Method as a Class-->
<div class="my-first-directive"></div>

<!--Fourth Method as a Comment only work if you write replace:true; in directive-->
<!-- directive:my-first-directive -->
```

### Thirteenth Exercise:

Creating Custom Filters in AngularJs:

Write the following in html file:
```
<div ng-controller="myController3" >
	<table>
	  <tr>
			<td>Name </td>
			<td>Contact</td>
			<td>Gender</td>
	  </tr>
	  <tr ng-repeat="x in userss"> 

			<td>{{x.gname}} </td>
			<td>{{x.contact}}</td>
			<td>{{x.gender|converter}}</td><!--Using Custom Filter-->
	  </tr>
	  </table>

</div>
```

Write the following in Js file:
```
app.controller("myController3",function($scope,$rootScope){

	$scope.userss=[
	  {gname:'Zoro',contact:'123',gender:1},
	  {gname:'Bhagyashri',contact:'345',gender:2},
	  {gname:'Ajinkya',contact:'678',gender:3}
	  ];
	
}); 
```

### 14th Exercise:

Events in AngularJs:

         -ng-change
         -ng-blur
         -ng-click
         -ng-copy
         -ng-cut
         -ng-dblclick
         -ng-focus
         -ng-keydown
         -ng-keypress
         -ng-keyup
         -ng-mousedown
         -ng-mouseenter
         -ng-mouseleave
         -ng-mousemove
         -ng-mouseover
         -ng-mouseup
         -ng-paste

Write the following in html file:
```
<!-- Ng-click Event-->
<div ng-controller="myController4">
<h1>Ng-click event</h1>
<input type="button" ng-click="test()" value="Click Me">
<br>
{{count}}
</div>


<!-- Ng-change Event-->
<div ng-controller="myController4">
<h1>Ng-Change event</h1>
<input type="text" ng-change="test()" ng-model="txtValue" >
<br>
{{count}}
</div>


<!-- Ng-mouseover Event-->
<div ng-controller="myController4">
<h1>Ng-mouseover event</h1>
<h2 ng-mouseover="test()">Mouse over me</h2>
 <p>Mouse moved
<br>
{{count}}
</div>
```
Write the following in app.js:
```
//for ng-click and ng-change event
app.controller("myController4",function($scope){

	$scope.count=0;
	$scope.test=function()
	{
		$scope.count++;
	}
	
}); 
```

### Routing in AngularJs:

Routing in AngularJs is used to show the different contents on the same page without refresh/reload the page.

 To make your applications ready for routing, you must include the AngularJS Route module:
```
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
```

Write the following code in app.js:
```
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl : "main.htm"
    })
    .when("/register", {
        templateUrl : "london.htm"
    })
    .otherwise({
        template : "<h1>Hello this is default template  </h1>"
    });
});
```
Write the following  in View:
```
To call the login/register:
<a href="#login">Login</a>
<a href="#Register">Register</a>

To show the content in any div or elemnt in view:
<div ng-view></div>
```


### Services in AngularJs:

In AngularJS, a service is a function, or object, that is available for, and limited to, your AngularJS application.

AngularJS has about 30 built-in services, and we can create custom service also.

### Custom services in Angularjs:

-1.Value Custom service in AngularJs:-
Write the following code in app.js:
```
app.value("variable_name","Value");

for ex:-
app.value("pi","3.141");

app.controller("myController",function($scope,pi){
	$scope.name=pi;
	}); 
```
In this way you can access the value service in view through controller



-2.Constant custom service in AngularJs:-
 Write the following in app.js:
 ```
app.constant("variable_name","Value");

for ex:-
app.constant("webname","Portfolio of Ajinkya");

app.controller("myController",function($scope,webname){
	$scope.name=ebname;
	}); 
```
In this way you can access the constant service in view through controller



-3.Service custom service in Angular Js:-
By default, the service has this object which it returns whereas in factory custom service you need to create and return the object
 
 for ex:
```
 app.service("myService",function(){
	//var this={};
		this.getname=function(){
	
	return "this is service service";
		}	

	//return this;
	});

 
 app.controller("myController",function($scope,myService){
	$scope.name=myService.getname();
	});
```
 In view simply write {{name}}

In this way, you can access the service in the view through the controller




### Inbuilt services in Angularjs:


-1.Timeout Service:-

Write the following in html:
```
<!-- Used to change content after specific amount of time -->
<div ng-controller="myController5" >
	<p>Timeout Service:</p>
	<p>{{msg}}</p>
</div>
```
Write the following in app.js:
```
app.controller("myController5",function($scope,$timeout){
	$scope.msg="Welcome to my site";
	$timeout(function(){
	$scope.msg="I am Ajinkya";
	},5000);
	}); 

```

-2.$http service:-


$http is an AngularJS service for reading data from remote servers.

The AngularJS $http service makes a request to the server and returns a response.

```
app.controller('myController', function($scope, $http) {
    $http({
        method : "GET",
        url : "welcome.htm"
    }).then(function mySuccess(response) {
        $scope.myData = response.data;

    }, 

    function myError(response) {
        $scope.myData = response.statusText;
    });
});

//shortcut method for get

app.controller('myController', function($scope, $http) {
    $http.get("welcome.htm")

    .then(function(response) {
        $scope.myData = response.data;
    });
});

```

-3.Interval Service:-

Write the following in html:
```
<!-- Used to change content after equal interval of time-->
<div ng-controller="myController6" >
	<p>Interval Service:</p>
	<p>{{count}}</p>
</div>
```
Write the following in app.js
```
//$interval service 
app.controller("myController6",function($scope,$interval){
	$scope.count=0;
	$interval(function(){
    $scope.count++;
	},2000);

	}); 
```

-4.Log Service:- 
 Used to show message in console
 see controller7 in app.js for syntax
```
app.controller("myController7",function($log){
	$log.log('This is log');
	$log.error('This is error');
	$log.info('This is info');
	$log.warn('This is warning');
	$log.debug('This is debugging');

	}); 
```

-5.location Service:

Write the following in html file:
```
<!--location Service:-->
<!-- Used to get various information from server-->
<div ng-controller="myController8" >
	<p>location Service:</p>
	<p>curl:{{curl}}</p>
	<p>host:{{host}}</p>
	<p>port:{{port}}</p>
	<p>protocol:{{protocol}}</p>
</div>

```
Write the following in app.js:
```
app.controller("myController8",function($scope,$location){
	$scope.curl=$location.absUrl();
	$scope.protocol=$location.protocol();
	$scope.port=$location.port();
	$scope.host=$location.host();
	}); 
```

### 15th Exercise:

Form state in AngularJs

Write following in html file:
```
<form name="myForm0">
	<input type="email" name="myInput0" ng-model="myInput0">
</form>

<p>The Email valid state is:</p>
<h1>{{myForm0.myInput0.$valid}}</h1>

 ```
Some other example are $touched $untouched $dirty etc.


### 16th Exercise:


Form Validation Directive in AngularJs


Write the following in html file:
```
<form name="myForm1">
	Name:<input type="name" name="myInput1" ng-model="myInput1" required ng-pattern="/[a-zA-Z]{2,10}/">
	<span ng-show="myForm1.myInput1.$touched">
		<span ng-show="myForm1.myInput1.$error.required" style="color:red;">Please fill thid field</span>
		<span ng-show="myForm1.myInput1.$error.pattern" style="color:red;">Name is not valid</span>
	</span>

	<br>Email:<input type="email" name="myInput2" ng-model="myInput2" required ng-pattern="/[a-zA-Z]{2,10}/">
	<span ng-show="myForm1.myInput2.$touched">
		<span ng-show="myForm1.myInput2.$error.required" style="color:red;">Please fill thid field</span>
		<span ng-show="myForm1.myInput2.$error.email" style="color:red;">Email is not valid</span>
    </span>
</form>



<!-- CSS class for validation in AngularJs -->
<style>
input.ng-touched{
	background-color:red;
}
input.ng-valid{
	background-color:lightgreen;
}
</style>

```


### Reference links for understanding the AngularJs integration with Codeigniter/ Database:

```
https://www.formget.com/angularjs-crud/
https://www.w3schools.com/angular/angular_sql.asp
https://stackoverflow.com/questions/37722797/insert-data-into-database-in-angularjs
https://stackoverflow.com/questions/39410618/codeigniter-post-data-using-angularjs
https://forum.codeigniter.com/archive/index.php?thread-13661.html
https://stackoverflow.com/questions/47765693/warning-message-illegal-offset-type-from-where-function-mysql-php?rq=1
https://forum.codeigniter.com/archive/index.php?thread-10065.html
```


## Links To My profiles:

* [Linkedin](https://www.linkedin.com/in/ajinkya-bodade/)
* [Portfolio](https://ajinkyabodade.tk/)

