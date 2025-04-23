class Config {
    private static instance: Config; // undefined
    private _difficulte: string;
    private _langue: string;
    private _volumeMusique: number;
    private _volumeEffetsSonores: number;
    private _resolutionEcran: string;
    private _qualiteGraphique: string;
  
    private constructor() {
        this._difficulte = "normal";
        this._langue = "Français";
        this._volumeMusique = 50;
        this._volumeEffetsSonores = 50;
        this._resolutionEcran = "1920x1080";
        this._qualiteGraphique = "Epic";
    }
  
    public static getInstance(): Config {
      if (!this.instance) {
        this.instance = new Config();
      }

      return this.instance;
    }
  
    get difficulte(): string{
      return this._difficulte;
    }
  
    set difficulte(dif: string){
        if(dif === "facile" || dif === "normal" || dif === "difficile"){
            this._difficulte = dif
        }
    }

    get langue(): string{
        return this._langue;
      }
    
    set langue(langue: string){
        if(langue in ["Anglais", "Arabe", "Chinois", "Espagnol", "Français","Italien", "Japonais"]){
            this._langue = langue;
        }
    }

    get volMusique(): number{
        return this._volumeMusique;
      }
    
    set volMusique(vol: number){
        this._volumeMusique = vol
    }

    get volEffetsSonores(): number{
        return this._volumeEffetsSonores;
      }
    
    set volEffetsSonores(vol: number){
        this._volumeEffetsSonores = vol;
    }

    get ResoEcran(): string{
        return this._resolutionEcran;
      }
    
    set ResoEcran(res: string){
        this._resolutionEcran = res;
    }

    get qualGraph(): string{
        return this._qualiteGraphique;
      }
    
    set qualGraph(qual: string){
        if(qual === "faible" || qual === "normal" || qual === "epic"){
            this._qualiteGraphique = qual
        }
    }
  }
  
  // 🧪 Exemple d'utilisation
  
  const config1 = Config.getInstance();
  
  config1.difficulte = "normal";
  config1.langue = "Anglais";
  config1.volMusique = 0;
  config1.volEffetsSonores = 75;
  config1.ResoEcran = "1920x1080";
  config1.qualGraph = "normal"

  const config2 = Config.getInstance();
  
  console.log(config2.difficulte === 'normal'); // Devrait afficher: true
  console.log(config1 === config2) // Même instance en mémoire
  
  