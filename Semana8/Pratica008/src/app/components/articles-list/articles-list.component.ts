import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent {
  @Input() articles: any[] = [];
  @Input() loading: boolean = false;
  @Input() message: string = "Faça uma busca";
}
