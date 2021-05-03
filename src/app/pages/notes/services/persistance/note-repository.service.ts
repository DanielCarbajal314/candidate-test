import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { CreateNote } from '../models/create-note.model';
import { Note } from '../models/note.model';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class NoteRepositoryService {

  constructor(private dbService: NgxIndexedDBService) { }


  public Register(createNote: CreateNote): Observable<Note> {
    return this.dbService
      .add('notes', createNote)
      .pipe(map((key) => ({ id: key, ...createNote})));
  }

  public GetAll(): Observable<Note[]> {
    return this.dbService.getAll('notes')
  }

}
