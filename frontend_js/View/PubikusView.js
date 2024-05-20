import SorView from "./SorView.js";

class PublikusView{
    #lista=[]
    #szuloElem;
  
    constructor(lista, szuloElem){
        this.#szuloElem = szuloElem;
        this.#lista = lista;      
        szuloElem.append(`<table class="table table-hover table-bordered table-striped">`);
       
        this.tablaElem = szuloElem.children("table");
        this.megjelenit();
    }

    megjelenit(){
        this.tablaElem.append(`<thead><tr><th>ID</th><th>Tevékenység neve</th><th>Osztály</th><th>Állapot</th><th>Pont</th>/tr></thead>`);
        this.tablaElem.append(`<tbody></tbody>`);
        this.tbodyElem=$("tbody")
        this.#lista.forEach((element, index )=> {
            new SorView(element, this.tablaElem, index)
        });
    }

   
} export default PublikusView