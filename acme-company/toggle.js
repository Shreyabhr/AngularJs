function toggle(){
    var button = document.getElementById('showImage');
    var image = document.getElementById('productImage');
    if(image.style.display == 'none'){
        image.style.display = 'block';
        button.innerHTML = "Hide Image";
        return;
    }
    image.style.display = 'none';
    button.innerHTML = "Show Image";
}