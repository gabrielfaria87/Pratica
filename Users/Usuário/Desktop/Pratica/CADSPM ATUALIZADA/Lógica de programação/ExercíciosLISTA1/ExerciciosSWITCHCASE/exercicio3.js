function validacaoSenha() {
    // Cadastro da senha
    let senhaCadastrada = prompt("Cadastre sua senha:");

    // Se usuário cancelar ou não digitar, encerramos
    if (senhaCadastrada === null || senhaCadastrada.trim() === "") {
        alert("Cadastro de senha cancelado ou inválido.");
        return;
    }

    // Tentativas para validar a senha cadastrada
    let tentativas = 0;
    let senhaTentada;

    while (tentativas < 3) {
        senhaTentada = prompt("Digite a senha cadastrada:");

        if (senhaTentada === null) {
            alert("Validação cancelada.");
            return;
        }

        if (senhaTentada === senhaCadastrada) {
            alert("Bem-vindo!");
            return;
        } else {
            tentativas++;
            alert(`Senha incorreta! Tentativas restantes: ${3 - tentativas}`);
        }
    }

    alert("Acesso bloqueado.");
}

