interface IComposant{
    afficher(indentation: string): void;
}

class SousDepartement implements IComposant{

    private _nom: string;

    constructor(nom: string){
        this._nom = nom
    }

    afficher(indentation: string): void{
        console.log(indentation + " - " + this._nom)
    }

}


class Departement implements IComposant{

    private _nom: string;
    private _listeSousDep = new Array<IComposant>;

    constructor(nom: string){
        this._nom = nom;
    }

    ajouter(composant: IComposant){
        this._listeSousDep.push(composant);
    }

    afficher(indentation: string): void {
        console.log("Dans le " + this._nom + ", il y a :")
        for(const sousDep of this._listeSousDep){
            sousDep.afficher(indentation + "  |  ")
        }
    }

}

const dep = new Departement("Département technique")
const sDep1 = new SousDepartement("IT");
const sDep2 = new SousDepartement("Web");

dep.ajouter(sDep1);
dep.ajouter(sDep2)

dep.afficher("")
