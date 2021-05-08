import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  showSuccess() {
    this.toastr.success("Payment Successful", "Success")
  }

  showError() {
    this.toastr.error("Payment Unsuccessful. Try again.", "Error")
  }

}
