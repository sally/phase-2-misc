**WILL EDIT AND FORMAT LATER -Sally + Jeff**

----
----
----
----

# Level 1: Intro to jQuery

### to select all text inside of a tag:
```javascript
$(“TAGNAME”).text()
```

### to change all text inside of a tag:
```javascript
$(“TAGNAME”).text(“YOUR NEW TEXT HERE”)
```

### to make sure code runs after the page has finished loading
```javascript
> $(document).ready(function() {
});
```
### select tag with id #blah
```javascript
$(“#blah”)
```

### select tag with class blah
```javascript
$(“.blah”)
```

### select all children of ANCESTOR DESCENDANT
```javascript
$(“ANCESTOR DESCENDANT”)
```

### only select direct child elements of parent
```javascript
$(“parent>child”)
```

### multiple selectors
```javascript
$(“SELECTOR1, SELECTOR2, …, SELECTORN”)
```

### pseudo selectors
EXAMPLE: :first
```javascript
$(“TAG/CLASS:first”)
> $(“#IDNAME TAGNAME:first”)
```

### Within #tours list, find the direct children li elements, and then use the :even pseudo selector to select every other li element.
```javascript
$("#tours>li:even")
```

# Level 2:

### select all vacations from America using $("#vacations .america"). This works, but let's change the previous code to use traversal instead with the find method.
```javascript
$("#vacations").find(".america")
```

#### FILTERING:
```javascript
$("#vacations .america")
```

####TRAVERSAL:
```javascript
$("#vacations").find(".america")
```

### Using traversal or filtering, select the first vacation li element from the list. (No using pseudo selectors!)
Using traversal: 
```javascript
$("#vacations").find("li").first()
```

### someone else is selecting the last vacation with $("#vacations li:last"). refactor this code to find the last li within #vacations using traversal
```javascript
Using traversal: $("#vacations").find("li").last()
```

### vacation that is previous to the last one will always be on sale. Use traversal with the prev() method to select the vacation that is right before the last one.
```javascript
$(“#vacations”).find(“li”).last().prev()
```

### Using traversal, select all tours that have a .featured class on their title by getting the parent() of featured titles.
```javascript
$(".featured").parent()
```

### you used to select all the tours: $("#tours > li"). You immediately realize it can be done better, refactor this to use traversal with children().
```javascript
$("#tours").children()
```

# Level 3: Working With The Dom

//updating the dom: adding an element to the document with attributes and text
//GOAL: show message to traveler letting them know our phone # to book the trip. Let's add the phone number immediately before() the "Book Now" button. You can check out the HTML of the rendered page by clicking on the HTML tab below.
//HTML:

```html
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
  </ul>
</div>
```

//STEP 1: create `span` node with phone #
var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
//STEP 2: select the item you want to append/prepend the new element to
var book_now_button = $(".book:first");
//STEP 3: do it
book_now_button.before(message);
(or book_now_button.append(message); for appending)

//adding to the dom:
//GOAL: append() our <span> to the bottom of the .usa element. Let's change the code to add it there instead.
//HTML:

```html
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="europe tour">
      <h2>Paris, France</h2>
      <span class="details">$2,299 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
    <li class="asia tour">
      <h2>Tokyo, Japan</h2>
      <span class="details">$3,799 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
  </ul>
</div>
```

//SOLUTION: var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
var usa_elt = $('.usa:first');
usa_elt.append(message);

//removing from the dom:
//GOAL: remove that "Book Now" button until we can implement it. Go ahead and remove() it from the page.
//HTML:

```html
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
    <span>Call 1-555-jquery-air to book this tour</span></li>
  </ul>
</div>
//SOLUTION: (select and then remove)
$('.book').remove();
```

//interaction using dom:
//GOAL: wrap all previous code in click handler for any `button` elements using `on()` method
//HTML:

```html
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      
    <span>Call 1-555-jquery-air to book this tour</span></li>
  </ul>
</div>
```

//SOLUTION: $('button').on('click', function(){

var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
$('.usa').append(message);
$('button').remove();

});

//GOAL: Acting on Click: Change click handler to trigger when the .tour list item is clicked instead
//HTML:

```html
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <button class="book">Book Now</button>
    </li>
  </ul>
</div>
```

//SOLUTION:
$('#tours li').on('click', function() {
  var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
  $('.usa').append(message);
  $('button').remove();
});

//GOAL: On Page Load: Wrap all code in $(document).ready() block so that it won’t run until DOM loaded
//SOLUTION:
$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $('.usa').append(message);
    $('button').remove();
  });
});

//GOAL: Removing the Clicked Button: Just remove the one button that was clicked by using `this`
//SOLUTION:
$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $('.usa').append(message);
    $(this).remove();
  });
});

//GOAL: Relative Traversing I
//SOLUTION:
$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    //$('.usa').append(message);
    $(this).after(message);
    $(this).remove();
  });
});

//GOAL: Relative Traversing II someone changed our HTML. Now the <button> is inside a <div> tag. We don't want the message to go inside the <div> tag though, we want it to go at the bottom of the <li> element. Instead of using after(), let's change our code to find the closest() .tour element and append() the message to the bottom of it.
//HTML
```html
<div id="tours">
  <h1>Guided Tours</h1>
  <ul>
    <li class="usa tour">
      <h2>New York, New York</h2>
      <span class="details">$1,899 for 7 nights</span>
      <div>
        <button class="book">Book Now</button>
      </div>
    </li>
    <li class="europe tour">
      <h2>Paris, France</h2>
      <span class="details">$2,299 for 7 nights</span>
      <div>
        <button class="book">Book Now</button>
      </div>
    </li>
    <li class="asia tour">
      <h2>Tokyo, Japan</h2>
      <span class="details">$3,799 for 7 nights</span>
      <div>
        <button class="book">Book Now</button>
      </div>
    </li>
  </ul>
</div>
```
//SOLUTION:
$(document).ready(function() {
  $('button').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).closest(".tour").append(message);
    $(this).remove();
  });
});

//GOAL: Relative Traversing III Rather than clicking on the button to show the message, we've decided to allow travelers to click on the entire <li> element. Change the call to on() to target .tour elements instead of button elements. After that change, $(this) will reference the clicked <li>. Let's remove the closest() method so that .append(message) still works. Then, use find to locate the button element and remove() it.
//SOLUTION:
$(document).ready(function() {
  $('.tour').on('click', function() {
    var message = $('<span>Call 1-555-jquery-air to book this tour</span>');
    $(this).append(message);
    $(this).find('button').remove();
  });
});

Fetching Data from the Dom I
//Goal: Create a discount variable, and then assign the discount that is stored in the data() attribute on the .tour element. To assign the correct data value, traverse from the clicked button, $(this), to the closest .tour element, and then use data() to find the discount. We don't need to do anything with the discount variable just yet.
