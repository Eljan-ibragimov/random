const colors = document.querySelectorAll('.color-box h2')

function generateColors(){
    
    colors.forEach((color) => {
    let hexCode = '#'+ Math.random().toString(16). substring(2,8);
   color.style.backgroundColor = hexCode;
   color.innerHTML = hexCode;
   document.body.style.background = hexCode;
  
    })
}
// function getNewColor(){
//     var symbols,colors;
//     symbols = "0123456789ABCDEF"
//     color = "#";
//     for(var i=0;i<6;i++){
//         color = color + symbols[Math.floor(Math.random()*16)];
//     }
   
// }