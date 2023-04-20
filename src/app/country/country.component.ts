import { Component, OnInit, Input } from '@angular/core';
import { Olympic } from '../core/models/Olympic';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  @Input() country!: Olympic;

  ngOnInit(): void {}
}