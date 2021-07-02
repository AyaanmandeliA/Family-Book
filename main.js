var names=["Mom - Priyanka","Dad - Aanand","Me - Ayaan" , "Sister - Anaya" ];
var images=["m.jpg","d.jfif","A.jpeg","Anaya.png"];
var i=0;
function Next_Family_Members(){

    document.getElementById("album").src= images[i];
    document.getElementById("names007").innerHTML=names[i];
    i++;
    if(i==4){
        i=0;
    }
    
}