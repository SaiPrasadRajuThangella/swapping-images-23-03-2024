const container = document.getElementById("container")

const images = document.getElementsByTagName("img")

function onDragStart(event){
    event.dataTransfer.setData("sourceID",event.target.id)
}
function onDragover(event){
    event.preventDefault();
}
function onDrop(event){
    
    const sourceID = event.dataTransfer.getData("sourceID");
    console.log(sourceID)
    const sourceElement = document.getElementById(sourceID);
    const sourceNextElement = sourceElement.nextElementSibling;
    const destId= event.target.id;
    const destElement = document.getElementById(destId);
    const destNextElement = destElement.nextElementSibling;


    container.insertBefore(destElement,sourceNextElement);
    container.insertBefore(sourceElement,destNextElement);
    

}
for(let i=0;i<images.length;i++){
    images[i].addEventListener("dragstart",onDragStart)
    images[i].addEventListener("dragover",onDragover)
    images[i].addEventListener("drop",onDrop)
}