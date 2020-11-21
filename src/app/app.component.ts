import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multiSelectForm';
  firstForm: String[] = ["0-24", "25-99" , "50-99" , "100-249"]; 
  selectedValue: String[] = []; //Store selected values for first form
  uniqueSelectedValues:String[] = []; //Store unique selected values for first form
  selectedSecondFormValue:String[] = [];
  uniqueSecondFormValues:String[] = [];
  uniqueSecondFormSelectedValues:String[] = [];

  selectAllElements:String[] = [];

  leftValueSelectedIndex: number = null;
  rightValueSelectedIndex: number = null;


  selectLeftValue( value) {
    if(this.uniqueSelectedValues.indexOf(value) !== -1){
      this.uniqueSelectedValues = this.uniqueSelectedValues.filter(val => val !== value);
      this.selectedValue = this.selectedValue.filter(val => val !== value);
    }
    else{
        this.selectedValue.push(value);
        this.uniqueSelectedValues = [...new Set(this.selectedValue)];
    }
  }

  selectRightValue( value) {
    if(this.uniqueSecondFormSelectedValues.indexOf(value) !== -1){
      this.uniqueSecondFormSelectedValues = this.uniqueSecondFormSelectedValues.filter(val => val !== value);
      this.selectedSecondFormValue = this.selectedSecondFormValue.filter(val => val !== value);
    }
    else{
        this.selectedSecondFormValue.push(value);
        this.uniqueSecondFormSelectedValues = [...new Set(this.selectedSecondFormValue)];
    }
  }

  checkLeftAvail(value) {
    if(value !== null){
      // Check if selected value present in selectedValue Array
      if (this.uniqueSelectedValues.indexOf(value) !== -1) {
        return true;
      } else {
        return false;
      }
    }
  }

  checkRightAvail(value) {
    if(value !== null){
      // Check if selected value present in selectedValue Array
      if (this.uniqueSecondFormSelectedValues.indexOf(value) !== -1) {
        return true;
      } else {
        return false;
      }
    }
  }

  selectAll() {
    this.selectedValue = [];
    this.selectedSecondFormValue = [];
    this.firstForm.forEach(element => {
      this.selectAllElements.push(element); 
    });
    this.uniqueSelectedValues = [...new Set(this.selectAllElements)];
  }

  sendToRight() {
    if (this.uniqueSelectedValues !== null || this.uniqueSelectedValues !== undefined) {
      this.uniqueSelectedValues.forEach(element => {
        this.firstForm = this.firstForm.filter(val => val !== element);
        this.uniqueSecondFormValues.push(element);
        
      });
    }
    this.uniqueSelectedValues = [];
    this.selectedValue = [];
  }

  sendToLeft(){
    if(this.uniqueSecondFormSelectedValues !== null || this.uniqueSecondFormSelectedValues !==undefined){
      this.uniqueSecondFormSelectedValues.forEach(element => {
        this.uniqueSecondFormValues = this.uniqueSecondFormValues.filter(val => val !== element);
        this.firstForm.push(element);
      });
    }
    this.uniqueSelectedValues = [];
    this.uniqueSecondFormSelectedValues = [];
    this.selectedSecondFormValue = [];
  }

  clear(){
    this.uniqueSecondFormValues.forEach(element => {
      this.firstForm.push(element);
    });
    this.uniqueSecondFormValues = []; 
    this.uniqueSelectedValues = []; //remove selection
    this.selectedValue = [];

  }


}
