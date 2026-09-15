const fs = require('fs');

function testarSeTokenExiste() {
    const conteudoApp = fs.readFileSync('app.js', 'utf8');
    if (conteudoApp.includes('SEU_TOKEN_AQUI')) {
        console.warn("Aviso: O token da API não foi configurado para produção.");
        process.exit(1); 
    } else {
        console.log("Sucesso: Arquivo configurado.");
        process.exit(0);
    }
}

testarSeTokenExiste();