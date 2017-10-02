import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

  constructor(meta: Meta, title: Title) {  
        title.setTitle('Simon\'s Pattaya Hummus Laboratory - Defiantly The Best Hummus in Thailand');
    
        meta.addTags([
          { name: 'author',   content: 'Aylon Spigel'},
          { name: 'keywords', content: 'pattaya hummus, hummus, hummus pattaya, hummus laboratory, simon hummus laboratory, hummus restaurant, middle east restaurant'},
          { name: 'description', content: 'Simon\'s Pattaya Hummus Laboratory - Defiantly The Best Hummus in Thailand. Located at Soi Buakhau Pattaya.' }
        ]);
      }

}
