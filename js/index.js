$(document).ready(function(){

// Practicing Selectors:
// Goal 1: Select the h1, and change the text to say "My jQuery Workout". You can write that like this  $('').text('My jQuery Workout'). You will need to change the selector $('') to target the h1.
  
  $("h1").text("My jQuery Workout");

// Goal 2: Use the same text function to change the h2 to whatever you want.
  
  $("h2").text("whatever you want");

// Goal 3: The paragraph should be a little skinnier. Try using the width() function in the same way as the text function, passing in a number, i.e. $('').width(200)
  
  $("p").width(200);

// Goal 4: There are a few list items. Try changing the text of all of them at the same time. 
  
  // $("li").text("");

//  Goal 5: Now try changing each one individually, using the id to select the list item, and changing the text to something unique. 
  
  // $("#one").text("one");
  // $("#two").text("two");
  // $("#three").text("three");
  // $("#four").text("four");
  // $("#five").text("five");

// Practicing Traversal:
// Goal 1: Start off by selecting the h1, then find all the siblings (use the sibling() function). You can wrap this code in console.log() to log the results. You will need to open the developer tools console to see this. 
  
  console.log($("h1").siblings());

// Goal 2: Now, narrow down the siblings to just the h2 by passing a parameter to the siblings function, siblings('') , and change the text of the h2. 
  
  console.log($("h1").siblings("h2"));

// Goal 3: starting from the h1, hide all the li with the class of text. This will require you to use siblings() and children() and hide(). 
  
  // $("h1").siblings("ul").children(".text").hide();

// Goal 4: start from the button, using the id to select it. From there, use the hide() function to hide the li with the class button. This goal will require the use of parent() as well as the methods you have used so far.
  
  console.log($("button").parent(".button").parent("ul").children(".button").hide());
  
});
console.log('Write your code directly into the JS window');