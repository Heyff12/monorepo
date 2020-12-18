import { Component, Input } from '@angular/core';
export class MyTheButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lheWEvRG9jdW1lbnRzL2xlYXJuL2FuZ3VsYXItc3R1ZHkvbXktd29ya3NwYWNlL3Byb2plY3RzL215LWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvdGhlLWJ1dHRvbi90aGUtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sb0JBQW9CO0lBRy9CLGdCQUFlLENBQUM7SUFFaEIsUUFBUSxLQUFVLENBQUM7OztZQVZwQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsNkRBQTBDOzthQUUzQzs7OzttQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi10aGUtYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RoZS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aGUtYnV0dG9uLmNvbXBvbmVudC5sZXNzJ10sXG59KVxuZXhwb3J0IGNsYXNzIE15VGhlQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHt9XG59XG4iXX0=