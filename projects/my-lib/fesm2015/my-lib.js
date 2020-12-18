import { ɵɵdefineInjectable, Injectable, Component, Input, NgModule } from '@angular/core';

class MyLibService {
    constructor() { }
}
MyLibService.ɵprov = ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
MyLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
MyLibService.ctorParameters = () => [];

class MyLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-my-lib',
                template: `
    <p>
      my-lib works!
    </p>
  `
            },] }
];
MyLibComponent.ctorParameters = () => [];

class MyTheButtonComponent {
    constructor() { }
    ngOnInit() { }
}
MyTheButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-the-button',
                template: "<span class=\"theButton\">\n    {{text}}\n</span>",
                styles: [".theButton{border:1px solid green;border-radius:8px;color:pink;display:inline-block;line-height:32px;min-width:60px;padding:0 6px}"]
            },] }
];
MyTheButtonComponent.ctorParameters = () => [];
MyTheButtonComponent.propDecorators = {
    text: [{ type: Input }]
};

class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MyLibComponent, MyTheButtonComponent],
                imports: [],
                exports: [MyLibComponent, MyTheButtonComponent],
            },] }
];

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService, MyTheButtonComponent as ɵa };
//# sourceMappingURL=my-lib.js.map
