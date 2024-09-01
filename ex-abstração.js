class Carro {
    constructor(marca, modelo) {
        this.marca = marca; // Propriedade pública
        this.modelo = modelo; // Propriedade pública
        this.velocidade = 0; // Propriedade pública que representa o estado atual do carro
    }

    // Método público para acelerar o carro
    acelerar() {
        this.velocidade += 10; // Aumenta a velocidade
        console.log(`O ${this.marca} ${this.modelo} acelerou. Velocidade atual: ${this.velocidade} km/h.`);
    }

    // Método público para frear o carro
    frear() {
        if (this.velocidade > 0) {
            this.velocidade -= 10; // Diminui a velocidade
            console.log(`O ${this.marca} ${this.modelo} freou. Velocidade atual: ${this.velocidade} km/h.`);
        } else {
            console.log(`O ${this.marca} ${this.modelo} já está parado.`);
        }
    }

    // Método público para exibir o status do carro
    exibirStatus() {
        console.log(`Carro: ${this.marca} ${this.modelo} | Velocidade: ${this.velocidade} km/h`);
    }
}

// Exemplo de uso
const meuCarro = new Carro("Toyota", "Corolla");
meuCarro.acelerar();   // O Toyota Corolla acelerou. Velocidade atual: 10 km/h.
meuCarro.acelerar();   // O Toyota Corolla acelerou. Velocidade atual: 20 km/h.
meuCarro.frear();      // O Toyota Corolla freou. Velocidade atual: 10 km/h.
meuCarro.exibirStatus(); // Carro: Toyota Corolla | Velocidade: 10 km/h