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
        this.imageSrc = "/assets/img/ng.jpg";
        this.color = "#fff";
    }
    Sense8Component.prototype.onInit = function () {
        var _this = this;
        var io = window.io();
        var circle = document.getElementById('circle');
        io.on('connection', function (socket) {
            console.log('a user connected');
        });
        io.on('sense', function (value) {
            console.log(value);
            //changeimageSrc(circle, value);
            _this.imageSrc = _this.getimageSrc(value);
        });
    };
    Sense8Component.prototype.getimageSrc = function (value) {
        if (value <= 20) {
            this.color = "background:red";
            return "/assets/img/wb1.jpg";
        }
        else if (value > 20 && value <= 40) {
            this.color = "background:blue";
            return "/assets/img/wb2.jpg";
        }
        else if (value > 40 && value <= 60) {
            this.color = "background:yellow";
            return "/assets/img/wb3.jpg";
        }
        else if (value > 60 && value <= 80) {
            this.color = "background:green";
            return "/assets/img/wb4.jpg";
        }
        else if (value > 80 && value <= 100) {
            this.color = "background:#feb155";
            return "/assets/img/wb5.jpg";
        }
        else {
            this.color = "background:purple";
            return "/assets/img/ng.jpg";
        }
    };
    Sense8Component = __decorate([
        angular2_1.Component({ selector: 'sense8' }),
        angular2_1.View({
            template: "\n        <img  [attr.src]=\"imageSrc\" class=\"border\" [attr.alt]=\"imageSrc\"  [attr.style]=\"color\" />\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Sense8Component);
    return Sense8Component;
})();
exports.Sense8Component = Sense8Component;
angular2_1.bootstrap(Sense8Component);
//# sourceMappingURL=bootstrap.js.map