'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1',['$scope','sportsData',function($scope,sportsData) {
	
	$scope.eventName = "";
	
	// Set today date and week day
	
	var headings 	= extractDateAndWeekDay(new Date()); 
	$scope.weekDay  = headings["weekDay"];
	$scope.dispDate = headings["dispDate"];
	
	var currentDate = new Date();
	
	// For Storing Events
	$scope.weeklyEvents = {};
	$scope.error		= "";
	
	$scope.navigate = function(direction) {
		
		// Check for next or prev
		if(direction == "LEFT")
		{
			currentDate = new Date(currentDate.setDate(currentDate.getDate()-1));
		}
		else if(direction == "RIGHT")
		{
			currentDate = new Date(currentDate.setDate(currentDate.getDate()+1));
		}
		
		// Set next date
		var headings 	= extractDateAndWeekDay(currentDate); 
		$scope.weekDay  = headings["weekDay"];
		$scope.dispDate = headings["dispDate"];
	}
	
	$scope.addEvent = function() {
		if($scope.eventName != "")
		{		
			if(!$scope.weeklyEvents[$scope.dispDate])
			{
				$scope.weeklyEvents[$scope.dispDate] = [];
			}
			if($scope.weeklyEvents[$scope.dispDate].indexOf($scope.eventName) == -1)
			{
				$scope.weeklyEvents[$scope.dispDate].push($scope.eventName);
				$scope.eventName = "";
				$scope.error 	 = "";
			}
			else
			{
				$scope.error = "Duplicate event not allowed."
			}
		}
	}
	
	$scope.deleteEvent = function(index) {
		$scope.weeklyEvents[$scope.dispDate].splice(index,1);
	}

	
	// Common Functions
	function extractDateAndWeekDay(dt)
	{
		var dtSpltArr = dt.toString().split(" "); // ["Wed", "May", "28", "2014", "20:24:49", "GMT+0530", "(India", "Standard", "Time)"]
		
		var dispDate = dtSpltArr[1] + " " + dtSpltArr[2] + " " + dtSpltArr[3];
		
		return {"weekDay":dtSpltArr[0],"dispDate":dispDate};
	}
	
  }])
  
