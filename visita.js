let currentImageIndex = 0;
const images = ['Fotos/img1.jpg', 'Fotos/img2.jpg', 'Fotos/img3.jpg', 'Fotos/img4.jpg','Fotos/img5.jpg','Fotos/img6.jpg','Fotos/img7.jpg','Fotos/img8.jpg','Fotos/img9.jpg','Fotos/img1.jpg'10 ];


function openModal(imageSrc) 
{
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    currentImageIndex = images.indexOf(imageSrc);
    modal.style.display = 'block';
    modalImage.src = imageSrc;
}

function closeModal() 
{
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    }

function nextImage() 
{
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const modalImage = document.getElementById('modalImage');
        modalImage.src = images[currentImageIndex];
}

const modal = document.getElementById('myModal');
modal.addEventListener
('click', function(event) 
{
    if (event.target === modal) {
        closeModal();
    }
}
);
