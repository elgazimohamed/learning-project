import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements OnInit {
  constructor(private toastr: ToastrService) {}

  showToast() {
    this.toastr.success('Hello, world!', 'Success');
  }

  ngOnInit(): void {}
}
