function validaSenha() {
    const senhaCorreta = "senai123";
    let tentativas = 3;

    while (tentativas > 0) {
        let senha = prompt("Digite a senha (Tentativas restantes: " + tentativas + "):");
        if (senha === senhaCorreta) {
            document.writeln("Acesso permitido");
            return;
        }
        tentativas--;
    }

    document.writeln("Acesso bloqueado");
}
