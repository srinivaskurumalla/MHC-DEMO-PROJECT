import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-claim-search',
  templateUrl: './claim-search.component.html',
  styleUrls: ['./claim-search.component.css'],
})
export class ClaimSearchComponent implements OnInit {
  claimSearchForm!: FormGroup;
  searchedClaims: any[] = [];
  searchClicked: boolean = false;
  constructor(
    private _fb: FormBuilder,
    private dataBaseService: DatabaseService
  ) {}

  ngOnInit(): void {
    this.claimSearchForm = this._fb.group({
      claimNumber: [''],
      controlNumber: [''],
      checkNumber: [''],
    });
  }

  claimSearchSubmit() {
    this.searchClicked = true;
    if (this.claimSearchForm.valid) {
      if (this.searchedClaims.length !== 0) {
        this.searchedClaims = []
      }
      this.dataBaseService.getClaims().subscribe(
        (data) => {
          //console.log(data)
          data.forEach((item: any) => {
            debugger
            if (

              item.checkNumber == this.claimSearchForm.value.checkNumber &&
              item.claimNumber == this.claimSearchForm.value.claimNumber &&
              item.controlNumber == this.claimSearchForm.value.controlNumber
            ) {
              this.searchedClaims.push(item);

            }
          });
        },
        (error) => {
          console.log(error);
        }
      );
      console.log(this.searchedClaims);

      //console.log(this.claimSearchForm.value);
    } else {
      console.log('form invalid');
    }
  }
}
