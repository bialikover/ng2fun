import {bootstrap, Component, View, OnInit} from 'angular2/angular2';

@Component({ selector: 'sense8' })
@View({
    template: `
        <img  [attr.src]="imageSrc" class="border" [attr.alt]="imageSrc"  [attr.style]="color" />
    `
})
export class Sense8Component implements OnInit {

    public imageSrc : string = "/assets/img/ng.jpg";
    public color : string = "#fff";

    onInit() {
        var io = window.io();
        var circle = document.getElementById('circle');

        io.on('connection', function(socket: any) {
            console.log('a user connected');
        });

        io.on('sense', (value: any) => {
            console.log(value);
            //changeimageSrc(circle, value);
            this.imageSrc = this.getimageSrc(value);
        });

    }

    getimageSrc(value: number) {
        if (value <= 20) {
            this.color ="background:red";
            return "/assets/img/wb1.jpg";
        }
        else if (value > 20 && value <= 40) {
            this.color ="background:blue";
            return "/assets/img/wb2.jpg";
        }
        else if (value > 40 && value <= 60) {
            this.color ="background:yellow";
            return "/assets/img/wb3.jpg";
        }
        else if (value > 60 && value <= 80) {
            this.color ="background:green";
            return "/assets/img/wb4.jpg";
        }
        else if (value > 80 && value <= 100) {
            this.color ="background:#feb155";
            return "/assets/img/wb5.jpg";
        } else {
            this.color ="background:purple";
            return "/assets/img/wb6.jpg";
        }
    }
}
bootstrap(Sense8Component);