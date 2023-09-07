import { Component, OnInit } from '@angular/core';
import { AnimeFactsService } from '../anime-facts.service';

@Component({
  selector: 'app-anime-facts',
  templateUrl: './anime-facts.component.html',
  styleUrls: ['./anime-facts.component.css']
})
export class AnimeFactsComponent implements OnInit {

  constructor(private animeFact: AnimeFactsService) { }

  animeNames: string[] = ['demon_slayer', 'attack_on_titan', 'fma_brotherhood', 'jujutsu_kaisen', 'black_clover',]
  animeFactsID: string[] = ['1', '2', '3']
  apiResponse: string = ''

  ngOnInit() {
    this.getAnimeFacts()
  }
  
  getAnimeFacts() {
    for(let i = 0; i < this.animeNames.length; i++) {
      let animeName = this.animeFact.getAnimeName(this.animeNames[i])
      for(let j = 0; j < this.animeFactsID.length; j++) {
        let animeID = this.animeFact.getAnimeID(this.animeFactsID[i])
        this.animeFact.searchAnime(animeName, animeID).subscribe((res: any) => {
          this.apiResponse = JSON.stringify(res)
        })
      }
    }

  }
}
