import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-and-directives',
  templateUrl: './pipes-and-directives.component.html',
  styleUrls: ['./pipes-and-directives.component.scss']
})
export class PipesAndDirectivesComponent implements OnInit {
  telInput= '';
  validTel = true;
  colorToggler = false;
  btnColor = "purple";

  constructor() { }

  ngOnInit(): void {
  }

  inputChanged() {
    if (this.telInput.length < 10 && this.telInput.length !== 0) {
      this.validTel = false;
    } else {
      this.validTel = true;
    }
  }
  toggleColor() {
    this.colorToggler = !this.colorToggler;
    this.btnColor = this.colorToggler ? 'yellow' : 'purple';
  }

}
