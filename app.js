// Interface comum para os produtos 
class Computador {
    constructor(tipo, ram, hd, cpu) {
        this.tipo = tipo;
        this.ram = ram;
        this.hd = hd;
        this.cpu = cpu;
    }

    toString() {
        return `${this.tipo} - RAM: ${this.ram}GB, HD: ${this.hd}GB, CPU: ${this.cpu}GHz`;
    }
}

// Classes concretas que implementam a interface
class Desktop extends Computador {
    constructor(ram, hd, cpu) {
        super('Desktop', ram, hd, cpu);
    }
}

class Laptop extends Computador {
    constructor(ram, hd, cpu) {
        super('Laptop', ram, hd, cpu);
    }
}

// Fábrica para criar instâncias
class FabricaComputador {
    criarComputador(tipo, ram, hd, cpu) {
        switch (tipo.toLowerCase()) {
            case 'desktop':
                return new Desktop(ram, hd, cpu);
            case 'laptop':
                return new Laptop(ram, hd, cpu);
            default:
                throw new Error('Tipo de computador desconhecido.');
        }
    }
}

// Exemplo de uso
const fabrica = new FabricaComputador();

const desktop = fabrica.criarComputador('desktop', 16, 1000, 3.0);
console.log(desktop.toString());

const laptop = fabrica.criarComputador('laptop', 8, 500, 2.5);
console.log(laptop.toString());
