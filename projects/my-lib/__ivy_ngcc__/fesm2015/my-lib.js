import { ɵɵdefineInjectable, Injectable, Component, Input, NgModule } from '@angular/core';

import * as ɵngcc0 from '@angular/core';
class MyLibService {
    constructor() { }
}
MyLibService.ɵfac = function MyLibService_Factory(t) { return new (t || MyLibService)(); };
MyLibService.ɵprov = ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
MyLibService.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MyLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class MyLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyLibComponent.ɵfac = function MyLibComponent_Factory(t) { return new (t || MyLibComponent)(); };
MyLibComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MyLibComponent, selectors: [["lib-my-lib"]], decls: 2, vars: 0, template: function MyLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " my-lib works! ");
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
MyLibComponent.ctorParameters = () => [];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MyLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-my-lib',
                template: `
    <p>
      my-lib works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();

class MyTheButtonComponent {
    constructor() { }
    ngOnInit() { }
}
MyTheButtonComponent.ɵfac = function MyTheButtonComponent_Factory(t) { return new (t || MyTheButtonComponent)(); };
MyTheButtonComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MyTheButtonComponent, selectors: [["lib-the-button"]], inputs: { text: "text" }, decls: 2, vars: 1, consts: [[1, "theButton"]], template: function MyTheButtonComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "span", 0);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx.text, "\n");
    } }, styles: [".theButton[_ngcontent-%COMP%]{border:1px solid green;border-radius:8px;color:pink;display:inline-block;line-height:32px;min-width:60px;padding:0 6px}"] });
MyTheButtonComponent.ctorParameters = () => [];
MyTheButtonComponent.propDecorators = {
    text: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MyTheButtonComponent, [{
        type: Component,
        args: [{
                selector: 'lib-the-button',
                template: "<span class=\"theButton\">\n    {{text}}\n</span>",
                styles: [".theButton{border:1px solid green;border-radius:8px;color:pink;display:inline-block;line-height:32px;min-width:60px;padding:0 6px}"]
            }]
    }], function () { return []; }, { text: [{
            type: Input
        }] }); })();

class MyLibModule {
}
MyLibModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MyLibModule });
MyLibModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MyLibModule_Factory(t) { return new (t || MyLibModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MyLibModule, { declarations: [MyLibComponent, MyTheButtonComponent], exports: [MyLibComponent, MyTheButtonComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MyLibModule, [{
        type: NgModule,
        args: [{
                declarations: [MyLibComponent, MyTheButtonComponent],
                imports: [],
                exports: [MyLibComponent, MyTheButtonComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService, MyTheButtonComponent as ɵa };

//# sourceMappingURL=my-lib.js.map