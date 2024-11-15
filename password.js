   // Função para redirecionar após redefinir a senha
   const resetPasswordForm = document.getElementById('reset-password-form');

   resetPasswordForm.addEventListener('submit', function(event) {
       event.preventDefault(); // Impede o envio do formulário (não precisa de backend para esse exemplo)

       // Verificar se as senhas coincidem
       const newPassword = document.getElementById('new-password').value;
       const confirmPassword = document.getElementById('confirm-password').value;

       if (newPassword !== confirmPassword) {
           alert("Passwords do not match!");
           return;
       }

       // Simulando a redefinição de senha (não é um backend real aqui)
       alert("Password reset successfully!");

       // Redirecionar de volta para a página de login
       window.location.href = "index.html";
   });