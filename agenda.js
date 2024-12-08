class Compromisso {
  constructor(data, hora, descricao) {
    this.data = data;
    this.hora = hora;
    this.descricao = descricao;
  }
}

class Agenda {
  constructor() {
    this.compromissos = [];
  }

  adicionarCompromisso(compromisso) {
    this.compromissos.push(compromisso);
  }

  obterCompromissosPorData(data) {
    return this.compromissos.filter((compromisso) => compromisso.data === data);
  }
}

// Teste
const agenda = new Agenda();

agenda.adicionarCompromisso(
  new Compromisso("2024-12-08", "10:00", "Reunião com equipe")
);
agenda.adicionarCompromisso(
  new Compromisso("2024-12-08", "15:00", "Consulta médica")
);
agenda.adicionarCompromisso(
  new Compromisso("2024-12-09", "08:00", "Café da manhã com cliente")
);

console.log("Compromissos para 2024-12-08:");
console.log(agenda.obterCompromissosPorData("2024-12-08"));
