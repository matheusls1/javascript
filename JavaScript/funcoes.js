let opcao = 0;
var a = 10;
var b = 20;
var msg = "";
var c = 0;


funciton menu(){
    this.opcao = prompt("----Menu----/n"+
                "1. Exerícicio 01/n"    +
                "2. Exerícicio 02/n"    +
                "3. Exerícicio 03/n"    +
                "4. Exerícicio 04/n"    +
                "Escolha uma das opçoes" 
                 );
}//fim do menu

function operecao(){
        menu();//chamar o menu de opcoes

        switch(this.opcao){
            case '0':
                console.log("Obrigado!");    
                break;
            case '1' :
                console.log(Exercicio01());
                  break;
            case '2':
                  break;
            case '3' :
                  break;
            default:
                console.log("Escolha uma opção válida!");
                break;          
        }//fim do switch
}//fim da funcao operacao

function ex1(){
    this.a = 10;
    this.b = 20;
    //mensagem inicial
    this.msg = "A: " + this.a + "/nB" + this.b;
    this.msg += "/n/nTroca/n/n"
    

    this.c = this.a;
    this.a = this.b;
    this.b = this.c;
    //mensagem final
    this.msg += "A: " + this.a + "/nB" + this.b;
    return this.msg;
   
}//fim do metodo





//chamar o metodo operecao
operecao();