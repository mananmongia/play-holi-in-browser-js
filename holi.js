var elements = document.getElementsByTagName("*");
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function generator()
{
for (var i=0; i<elements.length; i++) {
     
         
        elements[i].style.backgroundColor = getRandomColor();
        console.log("hi");
    
 }
}
   var audio = new Audio('/home/manan/Desktop/sick.mp3');
audio.play();
   setInterval(generator,100);
