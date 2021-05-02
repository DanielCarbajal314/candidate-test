import {Component, OnDestroy, OnInit} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {BoardItem} from '../board-item/board-item';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit, OnDestroy {
  list = 'board';

  list1: BoardItem[] = [];
  list2: BoardItem[] = [];
  list3: BoardItem[] = [];

  constructor(
    private dragulaService: DragulaService
  ) {}


  ngOnInit(): void {
    this.dragulaService.createGroup(this.list, {
      revertOnSpill: true,
      accepts: (el, target, source, sibling) => {
        const [targetName, sourceName] = [target.classList[1],source.classList[1] ];
        return this.notAllowedMovement(targetName, sourceName) ? false : true ;
      }
    });

    this.setData();
  }
  
  notAllowedMovement(targetName: string, sourceName: string) {
    const [ first, second, third ] = ['list-1', 'list-2', 'list-3'];
    return ( sourceName == first && targetName == third ) || ( sourceName == third && targetName == second );
  }

  ngOnDestroy() {
    this.dragulaService.destroy(this.list);
  }

  setData() {
    ['ListItem 1', 'ListItem 2', 'ListItem 3'].map(t => this.list1.push({ title: t, theme: 'theme-1' }));
    ['ListItem 4', 'ListItem 5', 'ListItem 6'].map(t => this.list2.push({ title: t, theme: 'theme-2' }));
    ['ListItem 7', 'ListItem 8', 'ListItem 9'].map(t => this.list3.push({ title: t, theme: 'theme-3' }));
  }

}

