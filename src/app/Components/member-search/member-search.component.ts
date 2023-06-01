import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent  implements OnInit {
  memberSearchForm!: FormGroup;
  searchedMembers: any[] = [];
  searchClicked: boolean = false;
  showTable : boolean = false
  constructor(
    private _fb: FormBuilder,
    private dataBaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.memberSearchForm = this._fb.group({
      memberId: [''],
      ssn_TaxId: [''],
      memberName: [''],
      lastName : ['',Validators.required]
    });
  }

  memberSearchSubmit() {
    this.searchClicked = true;
    //debugger
    if (this.memberSearchForm.valid) {
      if (this.searchedMembers.length !== 0) {
        this.searchedMembers = []
      }
      this.dataBaseService.getMembers().subscribe(

        (data) => {
         // debugger
          console.log("dATA", data)
          this.showTable = true
          data.forEach((item: any) => {
            //debugger
            console.log(this.memberSearchForm.value.memberId)
            if (

              item.memberId == this.memberSearchForm.value.memberId &&

              item.ssn_TaxId == this.memberSearchForm.value.ssn_TaxId &&
              //item.npiNumber == this.memberSearchForm.value.npiNumber &&
              item.lastName == this.memberSearchForm.value.lastName
            ) {
              this.searchedMembers.push(item);

            }
          });
        },
        (error) => {
          console.log(error);
        }
      );
      console.log("SEARCHED Members",this.searchedMembers);

      //console.log(this.memberSearchForm.value);
    } else {
      //debugger
      //this.searchClicked = false;
      console.log('form invalid');
    }
  }
}
