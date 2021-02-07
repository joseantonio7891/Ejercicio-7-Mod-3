let nave = $('#nave');
let naveWidth = nave.css('width');

/* Control de movimientos */

$('#up').on('click', ()=>{
    nave.animate({ "margin-top": "-=15px" }, "normal" );
})

$('#down').on('click', ()=>{
    nave.animate({ "margin-top": "+=15px" }, "normal" );
})

$('#left').on('click', ()=>{
    nave.animate({ "margin-left": "-=15px" }, "normal" );
})

$('#right').on('click', ()=>{
    nave.animate({ "margin-left": "+=15px" }, "normal" );
})

/* Tamaños */

$('#zoomIn').on('click', ()=>{
    nave.animate({ "width": "+=15px" }, "normal" );
})

$('#zoomOut').on('click', ()=>{
    nave.animate({ "width": "-=15px" }, "normal" );
})

$('#normal').on('click', ()=>{
    nave.animate({ "width": naveWidth }, "normal" );
})

/* Visibilidad */

$('#invisible').on('click', ()=>{
    nave.animate({ 'opacity': "0" }, "normal" );
})

$('#visible').on('click', ()=>{
    nave.animate({ 'opacity': "1" }, "normal" );
})

