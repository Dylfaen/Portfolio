var app = angular.module('portfolio', ['ngAnimate']);
app.controller('NavBarController', function() {
	this.tab = 1;
	this.setTab = function(value) {
		this.tab = value;
	};
	this.isSet = function(value) {
		return (this.tab == value);
	};
});
app.controller('SkillsController', function() {
	this.skill = 0;
	this.setSkill = function(value) {
		this.skill = value;
	};
	this.isSet = function(value) {
		return(this.skill == value);
	};
})

