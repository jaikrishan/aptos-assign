import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Options } from '../model/option.interface';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Output() selectedoption = new EventEmitter<Options>();
  showOption= false;
  hoveredOption = '';
  defaultState = false;
  placeholder = false;
  inputValue = '';
  options: Options[] =[
    {value: 'Option 0', label:'Select an option'},
    {value: 'Option 1', label:'Option 1'},
    {value: 'Option 2', label:'Option 2'},
    {value: 'Option 3', label:'Option 3'},
    {value: 'Option 4', label:'Option 4'},
    {value: 'Option 5', label:'Option 5' },
    {value: 'Option 6', label:'Option 6'},
    {value: 'Option 7', label:'Option 7'},
    {value: 'Option 8', label:'Option 8'},
    {value: 'Option 9', label:'Option 9' },
  ] 

  ngOnInit(): void {
    this.placeholder = true;
    this.defaultState = true;
    this.inputValue = this.options[0].label;
  }
  displayOption() {
    this.showOption = !this.showOption;
  }

  selectedValue(i: number) {
    this.inputValue = this.options[i].label;
    this.selectedoption.emit(this.options[i]);
    this.placeholder = false;
    if(this.options[i].value === 'Option 0') {
      this.placeholder = true;
      this.defaultState = true;
    }
    this.showOption = false;
  }

  hoveredvalue(i: number) {
    this.defaultState = false;
    this.hoveredOption = this.options[i].label;
  }

}
