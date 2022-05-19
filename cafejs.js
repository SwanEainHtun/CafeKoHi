function imgSlider(anything){
    document.querySelector('.kohi').src = anything;
}

function changeCircleColor(color)
{
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
function changebgcolor(color)
{
    const LM = document.querySelector('#LM');
    LM.style.background = color;
}
function originalcolor(color)
{
    const circle = document.querySelector('.circle');
    circle.style.background = color;
    const LM = document.querySelector('#LM');
    LM.style.background = color;
    document.querySelector('.kohi').src = "photos/C9.png";
}
f