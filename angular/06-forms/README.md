# Module 06 — Forms in Angular

## What you'll learn
- Template-driven forms with ngModel
- Reactive forms with FormGroup and FormControl
- Built-in validators: required, minLength, email, pattern
- Custom validators
- Form submission and error display

## Concept

### Reactive forms (recommended for complex forms)
```ts
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

export class CheckoutComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
  });

  get email() { return this.form.get('email'); }

  onSubmit() {
    if (this.form.invalid) return;
    console.log(this.form.value);
  }
}
```

```html
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input formControlName="email" type="email" />
  @if (email?.errors?.['required'] && email?.touched) {
    <span class="error">Email is required</span>
  }
  <button [disabled]="form.invalid">Submit</button>
</form>
```

## Lab
Same multi-step checkout form using Angular Reactive Forms.

## References
- [W3Schools Angular Forms](https://www.w3schools.com/Angular/angular_forms.asp)
