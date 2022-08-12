var form,game;
var b,bImg,intro,introImg;
var gameState = 0;
var plant,plantImg;
var walle,walle1Img,walle2Img;
var wa,waImg,trash,trashImg;//GIF//
var t1,t2,t3,t4,m1,m2,m3,m4,m5,m6,tireImg,metalImg,cooperImg,Tscore=0,cube = 0,c;// CUBES MADE//
var ok = 0;
var junk1, junk2, junk3,junk1Img,junk2Img;
var sound;
var eve,eveImg,walle_cImg;
var axiom_m,axiom_mImg, axiom, axiomImg;
var earth,earthImg,rocket,rocketImg,r,space,spaceImg;//r - NPC, rocket - PC// 
//LEVEL  - 2 SATELLITE//
var s1,s2,s1Img,s2Img;
//LEVEL  - 2 SATELLITE//

//LEVEL  - 2, CAMERA VIEW- 2//
var sp_1,sp_2,sp_3,sp_1Img,sp_2Img,sp_3Img;

//LEVEL  - 2//

function preload() {
  bImg = loadImage("Disney Pixar.png");
  plantImg = loadImage("plant.png");
  walle1Img = loadAnimation("WALLE_side.png");
  walle2Img = loadAnimation("WALLE_side2.png");
  waImg = loadImage("trash_cube.png");
  trashImg = loadAnimation("b1.gif","b2.gif","b3.gif");
  cubeImg = loadImage("cube_1.png");
  eveImg = loadImage("EVE.png");
  walle_cImg = loadAnimation("wall_e.png");

  //MUSIC//
  m1 = loadSound("bot_m.mp3");
  sound = loadSound("music.mp3");
  music_button = loadSound("musicB_2.mp3");
  //MUSIC//

  axiom_mImg = loadImage("ship_2.png");
  axiomImg = loadImage("ship_1.jpg");
  //WASTE//
  tireImg = loadImage("tire.png");
  metalImg = loadImage("m1.png");
  cooperImg = loadImage("mm1.png")
  junk1Img = loadImage("junk_1.png");
  junk2Img = loadImage("junk_2.png");
  //WASTE//

  //LEVEL2//
  earthImg = loadImage("earth.png");
  spaceImg = loadImage("space_1.png");
  rocketImg = loadImage("rocket.png");
  s1Img = loadImage("s_1.png");
  s2Img = loadImage("s_2.png");
  
  // DIFFERENT VIEW OF THE SATELLITE //
  s3_1Img = loadAnimation("sat_1.png");
  s3_2Img = loadAnimation("sat_2.png");
  // DIFFERENT VIEW OF THE SATELLITE //

  //LEVEL2//

  //LEVEL - 2 , CAMERA VIEW - 2//
   sp_1Img = loadImage("sp_1.jpg");
   sp_2Img = loadImage("sp_2.jpg");
   rc_Img = loadImage("rc_back.png");
  //LEVEL - 2 , CAMERA VIEW - 2//


}

