// https://stackoverflow.com/questions/9880279/how-do-i-add-a-simple-onclick-event-handler-to-a-canvas-element

function drawCircle(center, radius) {
    const fill =  'rgb(120, 25, 25)'
    const stroke = 'rgb(120, 25, 25)'
    strokeWidth = 2
    ctx.beginPath()
    const {x,y} = center;
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
    if (fill) {
        ctx.fillStyle = fill
        ctx.fill()
    }
    if (stroke) {
        ctx.lineWidth = strokeWidth
        ctx.strokeStyle = stroke
        ctx.stroke()
    }
}

function drawSpring(spring_width, spring_length, number_of_vertices) {

    ctx.strokeStyle = 'rgb(255, 255, 255)';
    ctx.lineWidth = 3;

    center = ctx.width/2
    const dy = spring_length/number_of_vertices
    
    ctx.beginPath();
    ctx.moveTo(center, 0);
    ctx.lineTo(center, dy/2);
    let signal = -1;
    for (let i = 0; i < number_of_vertices; i++) {
        signal *= -1
        ctx.lineTo(center + signal * spring_width, (1 + i) * dy);
    }
    ctx.lineTo(center, (number_of_vertices + 0.5) * dy);
    ctx.lineTo(center, (number_of_vertices + 1.5) * dy);
    ctx.stroke();

    const end_point = { x: center, y: (number_of_vertices + 1.5) * dy}
    return end_point

}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


function drawSystem(spring_length = 180, number_of_vertices = 6, spring_width = 24) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
    ctx.width = canvas.width;

    const spring_end = drawSpring(spring_width, spring_length, number_of_vertices)
    const mass_radius = 30
    spring_end.y += mass_radius
    drawCircle(spring_end, mass_radius)
}

drawSystem()
