import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchFormService {
  formData: any = {};

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }
  constructor() { }
}