function setup(){
  canvas = createCanvas(1100,700);
  
  b = createSprite(550,348,20,20); 
  b.addImage("b1",bImg);
  b.scale = 1.1;

//GIF//
  trash = createSprite(4050,340,30,30);
  trash.addAnimation("tr1",trashImg);
  trash.scale = 2.5; 
 //GIF//  

  //IN THE SERVE STATE//
  wa = createSprite(4300,580,30,30);
  wa.addAnimation("wa1",waImg);
  wa.scale = 0.6;
  
  //IN THE PLAY STATE//

  junk2 = createSprite(7990,420,10,10)
  junk2.addImage("j2",junk2Img);
  junk2.scale = 1.8;

  junk1 = createSprite(3800,480,10,10)
  junk1.addImage("j1",junk1Img);
  junk1.scale = 1.5;


  walle = createSprite(100,6000,30,30);
  walle.addAnimation("walle1",walle1Img);
  walle.addAnimation("walle2",walle2Img);
  walle.addAnimation("walle3",walle_cImg);
  walle.scale = 0.6;

  plant = createSprite(9800,610,20,20);
  plant.addImage("p1", plantImg);
  plant.scale = 0.6;

  t1 = createSprite(8000,650,50,50);
  t1.addImage("t1",tireImg);
  t1.scale = 0.2;
  t2 = createSprite(9500,650,50,50);
  t2.addImage("t2",tireImg);
  t2.scale = 0.2;
  t3 = createSprite(9100,600,50,50);
  t3.addImage("t3",tireImg);
  t3.scale = 0.2;
  t4 = createSprite(8300,600,50,50);
  t4.addImage("t4",tireImg);
  t4.scale = 0.2;

  m1 = createSprite(8400,650,50,50);
  m1.addImage("m1",metalImg);
  m1.scale = 1;
  m1.setCollider("rectangle",0,0,95,90);
  m2 = createSprite(6950,650,50,50);
  m2.addImage("m2",metalImg);
  m2.scale = 1;
  m2.setCollider("rectangle",0,0,95,90);
  m3 = createSprite(6100,600,50,50);
  m3.addImage("m3",metalImg);
  m3.scale = 1;
  m3.setCollider("rectangle",0,0,95,90);
  m4 = createSprite(9830,600,50,50);
  m4.addImage("m4",metalImg);
  m4.scale = 1;
  m4.setCollider("rectangle",0,0,95,90);
  m5 = createSprite(5530,640,50,50);
  m5.addImage("m5",cooperImg);
  m5.scale = 1;
  m5.setCollider("rectangle",0,0,95,90);
  m6 = createSprite(7300,580,50,50);
  m6.addImage("m6",cooperImg);
  m6.scale = 1;
  m6.setCollider("rectangle",0,0,95,90);
  
  axiom = createSprite(4200,230,20,20);
  axiom.addImage("ax2", axiomImg);
  axiom.scale = 0.5;

  axiom_m = createSprite(5000,200,30,30);
  axiom_m.addImage("ax1",axiom_mImg);
  axiom_m.scale = 1.3;

//LEVEL 2//
  space = createSprite(34000,320,20,20);
  space.addImage("s1",spaceImg);
  space.scale = 0.99;

  earth = createSprite(540,326,20,20);
  earth.addImage("e1",earthImg);
  earth.scale = 2;
  earth.visible = false;

  eve = createSprite(540,4600,30,30);
  eve.addImage("e1",eveImg);
  eve.scale = 0.5;

  rocket = createSprite(460,340,20,20); 
  rocket.addImage("r1",rocketImg);
  rocket.scale = 1.2;
  rocket.visible = false;

  r = createSprite(390,-400,20,20); 
  r.addImage("r2",rocketImg);
  r.scale = 3;

  //* CONTROLLING THE ROCKET IN LEVEL - 2; CAMERA VIEW - 2*//
  s = createSprite(450,300,20,20);
  s.addImage("sp_1",spaceImg);
  s.scale = 0.9;
  s.visible = false;
  rc = createSprite(480,350,100,100);
  rc.addImage("rc_back",rc_Img);
  rc.visible = false;
  //* CONTROLLING THE ROCKET IN LEVEL - 2; CAMERA VIEW - 2*//

  s1 = createSprite(random(100,200),-54,10,10);
  s1.addImage("sa_1",s1Img);
  s1.scale = 0.6;
  s1.velocityY = 0;
  
  s2 = createSprite(random(500,700),-40,10,10);
  s2.addImage("sa_2",s2Img);
  s2.scale = 0.2;
  s2.velocityY = 0;
 
  s3 = createSprite(random(500,700),-45,10,10);
  s3.addAnimation("sa_3.1",s3_1Img);
  s3.addAnimation("sa_3.2",s3_2Img);
  s3.scale = 0.8;
  s3.velocityY = 0;

//LEVEL 2//

 //IN THE PLAY STATE//

  game = new Game()
  game.start();

}

