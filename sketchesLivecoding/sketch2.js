function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    let n=10;
    let bgColor=map(mouseY, 0, width, 0, 255);
    background(mouseY);
    noFill();
    stroke(100,0,0,200);
    
    strokeWeight(n/10);
    
    rect(n,n,n,n);
    
    n=n*1.5;
    strokeWeight(n/10);
    rect(n,n,n,n);
    stroke(0,100,0,200)
    
    n=n*1.5;
    strokeWeight(n/10);
    rect(n,n,n,n);
    
     n=n*1.5;
    strokeWeight(n/10);
    rect(n,n,n,n);
    stroke(200,0,0,200);
    
     n=n*1.5;
    strokeWeight(n/10);
    rect(n,n,n,n);
    
     n=n*1.5;
    strokeWeight(n/10);
    rect(n,n,n,n);
    
     n=n*1.5;
    strokeWeight(n/10);
    rect(n,n,n,n);
    
     n=n*1.5;
    strokeWeight(n/10);
    rect(n,n,n,n);
    stroke(220,0,0,200);
    
     n=n*1.5;
    strokeWeight(n/10);
    rect(n,n,n,n);
    stroke(0,100,0,200)
    
     n=n*1.5;
    strokeWeight(n/10);
    rect(n,n,n,n);
    
  }