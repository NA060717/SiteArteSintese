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


  // pagina de cadastro envio formulário

document.getElementById("form-cadastro").addEventListener("submit", function(event) {
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;

  if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      event.preventDefault(); // Impede o envio do formulário
  }
});


  });
 // Função para mostrar o formulário correspondente ao método de pagamento selecionado
function mostrarFormularioPagamento() {
  let metodoPagamento = document.querySelector('input[name="pagamento"]:checked').value;
  let formPagamento = document.getElementById("form-pagamento");
  let formCartao = document.getElementById("form-cartao");
  let formPix = document.getElementById("form-pix");

  // Esconder todos os formulários inicialmente
  formPagamento.style.display = 'none';
  formCartao.style.display = 'none';
  formPix.style.display = 'none';

  // Mostrar o formulário conforme a seleção
  if (metodoPagamento === "cartao" || metodoPagamento === "debito") {
    formPagamento.style.display = 'block';
    formCartao.style.display = 'block';
  } else if (metodoPagamento === "pix") {
    formPagamento.style.display = 'block';
    formPix.style.display = 'block';
  } else if (metodoPagamento === "boleto") {
    formPagamento.style.display = 'none'; // Não há informações adicionais para Boleto
  }
}

// Função para processar o pagamento e gerar mensagem correspondente
function processarPagamento() {
  let nome = document.getElementById("nome").value;
  let sobrenome = document.getElementById("sobrenome").value;
  let cpf = document.getElementById("cpf").value;
  let cep = document.getElementById("cep").value;
  let metodoPagamento = document.querySelector('input[name="pagamento"]:checked').value;
  let cursoSelecionado = document.getElementById("curso").value;
  let mensagemPagamento = document.getElementById("mensagem-pagamento");

  if (metodoPagamento === "boleto") {
    // Gerar link de boleto
    let linkBoleto = "#"; // Link fictício para o boleto
    mensagemPagamento.innerHTML = `
      <p><strong>Pagamento via Boleto Gerado com Sucesso!</strong></p>
      <p>O boleto para o curso de <strong>${cursoSelecionado}</strong> foi gerado. Você pode <a href="${linkBoleto}" target="_blank">baixar o boleto</a>.</p>
      <p>Você pode <a href="#" onclick="imprimirComprovante()">imprimir o comprovante de pagamento</a>.</p>
    `;
  } else if (metodoPagamento === "cartao" || metodoPagamento === "debito") {
    let numeroCartao = document.getElementById("numero-cartao").value;
    let validadeCartao = document.getElementById("validade-cartao").value;
    let cvv = document.getElementById("cvv").value;
    
    // Processar os dados do cartão (simulação)
    mensagemPagamento.innerHTML = `
      <p><strong>Pagamento via Cartão de Crédito/Débito Efetivado com Sucesso!</strong></p>
      <p>Obrigado por efetuar o pagamento via cartão de

    