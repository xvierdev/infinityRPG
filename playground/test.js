personagem = {
    nome: 'Tutanus',
    idade: 50,
    raca: 'Humano',
    classe: 'Mago',
    arma: 'Cajado',
    nivel: 10,
    saude: 100,
    mana: 200,
    sorte: 0.75,
    ouro: 1500,
    inventario: ['Poção de Vida', 'Poção de Mana', 'Pergaminho de Feitiço'],
    habilidades: {
        ataque: function() {
            console.log(this.nome + ' lança um feitiço poderoso!');
        },
        defender: function() {
            console.log(this.nome + ' conjura um escudo mágico!');
        },
        usarItem: function(item) {
            if (this.inventario.includes(item)) {
                console.log(this.nome + ' usa ' + item + '!');
            } else {
                console.log(item + ' não está no inventário!');
            }
        }
    }
}