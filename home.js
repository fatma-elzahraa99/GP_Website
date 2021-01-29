imagesList = ["images/image_2.jpg","images/image_1.jpg","images/image10.png","images/img3.png","images/img4.png"];
console.log(imagesList);
var i = 0;
setInterval(() => {
  document.body.style.backgroundImage= `url(${imagesList[i%5]})`
    setTimeout(()=>{
        i=i+1;
    },1000);
    // setTimeout(()=>{
    //     imagesList[i].style.opacity=1;
    //     console.log(i)
    //     i = i+ 1 ;
    // },1000); 
    // imagesList[i].style.opacity=0;
    //i=i+1;
    if(i == imagesList.length-1){
        clearInterval();
    }
}, 2000);