/* SCROLL REVEAL */
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) { section.classList.add('active'); }
    });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* MODAL DETALHES */
const modal = document.getElementById('modal');
const title = document.getElementById('modal-title');
const text = document.getElementById('modal-text');

function openModal(titulo, descricao) {
    title.innerText = titulo;
    text.innerText = descricao;
    modal.style.display = 'flex';
}
function closeModal() {
    modal.style.display = 'none';
}

/* CARROSSEL SIMPLES COM SWIPE */
document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    let startX = 0;
    carousel.addEventListener('touchstart', e => { startX = e.touches[0].pageX; });
    carousel.addEventListener('touchmove', e => {
        const moveX = e.touches[0].pageX - startX;
        track.style.transform = `translateX(${moveX}px)`;
    });
});

// CARROSSEL COM BOTÕES
document.querySelectorAll('.carousel-container').forEach(container => {
  const track = container.querySelector('.carousel-track');
  const leftBtn = container.querySelector('.carousel-btn.left');
  const rightBtn = container.querySelector('.carousel-btn.right');

  let index = 0;
  const totalItems = track.children.length;
  const itemWidth = track.children[0].getBoundingClientRect().width + 25; // +gap

  leftBtn.addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    track.style.transform = `translateX(-${itemWidth * index}px)`;
  });

  rightBtn.addEventListener('click', () => {
    index = Math.min(index + 1, totalItems - 1);
    track.style.transform = `translateX(-${itemWidth * index}px)`;
  });
});

// AMPLIAR IMAGEM
const imgModal = document.getElementById('img-modal');
const imgModalContent = document.getElementById('img-modal-content');
const closeImg = document.querySelector('.close-img');

// Seleciona todas as imagens dos carrosséis
document.querySelectorAll('.carousel .item img').forEach(img=>{
  img.style.cursor = 'pointer';
  img.addEventListener('click', ()=>{
    imgModal.style.display = 'block';
    imgModalContent.src = img.src;
  });
});

// Fechar modal ao clicar no "X"
closeImg.addEventListener('click', ()=>{
  imgModal.style.display = 'none';
});

// Fechar modal ao clicar fora da imagem
imgModal.addEventListener('click', (e)=>{
  if(e.target === imgModal) imgModal.style.display = 'none';
});

