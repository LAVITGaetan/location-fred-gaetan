import { Component } from '@angular/core';
import { relais } from 'src/assets/files/relai';
import { configurations } from 'src/assets/files/composant';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  relais = relais;
  configurations = configurations;
  defaultDate: string = new Date().toISOString().split('T')[0];
  defaultStartDate: string = new Date().toISOString().split('T')[0];
  defaultEndDate: string = new Date().toISOString().split('T')[0];

  // Structure du formulaire de recherche
  searchForm = this.fb.group({
    relai: ['', Validators.required],
    debut: [this.defaultStartDate, Validators.required],
    fin: [this.defaultEndDate, [Validators.required, this.isAfterStart.bind(this)]],
  })

  isSubmited = false

  constructor(private fb: FormBuilder, private router: Router) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.defaultEndDate = tomorrow.toISOString().split('T')[0];
  }

  onSubmit() {
    this.isSubmited = true
    console.log(this.searchForm.value, this.searchForm.valid);
    this.router.navigate(['/location-bivouac-rando-ile-reunion'], {
      queryParams: { debut: this.searchForm.get('debut')?.value, fin: this.searchForm.get('fin')?.value, relai: this.searchForm.get('relai')?.value, }
    });
  }

  updateEndDate(newStartDate: string) {
    this.defaultStartDate = newStartDate
    if (newStartDate > this.defaultEndDate) {
      this.defaultEndDate = newStartDate;
      this.searchForm.get('fin')?.setValue(newStartDate);
    }
  }

  updateStartDate(newEndDate: string) {
    this.defaultEndDate = newEndDate
    if (newEndDate < this.defaultStartDate) {
      this.defaultStartDate = newEndDate;
      this.searchForm.get('debut')?.setValue(newEndDate);
    }
  }

  isAfterStart(control: AbstractControl): ValidationErrors | null {

    // recuperation des valeurs associèes
    const debut = control.parent?.get('debut')?.value;
    const fin = control.value;

    // regles de validation
    if (debut && fin) {
      if (fin < debut) {
        return { isAfterStart: true };
      }
    }

    return null; // Retournez null si la validation réussit.
  }
}
