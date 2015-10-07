import {bootstrap, Component, View, OnInit} from 'angular2/angular2';

@Component({ selector: 'sense8' })
@View({
    template: `
        <div id="circle" [attr.style]="color"></div>
    `
})
export class Sense8Component implements OnInit {
    
    public color = 'background-color:#1B63A1';
    
    onInit () {
        setInterval(() => {
            console.log(this.getColor(this.randomize()));
            this.color = 'background-color:' + this.getColor(this.randomize());
            console.log(this.color);
        }, 1000)
    }

    getColor (value:number) {
        if(value <= 20){
            return "#1B63A1"; //azul
        }
        else if(value > 20 && value <= 40 ){
            return "#26C649"; //verde
        }
        else if(value > 40 && value <= 60 ){
            return "#F3D648"; //amarillo
        }
        else if(value > 60 && value <= 80 ){
            return "#E8880F"; //naranja
        }
        else if(value > 80 && value <= 100 ){
            return "#E80F0F"; //rojo
        }else{
            return "#000"; //rojo
        }
    }
    
    randomize () {
        return Math.floor((Math.random() * 100) + 1);
    }
}
bootstrap(Sense8Component);
