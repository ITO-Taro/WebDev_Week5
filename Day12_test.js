var target = 'aabb';
var regex = /word/g;
var x = ['abba', 'bbaa', 'abcd', 'dbdb', 'aabb'];
list1 = ['cd', 'gfds', 'aaaa'];
list2=['crazer', 'carer', 'racar', 'caers', 'racer'];
list3=['crazer', 'carer', 'racar', 'caers', 'racer'];
var y =[];
var list=[];

// function anagrams(w, l){
//     // var list=[];
//     w=w.toLowerCase().split('').sort().join('');
//     for(var i = 0; i<l.length; i++){
//       ordered = l[i].toLowerCase().split('').sort().join('');
//       if(w === ordered){list.push(l[i]);}
//     return (list);}
// }

function anagrams(word, words){
  var list1 = [];
  word = word.toLowerCase().split('').sort().join('');
  for(var i = 0; i < words.length; i++){
    ordered = words[i].toLowerCase().split('').sort().join('');
    if(word === ordered){
      list1.push(words[i]);}
    else continue;}
  return list1;
}

var left = /\(/g;
var right = /\)/g;
test_str1 = "()()()()()()";
test_str2 = "()()))(()())";
test_str3 = "))))(((()))()()(";
test_str4 = "((";
test_str5 = "";


function validParentheses(x){
  var left = /\(/g;
  var right = /\)/g;
  if (1 < x.length <= 100){
    for (var i = 0; i < x.length; i++)
  if((x.match(left) != null) &&  (x.match(right) != null)){
    if(x.match(left).length === x.match(right).length){
    return true;
  }
  else return false;}
  else return false;}
  else return false;
}

console.log(validParentheses(test_str5));
// console.log(test_str4.match(right));

// node Day12_test.js