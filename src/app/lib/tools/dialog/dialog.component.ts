import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from '../../../service/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit() {
  }

  public closeHandle() {
    this.dialogService.hide();
  }

}