function draw(){
   background("black");
   
  
   //IN THE SERVE STATE//
   if(gameState === 1){
    b.x = 2000;
    wa.x = 430; 
   trash.x = 450;
   }
   //IN THE SERVE STATE//

   //LEVEL - 1 //
   if(gameState === 2){
    wa.x = 4300; 
    walle.y = 600;
    trash.x = 4500;
    junk1.x = 380;
    junk2.x = 799;
    t1.x = 800;
    t2.x = 980;
    t3.x = 950;
    t4.x = 860;
    m1.x = 840;
    m2.x = 695;
    m3.x = 610;
    m4.x = 983;
    m5.x = 553;
    m6.x = 730;
    plant.x = 980;
   background("#BA8160")

    if(keyDown("LEFT_ARROW")){
      walle.x = walle.x-8;
      walle.changeAnimation("walle2");
    }
    if(keyDown("RIGHT_ARROW")){
      walle.x = walle.x+8;
      walle.changeAnimation("walle1");   
    }
    Collected(t1);
    Collected(t2);
    Collected(t3);
    Collected(t4);
    Collected(m1);
    Collected(m2);
    Collected(m3);
    Collected(m4);
    Collected(m5);
    Collected(m6);

  /* if(ok === 1){
      createCanvas(1100,600);
      background("#BA8160");
      if(r.y<400){
        r.velocityY = 2;
       }
     else{
       r.velocityY = 0;
      }
      if(eve.x <= 800 && r.velocityY === 0){
        eve.y = 460;
        eve.velocityX = 2;
      }
      else{
        eve.velocityX = 0;
       }
     
      walle.y = 500;
      walle.changeAnimation("walle2");
      junk1.x = 380;
      junk2.x = 799;
    }*/

  }
 //LEVEL - 1 //

  if(gameState === 3){
    createCanvas(1100,600)
    background("black");
   // walle.y = 480;
    walle.x = 3950;
   // eve.x = 690;
    t1.destroy();
    t2.destroy();
    t3.destroy();
    t4.destroy();
    m1.destroy();
    m2.destroy();
    m3.destroy();
    m4.destroy();
    m5.destroy();
    m6.destroy();
    r.destroy();
    junk1.x = 3800;
    junk2.x = 7990;
    plant.x = 2000;
    walle.changeAnimation("walle3");
    walle.scale = 1;
    axiom.x = 420;
  }

 //level - 2//

  // THE SERVE STATE //
 if(gameState === "serve"){
    createCanvas(1100,600)
    background("black");
    space.x = 340;
    rocket.visible = true;
    earth.visible = true;
 
 }
 // THE SERVE STATE //
 
  if(gameState === 4){
    createCanvas(1100,600);
    background("black");
    axiom_m.x = 4000;
    axiom.x = 4200;
    rc.visible = false;
    s.visible = false;
    s3.changeAnimation("sa_3.2");

//*GAME CAMERA - 1*//

  if(keyDown("LEFT_ARROW")){
    rocket.x = rocket.x - 8;
    earth.x =  earth.x + 10;
  }
  if(keyDown("RIGHT_ARROW")){
    rocket.x = rocket.x + 8;
    earth.x =  earth.x - 10;
  }  
  
  earth.velocityY =  2;
  space.velocityY = 2;
  
  if(space.y>430){
    space.y = 235;
  }
 
  space.velocityY = space.velocityY+0.5; 

  // FIXED SCALE ; IN GAME CAMERA 2 THE SCALE IS INCREASING //
  s1.scale = 0.6;
  s2.scale = 0.2;
  s3.scale = 0.8;
  s1.velocityY = 3;
  s2.velocityY = 3;
  s3.velocityY = 3;
  s1.velocityX = 0;
  s2.velocityX =  0;
  s3.velocityX =  0;
   // FIXED SCALE ; IN GAME CAMERA 2 THE SCALE IS INCREASING //

  if(s1.y>695){
    s1.x = random(100,200);
    s1.y = 20;
  }

  if(s2.y>695){
    s2.x = random(500,700);
    s2.y = 40;
  }

  if(s3.y>695){
    s3.x = random(300,400);
    s3.y = 40;
  }
 
//*GAME CAMERA - 1*//

  }

 //*GAME CAMERA - 2*//
if(gameState  === "camera_2"){
  createCanvas(1100,600);
  background("black");
  s.visible = true;
  rc.visible = true;
  s3.changeAnimation("sa_3.1");
  s1.velocityY = 0;
  s2.velocityY = 0;
  s3.velocityY = 0;

  s.scale =  s.scale+0.01;

  s1.scale =  s1.scale+0.001;
  s2.scale =  s2.scale+0.001;
  s3.scale =  s3.scale+0.004;
  s1.velocityY = 1.2;
  s2.velocityY =  1.2;
  s3.velocityY =  1.5;
 // s1.velocityX = -1;
 // s2.velocityX =  1;
 // s3.velocityX =  -1;


   if(s.scale > 1.9){
    s.scale = 0.9;
   }

  if(keyDown("LEFT_ARROW")){
    rc.x = rc.x - 8;
    
  }
  if(keyDown("RIGHT_ARROW")){
    rc.x = rc.x + 8;   
  }  
}
//*GAME CAMERA - 2*//
 
 //level - 2//

   drawSprites();

   if(gameState === 2 && ok=== 0){
    fill ("yellow")
    textSize(30);
    text("Trash collected inside : "+Tscore +" %" , 370,30)
    fill ("yellow")
    textSize(30);
    text("Cubes converted : "+cube  , 20,30)
   }
 if(gameState === 3){
  fill("yellow")
  textSize(40);
  text("The plant needs to be put ",80,520);
  text("in the ship to bring all the people back to earth!",80,570);
 } 
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function Collected(a){
  if(walle.isTouching(a)){
    Tscore = Tscore+10;
    a.destroy();
  }
}

