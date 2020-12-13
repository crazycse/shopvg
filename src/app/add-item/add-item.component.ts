import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { items } from "../item";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"]
})
export class AddItemComponent implements OnInit {
  item_form: FormGroup;
  data: any;
  save = true;
  constructor(private fb: FormBuilder, private rout: Router) {}
  ngOnInit() {
    this.item_form = new FormGroup({
      Category: new FormControl(),
      Name: new FormControl(),
      Total_kg: new FormControl(),
      Price_kg: new FormControl(),
      Exp_date: new FormControl()
    });
  }
  Onsubmit() {
    this.data = this.item_form.value;
    if (
      this.data.Category == null ||
      this.data.Name == null ||
      this.data.Total_kg == null ||
      this.data.Exp_date == null ||
      this.data.Price_kg == null
    ) {
      console.log("Not Work");
      this.save = false;
      return;
    } else {
      this.save = true;
    }
    this.data.Total_price = this.data.Total_kg * this.data.Price_kg;
    items.push(this.data);
    console.log(this.data);
    this.rout.navigate(["/"]);
  }
}
