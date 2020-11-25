import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() type: String;
  @Input() placeholder: String;
  @Input() name: String;
  constructor() { }

  ngOnInit(): void {
  }

}