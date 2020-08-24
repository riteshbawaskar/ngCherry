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
        { id: '1', name: 'OTC Generic HKMA New Amend Cancel', description: 'sample test case'},
        { id: '2', name: 'QC# 20758 Rates Confirmation', description: 'sample test case'},
        { id: '3', name: 'QC#18768 Finfrag Report Amend event', description: 'sample test case'},
        { id: '4', name: 'QC16782 Credit Pay Rec Event Capture', description: 'sample test case'},
        { id: '5', name: 'FX Swaption Report Amend Admin event', description: 'sample test case'},
        { id: '6', name: 'EQD Index Swap New Amend Terminate' , description: 'sample test case'},
    ]
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tests, event.previousIndex, event.currentIndex);
    }

}
