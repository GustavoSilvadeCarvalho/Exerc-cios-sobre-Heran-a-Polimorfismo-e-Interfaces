class FormaGeometrica {
  calcularArea() {
    throw new Error("O método calcularArea() deve ser implementado!");
  }

  calcularPerimetro() {
    throw new Error("O método calcularPerimetro() deve ser implementado!");
  }
}

class Quadrado extends FormaGeometrica {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    return this.lado ** 2;
  }

  calcularPerimetro() {
    return this.lado * 4;
  }
}

class Circulo extends FormaGeometrica {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * this.raio ** 2;
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.raio;
  }
}

class Retangulo extends FormaGeometrica {
  constructor(largura, altura) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.largura + this.altura);
  }
}

class Triangulo extends FormaGeometrica {
  constructor(base, altura, lado1, lado2, lado3) {
    super();
    this.base = base;
    this.altura = altura;
    this.lados = [lado1, lado2, lado3];
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }

  calcularPerimetro() {
    return this.lados.reduce((total, lado) => total + lado, 0);
  }
}

// Teste
const quadrado = new Quadrado(4);
console.log("Quadrado - Área:", quadrado.calcularArea());
console.log("Quadrado - Perímetro:", quadrado.calcularPerimetro());

const circulo = new Circulo(3);
console.log("Círculo - Área:", circulo.calcularArea());
console.log("Círculo - Perímetro:", circulo.calcularPerimetro());

const retangulo = new Retangulo(5, 10);
console.log("Retângulo - Área:", retangulo.calcularArea());
console.log("Retângulo - Perímetro:", retangulo.calcularPerimetro());

const triangulo = new Triangulo(6, 4, 5, 5, 6);
console.log("Triângulo - Área:", triangulo.calcularArea());
console.log("Triângulo - Perímetro:", triangulo.calcularPerimetro());
