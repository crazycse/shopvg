import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { items } from "../item";
import { Router } from "@angular/router";
@Component({
  selector: "app-edit-item",
  templateUrl: "./edit-item.component.html",
  styleUrls: ["./edit-item.component.css"]
})
export class EditItemComponent implements OnInit {
  item_form: FormGroup;
  id: number;
  save = true;
  item: any;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private rout: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get("itemId");
      this.item = items[this.id];
    });
    this.item_form = new FormGroup({
      Category: new FormControl(),
      Name: new FormControl(),
      Total_kg: new FormControl(),
      Price_kg: new FormControl(),
      Exp_date: new FormControl()
    });
  }
  Onsubmit() {
    this.item = this.item_form.value;
    if (this.item.Category == null) {
      this.item.Category = items[this.id].Category;
    }
    if (
      this.item.Category == null ||
      this.item.Name == null ||
      this.item.Total_kg == null ||
      this.item.Exp_date == null ||
      this.item.Price_kg == null
    ) {
      console.log("Not Work");
      console.log(this.item);
      this.save = false;
      return;
    } else {
      this.save = true;
    }
    this.item.Total_price = this.item.Total_kg * this.item.Price_kg;
    items.splice(this.id, 1, this.item);
    console.log(this.item);
    this.rout.navigate(["/"]);
  }
}
