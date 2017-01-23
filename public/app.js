// section, unordered list, list items
var addToList = function(ulist,listItem){
  ulist.appendChild(listItem);
  return ulist;
}

var appendToSection = function(section,uList){
section.appendChild(uList);
}

var createImg = function(link){
  var img = document.createElement("img");
  img.width = 500;
  img.src = link;
  console.log(img);
  return img;
}

var createListItem = function(itemString){
  var li = document.createElement("li");
  li.innerText = itemString;
  return li;
};

var createUnorderedList = function(){
  var ul = document.createElement("ul");
  return ul
};

var addEntry = function(name,food,link){
  var lItem1 = createListItem("Name: "+name);
  var lItem2 = createListItem("Favourite food: "+food);
  var img = createImg(link);
  var uList = createUnorderedList();
  var section = document.getElementById("cats");
  uList = addToList(uList,lItem1);
  uList = addToList(uList,lItem2);
  uList = addToList(uList,img);
  appendToSection(section,uList)
};

var app = function(){
addEntry("Kittykins","Fish fingers","https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg");
addEntry("Tiddles","Anchovies","http://www.aspca.org/sites/default/files/cat-care_cat-nutrition-tips_overweight_body4_left.jpg");

}

window.onload = app;
