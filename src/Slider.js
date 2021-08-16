let slideSize = function(arg, e, f){
    for(let i = 0; i < arg.length; i++){
        arg[i].style.width = e + "px";
        arg[i].style.height = f + "px";
        arg[i].parentElement.style.width = e +"px";
        arg[i].parentElement.style.height = f + "px";
    }
}

let Slider = function (slides, count = 0, delay) {
    this.slides = slides;
    this.count = count;
    this.delay = delay;
} 

Slider.prototype.start = function(){
    for(let i = 0; i < this.slides.length; i++){
        this.slides[i].style.display = "none";
    }
    this.count++;
    if(this.count > this.slides.length) {this.count = 1;}

    this.slides[this.count-1].style.display = "block";

    setTimeout(() => {
        sliders.start();
    }, this.delay);
}
