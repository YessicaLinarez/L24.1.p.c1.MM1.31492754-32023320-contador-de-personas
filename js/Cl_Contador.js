export default class Cl_Contador{
    constructor(){
        this.contF = 0;
        this.contM = 0;
        this.contP = 0;
    }

    procesarPersona(p){
    
    this.contP++;
      
        if (p.sexo == "F") {
            this.contF++;
        }
        else if (p.sexo == "M") {
            this.contM++;
        }
    }

    devolverContF(){
        return this.contF;
    }
    devolverContM(){
        return this.contM;
    }
    devolverContP(){
        return this.contP;
    }
}