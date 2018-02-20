//use a jQuery tag selector to grab all of the <li>s on the page!
var listElements;
listElements = $( "li" );

console.log(listElements);

//use a jQuery class selector to grab all of the elements of class 'article-item' 
var articleItems;
articleItems = $(".article-item");
console.log(articleItems);

//jQuery class selector to grab all the element with id 'nav'
var nav;
nav = $("#nav");
console.log(nav);

//se articleList and DOM navigation methods to collect articleList's
//sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

var articleList, h1, kids, parents;

articleList = $('.article-list');

h1 = $(articleList).siblings(); //h1= article.siblings('h1');
kids = $(articleList).children(); // kids = articleList.find('*');
parents = $(articleList).parents();//parents = articleList.parents('div');

console.log(h1, kids, parents);
