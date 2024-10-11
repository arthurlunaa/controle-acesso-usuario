function verificarAcesso(perfil) {
    if (perfil === "administrador") {
        console.log("Bem-vindo(a), administrador!");
    }
    else if (perfil === "moderador") {
        console.log("Bem-vindo(a), moderador! Você pode gerenciar conteúdo.");
    }
    {
    switch (perfil) {
            case "assinante":
                console.log("Olá, assinante! Aproveite o conteúdo disponível.");
            case "":
                console.log("Perfil não especificado");
            default: "visitante"
                console.log("Acesso negado.");
        }
    
    }
}

