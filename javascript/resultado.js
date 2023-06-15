const perfis = [

    {
        'perfil':'desenvolvedor',
        'texto':'Parabéns pelo perfil de desenvolvedor! Os desenvolvedores são mestres da tecnologia, conhecidos por suas habilidades em solucionar problemas complexos, criar inovações e colaborar em equipe. Eles são especialistas em encontrar soluções, transformar ideias em realidade e trabalhar em conjunto para alcançar objetivos. Sua capacidade de aprendizado contínuo, atenção aos detalhes e busca pelo aprimoramento constante os tornam profissionais valiosos. Como desenvolvedor, você está entrando em uma carreira emocionante e desafiadora, onde poderá fazer a diferença no mundo da tecnologia. Parabéns mais uma vez e boa sorte em sua jornada como desenvolvedor!',
        'profissoes': ['Desenvolvedor de Software','Desenvolvedor Front-end','Desenvolvedor Back-end','Desenvolvedor Full-stack'],
        'titulo':'Desenvolvedor',
        'icone':'./images/icon/desenvolvedor.png'
    },
    {
        'perfil':'analista',
        'texto':'Parabéns pelo perfil de analista! Os analistas desempenham um papel fundamental nas organizações, oferecendo insights valiosos e contribuindo para a tomada de decisões estratégicas. Sua habilidade em solucionar problemas complexos, criar inteligência a partir de dados e colaborar em equipe é o que os torna profissionais excepcionais.',
        'profissoes': ['Analista de Sistemas', 'Testador de Software', 'Analista de Sistemas','Analista de Requisitos','Analista de Qualidade de Software'],
        'titulo':'Analista',
        'icone':'./images/icon/analise.png'
    },
    {
        'perfil':'carreiraEmDados',
        'texto':'Parabéns pelo perfil de carreira em dados/banco de dados! É uma área importante e cheia de oportunidades. Como profissional nessa área, você será especializado em organizar e gerenciar informações de forma segura e eficiente. Você também terá a habilidade de analisar dados para extrair insights valiosos e contribuir para a tomada de decisões das empresas. Sua expertise em dados também será fundamental para garantir a segurança e a privacidade das informações. Desejo a você muito sucesso nessa carreira emocionante!',
        'profissoes': ['Analista de Banco de Dados','Analista de Suporte','Desenvolvedor de Banco de Dados'],
        'titulo':'Carreira em Dados',
        'icone':'./images/icon/carreiraEmdados.png'
    },
    {
        'perfil':'design',
        'texto':'Parabéns pelo perfil de design! Como designer, você terá a oportunidade de expressar sua criatividade, resolver problemas visualmente, comunicar ideias de forma impactante e colaborar com outros profissionais. Aproveite a jornada, esteja aberto a inspirações e aprimore suas habilidades. Desejo muito sucesso em sua carreira como designer!',
        'profissoes': ['Designer de Interface de Usuário (UI)','Designer de Experiência do Usuário (UX)'],
        'titulo':'Área de design',
        'icone':'./images/icon/design.png'
    },
    {
        'perfil':'areaProduto',
        'texto':'Parabéns pelo seu perfil voltado a área de produto! Como profissional nessa área, você terá a oportunidade de liderar o desenvolvimento de produtos tecnológicos inovadores. Você será responsável por definir a estratégia do produto, garantir uma ótima experiência do usuário e gerenciar o ciclo de vida do produto. Aproveite a jornada, esteja aberto ao aprendizado contínuo e busque aprimorar suas habilidades de liderança e visão estratégica. Desejo muito sucesso em sua carreira na área de produto de software!',
        'profissoes': ['Arquiteto de Software','Gerente de Desenvolvimento de Software'],
        'titulo':'Área de Produto',
        'icone':'./images/icon/areaDeProduto.png'
    },
    {
        'perfil':'areaAgile',
        'texto':'Parabéns pelo seu perfil voltado a área de produto! Como profissional nessa área, você terá a oportunidade de liderar o desenvolvimento de produtos tecnológicos inovadores. Você será responsável por definir a estratégia do produto, garantir uma ótima experiência do usuário e gerenciar o ciclo de vida do produto. Aproveite a jornada, esteja aberto ao aprendizado contínuo e busque aprimorar suas habilidades de liderança e visão estratégica. Desejo muito sucesso em sua carreira na área de produto de software!',
        'profissoes': ['Engenheiro de Software','Gerente de Projetos de TI','Especialista em Segurança da Informação','Engenheiro de DevOps','Cientista de Dados'],
        'titulo':'Área de Agile',
        'icone':'./images/icon/areaDeAgile.png'
    }
];

document.addEventListener("DOMContentLoaded", function() {
    let perfilSelecionado = localStorage.getItem('perfil');
    if (perfilSelecionado == undefined || perfilSelecionado == null) {
        perfilSelecionado = getPerfilViaUrl();
    }
    let nome_perfil = document.getElementById("nome-perfil");
    verificaTipoPerfil(perfilSelecionado);
  });

function verificaTipoPerfil(perfilSelecionado) {
    const perfilEncontrado = perfis.find(perfils => perfils.perfil === perfilSelecionado);
    inserirTexto(perfilEncontrado);
}

function inserirTexto(perfilEncontrado) {
    let titulo_texto = document.getElementById("nome-perfil");
    let conteudo_texto = document.getElementById("conteudo-perfil");
    const listaProfissoes = document.getElementById('lista-profissoes');
    let icone_perfil = document.getElementById("icone-perfil");
    titulo_texto.innerText = perfilEncontrado.titulo;
    conteudo_texto.innerText = perfilEncontrado.texto;

    perfilEncontrado.profissoes.forEach(profissao => {
      const li = document.createElement('li');
      li.textContent = profissao;
      listaProfissoes.appendChild(li);
    });

    icone_perfil.src = perfilEncontrado.icone;
}

function voltar() {
    window.location.href = "home.html";
}

function getPerfilViaUrl() {
    let url = window.location.href;
    url = url.split('?=');
    return url[1].trim(); 
}