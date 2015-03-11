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
		name: "Snoozie",
		imgSrc: "https://placeimg.com/400/400/animals",
		imageAttribution: "https:placeimg.com",
		nickNames: ["ZZZZZipper", "Wood Choppa", "Coffee?", "mmmuhhhwut?"]
	},

	{
		clickCount: 0,
		name: "Dopey",
		imgSrc: "https://placeimg.com/400/400/animals",
		imageAttribution: "https:placeimg.com",
		nickNames: ["Mr. Bounce", "The Nemesis", "Stripe", "Rubber Tush"]
	},

	{
		clickCount: 0,
		name: "Stinky",
		imgSrc: "https://placeimg.com/400/400/animals",
		imageAttribution: "https:placeimg.com",
		nickNames: ["Mr. Poo", "The Nemesis", "Stripe", "Rubber Tush"]
	}
];

var Cat = function(data) {

	this.clickCount = ko.observable(data.clickCount);
	this.name = data.name;
	this.imgSrc = data.imgSrc;
	this.imageAttribution = data.imageAttribution;
	this.nickNames = data.nickNames;

	this.level = ko.computed(function() {

		var cc = this.clickCount();
		var title = "Tail Wagger";

		if ( cc > 5 && cc <= 10 ) {
			title = "Ear Scratcher";
		} else	if ( cc > 10 && cc <= 25 ) {
			title = "Neck Hugger";
		} else if ( cc > 25 && cc <= 50 ) {
			title = "Leg Twitcher";
		} else  if ( cc > 50 ){
			title = "Super Cuddler";
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
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
		console.log(this.clickCount);
	}

	this.setCurrent = function(clickedCat) {
		self.currentCat(clickedCat);
		console.log(cat.name);
	}

	this.clickLog = function(cat) {
		console.log(cat.name);
		console.log("you clicked the list");
	}
};

ko.applyBindings(new ViewModel());