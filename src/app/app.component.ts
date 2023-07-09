import { Component } from '@angular/core';
import { SVGIcon, alignCenterIcon, alignJustifyIcon, alignLeftIcon, alignRightIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridData = [
    {
      productId: 1,
      productName: "ანანასი",
      unitPrice: 15,
    },
    {
      productId: 3,
      productName: "ბანანი",
      unitPrice: 7,
    },
    {
      productId: 2,
      productName: "ბროწეული",
      unitPrice: 10,
    }
  ]


  removeRow(dataItem: any):void {
    const rowIndex = this.gridData.indexOf(dataItem);
    if(rowIndex !== 1) {
      this.gridData.splice(rowIndex, 1)
    }
  }





  public alignLeftIcon: SVGIcon = alignLeftIcon;
  public alignRightIcon: SVGIcon = alignRightIcon;
  public alignCenterIcon: SVGIcon = alignCenterIcon;
  public alignJustifyIcon: SVGIcon = alignJustifyIcon;

  public splitButtonData: Array<{ text: string }> = [
    {
      text: "Option 1",
    },
    {
      text: "Option 2",
    },
    {
      text: "Option 3",
    },
  ];

  public dropdownButtonData: Array<{ text: string }> = [
    {
      text: "Option 1",
    },
    {
      text: "Option 2",
    },
    {
      text: "Option 3",
    },
  ];


}





