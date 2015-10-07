var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Sense8Component = (function () {
    function Sense8Component() {
        this.color = 'background-color:#1B63A1';
    }
    Sense8Component.prototype.onInit = function () {
        var _this = this;
        setInterval(function () {
            console.log(_this.getColor(_this.randomize()));
            _this.color = 'background-color:' + _this.getColor(_this.randomize());
            console.log(_this.color);
        }, 1000);
    };
    Sense8Component.prototype.getColor = function (value) {
        if (value <= 20) {
            return "#1B63A1"; //azul
        }
        else if (value > 20 && value <= 40) {
            return "#26C649"; //verde
        }
        else if (value > 40 && value <= 60) {
            return "#F3D648"; //amarillo
        }
        else if (value > 60 && value <= 80) {
            return "#E8880F"; //naranja
        }
        else if (value > 80 && value <= 100) {
            return "#E80F0F"; //rojo
        }
        else {
            return "#000"; //rojo
        }
    };
    Sense8Component.prototype.randomize = function () {
        return Math.floor((Math.random() * 100) + 1);
    };
    Sense8Component = __decorate([
        angular2_1.Component({ selector: 'sense8' }),
        angular2_1.View({
            template: "\n        <div id=\"circle\" [attr.style]=\"color\"></div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Sense8Component);
    return Sense8Component;
})();
exports.Sense8Component = Sense8Component;
angular2_1.bootstrap(Sense8Component);
//# sourceMappingURL=bootstrap.js.map