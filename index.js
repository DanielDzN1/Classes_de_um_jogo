//Criando uma classe generica que represente um heroi 

class heroi {
    constructor(nomeDoHeroi, idadeDoHeroi, tipoDoHeroi){
        this.nomeDoHeroi = nomeDoHeroi;
        this.idadeDoHeroi = idadeDoHeroi;
        this.tipoDoHeroi = tipoDoHeroi;
        this.ataque = "";
        
    }

// Função para decidir o ataque com base no tipo do heroi 
    
    ataqueDoHeroi () {
    switch(this.tipoDoHeroi){
        case "mago":
            this.ataque = "magia"; 
            break;
        
        case "guerreiro":
            this.ataque = "espada";
            break;

        case "monge":
            this.ataque = "artes marciais";
            break;
        
        case "ninja":
            this.ataque = "shuriken";
            break;

//Usando o deafault para quando o tipo do heroi nao ser conhecido seu ataque       
            default:
            this.ataque = "um ataque desconhecido";
            
        }

// Exibindo a mensagem final 
console.log(`o ${this.tipoDoHeroi} atacou usando ${this.ataque}`);
    
    }

}

//Atribuindo nome, idade e tipo do heroi 
//tipo do heroi (mago,ninja,guerreiro e monge)

let novoHeroi = new heroi("Ghost", 18, "guerreito");

//Chamando a função ataqueDoHeroi para exibir o ataque com base no tipo do heroi 

novoHeroi.ataqueDoHeroi();