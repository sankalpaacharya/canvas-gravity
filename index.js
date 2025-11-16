let canvas  = document.querySelector("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight


let c = canvas.getContext("2d")

// c.fillRect(100,100,100,100)
// c.fillRect(400,100,100,100)
// c.fillRect(300,400,100,100)


// Line
// c.beginPath()
// c.moveTo(50, 50)
// // c.moveTo(50, 50)
// c.lineTo(550,50)
// c.lineTo(300,300)
// c.lineTo(50,50)
// c.strokeStyle = "red"
// c.stroke()

// c.beginPath()
// c.arc(300,500,50,0,Math.PI*2)
// c.stroke()


// for(let i=0;i<100;i++){
//     c.beginPath()
//     var x = Math.random() * window.innerWidth
//     var y = Math.random() * window.innerHeight
//     c.arc(x,y,50,0,Math.PI*2)
//     console.log("sankalpa acharya");
//     c.stroke()
// }


// c.beginPath()
// c.arc(200,300,50,0,Math.PI*2)
// c.stroke()    
let x = 200
let y = 300

    
function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.beginPath()
    c.arc(x,y,50,0,Math.PI*2)
    x++
    c.stroke()    
    requestAnimationFrame(animate)
}

animate()
