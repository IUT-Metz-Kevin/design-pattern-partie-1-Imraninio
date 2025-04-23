interface ControllerAction{
    sauter(): void;
    attaquer(): void;
    interargir(): void;
}

class Clavier implements ControllerAction{
    private _btnSaut: string;
    private _btnAtq: string;
    private _btnInter: string;

    constructor(){
        this._btnSaut = "espace";
        this._btnAtq = "mouseL"
        this._btnInter = "mouseR"
    }

    sauter(): void {
      console.log("sauter : " + this._btnSaut);
    }

    attaquer(): void {
        console.log("attaquer : " + this._btnAtq);
    }

    interargir(): void {
        console.log("interargir : " + this._btnInter);
    }
}

class PS5Adaptateur implements ControllerAction{
    private readonly _ps5: ManettePS5;

    constructor(ps5: ManettePS5){
        this._ps5 = ps5;
    }

    sauter(): void {
      this._ps5.X();
    }

    attaquer(): void {
      this._ps5.Carre();
    }

    interargir(): void {
      this._ps5.Triangle();
    }

}

class XboxAdaptateur implements ControllerAction{
    constructor(private readonly _manette: ManetteXbox){}

    sauter(): void {
      this._manette.A();
    }

    attaquer(): void {
      this._manette.X();
    }

    interargir(): void {
      this._manette.B();
    }

}

class ManettePS5{
    X() {
        console.log("Bouton X")
    }

    O() {
        console.log("Bouton O")
    }

    Triangle() {
        console.log("Bouton triangle")
    }

    Carre() {
        console.log("Bouton carré")
    }
}


class ManetteXbox{
    A(): void {
        console.log("Bouton A");
    }
  
    X(): void {
        console.log("Bouton X");
    }
  
    B(): void {
        console.log("Bouton B");
    }

    Y(): void {
        console.log("Bouton Y");
    }
}

const clavier1 = new Clavier();
clavier1.attaquer()
clavier1.interargir()
clavier1.sauter()

const xbox1 = new ManetteXbox()
const xboxAdapt = new XboxAdaptateur(xbox1)
xboxAdapt.attaquer()
xboxAdapt.interargir()
xboxAdapt.sauter()

const ps5 = new ManettePS5();
const ps5Adapt = new PS5Adaptateur(ps5)
ps5Adapt.attaquer()
ps5Adapt.interargir()
ps5Adapt.sauter()