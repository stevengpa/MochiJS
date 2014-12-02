MochiJS
=======

It is a small but useful JavaScript library which contains extensions for validations, Set Cache ID and Get items from the Cache base on the Cache ID and more...

```javascript
/* MochiJS-Full already contains inside the following libraries: */
JQuery v-1.11.1
momentjs v-2.8.4
modulejs v-1.5.0
linqjs v-2.2.0.2

/* MochiJS-Original requires the library: */
linqjs v-2.2.0.2

```
Month Name
```javascript
/* 
Parameters: ( language [en, es] )
Default: ( language = en )
Description: Get the current month name of the Date variable.
*/
var Birthday = new Date();
Birthday.monthName(); // e.g: November
Birthday.monthName('en'); // e.g: November
Birthday.monthName('es'); // e.g: Noviembre
```
Day Name
```javascript
/* 
Parameters: ( language [en, es] )
Default: ( language = en )
Description: Get the current day name of the Date variable.
*/
var TodayIs = new Date();
TodayIs.dayName(); // e.g: Monday
TodayIs.dayName('en'); // e.g: Monday
TodayIs.dayName('es'); // e.g: Lunes
```
Time Object Functionalities
```javascript
/* 
Description: Time object that returns many information
*/
var t = Time();
 
t.hours();             // 2
t.minutes();           // 0
t.period();            // 'pm'
t.toString();          // '2:00 pm'
t.nextDate();          // Sep 10 2:00 (assuming it is 1 o'clock Sep 10)
t.format('hh:mm AM')   // '02:00 PM'
t.isValid();           // true
Time.isValid('99:12'); // false
```
isNumber
```javascript
/* 
Description: Validate if it is numeric or not
*/
var myNumber = "100a";
myNumber.isNumber(); // false
 
var myNumber = "100.4";
myNumber.isNumber(); // true
 
var myNumber = "1,000.4";
myNumber.isNumber(); // true
```
isBlank
```javascript
/* 
Description: Validate if a variable not null is blank
*/
var text = "";
text.isBlank(); // true
 
var text = " ";
text.isBlank(); // true
 
var text = "a";
text.isBlank(); // false
```
isDate
```javascript
/* 
Parameters: ( dateFormat [mm/dd/yyyy, dd/mm/yyyy, yyyy-mm-dd, so on] )
Default: ( dateFormat = mm/dd/yyyy )
Description: Validate if a variable is a Date
*/
var myDate = 'a';
myDate.isDate(); // false
 
var myDate = '10/24/2014';
myDate.isDate(); // true
myDate.isDate('mm/dd/yyyy'); // true
 
var myDate = '24/10/2014';
myDate.isDate(); // false
myDate.isDate('dd/mm/yyyy'); // true
 
var myDate = '24-10-2014';
myDate.isDate(); // false
myDate.isDate('dd/mm/yyyy'); // false
myDate.isDate('dd-mm-yyyy'); // true
 
var myDate = '2014-10-24';
myDate.isDate(); // false
myDate.isDate('dd/mm/yyyy'); // false
myDate.isDate('dd-mm-yyyy'); // false
myDate.isDate('yyyy-mm-dd'); // true
```
isEmail
```javascript
/* 
Description: Validate if a variable is valid email
*/
var myEmail = 'steven@';
myEmail.isEmail(); // false
 
var myEmail = 'steven@gmail';
myEmail.isEmail(); // false
 
var myEmail = 'steven@gmail.com';
myEmail.isEmail(); // true
```
Add Miles
```javascript
/* 
Description: Add the mile separator to a number
*/
var Num = "1500.15";
Num.addMiles(); // "1,500.15"
 
var Num = 1500.15;
Num.addMiles(); //
```
Remove Miles
```javascript
/* 
Description: Remove the mile separator to a number
*/
var Num = "1,500.26";
Num.removeMiles(); // 1500.26
 
var Num = "1,500.26ABCD";
Num.removeMiles(); // 1500.26
```
Generate ID
```javascript
/* 
Description: Returns the ID using the DateTime
*/
genID(); // "20141003222024414"
```
Array Filter
```javascript
/* 
Description: Filter an Array Variable
*/
var People = [{name: 'Steven', age:28}, {name:'Carlos', age: 26}, {name:'Cindy', Age:24}];
 
People.filter(
	function(el) 
	{ 
		return (el.name == 'Steven') 
	}
);
```
Cache ID Example:
```javascript
/* 
Description: Assign a CID to JavaScript Object Items and then request the items for the assigned CID.
*/
(function(){
 
	/* Create Simple Array Object */
	var people = [
		{ name: "Steven", age: 28 },
		{ name: "Charlie", age: 29 },
		{ name: "Cindy", age: 25 },
		{ name: "Mendez", age: 31 },
		{ name: "Jorge", age: 32 }
	];
 
	/* Add Property CID (Cache ID) to Array Object */
	setCacheID(people);
 
	/* Include <li> tags to an <ul id='lstPeople'></ul> (You should create this <ul> in your html) */
	for (key in people) {
		$('#lstPeople').append('<li class='person' data-cid='" + people[key].cid + "'>' + people[key].name + "</li>");
	};
 
	// On <li> click, get from memory the Object where
	// CID has the perfect match
	$('#lstPeople').on('click', '.person', function(){
		var cid = $(this).data("cid");
		/* getCacheObject(cid, object); */
		var person = getCacheObject(cid, people);
		console.log(person);
	});
 
})();
```
