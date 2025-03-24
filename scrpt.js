document.addEventListener("DOMContentLoaded", () => {
    // Exibe uma mensagem de boas-vindas ao carregar a página
    alert("Bem-vindo à página da Equipe Tech!");
  
    // Interatividade: muda a cor de fundo da seção de integrantes ao passar o mouse
    const integrantesSection = document.querySelector("#integrantes");
    
    integrantesSection.addEventListener("mouseover", () => {
      integrantesSection.style.backgroundColor = "#f0f0f0";
    });
    
    integrantesSection.addEventListener("mouseout", () => {
      integrantesSection.style.backgroundColor = "";
    });
  });