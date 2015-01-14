if (foo) {
  bar.doSomething(el);
} else {
  bar.doSomethingElse(el);
}

Answer:

foo === true ? bar.doSomething(el): bar.doSomethingElse(el);

///////////////////////////////////////////////

var a = new String("string")

a instanceof String ? console.log("string"): console.log("marco");

////////////////////////////////////////////////////////////////

"What is the faulty logic in this code"

"global variable"
var foo = 'hello';
 
(function () {
  var foo = foo || 'world';
  console.log(foo);
})();

"the faulty logic is that by redefining the variable foo within the function you are making it undefined when comparing it to the string world. This will always return world. The best way to fix this is by using a different varibale name other than foo so we can still have access to the global variable"


// 3: given the following code, how would you override the value of the bar property for the variable foo without affecting the value of the bar property for the variable bim? how would you affect the value of the bar property for both foo and bim? how would you add a method to foo and bim to console.log the value of each object's bar property? how would you tell if the object's bar property had been overridden for the particular object?


var Thinger = function() {
  return this;
  // this is what will be returned thanks to our prototype below {bar : 'baz'}
};
 
Thinger.prototype = {
    bar : 'baz',
    changeValue: function (newThing) { //this function will allow us to change the value of foo or bim without changing the value of bar
    	this.bar = newThing
    	return this.bar
    },
    consoleName: function() { // this function will allow us to console log the value of foo or bim
	    return this.bar
    }
};
 
var foo = new Thinger(),
    bim = new Thinger();

console.log(foo.consoleName())
console.log(foo.changeValue("marco"))

console.log(bim.consoleName())
console.log(bim.changeValue("newMarco"))

////////////////////////////////////////////////////////

 // 4: given the following code, and assuming that each defined object has a
// 'destroy' method, how would you destroy all of the objects contained in the
// myObjects object?
var myObjects = {
  thinger : new myApp.Thinger(),
  gizmo : new myApp.Gizmo(),
  widget : new myApp.Widget()
};

myObjects.prototype.delete = function (key) {
	this.key.destroy
}

////////////////////////////////////////////////////////

// 5: given the following array, create an array that contains the contents of
// each array item repeated three times, with a space between each item. so,
// for example, if an array item is 'foo' then the new array should contain an
// array item 'foo foo foo'. (you can assume the library of your choice is
// available)
var myArray = [ 'foo', 'bar', 'baz' ];
var newArray = []
for(i=0; i < myArray.length; i++) {
    var string = ""
    for(a=0; a < 3; a++){
        string += " " + myArray[i]
    }
    newArray.push(string)
}
console.log(newArray)

////////////////////////////////////////////////////////

// 6: how could you improve the following code?
$(document).ready(function() {
  $('.foo #bar').css('color', 'red');
  $('.foo #bar').css('border', '1px solid blue');
  $('.foo #bar').text('new text!');
  $('.foo #bar').click(function() {
    $(this).attr('title', 'new title');
    $(this).width('100px');
  });
  
  $('.foo #bar').click();
});


$(document).ready(function() {
var classId = $('.foo #bar')

	classId.css('color', 'red', 'border', '1px solid blue');
	classId.text('new text!');
	classId.click(function() {
		$(this).attr('title', 'new title');
		$(this).width('100px');
});
	classID.click();
});

////////////////////////////////////////////////////////

// 7: what issues do you see with the following code? how would you fix it?
(function() {
  var foo;
 
  dojo.xhrGet({
    url : 'foo.php',
    load : function(resp) {
      foo = resp.foo;
    }
  });
 
  if (foo) {
    // run this important code
  }
})();

////////////////////////////////////////////////////////

// 8: how could you rewrite the following code to make it shorter?
(function($){
  $('li.foo a').attr('title', 'i am foo');
  $('li.bar a').attr('title', 'i am bar');
  $('li.baz a').attr('title', 'i am baz');
  $('li.bop a').attr('title', 'i am bop');
})(jQuery);


(function($){
	var newClass = $(this).attr('class')
	$('li' + newClass + ' a').attr('title', 'i am 'newClass)
})(jQuery);

////////////////////////////////////////////////////////

// 9: how would you improve the following code?
for (i = 0; i <= 100; i++) {
  $('#thinger').append('<p><span class="thinger">i am thinger ' + i + '</span></p>');
  $('#gizmo').append('<p><span class="gizmo">i am gizmo ' + i + '</span></p>');
}



for (i = 0; i <= 100; i++) {
	var className = $(this).attr('class')
	$(className).append('<p><span class='className'>i am 'className'' + i + '</span></p>');
}


////////////////////////////////////////////////////////

// 10: a user enters their desired tip into a text box; the baseTotal, tax,
// and fee values are provided by the application. what are some potential
// issues with the following function for calculating the total?
function calculateTotal(baseTotal, tip, tax, fee) {
  return baseTotal + tip + tax + fee;
}

"Just in case the customer left the tip box empty or put something that is not a number our code will be ready to equal the tip 0"

function calculateTotal(baseTotal, tip, tax, fee) {
    if(tip == undefined || isNaN(tip)) {
        tip = 0
    }
  return baseTotal + tip + tax + fee;
}

calculateTotal(100, NaN, 10, 5)


////////////////////////////////////////////////////////

// 11: write code such that the following alerts "Hello World"
say('Hello')('World');

function say (word) {
	return function sayHelper(word2) {
		alert(word + " " + word2)
	}
}





