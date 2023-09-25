let musicas = [
    {titulo:'Satellite', artista:'Harry Styles', src:'musicas/satellite.mp3', img:"ft.jpg"},
    {titulo:'New Romantics', artista:'taylor swift', src:'musicas/newromantics.mp3', img:"ft.jpg"},
    {titulo:'Lonely heart', artista:'5 seconds of summer', src:'musicas/lonelyheart.mp3', img:"ft.jpg"},
    {titulo:'When i was your man', artista:'Bruno Mars', src:'musicas/bruno.mp3', img:"ft.jpg"},
    {titulo:'Bring Me To Life', artista:'Evanescence ', src:'musicas/bringmetolife.mp3', img:"ft.jpg"},
    {titulo:'Mess it up', artista:'Gracie Abrams', src:'musicas/messitup.mp3', img:"ft.jpg"},
    {titulo:'Daylight', artista:'Harry Styles', src:'musicas/daylight.mp3', img:"ft.jpg"},
    {titulo:'Seven', artista:'Taylor Swift', src:'musicas/seven.mp3', img:"ft.jpg"},
    {titulo:'Summertime Sadness ', artista:'Lana Del Rey', src:'musicas/summer.mp3', img:"ft.jpg"},
    {titulo:'Cardigan', artista:'Taylor Swift', src:'musicas/cardigan.mp3', img:"ft.jpg"}

   
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);


document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 10;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 10){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});


function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}
