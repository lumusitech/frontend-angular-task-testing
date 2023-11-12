import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Todo } from '../todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: UntypedFormGroup;

  @Output() todoCreated: EventEmitter<Todo>;

  constructor() {
    this.todoCreated = new EventEmitter();
    this.formulario = new UntypedFormGroup({
      autor: new UntypedFormControl(),
      titulo: new UntypedFormControl(),
      descripcion: new UntypedFormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.todoCreated.emit(this.formulario.value);
  }

}
