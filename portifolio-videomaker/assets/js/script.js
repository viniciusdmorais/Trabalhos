function substituirImagem() {
    const imagens = document.getElementsByTagName('img');
    for (let i = 0; i < imagens.length; i++) {
      imagens[i].addEventListener('error', function() {
        const novaImagem = new Image();
        novaImagem.src = 'assets/img/dragon-in-construction.png';
        novaImagem.classList.add('img-construct');
        novaImagem.width = 653;
        novaImagem.height = 328;
        imagens[i].parentNode.replaceChild(novaImagem, imagens[i]);
      });
    }
  }
  substituirImagem()
  //substituirImagem()