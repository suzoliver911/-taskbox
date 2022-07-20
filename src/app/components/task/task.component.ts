import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() task: Task;

  // tsLint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();
  // tsLint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();

  /**
  * Component method to trigger the onPin event
  * @param id string
  */
  onPin(id: any) {
    this.onPinTask.emit(id);
  }

  /**
   * Component method to trigger the onArchive
   * @param() id string
   */
   onArchive(id: any) {
     this.onArchiveTask.emit(id);
   }

}
