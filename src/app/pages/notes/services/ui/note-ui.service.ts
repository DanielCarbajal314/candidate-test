import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CreateNote } from '../models/create-note.model';
import { Note } from '../models/note.model';
import { NoteRepositoryService } from '../persistance/note-repository.service';

@Injectable({
  providedIn: 'root'
})
export class NoteUiService {

  public $allNotes: Subject<Note[]> = new Subject();
  public $newNoteAdded: Subject<Note> = new Subject();

  constructor(private noteRepositoryService: NoteRepositoryService) { }

  register(createNote:CreateNote) {
    this.noteRepositoryService.Register(createNote).subscribe(note => this.$newNoteAdded.next(note));
  }

  refreshNotes(){
    this.noteRepositoryService.GetAll().subscribe(notes => this.$allNotes.next(notes));
  }

}
