let skills = {
  'Matemática': 0,
  'Lógica': 0,
  'Criatividade': 0,
  'Perfil Analítico': 0,
  'Comunicação': 0,
  'Designer': 0,
  'Liderança': 0,
  'Gestão': 0,
  'Administração': 0,
  'Treinamento': 0
};

function onClickFunction() {
  let respostas = [
    resposta = document.querySelector('input[name="opcao-pergunta-um"]:checked'),
    resposta = document.querySelector('input[name="opcao-pergunta-dois"]:checked'),
    resposta = document.querySelector('input[name="opcao-pergunta-tres"]:checked'),
    resposta = document.querySelector('input[name="opcao-pergunta-quatro"]:checked'),
    resposta = document.querySelector('input[name="opcao-pergunta-cinco"]:checked'),
    resposta = document.querySelector('input[name="opcao-pergunta-seis"]:checked'),
    resposta = document.querySelector('input[name="opcao-pergunta-sete"]:checked'),
    resposta = document.querySelector('input[name="opcao-pergunta-oito"]:checked'),
    resposta = document.querySelector('input[name="opcao-pergunta-nove"]:checked'),
    resposta = document.querySelector('input[name="opcao-pergunta-dez"]:checked'),
  ];

  pegaValores(respostas);

  if (respostas.some(elemento => elemento === null)) {
    alert("Por favor, preencha todas as perguntas antes de prosseguir.");
  } else {
    atribuirPontosDeSkill(respostas);
    const perfilFinal = verificarPerfis(skills);
    EnviarResultado(perfilFinal);
  }
}

function atribuirPontosDeSkill(respostas) {
  for (let i = 0; respostas.length > i; i++) {
    if (respostas[i].indexOf(',') == -1) {
      skills[respostas[i]]++;
    } else {
      let skillsDuplas = respostas[i].split(',');
      skills[skillsDuplas[0]]++;
      skills[skillsDuplas[1]]++;
    }
  }
}

function verificarPerfis(skills) {
  const perfis = {
    'desenvolvedor': ['Matemática', 'Lógica', 'Criatividade', 'Perfil Analítico'],
    'analista': ['Matemática', 'Lógica', 'Perfil Analítico', 'Administração'],
    'carreiraEmDados': ['Matemática', 'Lógica', 'Criatividade', 'Perfil Analítico','Administração'],
    'design': ['Criatividade', 'Perfil Analítico', 'Comunicação', 'Designer'],
    'areaProduto': ['Criatividade', 'Comunicação', 'Liderança', 'Gestão'],
    'areaAgile': ['Comunicação', 'Liderança', 'Gestão', 'Treinamento']
  };

  let perfilCorrespondente = null;
  let maxHabilidades = 0;
  let maxHabilidadeSomatoria = 0;

  for (let perfil in perfis) {
    let habilidadesPerfil = perfis[perfil];
    let habilidadeSomatoria = 0;
    let habilidadesEncontradas = 0;

    for (let i = 0; i < habilidadesPerfil.length; i++) {
      const habilidade = habilidadesPerfil[i];
      if (skills.hasOwnProperty(habilidade) && skills[habilidade] > 0) {
        habilidadesEncontradas++;
        habilidadeSomatoria += skills[habilidade];
      }
    }

    if (habilidadesEncontradas === habilidadesPerfil.length) {
      return perfil;
    } else if (habilidadesEncontradas >= maxHabilidades && habilidadeSomatoria > maxHabilidadeSomatoria) {
      perfilCorrespondente = perfil;
      maxHabilidades = habilidadesEncontradas;
      maxHabilidadeSomatoria = habilidadeSomatoria;
    }
  }

  return perfilCorrespondente;
}

function EnviarResultado(perfilFinal) {
  localStorage.setItem('perfil', perfilFinal);
  window.location.href = "resultado.html?="+perfilFinal;
}


function pegaValores(respostas) {
  for (let i = 0; i < 10; i++) {
    respostas[i] = respostas[i] !== null ? respostas[i].value : null;
  }
}