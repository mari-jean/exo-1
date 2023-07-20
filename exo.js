
//creation de la classe personnage 
class Personnage {
    constructor(pseudo, classe, sante, attaque){
        this.pseudo  = pseudo;
        this.classe  = classe;
        this.sante   = sante;
        this.attaque = attaque;
        this.niveau  = 1;
    }
    //fonction evoluer 
    evoluer(){
            this.niveau++
        console.log(`${this.pseudo} passe au niveau ${this.niveau} !`)
    };
    //fonciton qui verifie la sante du personnage
    verifierSante(){
        if (this.sante <= 0){
            this.sante = 0;
            console.log(`${this.pseudo} a perdu !`);
        }
    };
    //getter qui permet de connaitre differente information du personnage
    get informations(){
        return `${this.pseudo} (${this.classe}) a ${this.sante} point de vie et est au niveau ${this.niveau}.`
    }
}

//creation de la classe magicien qui herite de la classe personnage
class Magicien extends Personnage{
    constructor(pseudo){
        super(pseudo, "magicien", 170, 90);
    }
    //fonction attaquer
    attaquer(personnage){
        //reduit la sante de l adversaire 
        personnage.sante -= this.attaque;

        console.log(`${this.pseudo} attaque ${personnage.pseudo} en lancant un sort ${this.attaque} degats`);

        //appel la methode evoluer()
        this.evoluer();

        //appel la methode verifierSante() de ladversaire
        personnage.verifierSante();
    }

    coupSpecial(personnage){
        //reduit la sante de l adversaire par 5 fois l attaque du personnage actuel
        personnage.sante -= this.attaque *5;

        console.log(`${this.pseudo} attaque avec son coup special puissance des arcanes ${personnage.pseudo} ${this.attaque * 5} degats`)
        
        //appel la methode evoluer()
        this.evoluer();

        //appel la methode verifierSante() de ladversaire
        personnage.verifierSante();
    }
}

//creation de la classe guerrier qui herite de la classe personnage
class Guerrier extends Personnage{
    constructor(pseudo){
        super(pseudo, "guerrier", 350, 50);
    }
    //fonction attaquer
    attaquer(personnage){
        //reduit la sante de l adversaire 
        personnage.sante -= this.attaque;

        console.log(`${this.pseudo} attaque ${personnage.pseudo} avec son epee ${this.attaque} degats`);

        //appel la methode evoluer()
        this.evoluer();

        //appel la methode verifierSante() de ladversaire
        personnage.verifierSante();
    }

    coupSpecial(personnage){
        //reduit la sante de l adversaire par 5 fois l attaque du personnage actuel
        personnage.sante -= this.attaque *5;

        console.log(`${this.pseudo} attaque avec son coup special haches de guerre ${personnage.pseudo} ${this.attaque * 5} degats`)
        
        //appel la methode evoluer()
        this.evoluer();

        //appel la methode verifierSante() de ladversaire
        personnage.verifierSante();
    }
}

//creation des personnages
const Merlin = new Magicien('Merlin');
console.log(Merlin);

const Conan = new Guerrier('Conan');
console.log(Conan);


//lancememnt du combat
console.log(Conan.informations);
console.log(Merlin.informations);
Merlin.attaquer(Conan);
console.log(Conan.informations);
Conan.attaquer(Merlin);
console.log(Merlin.informations);
Merlin.coupSpecial(Conan);