    // Função para validar o formulário de registro
    document.querySelector("form").addEventListener("submit", function(event) {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            event.preventDefault(); // Impede o envio do formulário se as senhas não coincidem
        }
    });

      // Função para alternar a visibilidade das senhas
      const eyeIcon = document.getElementById("eye-icon");
      const passwordField = document.getElementById("password");
      const confirmPasswordField = document.getElementById("confirm-password");

      // Função para alternar entre mostrar e esconder as senhas
      eyeIcon.addEventListener("click", function() {
          // Verifica se a senha está oculta ou visível
          if (passwordField.type === "password") {
              passwordField.type = "text"; // Mostra a senha
              eyeIcon.classList.remove("bx-hide"); // Troca o ícone
              eyeIcon.classList.add("bx-show");
          } else {
              passwordField.type = "password"; // Oculta a senha
              eyeIcon.classList.remove("bx-show");
              eyeIcon.classList.add("bx-hide");
          }

          // Aplica a mesma lógica para o campo de confirmação de senha
          if (confirmPasswordField.type === "password") {
              confirmPasswordField.type = "text"; // Mostra a confirmação da senha
          } else {
              confirmPasswordField.type = "password"; // Oculta a confirmação da senha
          }
      });
      
          // Adicionar evento de redirecionamento após clicar no botão Register
          const registerForm = document.getElementById("register-form");

          registerForm.addEventListener("submit", function(event) {
              event.preventDefault();  // Impede o envio do formulário (não precisa ser enviado para o servidor)
              // Simula o redirecionamento para index.html
              window.location.href = "index.html";  // Redireciona para a página de login
          });
