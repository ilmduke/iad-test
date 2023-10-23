import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'page1',
  templateUrl: 'page1.component.html'
})
export class Page1Component {
  public showMore = false;

  public constructor(public router: Router) {
  }

  public goNext() {
    this.router.navigate(['/', 'finish'])
  }
}
