let projetoAtual = '';
let infoAtual = '';

function mostrarConteudo(secao) {
  const conteudo = document.getElementById("conteudo");
  document.getElementById("submenu-projetos").style.display = "none";
  document.getElementById("subsubmenu").style.display = "none";
  
  document.querySelectorAll('.projeto-btn').forEach(btn => btn.classList.remove('ativo'));
  document.querySelectorAll('.info-btn').forEach(btn => btn.classList.remove('ativo'));
  projetoAtual = '';
  infoAtual = '';
  
  
}

function toggleProjetos() {
  const submenu = document.getElementById("submenu-projetos");
  const subsubmenu = document.getElementById("subsubmenu");
  const conteudo = document.getElementById("conteudo");
  
  if (submenu.style.display === "block") {
    submenu.style.display = "none";
    subsubmenu.style.display = "none";
    conteudo.innerText = "";
    document.querySelectorAll('.projeto-btn').forEach(btn => btn.classList.remove('ativo'));
    document.querySelectorAll('.info-btn').forEach(btn => btn.classList.remove('ativo'));
    projetoAtual = '';
    infoAtual = '';
  } else {
    submenu.style.display = "block";
    subsubmenu.style.display = "none";
    conteudo.innerText = "> projetos\nSelecione um projeto abaixo:_";
  }
}

function abrirProjeto(nome) {
  projetoAtual = nome;
  infoAtual = '';
  
  const btnsProjeto = document.querySelectorAll('.projeto-btn');
  btnsProjeto.forEach(btn => btn.classList.remove('ativo'));
  
  const btnClicado = Array.from(btnsProjeto).find(btn => btn.textContent === nome);
  if (btnClicado) {
    btnClicado.classList.add('ativo');
  }
  
  const subsubmenu = document.getElementById("subsubmenu");
  subsubmenu.innerHTML = `
    <p>> ${nome}</p>
    <button class="info-btn" onclick="mostrarInfo('${nome}', 'sobre')">sobre</button>
    <button class="info-btn" onclick="mostrarInfo('${nome}', 'link')">link</button>
  `;
  subsubmenu.style.display = "block";
  
  document.getElementById("conteudo").innerText = `> Projetos > ${nome}_`;
}

function mostrarInfo(projeto, tipo) {
  infoAtual = tipo;
  
  const btnsInfo = document.querySelectorAll('.info-btn');
  btnsInfo.forEach(btn => btn.classList.remove('ativo'));
  
  const btnClicado = Array.from(btnsInfo).find(btn => btn.textContent === tipo);
  if (btnClicado) {
    btnClicado.classList.add('ativo');
  }
  
  const conteudo = document.getElementById("conteudo");
  if (tipo === "sobre") {
    conteudo.innerText = `> Projetos > ${projeto} > sobre\nEsse é um projeto incrível que mistura ideias criativas com tecnologia avançada._`;
  } else if (tipo === "link") {
    conteudo.innerText = `> Projetos > ${projeto} > link\nAcesse em: https://example.com/${projeto.toLowerCase().replace(" ", "-")} _`;
  }
}

