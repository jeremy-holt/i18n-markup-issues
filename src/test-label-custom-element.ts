import { autoinject, bindable } from "aurelia-framework";

@autoinject
export class TestLabelCustomElement {
  @bindable label: string;
  @bindable caption: string;
}
