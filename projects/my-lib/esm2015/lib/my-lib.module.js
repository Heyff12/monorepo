import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MyTheButtonComponent } from './the-button/the-button.component';
export class MyLibModule {
}
MyLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MyLibComponent, MyTheButtonComponent],
                imports: [],
                exports: [MyLibComponent, MyTheButtonComponent],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveWF5YS9Eb2N1bWVudHMvbGVhcm4vYW5ndWxhci1zdHVkeS9teS13b3Jrc3BhY2UvcHJvamVjdHMvbXktbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9teS1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBT3pFLE1BQU0sT0FBTyxXQUFXOzs7WUFMdkIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQztnQkFDcEQsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLG9CQUFvQixDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE15TGliQ29tcG9uZW50IH0gZnJvbSAnLi9teS1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IE15VGhlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi90aGUtYnV0dG9uL3RoZS1idXR0b24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTXlMaWJDb21wb25lbnQsIE15VGhlQnV0dG9uQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtNeUxpYkNvbXBvbmVudCwgTXlUaGVCdXR0b25Db21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNeUxpYk1vZHVsZSB7fVxuIl19