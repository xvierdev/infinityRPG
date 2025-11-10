personagem = {
  nome: "Erick",
  idade: "129",
  mana: "150",
  arma: "Suas Mãos",
  habilidadeEspecial: "voar",
  nivelInicial: "1",
  qi: "150",
  saude: "200",
  raca: "Vampiro",
  classe: "Voador",
  sorte: "0.70",
  ouro: "200",
  estadoMental: "90",
  inventario: ["Poção de Sangue", "Sangue"],
  habilidades: {
    ataque: function () {
      console.log(this.nome + "Usa suas mãos para atacar");
    },
    defender: function () {
      console.log(this.nome + "Desvie");
    },
    usarItem: function (item) {
      if (this.inventario.includes(item)) {
        console.log(this.nome + " usa " + item + "!");
      } else {
        console.log(item + " não está no inventário!");
      }
    },
    descrisao:
      "Um vampiro que além de ser muito inteligente, tem a habilidade de voar. Desenvolveu suas asas em Grariuku, mas teve que fugir de seu mestre para não perde-las pela inveja dele. Não se sabe muito dele...",
  },
};

