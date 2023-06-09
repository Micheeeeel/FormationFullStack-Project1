import { Component, OnInit, Input } from '@angular/core';
import { LegendPosition, Color, ScaleType } from '@swimlane/ngx-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  @Input() data: { name: string; value: number }[] = [];

  view: [number, number] = [500, 500];
  gradient: boolean = true;
  legend: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;
  explodeSlices: boolean = false;
  arcWidth: number = 0.3;
  tooltipDisabled: boolean = false;
  labels: boolean = true;
  doughnut: boolean = false;

  constructor(private router: Router) {
    Object.assign(this, { dataList: this.data });
  }

  onSelect(data: { name: string; value: number }): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));

    this.router.navigateByUrl(`country/${data.name}`);
  }

  ngOnInit(): void {}

  onResize(event: any) {
    this.view = [event.target.innerWidth / 1.5, 300];
  }
}
