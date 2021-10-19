import { UserSettings } from './../data/user-settings';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  originalUserSettings : UserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes'
  };

  userSettings : UserSettings = { ...this.originalUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
    
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
  }

}
