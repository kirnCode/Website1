var placeHolderLeft = document.getElementById('placeHolderLeft');
var placeHolder = document.getElementById('placeHolder');
var placeHolderRight = document.getElementById('placeHolderRight');
var midButton = document.getElementById('midButton');
var popUpBox = document.getElementById('popUpBox');
var imagePopUp = document.getElementById("imagePopUp");
var welcome = document.getElementById("welcome");

var placeHolderPos = "center";
var buttonToggle = false;
var popUpToggle = false;

var centerWidth = "500px";
var centerHeight = "500px";
var centerPos = "50%";
var centerZ = "5"

var leftWidth = "300px";
var leftHeight = "300px";
var leftPos = "25%";
var leftZ = "1";

var rightWidth = "300px";2
var rightHeight = "300px";
var rightPos = "75%";
var rightZ = "1";

var centerLivePos = "center";

function moveRight(){
    
    if(centerLivePos === "center"){
        placeHolderLeft.style.width = centerWidth;
        placeHolderLeft.style.height = centerHeight;
        placeHolderLeft.style.left = centerPos;
        placeHolderLeft.style.zIndex = centerZ;

        placeHolder.style.width = rightWidth;
        placeHolder.style.height = rightHeight;
        placeHolder.style.left = rightPos;
        placeHolder.style.zIndex = rightZ;

        placeHolderRight.style.width = leftWidth;
        placeHolderRight.style.height = leftHeight;
        placeHolderRight.style.left = leftPos;
        placeHolderRight.style.zIndex = leftZ;
        centerLivePos = "right";
    }
    else if(centerLivePos === "right"){
        placeHolderLeft.style.width = rightWidth;
        placeHolderLeft.style.height = rightHeight;
        placeHolderLeft.style.left = rightPos;
        placeHolderLeft.style.zIndex = rightZ;

        placeHolder.style.width = leftWidth;
        placeHolder.style.height = leftHeight;
        placeHolder.style.left = leftPos;
        placeHolder.style.zIndex = leftZ;

        placeHolderRight.style.width = centerWidth;
        placeHolderRight.style.height = centerHeight;
        placeHolderRight.style.left = centerPos;
        placeHolderRight.style.zIndex = centerZ;
        centerLivePos = "left";
    }
    else if(centerLivePos === "left"){
    
        placeHolderLeft.style.width = leftWidth;
        placeHolderLeft.style.height = leftHeight;
        placeHolderLeft.style.left = leftPos;
        placeHolderLeft.style.zIndex = leftZ;

        placeHolder.style.width = centerWidth;
        placeHolder.style.height = centerHeight;
        placeHolder.style.left = centerPos;
        placeHolder.style.zIndex = centerZ;

        placeHolderRight.style.width = rightWidth;
        placeHolderRight.style.height = rightHeight;
        placeHolderRight.style.left = rightPos;
        placeHolderRight.style.zIndex = rightZ;
        centerLivePos = "center";
    
    }
    
 
}

function moveLeft(){
    
    if(centerLivePos === "center"){
        placeHolderLeft.style.width = rightWidth;
        placeHolderLeft.style.height = rightHeight;
        placeHolderLeft.style.left = rightPos;
        placeHolderLeft.style.zIndex = rightZ;

        placeHolder.style.width = leftWidth;
        placeHolder.style.height = leftHeight;
        placeHolder.style.left = leftPos;
        placeHolder.style.zIndex = leftZ;

        placeHolderRight.style.width = centerWidth;
        placeHolderRight.style.height = centerHeight;
        placeHolderRight.style.left = centerPos;
        placeHolderRight.style.zIndex = centerZ;
        centerLivePos = "left";
    }
    else if(centerLivePos === "right"){
        placeHolderLeft.style.width = leftWidth;
        placeHolderLeft.style.height = leftHeight;
        placeHolderLeft.style.left = leftPos;
        placeHolderLeft.style.zIndex = leftZ;

        placeHolder.style.width = centerWidth;
        placeHolder.style.height = centerHeight;
        placeHolder.style.left = centerPos;
        placeHolder.style.zIndex = centerZ;

        placeHolderRight.style.width = rightWidth;
        placeHolderRight.style.height = rightHeight;
        placeHolderRight.style.left = rightPos;
        placeHolderRight.style.zIndex = rightZ;
        centerLivePos = "center";
    }
    else if(centerLivePos === "left"){
    
        placeHolderLeft.style.width = centerWidth;
        placeHolderLeft.style.height = centerHeight;
        placeHolderLeft.style.left = centerPos;
        placeHolderLeft.style.zIndex = centerZ;

        placeHolder.style.width = rightWidth;
        placeHolder.style.height = rightHeight;
        placeHolder.style.left = rightPos;
        placeHolder.style.zIndex = rightZ;

        placeHolderRight.style.width = leftWidth;
        placeHolderRight.style.height = leftHeight;
        placeHolderRight.style.left = leftPos;
        placeHolderRight.style.zIndex = leftZ;
        centerLivePos = "right";
    
    }
    
 
}

function enlargeIMG(){
    if(buttonToggle === false){
        if(centerLivePos === "center"){
            placeHolder.style.width = "800px";
            placeHolder.style.height = "800px";
            midButton.style.width = "800px";
            midButton.style.height= "800px";
    
        }else if(centerLivePos === "left"){
            placeHolderRight.style.width = "800px";
            placeHolderRight.style.height = "800px";
            midButton.style.width = "800px";
            midButton.style.height= "800px";

        }else{
            placeHolderLeft.style.width = "800px";
            placeHolderLeft.style.height = "800px";
            midButton.style.width = "800px";
            midButton.style.height= "800px";
        }
        buttonToggle = true;
    }else{
        if(centerLivePos === "center"){
            placeHolder.style.width = "500px";
            placeHolder.style.height = "500px";
            midButton.style.width = "500px";
            midButton.style.height= "500px";
    
        }else if(centerLivePos === "left"){
            placeHolderRight.style.width = "500px";
            placeHolderRight.style.height = "500px";
            midButton.style.width = "500px";
            midButton.style.height= "500px";

        }else{
            placeHolderLeft.style.width = "500px";
            placeHolderLeft.style.height = "500px";
            midButton.style.width = "500px";
            midButton.style.height= "500px";
        }
        buttonToggle = false;
    }
    
}

function popUp(){
    if(popUpToggle === false){
        popUpBox.style.opacity = "100%";
        popUpBox.style.zIndex = "6";
        popUpToggle = true;
    }
    else{
        popUpBox.style.opacity = 0;
        popUpBox.style.zIndex = 0;
        popUpToggle = false;
    }
   
}

function enlarge(element){
    var image = document.createElement('img');
    image.src = "../images/" + element.id+ ".jpg";
    imagePopUp.style.zIndex = "6";
    imagePopUp.style.opacity = "100%";
    imagePopUp.innerHTML = '';
    imagePopUp.appendChild(image);
}

function closeEnlarge(){
    imagePopUp.style.opacity = "100%";
    imagePopUp.style.zIndex = "-1"; 
 }