import Cl_Persona from "./Cl_Persona.js";
import Cl_Contador from "./Cl_Contador.js";

let Persona1=new Cl_Persona("Luiss","F");
let Persona2=new Cl_Persona("Ana","F");
let Persona3=new Cl_Persona("Jose","M");
let Persona4=new Cl_Persona("Carmen","F");
let Persona5=new Cl_Persona("Rosa","F");
let Persona6=new Cl_Persona("Jose","M");
let Persona7=new Cl_Persona("Maria","F");
let Persona8=new Cl_Persona("Luz","F");
let Persona9=new Cl_Persona("Rafael","M");
let Persona10=new Cl_Persona("Liz","F");
let Persona11=new Cl_Persona("Marcos","M");
let Persona12=new Cl_Persona("Leo","M");

let Contador=new Cl_Contador();

Contador.procesarPersona(Persona1);
Contador.procesarPersona(Persona2);
Contador.procesarPersona(Persona3);
Contador.procesarPersona(Persona4);
Contador.procesarPersona(Persona5);
Contador.procesarPersona(Persona6);
Contador.procesarPersona(Persona7);
Contador.procesarPersona(Persona8);
Contador.procesarPersona(Persona9);
Contador.procesarPersona(Persona10);
Contador.procesarPersona(Persona11);
Contador.procesarPersona(Persona12);

let salida = document.getElementById("salida");
salida.innerHTML+= "<br>Cantidad de personas:" + Contador.devolverContP();
salida.innerHTML+= "<br>Cantidad de hombres:" + Contador.devolverContM();
salida.innerHTML+= "<br>Cantidad de mujeres:" + Contador.devolverContF();