function enviarWhatsApp() {
    var numeroTelefone = "5549991604601";
    var mensagem = encodeURIComponent("Olá, vim do site e gostaria de mais informações sobre o seu atendimento!"); 
    
    var url = "https://wa.me/" + numeroTelefone + "?text=" + mensagem;
    window.open(url, '_blank');
  }