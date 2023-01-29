import { HttpParams } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';

@Component({
  selector: 'app-medicines-home',
  templateUrl: './medicines-home.component.html',
  styleUrls: ['./medicines-home.component.scss']
})
export class MedicinesHomeComponent implements OnInit{
  pincode!: string;
  isPinCodeAvailable: boolean = false;
  pincodeDetails:any;
  @ViewChild('closeBtn',{read:ElementRef}) closeBtn!:ElementRef
  constructor(private http: HttpService) { }
  ngOnInit():void{ }

  getPackageDetailsfromPinCode() {
    if (this.pincode && this.pincode.length == 6) {
      const httpParams: HttpParams = new HttpParams()
                                      .set('pincode', this.pincode)
      this.http.getDetailsfromServer('pincodeDetails', httpParams).subscribe((response: any) => {
        if (response && response.length > 0) {
          this.isPinCodeAvailable = true;
          this.pincodeDetails= response[0];
          if(this.closeBtn){
            this.closeBtn.nativeElement.click();
          }

        } else {
          this.isPinCodeAvailable = false;
        }
      },
        error => {
          console.log(error);

        })

    }
  }
}

function viewChild(arg0: string, arg1: { read: typeof ElementRef; }) {
  throw new Error('Function not implemented.');
}

