window.onload = function() {
    var typeString = ['Technology enthusiast', 'Web Developer','Machine Learning Engineer','Mentor'];
    var  i = 0;
    var count = 0
    var selectedText = '';
    var text = '';
    (function type() {
      if (count == typeString.length) {
        count = 0;
      }
      selectedText = typeString[count];
      text = selectedText.slice(0, ++i);
      document.getElementById("typing").innerHTML = text;
      if (text.length === selectedText.length) {
        count++;
        i = 0;
      }
      setTimeout(type, 130);
    }());
};