const TOKEN = 'test_94beb601a46352f50a47d368a49053'; 
const CAMPEONATO_ID = 10; // ID do Brasileirão Série A na API-Futebol

async function buscarTabela() {
    try {
        const resposta = await fetch(`https://api.api-futebol.com.br/v1/campeonatos/${CAMPEONATO_ID}/tabela`, {
            headers: {
                'Authorization': `Bearer ${TOKEN}`
            }
        });
        const dados = await resposta.json();
        montarTabela(dados);
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

function montarTabela(classificacao) {
    const corpoTabela = document.getElementById('corpo-tabela');
    classificacao.forEach(time => {
        const linha = `
            <tr>
                <td>${time.posicao}</td>
                <td>${time.time.nome_popular}</td>
                <td>${time.pontos}</td>
                <td>${time.jogos}</td>
            </tr>
        `;
        corpoTabela.innerHTML += linha;
    });
}

buscarTabela();