import { Component } from '@angular/core';
import { relais } from 'src/assets/files/relai';
import { configurations } from 'src/assets/files/composant';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  relais = relais;
  configurations = configurations;
  defaultStartDate: string;
  defaultEndDate: string;

  // Structure du formulaire de recherche
  searchForm = this.fb.group({
    relai: ['', Validators.required],
    debut: [new Date(), Validators.required],
    fin: ['', [Validators.required, this.isAfterStart.bind(this)]],

  })

  isSubmited = false

  constructor(private fb: FormBuilder) {
    const tomorrow = new Date(); // Créez une nouvelle instance de date
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.defaultStartDate = new Date().toISOString().split('T')[0];
    this.defaultEndDate = tomorrow.toISOString().split('T')[0];
  }

  onSubmit() {
    this.isSubmited = true
    console.log(this.searchForm.value, this.searchForm.valid);
  }

  updateEndDate(newStartDate: string) {
    if (newStartDate > this.defaultEndDate) {
      this.defaultEndDate = newStartDate;
      this.searchForm.get('fin')?.setValue(newStartDate);
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
