function toggleBanner(header) {
    const content = header.nextElementSibling; // Seleciona o próximo elemento (conteúdo)
    const icon = header.querySelector(".toggle-icon"); // Seleciona o ícone de "+"
  
    if (content.classList.contains("open")) {
      // Recolher o conteúdo
      content.classList.remove("open");
      icon.textContent = "+"; // Muda para "+"
    } else {
      // Expandir o conteúdo
      content.classList.add("open");
      icon.textContent = "-"; // Muda para "-"
    }
  }