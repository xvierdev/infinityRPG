personagem = {
    nome: "Golden Spade Warrior",
    idade: "24",
    mana: "0",
    arma: "Espada de Ouro",
    habilidadeEspecial: "Resistência sobrehumana",
    nivelInicial: "1",
    qi: "100",
    saude: "120",
    raca: "Humano",
    classe: "Guerreiro",
    sorte: "0.50",
    ouro: "500",
    estadoMental: "95%",
    inventario: ["Espada de Ouro", "Escudo de Ouro", "Pá Mitica", "Ouro",],
    habilidades: {
        ataque: function () {
            console.log(this.nome + "Usa a Espada de Ouro para atacar")
        },
        defender: function () {
            console.log(this.nome + "Usa o Escudo de Ouro para se defender")
        },
        usarItem: function (item) {
            if (this.inventario.includes(item)) {
                console.log(this.nome + ' usa ' + item + '!');
            } else {
                console.log(item + ' não está no inventário!');
            }
        },
        descrisao: "Um guerreiro que nasceu e viveu em esparta, teve treinamento pesado, obtendo muita força, mas ainda não sobrehumana. Até que um dia ele acabou entrando  numa mina sem querer, explorando o local encontrou uma armadura de ouro junto com a espada de ouro e o escudo de ouro. Quando colocou em seu corpo, ele sentiu uma força tão grande mas tão grande que se ele fazer queda de braço com kratos, ele ganharia. Vence de qualquer 1 menos o do cavaleiro de diamante.",
    }
}