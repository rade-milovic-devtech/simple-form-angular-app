import { Directive } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Directive({
    selector: '[appUniqueEmail]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueEmailValidatorDirective, multi: true}]
})
export class UniqueEmailValidatorDirective implements AsyncValidator {
    private static readonly RESERVED_EMAIL = "test@email.com";

    validate(control: AbstractControl): Observable<{[key: string]: any} | null> {
        const reserved = control.value.toString().toLowerCase() === UniqueEmailValidatorDirective.RESERVED_EMAIL;

        const result = reserved
            ? of({ "uniqueEmail": { value: control.value } })
            : of(null);

        return result.pipe(
            delay(this.getRandomDelayBetween(300, 500)));
    }

    private getRandomDelayBetween(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}