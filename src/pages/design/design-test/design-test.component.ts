import { TestCase } from './../../../models/testcase';
import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-design-test',
  templateUrl: './design-test.component.html',
  styleUrls: ['./design-test.component.scss']
})
export class DesignTestComponent implements OnInit {

  tests: any[] = [];
  searchText: string;
  availableItems: Array<TestCase> = [];
  listBoxForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.searchText = '';
    this.listBoxForm = this.fb.group({
    availableSearchInput: [''] });
}

  ngOnInit() {
    this.tests = [
        { id: '1', name: 'Item 1'},
        { id: '2', name: 'Item 2'},
        { id: '3', name: 'Item 3'},
        { id: '4', name: 'Item 4'},
        { id: '5', name: 'Item 5'},
        { id: '6', name: 'Item 6'},
    ]
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tests, event.previousIndex, event.currentIndex);
    }

}