function processarComando() {
  const input = document.getElementById("comandoInput");
  const comando = input.value.trim().toLowerCase();
  const conteudo = document.getElementById("conteudo");

  input.value = ""; // Limpa o campo

  // Trata "ajuda [comando]"
  if (comando.startsWith("ajuda ")) {
    const sub = comando.split(" ")[1];
    switch (sub) {
      case "sobre":
        conteudo.innerText = `> ajuda sobre\nMostra informações sobre o criador Nocturus._`;
        return;
      case "futuros":
        conteudo.innerText = `> ajuda futuros\nMostra ideias e planos futuros._`;
        return;
      case "projetos":
        conteudo.innerText = `> ajuda projetos\nLista projetos atuais e seus detalhes._`;
        return;
      default:
        conteudo.innerText = `> ajuda ${sub}\nComando não reconhecido._`;
        return;
    }
  }

  // Trata "projeto 1 [comando]"
  if (comando.startsWith("projeto 1 ")) {
    const sub = comando.slice("projeto 1 ".length).trim();
    switch (sub) {
        case "sobre":
        conteudo.innerText = `> 1 - Quiz de Arquitetura - Portas de Entradas > sobre\nTipo: Quiz\nEstado atual: Finalizado\nVersão: n/a\nPlataforma: Web\nInformação: Esse jogo eu fiz no meu 1º ano do ensino médio, com o intuito de servir como trabalho acadêmico. O quiz tem várias perguntas de Arquitetura de Computadores e nunca se repete.\nAgradecimentos: Lucas Liquer_`;
        return;
        case "futuro":
        conteudo.innerText = `> 1 - Quiz de Arquitetura - Portas de Entradas > futuro\nAtualmente esse projeto se encontra finalizado, e não temos nem planos nem motivos para continuá-lo._`;
        return;
        case "link":
        conteudo.innerText = `> 1 - Quiz de Arquitetura - Portas de Entradas > link\nSegue o link para o projeto: https://nocturus.itch.io/quiz-de-arquitetura-portas-de-entradas._`;
        return;
        default:
        conteudo.innerText = `> projeto 1 ${sub}\nComando não reconhecido._`;
        return;
    }
  }


  // Trata "projeto 2 [comando]"
  if (comando.startsWith("projeto 2 ")) {
    const sub = comando.slice("projeto 2 ".length).trim();
    switch (sub) {
        case "sobre":
        conteudo.innerText = `> 2 - Desafio de Química > sobre\nTipo: Quiz\nEstado atual: Finalizado\nVersão: n/a\nPlataforma: Web\nInformação: Esse jogo eu fiz no meu 1º ano do ensino médio, com o intuito de servir como trabalho acadêmico. O quiz tem várias perguntas de química e nunca se repete.\nAgradecimentos: Lucas Liquer_`;
        return;
        case "futuro":
        conteudo.innerText = `> 2 - Desafio de Química > futuro\nAtualmente esse projeto se encontra finalizado, e não temos nem planos nem motivos para continuá-lo._`;
        return;
        case "link":
        conteudo.innerText = `> 2 - Desafio de Química > link\nSegue o link para o projeto: https://nocturus.itch.io/desafio-de-quimica._`;
        return;
        default:
        conteudo.innerText = `> projeto 2 ${sub}\nComando não reconhecido._`;
        return;
    }
  }

  // Trata comandos normais
  switch (comando) {
    case "ajuda":
      conteudo.innerText = `> ajuda\nComandos disponíveis:\n- ajuda [comando] → explica um comando específico\n- sobre\n- futuros\n- projetos\n- projetos [id] [comando]\n- limpar\n_`;
      break;
    case "sobre":
      conteudo.innerText = `> sobre\nIdade: 17\nNome: Daniel\nCodNome: Nocturus\nCurriculo Linkedin: [Work Progressem]\nCurriculo Lattes: [Work Progressem]\nFundador do Grupo Nexus\nSou Nocturus, um desenvolvedor apaixonado por criar experiências únicas.\n
Abilidades:\n
    Porgramação:\n
        C++        - Introdutorio\n
        C          - Basico\n
        C#         - Introdutorio\n
        Java       - Basico\n
        JavaScript - Introdutorio\n
        HTML       - Introdutorio\n
        Julia      - Basico\n
        Egua       - Introdutorio\n
        Lua        - Introdutorio\n
        Python     - Basico\n
        GDScript   - Basico/Avançado\n
        Ruby       - na lista de aprendizagem\n
        Pacal      - na lista de aprendizagem\n\n
    Design:\n
        Grafico - Basico\n
        2d      - basico\n
        3d      - na lista de aprendizagem\n\n
    Outros:\n
        Efeitos sonoros - Treinando\n
        Composições     - Treinando\n_`;
      break;
    case "futuros":
      conteudo.innerText = `> futuros\nAguardando as linhas do destino serem traçadas..._`;
      break;
    case "projetos":
      conteudo.innerText = `> projetos\nProjetos disponíveis:\n1 - Quiz de Arquitetura - Portas de Entradas\n2 - Desafio de Quimica\nUse: projeto [id] [sobre/link/versão] para mais detalhes._`;
      break;
    case "projeto 1":
      conteudo.innerText = `> Projeto 1\n Projeto 1 [sobre/link/futuro] para mais detalhes._`;
    case "projeto 2":
      conteudo.innerText = `> Projeto 2\n Projeto 2 [sobre/link/futuro] para mais detalhes._`;
    case "limpar":
      conteudo.innerText = "";
      break;
    default:
      conteudo.innerText = `> ${comando}\nComando não reconhecido. Digite 'ajuda' para ver os comandos._`;
  }
}

