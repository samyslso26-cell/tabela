class time{
    constructor(nome, vitoria, empate, derrota, golMarcado, golSofrido){
        this.nome = nome
        this.vitoria = 0
        this.empate = 0
        this.derrota = 0
        this.golMarcado = 0
        this.golSofrido = 0
    }

    calcularPontos(){
        let pontos = this.vitoria * 3 + this.empate * 1 + this.derrota * 0
        return pontos
    }

    calcularSaldo(){
        let saldo = this.golMarcado - this.golSofrido
        return saldo
    }

    registrarFimDeJogo(golPro, golContra){
        this.golMarcado += golPro
        this.golSofrido += golContra

        if(golPro > golContra){
            this.vitoria ++
        } else if (golContra > golPro){
            this.derrota ++
        }else{
            this.empate ++
        }
    }
}
class partida{
    constructor(mandante, visitante){
        this.mandante = mandante
        this.visitante = visitante
    }

    jogar(golM, golV){
        this.mandante.registrarFimDeJogo(golM, golV)
        this.visitante.registrarFimDeJogo(golV, golM)
    }
}

class campeonato{
    constructor(equipes){
        this.equipes = []
    }

    adicionarTime(nomedotime){
        let novotime = new Time(nomedotime)
        this.equipes.push(novotime)
    }

    obterTabela(){
        return this.equipes
    }
}

let comp = new campeonato();
let inputnome=document.getElementById("texto")
let button = document.getElementById("botao")

button.addEventListener("click", () => {
    if(inputnome.value.length > 0){
        comp.adicionarTime(inputnome.value)
        inputnome.value = ""
        atualizarTabela()
    }
})

function atualizarTabela(){
    tabela.innerHTML = ""

    for(let i = 0; i < comp.equipes.length; i++){
        let novaLinha= document.createElement("tr")
        novaLinha.innerHTML = "<td>" + comp.equipes[i].nome + "</td>"
        novaLinha.innerHTML += "<td>" + comp.equipes[i].calcularPontos() + "</td>" 
        novaLinha.innerHTML += "<td>" + comp.equipes[i].vitoria + "</td>" 
        novaLinha.innerHTML += "<td>" + comp.equipes[i].calcularSaldo() + "</td>"

        tabela.appendChild(novaLinha)
    }
}
