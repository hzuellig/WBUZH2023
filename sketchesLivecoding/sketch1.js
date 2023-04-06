function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {

    //Stile
    strokeWeight(20);
    stroke(255, 100, 50, 100);

    // Bedingungen (Conditions)
    if (mouseX < width / 2) {
      fill(60, 270, 200, 255);
    } else {
      background(130, 30, 100, 255);
      fill(270, 200, 60, 255);
    }
  
    

    //Zeichnen, Rechteck verschiebt sich um n * abstand
    let n=1;
    let abstandX = 340;
    let abstandY = 80;
  
    rect(abstandX * n, abstandY * n, 500, 500);
    n++;
    rect(abstandX * n, abstandY * n, 500, 500);
    n++;
    rect(abstandX * n, abstandY * n, 500, 500);
    
  }
  