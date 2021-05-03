import { Component, OnDestroy, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Note } from './services/models/note.model';
import { NoteUiService } from './services/ui/note-ui.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, OnDestroy {
  public noteContent = new FormControl(null, Validators.required)
  public  notes: Note[] = [];
  public displayedColumns = ['id', 'content'];

  private subscriptions: Subscription[] = [];
  

  constructor(
    private noteUiService: NoteUiService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(this.noteUiService.$allNotes.subscribe(notes => this.notes = notes));
    this.subscriptions.push(this.noteUiService.$newNoteAdded.pipe(tap(console.log)).subscribe(note => this.notes = [ ...this.notes, note ]));
    this.noteUiService.refreshNotes();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  submitNewNote(){
    this.noteUiService.register({content: this.noteContent.value});
    this.noteContent.setValue('');
  }

}
