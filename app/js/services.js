'use strict';

/* Services */

angular.module('myApp.services', []).
  factory('sportsData',[function(){
	
	// Data
	var data = [
		{"id": 1, "name": "Manchester United", "type": "Soccer", "featured": true, "country": "England"},
		{"id": 2, "name": "Manchester City", "type": "Soccer", "featured": false, "country": "England"},
		{"id": 3, "name": "Dallas Mavericks", "type": "Basketball", "featured": true, "country": "USA"},
		{"id": 4, "name": "Indian Cricket Team", "type": "Cricket", "featured": true, "country": "India"},
		{"id": 5, "name": "Australian Cricket Team", "type": "Cricket", "featured": false, "country": "Australia"},
		{"id": 6, "name": "Los Angeles Lakers", "type": "Basketball", "featured": true, "country": "USA"},
		{"id": 7, "name": "Los Angeles Clippers", "type": "Basketball", "featured": false, "country": "USA"},
		{"id": 8, "name": "Real Madrid", "type": "Soccer", "featured": true, "country": "Spain"},
		{"id": 9, "name": "Dallas Cowboys", "type": "American Football", "featured": true, "country": "USA"},
		{"id": 10, "name": "New York Giants", "type": "American Football", "featured": false, "country": "USA"},
		{"id": 11, "name": "Derbyshire Cricket Team", "type": "Cricket", "featured": false, "country": "England"},
		{"id": 12, "name": "Bangladesh Cricket Team", "type": "Cricket", "featured": false, "country": "Bangladesh"},
		{"id": 13, "name": "New York Knicks", "type": "Basketball", "featured": false, "country": "USA"},
		{"id": 14, "name": "Ferrari", "type": "Formula 1", "featured": true, "country": "Italy"},
		{"id": 15, "name": "Force One", "type": "Formula 1", "featured": true, "country": "India"},
		{"id": 16, "name": "New York Jets", "type": "American Football", "featured": false, "country": "USA"}
	];
	
	return {
		getAllData: function() {
			return data;
		},
		
		getDataByType: function(type) {
			var filteredData = angular.copy(data);
			var len = filteredData.length;
			for(var i=len-1;i>=0;i--)
			{
				if(filteredData[i]["type"] !== type)
				{
					filteredData.splice(i,1);
				}
			}
			return filteredData;
		},
		
		getDataByCountry: function(country) {
			var filteredData = angular.copy(data);
			var len = filteredData.length;
			for(var i=len-1;i>=0;i--)
			{
				if(filteredData[i]["country"] !== country)
				{
					filteredData.splice(i,1);
				}
			}
			return filteredData;
		}
	};
  }]);
