// knockout js file
var initialCats = [
{
	clickCount: 0,
	name: "Tabby",
	imgSrc: "https://placeimg.com/400/400/animals",
	imageAttribution: "https:placeimg.com",
	nickNames: ["King Tabby", "Tabberious Maximus", "Killer", "El Chapo"]
},

{
	clickCount: 0,
	name: "Tigger",
	imgSrc: "https://placeimg.com/400/400/animals",
	imageAttribution: "https:placeimg.com",
	nickNames: ["Mr. Bounce", "The Nemesis", "Stripe", "Rubber Tush"]
},


{
	clickCount: 0,
	name: "sleepy",
	imgSrc: "https://placeimg.com/400/400/animals",
	imageAttribution: "https:placeimg.com",
	nickNames: ["Mr. Bounce", "The Nemesis", "Stripe", "Rubber Tush"]
},

{
	clickCount: 0,
	name: "sneezy",
	imgSrc: "https://placeimg.com/400/400/animals",
	imageAttribution: "https:placeimg.com",
	nickNames: ["Mr. Bounce", "The Nemesis", "Stripe", "Rubber Tush"]
},

{
	clickCount: 0,
	name: "stinky",
	imgSrc: "https://placeimg.com/400/400/animals",
	imageAttribution: "https:placeimg.com",
	nickNames: ["Mr. Poo", "The Nemesis", "Stripe", "Rubber Tush"]
},

];


var Cat = function(data) {

	this.clickCount = data.clickCount;
	this.name = data.name;
	this.imgSrc = data.imgSrc;
	this.imageAttribution = data.imageAttribution;
	this.nickNames = data.nickNames;

	this.level = ko.computed(function() {

		var cc = this.clickCount;
		
		var title = "Novice";

		if ( cc > 5 && cc <= 10 ) {
			title = "Advanced Beginner";
		} else	if ( cc > 10 && cc <= 25 ) {
			title = "Semi-Pro";
		} else if ( cc > 25 && cc <= 50 ) {
			title = "Pro";
		} else  if ( cc > 50 ){
			title = "Super Cuddy";
		}

		return title;

	}, this);

};

var ViewModel = function() {

	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem) );
	});
	
	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter =  function() {
		self.currentCat().clickCount += 1;
		console.log(self.currentCat().clickCount);
	}	

	this.setCurrent = function(index) {
		self.currentCat(self.catList()[index]);
	}

	this.clickLog = function() {
		console.log("you clicked the list");
	}

};

ko.applyBindings(new ViewModel());