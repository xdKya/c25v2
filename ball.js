class Ball {
  //propriedade
  constructor(x, y, r, cor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.cor = cor;

    var bola_options = {
      restitution: 0.9,
    };

    this.body = Bodies.circle(this.x, this.y, this.r, bola_options);
    World.add(world, this.body);
  }

  //funções

  aparecer() {
    noStroke();
    fill(this.cor);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, 20);
  }
}
