import * as PIXI from "pixi.js"
import * as dat from 'dat.gui'

const load = (app: PIXI.Application) => {
    return new Promise<void>((resolve) => {

            resolve();    
    });
};

const main = async () => {
    //clock object 

    // Actual app
    let app = new PIXI.Application();
    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';
    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);

    // set up gui
    const gui = new dat.GUI()
    let seconds = 0;
    let minutes = 0; 
    let hours = 0;

    // Load assets
    await load(app);
    let sprite = new PIXI.Sprite( );    //Q why does this need to stay to keep the background black ?
   

    app.stage.addChild(sprite);
    let draw = new PIXI.Graphics();
    draw.beginFill(0x0000FF, 1)
    draw.lineStyle(2, 0x0000FF, 1)  //use and array to make the circles a diffrent color
    draw.drawCircle((window.outerWidth/2),(window.outerHeight/2), 280)


    draw.lineStyle(2, 0x000000, 1) 
    draw.drawCircle((window.outerWidth/2),(window.outerHeight/2), 281) 
    draw.lineStyle(2, 0x000000, 1) 
    draw.drawCircle((window.outerWidth/2),(window.outerHeight/2), 210)
    draw.lineStyle(2, 0x000000, 1) 
    draw.drawCircle((window.outerWidth/2),(window.outerHeight/2), 140)
    draw.lineStyle(2, 0x014903, 1)
    draw.drawCircle((window.outerWidth/2),(window.outerHeight/2), 70)
    setInterval(() => {        //arrow function
        hours = new Date().getHours();    //get current time (24 hour cycle )
        minutes = new Date().getMinutes(); 
        seconds = new Date().getSeconds();
        draw.beginFill(0xFF0000, 1)    //second cicle drawn ontop of first one 
        draw.lineStyle(2, 0xFF0000, 1)  
        let fillvalue = 0;
        fillvalue = (11.6666667 * hours) + (0.19444444444 * minutes) + (0.00324074074 * seconds)  //will fill up to 280 radius (same as fist circle )
        console.log(fillvalue)
         draw.drawCircle((window.outerWidth/2),(window.outerHeight/2), fillvalue)       //draws second circle 
      }, 1000); //updates every second 
 
    app.stage.addChild(draw);             
    // Handle window resizing
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        sprite.x = window.innerWidth / 2 - sprite.width / 2;
        sprite.y = window.innerHeight / 2 - sprite.height / 2;
    });
    document.body.appendChild(app.view);
    document.body.appendChild(gui.domElement);
};

function getMin(){
    var today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes(); 
    let sec = today.getSeconds();
    console.log(sec)
};
main();