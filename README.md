1. By using getElementbyId() we can select only one Html element at a time, where we can select multiple elements at a time by using getElementsByClassName(). querySelector & querySelectorAll are static where getElementbyId/classname/tagname are dynamic. querySelector select first html element only and we have to put the id/class sign like #/. before the querySelector/querySelectorAll name. querySelectorAll select multiple html elements like getElementsByClassName and they both return array like object (HTMLcollection & NodeList).

2. const parentDiv = document.getElementbyId('parentDiv');
const div = document.createElement('div');
div.innerHTML = `My Html Code will go from here`
parentDiv.appendChild('div');

3. When an user click any elements like button, then this event will go to upwards to the root html. This is a default process of DOM event. 

4. Event delegation allow users to manage a single element of DOM. Such as, when we loop multiple button then event.target property is used to identify the specific child element that originally triggered the event.

5. event.preventDefault(): prevent browser default behavior for specific event. stopPropagation() stop "bubbling up" to parent elements or "capturing down" to child elements.