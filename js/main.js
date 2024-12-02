  // Biblioteca para carrossel
let swiper = new Swiper('.swiper', {
    loop: true, 
    autoplay: {
      delay: 5000, 
      disableOnInteraction: false, 
    },
    effect: 'fade', 
    fadeEffect: {
      crossFade: true, 
    },
  });
  
  let form = document.getElementById("form-cadastro");
  let pagamento = document.getElementById("pagamento");
  let mensagem = document.getElementById("mensagem");
  
  // Elementos de pagamento
  let dadosCartao = document.getElementById("dados-cartao");
  let dadosPix = document.getElementById("dados-pix");
  let dadosBoleto = document.getElementById("dados-boleto");
  
  // Exibir campos de pagamento dinamicamente
  pagamento.addEventListener("change", function() {
    let metodo = pagamento.value;
  
    dadosCartao.style.display = metodo === "Cartão de Crédito" ? "block" : "none";
    dadosPix.style.display = metodo === "Pix" ? "block" : "none";
    dadosBoleto.style.display = metodo === "Boleto" ? "block" : "none";
  });
  
  // Submissão do formulário
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let cursoSelecionado = document.querySelector('input[name="curso"]:checked');
    let formaPagamento = pagamento.value;
  
    if (!nome || !email || !cursoSelecionado || !formaPagamento) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    let curso = cursoSelecionado.value;
  
    //  mensagem personalizada
    mensagem.textContent = `Pagamento efetuado com sucesso! Você se inscreveu no curso de ${curso} e escolheu pagar via ${formaPagamento}. Obrigado, ${nome}!`;
    mensagem.style.display = "block";
  
    //  Resetar o formulário
    form.reset();
    dadosCartao.style.display = "none";
    dadosPix.style.display = "none";
    dadosBoleto.style.display = "none";
  });
  
