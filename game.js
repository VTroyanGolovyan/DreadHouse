var example = document. getElementById('game');
var canvas = example .getContext('2d');
example2 = document. getElementById('counters');
var counters = example2 .getContext('2d');
var rainCanvas = document .createElement('canvas');
rainCanvas .width = example .width;
rainCanvas .height = example .height;
var rainContext = rainCanvas .getContext('2d');
var shadowCanvas = document .createElement('canvas');
shadowCanvas .width = example .width;
shadowCanvas .height = example .height;
var shadowContext = shadowCanvas .getContext('2d');
var programm = {
  textures: 'graph/texturpack.png',
  rain :true,
      hello:function(){
  var img = new Image();
  img .src = 'graph/krov_na_stene.jpg';
  img .onload = function(){
    canvas . drawImage(img,0,0);
    canvas .fillStyle = '#7b0708';
    canvas .globalAlpha =0.8;
              canvas .fillRect(175,150,960/3*2,250);
              canvas .globalAlpha =1;
              canvas .fillStyle = 'white';
              canvas.font = "105px serif";
              canvas.fillText('Dread', 190, 260);
              canvas.fillText('House', 360, 390);
              canvas.font = "40px serif";
              canvas.fillText('Нажмите на игровое окно для начала игры', 10, 560);
  }
  function start(){
    example .removeEventListener('click',start);
    programm .menu();
  }
  example .addEventListener('click',start);
      },
      menu:function(){

        function getMousePos(canvas,evt){
          var rect =canvas .getBoundingClientRect();
          return {
            x:(evt.clientX - rect .left),
            y:(evt.clientY - rect . top)
          };
        }

        var buttons = new Array();
        buttons [0] = {
              xmin:176,
              xmax:812,
              ymin:180,
              ymax:227,
              active:function(){
                example .removeEventListener('click',mouseInput);
                programm .selectLevel();
              }
        }

        buttons [1] = {
              xmin:176,
              xmax:812,
              ymin:240,
              ymax:287,
              active:function(){
                example .removeEventListener('click',mouseInput);
                programm .settings();
              }
        }

        buttons [2] = {
              xmin:176,
              xmax:812,
              ymin:297,
              ymax:350,
              active:function(){
                example .removeEventListener('click',mouseInput);
                programm .info();
              }
        }

        buttons [3] = {
              xmin:176,
              xmax:812,
              ymin:360,
              ymax:412,
              active:function(){
                example .removeEventListener('click',mouseInput);
                window.location.href = "index.html";
              }
        }
        function draw() {
        canvas.fillStyle = "#000000";
        canvas.fillRect(0,0,960,608);
        var img = new Image();   // Создает новое изображение
        img.src = 'graph/pentuha.jpg'; // Устанавливает источник файла
        img .onload=function(){
          canvas.drawImage(img, 120 ,0);
          button("Играть", 1,  0);
          button("Настройки", 2, -35);
          button("О нас", 3, 10);
          button("Выход на главную страницу", 4, -190);
        }
      }
      function mouseInput(event){
        var mouse = getMousePos(example,event);
        var x = mouse .x , y = mouse .y;
        for (var i = 0;i<buttons .length;i++){
        if (x>buttons[i].xmin&& x<buttons[i].xmax && y>buttons[i].ymin && y<buttons[i].ymax){
          buttons[i].active();
        }
      }

      }
      example .addEventListener('click',mouseInput);

        function button(text, number, tx) {
          canvas.fillStyle = "#860100";
          var x=175;
          var y=60*number+120;
          canvas .globalAlpha =0.7;
          canvas.fillRect(x,y,960/3*2,50);
          canvas .globalAlpha =1;
          canvas.strokeStyle = "white";
          canvas.strokeRect(x,y,960/3*2,50);
          canvas.strokeRect(x-1,y-1,960/3*2+1,50+1);
          canvas.fillStyle = "#FFFFFF";
          canvas.font = "35px serif";
          canvas.fillText(text, 270+x+tx, 35+y);

        }
        draw();

      },
      selectLevel: function(){
        function CreateButton(xmin,xmax,ymin,ymax,number){
          this .xmin = xmin;
          this .xmax = xmax;
          this .ymin = ymin;
          this .ymax = ymax;
          this .number = number;
          this .active = function(){
            example .removeEventListener('click',levelSelect);
            programm .game(this .number);
          }
          this .draw = function(){
            canvas .fillStyle = "red";
            canvas .globalAlpha = "0.5";
            canvas .fillRect(this .xmin,this .ymin,this .ymax-this .ymin,this .xmax - this .xmin);
            canvas .globalAlpha = "1";
            canvas .strokeStyle = 'white';
            canvas .strokeRect(this .xmin,this .ymin,this .ymax-this .ymin,this .xmax - this .xmin);
            canvas.font = "45px serif";
            canvas.fillStyle = "white";
            canvas .fillText(this .number,this .xmin+9,this.ymax-9);
          }
        }
        function getMousePos(canvas,evt){
          var rect =canvas .getBoundingClientRect();
          return {
            x:(evt.clientX - rect .left),
            y:(evt.clientY - rect . top)
          };
        }
        var buttons = new Array();
        buttons[0] = new CreateButton(100,150,100,150,1);
        buttons[1] = new CreateButton(200,250,100,150,2);
        buttons[2] = new CreateButton(300,350,100,150,3);
        buttons[3] = new CreateButton(400,450,100,150,4);
        buttons[4] = new CreateButton(500,550,100,150,5);
        buttons[5] = new CreateButton(600,650,100,150,6);
        buttons[6] = new CreateButton(700,750,100,150,7);
        buttons[7] = new CreateButton(800,850,100,150,8);
        function levelSelect(event){
          var mouse = getMousePos(example,event);
          var x = mouse .x , y = mouse .y;
          for (var i = 0;i<buttons .length;i++){
            if (x>buttons[i].xmin&& x<buttons[i].xmax && y>buttons[i].ymin && y<buttons[i].ymax){
              buttons[i].active();
            }
          }
        }
        function draw(){

          canvas .fillStyle = "black";
          canvas .fillRect(0,0,example .width,example .height);
          canvas .drawImage(img,100,0);
          canvas .font = '68px serif';
          canvas .fillStyle = "red";
          canvas .globalAlpha = 0.5;
          canvas .fillRect(100,10,750,80);
          canvas .globalAlpha = 1;
          canvas .strokeStyle="white";
          canvas .strokeRect(100,10,750,80);
          canvas .fillStyle = "white";
          canvas .fillText('Выберите уровень',140,70);
          for (var i = 0;i<buttons .length;i++){

              buttons[i].draw();

          }
        }
        var img = new Image();
        img.src = 'graph/pentuha.jpg';
        img.onload = draw();
        example .addEventListener('click',levelSelect);

      },
      game:function(level){
            function newRecord(level,score,time){
              var http = new XMLHttpRequest();
              http.onreadystatechange = function(){
                if (http .readyState == 4){
                      alert (http.responseText);
                }
              }
              http .open('GET','../../cmd.php?cmd=newrecord&level='+level+'&score='+score+
                          '&time='+time
                          ,true);
              http .send();
            }
            var blocks = new Image();
            /*текстурпак*/
            blocks.src= programm .textures;
            var map;
            function loadJSON(path)
              {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", path, false);
                xhr.send();
                map = JSON.parse(xhr.responseText);
              }
            loadJSON('levels/'+level+'.json');
            console .log(x);

            function GameData (map) {
              this .map = map;
              this .score = 0;
              var j,cout = 0;
              for (var i = 0;i<map .length;i++){
                for (j = 0;j<map .length;j++){
                  if (map [i][j] == 3) {
                    cout ++;
                  }
                }
              }
              this .cout = cout;
              this .monsters = new Array();
              var monsterNumber = 0;
              for ( i = 0;i<map .length;i++){
                for (j = 0;j<map .length;j++){
                  if (map [i][j] == 5) {
                    map [i][j] = 0;
                    this .monsters[monsterNumber] = new Character(i,j);
                    this .monsters[monsterNumber].direction = false;
                    monsterNumber++;
                  }
                }
              }
    this .startTime = Date .now();
            }

            function gameOver(requestId,intervalId,coment){
              if (coment == 'You win'){
                var time =Math .floor((Date .now() - data .startTime)/1000);
              }
              function getMousePos(canvas,evt){
                var rect =canvas .getBoundingClientRect();

                return {
                  x:(evt.clientX - rect .left),
                  y:(evt.clientY - rect . top)
                };

              }

              var buttons = new Array();
              buttons [0] = {
                    xmin:176,
                    xmax:812,
                    ymin:82,
                    ymax:130,
                    active:function(){
                      example .removeEventListener('click',mouseInput);
                      programm .menu();
                    }
              }
              function draw() {
              canvas.fillStyle = "#000000";

              button("Меню", 1,  0);
              counters .fillStyle = 'black';
              counters .fillRect(0,0,example2 .width,example2.height);
            }
            function mouseInput(event){
              var mouse = getMousePos(example,event);
              var x = mouse .x , y = mouse .y;
              for (var i = 0;i<buttons .length;i++){
              if (x>buttons[i].xmin&& x<buttons[i].xmax && y>buttons[i].ymin && y<buttons[i].ymax){
                buttons[i].active();
              }
            }

            }
            example .addEventListener('click',mouseInput);

              function button(text, number, tx) {
                canvas.fillStyle = "#860100";
                var x=175;
                var y=60*number+20;
                canvas .globalAlpha =0.7;
                canvas.fillRect(x,y,960/3*2,50);
                canvas .globalAlpha =1;
                canvas.strokeStyle = "white";
                canvas.strokeRect(x,y,960/3*2,50);
                canvas.strokeRect(x-1,y-1,960/3*2+1,50+1);
                canvas.fillStyle = "#FFFFFF";
                canvas.font = "35px serif";
                canvas.fillText(text, 270+x+tx, 35+y);

              }
                     var pentuha = new Image();
                     pentuha .src = "graph/pentuha.jpg";
                     clearInterval(intervalId);
                     cancelAnimationFrame(requestId);

                     pentuha .onload =function(){
                     canvas .fillStyle = 'black';
                     canvas .fillRect(0,0,980,608);
                     canvas .drawImage(pentuha,120,0);
                     canvas .fillStyle = '#7b0708';
                     canvas .globalAlpha =0.7;
                     canvas. fillRect(175,200,960/3*2,140);
                     canvas .globalAlpha =1;
                     canvas .fillStyle = 'black'
                     canvas .strokeRect(175,200,960/3*2,140);
                     canvas .strokeRect(174,199,960/3*2,140);
                     canvas .fillStyle = 'white';
                     canvas .font = "120px serif";
                     canvas .fillText(coment,230, 330);
                     draw();

  }
            }

            function Character(x,y){
              /*координаты персонажа*/
              this .direction = true;
              this .active = true;
              this .x = x;
              this .y = y;
              this .xPrev = x;
              this .yPrev = y;
              this .health = 100;
              this .lastAnimationUpdate = Date .now();
              this .animationUpdate = function(){
                if (Date .now() - this .lastAnimationUpdate >250){
                  this .active = !this .active;

                  this .lastAnimationUpdate = Date .now();
                }
              }
               /*вверх*/
              this .up = function(){
                this .xPrev = this .x;
                this .yPrev = this .y;
                this .y --;
                if (data .map[player .x][player .y]==1){
                  this .back();
                }


              }
              /*вниз*/
              this .down = function(){
                this .xPrev = this .x;
                this .yPrev = this .y;
                this .y++;
                if (data .map[player .x][player .y]==1){
                  this .back();
                }

              }
              /*вправо*/
              this .right = function(){
                this .xPrev = this .x;
                this .yPrev = this .y;
                this .x++;
                this .direction = true;
                if (data .map[player .x][player .y]==1){
                  this .back();
                }
              }
              /*влево*/
              this .left = function(){
                this .xPrev = this .x;
                this .yPrev = this .y;
                this .x--;
                this .direction = false;
                if (data .map[player .x][player .y]==1){
                  this .back();
                }

              }
              /*выстел влево*/
              this .shootLeft = function(){

              }
              /*выстрел вправо*/
              this .shootRight = function(){

              }
              /**/
              this .back = function(){
                this .x = this .xPrev;
                this .y = this .yPrev;
              }
            }
            function renderCounters(){
                counters .fillStyle = 'black';
                counters .fillRect(0,0,960,32);

                counters .fillStyle = '#7b0708';
                counters .fillRect(0, 0, 960/3, 32);

                counters .fillStyle = '#7b0708';
                counters .strokeRect(1, 0, 960/3, 32);
                counters .fillStyle = "white";
                counters .font = "34px serif";
                counters .fillText("Счет:"+data .score+"/"+data .cout,0, 30,960/3);

                counters .fillStyle = '#7b0708';
                counters .fillRect(960/3, 0, 960/3, 32);
                counters .fillStyle = '#c4a121';
                counters .strokeRect(960/3, 0, 960/3, 32);
                counters .fillStyle = "white";
                counters .font = "34px serif";
                counters .fillText("Здоровье:"+player .health,960/3, 30,960/3);

                var now = Date .now();
                counters .fillStyle = '#7b0708';
                counters .fillRect(2*960/3, 0, 960/3, 32);
                counters .fillStyle = '#c4a121';
                counters .strokeRect(2*960/3, 0, 960/3, 32);
                counters .fillStyle = "white";
                counters .font = "34px serif";
                var allseconds = Math .floor((now-data .startTime)/1000);
                var minutes = Math .floor(allseconds/60);
                var seconds = allseconds - minutes*60;
                counters .fillText('Время:'+minutes + ':' + seconds,2*960/3, 30,960/3);
            }

            function shadowUpdate(){
                shadowContext .clearRect(0,0,shadowCanvas.width,shadowCanvas .height);
                shadowContext .fillStyle = 'black';
                shadowContext .globalAlpha = 1;
                shadowContext .fillRect(0,0,shadowCanvas .width,shadowCanvas .height);
                shadowContext .clearRect(player .x*32-4*32,player .y*32-4*32,9*32,9*32);
                shadowContext .globalAlpha = 0.6;
                shadowContext .fillRect(player .x*32-4*32,player .y*32-4*32,9*32,9*32);
                shadowContext .clearRect(player .x*32-3*32,player .y*32-3*32,7*32,7*32);
                shadowContext .globalAlpha = 0.4;
                shadowContext .fillRect(player .x*32-3*32,player .y*32-3*32,7*32,7*32);
                shadowContext .clearRect(player .x*32-2*32,player .y*32-2*32,5*32,5*32);
            }
            function rainUpdate(){
                rainContext .clearRect(0,0,rainCanvas.width,rainCanvas .height);
                var i,x,y;
                var n = Math .floor(Math .random()*170+80);
                for (i=0;i<n;i++){
                  x = Math .floor(Math .random()*rainCanvas .width);
                  y = Math .floor(Math .random()*rainCanvas .height);
                  rainContext .beginPath();
                  rainContext .moveTo(x,y);
                  rainContext .lineTo(x-5, y-20);
                  rainContext .globalAlpha =0.6;
                  rainContext .strokeStyle = '#10283d';
                  rainContext.lineWidth = 2;
                  rainContext .stroke();
                }
                rainContext .globalAlpha =1;
            }
            function drawPlayer(scale){
              if (player .direction){
                if (player .active){
              canvas .drawImage(blocks,0,64,32,32,player .x*scale,player .y*scale,scale,scale);
            } else canvas .drawImage(blocks,32,64,32,32,player .x*scale,player .y*scale,scale,scale);
          } else {
                if (player .active){
                    canvas .drawImage(blocks,64,64,32,32,player .x*scale,player .y*scale,scale,scale);
                  } else canvas .drawImage(blocks,96,64,32,32,player .x*scale,player .y*scale,scale,scale);
          }
            }
            function drawMonster(monster,scale){
              if (monster .direction){
                if (monster .active){
              canvas .drawImage(blocks,0,6*32,32,32,monster .x*scale,monster .y*scale,scale,scale);
            } else canvas .drawImage(blocks,32,6*32,32,32,monster .x*scale,monster .y*scale,scale,scale);
          } else {
                if (monster .active){
                    canvas .drawImage(blocks,64,6*32,32,32,monster .x*scale,monster .y*scale,scale,scale);
                  } else canvas .drawImage(blocks,96,6*32,32,32,monster .x*scale,monster .y*scale,scale,scale);
          }

            }
            var lastRainUpdate = Date .now();
            /*функция для отрисовки*/
            function render(){
               var i = 0,j = 0,scale = 32;
               for (i;i<data .map .length; i++){
                 for (j = 0;j<data .map[i] .length; j++){
                   switch (data .map[i][j]) {
                     case 1://cтена
                              canvas .drawImage(blocks,32,0,32,32,i*scale,j*scale,scale,scale);


                        break;
                     case 0:
                            canvas .drawImage(blocks,0,0,32,32,i*scale,j*scale,scale,scale);

                        break;
                     case 2://лестница

                            canvas .drawImage(blocks,32,0,32,32,i*scale,j*scale,scale,scale);
                            canvas .drawImage(blocks,0,32,32,32,i*scale,j*scale,scale,scale);
                         break;
                     case 3://сундук
                            canvas .drawImage(blocks,0,0,32,32,i*scale,j*scale,scale,scale);
                            canvas .drawImage(blocks,0,96,32,32,i*scale,j*scale,scale,scale);
                        break;
                    case 4://выход
                            canvas .drawImage(blocks,0,128,32,32,i*scale,j*scale,scale,scale);
                           break;
                   }
                 }
               }


               for (i=0;i<data .monsters .length;i++){
                        data .monsters[i] .animationUpdate();
                        drawMonster(data .monsters[i],scale);
               }
               canvas .fillStyle = 'yellow';
                player .animationUpdate();
                drawPlayer(scale);
               renderCounters();
               if (programm .rain){
                 if (Date .now()-lastRainUpdate > 100){
                   rainUpdate();
                   lastRainUpdate = Date .now();
                }
                canvas .drawImage(rainCanvas,0,0);
            }
              shadowUpdate();
              canvas .drawImage(shadowCanvas,0,0);
               /*Запуск постоянной отрисовки с максимально доступным фпс*/
               requestId = requestAnimationFrame(render);
            }

            /*функция для обработки пользовательского ввода */
            function inputProcessing(){
              if (userInput .up){
                player .up();
                clearUserInput();
              }
              if (userInput .down){
                player .down();
                clearUserInput();
              }
              if (userInput .left){
                player .left();
                clearUserInput();
              }
              if (userInput .right){
                player .right();
                clearUserInput();
              }
              if (userInput .shootLeft){
                player .shootLeft();
                clearUserInput();
              }
              if (userInput .shootRight){
                player .shootRight();
                clearUserInput();
              }

            }

            function clearUserInput(){
              userInput .up = false;
              userInput .down = false;
              userInput .left = false;
              userInput .right = false;
              userInput .shootRight = false;
              userInput .shootLeft = false;
            }

            function gravity(){
              if (data .map[player .x][player .y]!=2){
              player .down();
            }
            for (var i = 0;i<data .monsters .length;i++){
              if (data .map[data .monsters[i].x][data .monsters[i].y]!=2){
                if( data .map[data .monsters[i].x][data .monsters[i].y+1] != 1) {
                      data .monsters[i].down();
                }
              }
            }
            }
            /*функция для обработки столкновений*/
            function collisions(){
                if (data .map[player .x][player .y] == 1){
                  player .back();
                }
                if (data .map[player .x][player .y] == 3){
                  data .score ++;
                  data .map[player .x][player .y] = 0;
                }
                if (data .map[player .x][player .y] == 4){
                  if (data .cout == data .score){
                    gameOver(requestId,intervalId, 'You win');
                  }
                }
                for (var i = 0;i<data .monsters .length;i++){
                  if (data .monsters[i].x == player .x &&
                      data .monsters[i].y == player .y
                    ){
                      gameOver(requestId,intervalId,'You lose');
                    }
                }
                var j=0;
                for (i = 0;i<data .monsters .length; i++){
                  j = 0;
                  for (j = 0;j<data .monsters .length; j++){
                    if(i!=j && data .monsters[i].x == data .monsters[j].x
                            && data .monsters[i].y == data .monsters[j].y){
                              data .monsters[i] .back();
                            }
                  }
                }
            }

            function monstersLogic(){
              for (var i = 0;i<data .monsters .length;i++){
                if (data .monsters[i].y<player .y){//монстр выше игрока
                  if (data .map[data .monsters[i].x][data .monsters[i].y+1] == 2 ||(
                             data .map[data .monsters[i].x][data .monsters[i].y] == 2&&
                             data .map[data .monsters[i].x][data .monsters[i].y+1] != 1)) {//приоритет спуск
                        data .monsters[i].down();

                  }
                  else if (data .monsters[i].x>player .x){
                    if (data .map[data .monsters[i].x-1][data .monsters[i].y] != 1){
                            data .monsters[i].left();
                  }
                  }
                  else if (data .monsters[i].x<player .x){
                    if (data .map[data .monsters[i].x+1][data .monsters[i].y] != 1){
                            data .monsters[i].right();
                  }
                  }

                } else if (data .monsters[i].y>player .y) {//монстр ниже игрока
                  if (data .map[data .monsters[i].x][data .monsters[i].y-1] == 2 ||(
                             data .map[data .monsters[i].x][data .monsters[i].y] == 2&&
                             data .map[data .monsters[i].x][data .monsters[i].y-1] != 1)) {
                        data .monsters[i].up();//приоритет подьем

                  }else if (data .monsters[i].x>player .x){
                    if (data .map[data .monsters[i].x-1][data .monsters[i].y] != 1){
                            data .monsters[i].left();
                  }
                  }
                  else if (data .monsters[i].x<player .x){
                    if (data .map[data .monsters[i].x+1][data .monsters[i].y] != 1){
                            data .monsters[i].right();
                  }
                }
                  else if(data .monsters[i].x == player .x){
                    if (data .map[data .monsters[i].x+1][data .monsters[i].y] != 1){
                            data .monsters[i].right();
                  } else if (data .map[data .monsters[i].x-1][data .monsters[i].y] != 1){
                          data .monsters[i].left();
                }
                  }

                }
                else if (data .monsters[i].y==player .y){//на одной высоте
                  if (data .monsters[i].x>player .x){
                    if (data .map[data .monsters[i].x-1][data .monsters[i].y] != 1){
                            data .monsters[i].left();
                  }
                  }
                  else if (data .monsters[i].x<player .x){
                    if (data .map[data .monsters[i].x+1][data .monsters[i].y] != 1){
                            data .monsters[i].right();
                  }
                }
            }
           }
         }
            var x = 0;
            /*обновление состояния игры*/
            function update(){
                x++;
                inputProcessing(); //Обработка пользовательского ввода
                clearUserInput();  //очистка ввода
                if (x == 5){
                monstersLogic();
                x = 0;
                 }  //логика монстров
                collisions();      //Столкновения (напр. игрок-лава)
                gravity();         //гравитация

            }
            /*обьект который хранит данные о вводе*/
            var userInput = {
                  up:false,           //вверх
                  down:false,         //вниз
                  left:false,         //влево
                  right:false,        //вправо
                  shootLeft:false,    //выстрел влево
                  shootRight:false    //выстрел вправо
            }

            /*игровые данные (карта и т д)*/
            var data = new GameData(map);
            /*игрок*/
            var player = new Character(1,17);
            /*прослушка клавиатуры*/
            document .addEventListener('keydown',function(event){
                            switch (event .keyCode){
                                  case 87: //W
                                      userInput .up = true;
                                  break

                                  case 65: //A
                                      userInput .left = true;
                                  break
                                  case 83: //S
                                      userInput .down = true;
                                  break
                                  case 68: //D
                                      userInput .right = true;
                                  break
                                  case 38: //Стрелка вверх
                                    userInput.up = true;
                                    break
                                  case 37: //Стрелка влево
                                    userInput.left = true;
                                    break
                                  case 40: //Стрелка вниз
                                    userInput.down = true;
                                    break
                                  case 39: //Стрелка вправо
                                    userInput.right = true;
                                    break

              }
            });
            var requestId;
            render();                 //отрисовка карты
            var intervalId =
            setInterval(function(){
                  update();
                },1000/10);//запуск игрового цикла


      },
      settings: function(){
        function getMousePos(canvas,evt){
          var rect =canvas .getBoundingClientRect();

          return {
            x:(evt.clientX - rect .left),
            y:(evt.clientY - rect . top)
          };

        }

        var buttons = new Array();
        buttons [0] = {
              xmin:176,
              xmax:812,
              ymin:82,
              ymax:130,
              active:function(){
                example .removeEventListener('click',mouseInput);
                counters .fillStyle = 'black';
                counters .fillRect(960/3, 0, 960/3, 32);
                programm .menu();
              }
        }
        buttons [1] = {
              xmin:176,
              xmax:812,
              ymin:150,
              ymax:195,
              active:function(){
                var style;
                if (programm .textures == 'graph/texturpack2.png' ){
                    programm .textures = 'graph/texturpack.png';
                    style = 'dark';
                }
                else {programm .textures = 'graph/texturpack2.png';
                    style = 'light';
              }
                counters .fillStyle = '#7b0708';
                counters .fillRect(960/3, 0, 960/3, 32);
                counters .fillStyle = '#c4a121';
                counters .strokeRect(960/3, 0, 960/3, 32);
                counters .fillStyle = "white";
                counters .font = "34px serif";
                counters .fillText("Успешно изменено на "+style,960/3, 30,960/3);
              }
        }
        buttons [2] = {
              xmin:176,
              xmax:812,
              ymin:200,
              ymax:270,
              active:function(){
                programm .rain = !programm .rain;

                counters .fillStyle = '#7b0708';
                counters .fillRect(960/3, 0, 960/3, 32);
                counters .fillStyle = '#c4a121';
                counters .strokeRect(960/3, 0, 960/3, 32);
                counters .fillStyle = "white";
                counters .font = "34px serif";
                if (programm .rain){
                counters .fillText("Дождь включен",960/3, 30,960/3);
              } else counters .fillText("Дождь отключен",960/3, 30,960/3);
              }
        }
        function draw() {
        canvas.fillStyle = "#000000";

        button("Меню", 1,  0);
        button("Поменять текстуры", 2,  -120);
        button("Дождь (on/off)", 3,  -80);

      }
      function mouseInput(event){
        var mouse = getMousePos(example,event);
        var x = mouse .x , y = mouse .y;
        for (var i = 0;i<buttons .length;i++){
        if (x>buttons[i].xmin&& x<buttons[i].xmax && y>buttons[i].ymin && y<buttons[i].ymax){
          buttons[i].active();
        }
      }

      }
      example .addEventListener('click',mouseInput);

        function button(text, number, tx) {
          canvas.fillStyle = "#860100";
          var x=175;
          var y=60*number+20;
          canvas .globalAlpha =0.7;
          canvas.fillRect(x,y,960/3*2,50);
          canvas .globalAlpha =1;
          canvas.strokeStyle = "white";
          canvas.strokeRect(x,y,960/3*2,50);
          canvas.strokeRect(x-1,y-1,960/3*2+1,50+1);
          canvas.fillStyle = "#FFFFFF";
          canvas.font = "35px serif";
          canvas.fillText(text, 270+x+tx, 35+y);

        }

        var pentuha = new Image();
        pentuha .src = "graph/pentuha.jpg";
        pentuha .onload =function(){
        canvas .fillStyle = 'black';
        canvas .fillRect(0,0,980,608);
        canvas .drawImage(pentuha,120,0);
        canvas .fillStyle = '#7b0708';

        draw();
      }

    },
    info:function(){
      function getMousePos(canvas,evt){
        var rect =canvas .getBoundingClientRect();

        return {
          x:(evt.clientX - rect .left),
          y:(evt.clientY - rect . top)
        };

      }

      var buttons = new Array();
      buttons [0] = {
            xmin:176,
            xmax:812,
            ymin:82,
            ymax:130,
            active:function(){
              example .removeEventListener('click',mouseInput);
              programm .menu();
            }
      }
      function draw() {
      canvas.fillStyle = "#000000";

      button("Меню", 1,  0);

    }
    function mouseInput(event){
      var mouse = getMousePos(example,event);
      var x = mouse .x , y = mouse .y;
      for (var i = 0;i<buttons .length;i++){
      if (x>buttons[i].xmin&& x<buttons[i].xmax && y>buttons[i].ymin && y<buttons[i].ymax){
        buttons[i].active();
      }
    }

    }
    example .addEventListener('click',mouseInput);

      function button(text, number, tx) {
        canvas.fillStyle = "#860100";
        var x=175;
        var y=60*number+20;
        canvas .globalAlpha =0.7;
        canvas.fillRect(x,y,960/3*2,50);
        canvas .globalAlpha =1;
        canvas.strokeStyle = "#4D4D4D";
        canvas.strokeRect(x,y,960/3*2,50);
        canvas.strokeRect(x-1,y-1,960/3*2+1,50+1);
        canvas.fillStyle = "#FFFFFF";
        canvas.font = "35px serif";
        canvas.fillText(text, 270+x+tx, 35+y);
      }
      var pentuha = new Image();
      pentuha .src = "graph/pentuha.jpg";
      pentuha .onload =function(){
      canvas .fillStyle = 'black';
      canvas .fillRect(0,0,980,608);
      canvas .drawImage(pentuha,120,0);
      canvas .fillStyle = '#7b0708';
      canvas .globalAlpha =0.7;
      canvas .fillRect(180,200,960/3*2,140);
      canvas .globalAlpha =1;
      canvas .fillStyle = 'black'
      canvas .strokeRect(180,200,960/3*2,140);;
      canvas .strokeRect(179,199,960/3*2,140);;
      canvas .fillStyle = 'white';
      canvas .font = "30px serif";
      canvas .fillText('Игру создал:',190, 225);
      canvas .font = "27px serif";

      canvas .fillText('VladislavHacker',240,285);

      draw();
    }
  }
}
programm.hello();
