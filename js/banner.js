let indexSlide = 1;
showSlide(1);

nextSlide(1);

function nextSlide(n){
    showSlide(indexSlide += n);
}

function showSlide(n){
    let listImage = document.getElementsByClassName('main-content-title');

    //reset index slide
    if(n > listImage.length) indexSlide = 1;

    //menghilangkan semua gambar
    let index = 0;
    while(index < listImage.length){
        listImage[index].style.display = 'none';
        index++;
    }

    //memunculkan 1 gambar saja
    listImage[indexSlide - 1].style.display = 'block';
}

//auto slide
setInterval(() => nextSlide(1), 3000);