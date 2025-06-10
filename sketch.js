let inputText = '';
let scaleFactor = 1; //zmienna odpowiadająca za skale(do niej się dodaję i odejmuje)
let zoomStep = 0.03; //skala na ile sie odzoomowuje
let minScale = 0.1; // minimalna skala
let mode = 'start'; // zmienna do zmieniania ekranów

function setup() {
  createCanvas(1280, 720);
  textAlign(CENTER, CENTER);
  textSize(36);
}

function draw() {
  background(0,0,0);
  push(); // zachowuje stan ekranu
  translate(width / 2, height / 2);//przenosi linie koordynat do srodku ekranu
  scale(scaleFactor);//skaluje ekran
  drawGooglePage();//robi ekran googla ktory dalej naprogramowalem
  pop(); //przywraca poprzedni stan z momentu push(), żeby dalsze rysowanie nie było już przeskalowane ani przesunięte wedlug srodka
}


function drawGooglePage() {
  fill(66, 133, 244); text('Well', -170, -100);
  fill(234, 67, 53);  text('come', -91, -100);
  fill(251, 188, 5);  text('to', -23, -100);
  fill(66, 133, 244); text('the', 34, -100);
  fill(52, 168, 83);  text('Inter', 109, -100);
  fill(234, 67, 53);  text('net!', 175, -100);
  
  textSize(24);
  fill('#FFFFFF');  text('type whatever and press enter', 0, 50);
  

  fill(255);
  stroke(200);
  rectMode(CENTER);
  rect(0, 0, 400, 50, 10);

  textSize(24);
  fill(0);
  noStroke();
  textAlign(LEFT, CENTER);
  text(inputText, -190, 0);
}

function keyTyped() {
  if (key.length === 1 && key !== '\n') {        //key.length === 1 → sprawdza, czy wpisany klawisz to pojedynczy znak (np. a, 1, ?,                                                    itp.) a key !== '\n' → ignoruje Enter, żeby nie zepsuć pola tekstowego.
    inputText += key;// dodaje literę do pola tekstowego 
    scaleFactor = max(scaleFactor - zoomStep, minScale); // zmniejsza zoom, ale nigdy nie schodzi poniżej minScale
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    inputText = inputText.slice(0, -1);// usuwa ostatni znak z wpisanego tekstu
    scaleFactor = min(scaleFactor + zoomStep, 1); 
} }

function keyPressed() {
  if (keyCode === ENTER) {
    window.open("https://alka2222.github.io/gryczna_2_3/")
  }}
