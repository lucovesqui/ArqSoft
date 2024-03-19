const Turma = require('./Turma');

class TurmaPresencial extends Turma {
  constructor(codigo, nota, frequencia) {
    super(codigo, nota);
    this.frequencia = frequencia;
  }

  aprovado() {
    return super.aprovado() && this.frequencia >= 70; 
  }
}

module.exports = TurmaPresencial;