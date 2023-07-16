import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Hulka'];
  public deletedHero?: string;

  removeLastHero(): void {
    const deletedHero = this.heroNames.pop();
    console.log({deletedHero});
    this.deletedHero = deletedHero;
  }

}
