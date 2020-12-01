import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
} from '@angular/material-moment-adapter';
import {
  MAT_DATE_LOCALE,
  DateAdapter,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/core/util/util.service';
import { Asset } from 'src/app/interface/models/asset';

@Component({
  selector: 'app-edit-asset',
  templateUrl: './edit-asset.component.html',
  styleUrls: ['./edit-asset.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class EditAssetComponent implements OnInit {
  asset: Asset = {
    amount: 1000,
    category: 'Necessity',
    date: new Date(),
    id: 'hehe',
    month: 5,
    name: 'Test',
  };
  categories = ['Saving', 'Necessity', 'Other'];

  constructor(
    private _adapter: DateAdapter<any>,
    private utilService: UtilService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.utilService.SetDateFormat(this._adapter);
    const id = this.route.snapshot.paramMap.get('id');
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
