var steps = [1,2,3,1],// указываете шаги через запятую
    i = 0,
    path = 'img/image',//путь к картинке / общее название картинок (image или любое другое)
    timeout = setTimeout(function slide(){
    var step = steps[i];
    $('div.header').css('background','url(' + path + i + ')')
    if (i < steps.length - 1) {
        i++;
    }
    else {
        i=0;
    }
    timeout = setTimeout(slide, step*1000);
},0)