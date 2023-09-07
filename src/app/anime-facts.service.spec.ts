/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnimeFactsService } from './anime-facts.service';

describe('Service: AnimeFacts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimeFactsService]
    });
  });

  it('should ...', inject([AnimeFactsService], (service: AnimeFactsService) => {
    expect(service).toBeTruthy();
  }));
});
