import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
    selector: 'app-add-note',
    standalone: true,
    templateUrl: './add-note.component.html',
    styleUrl: './add-note.component.css',
    imports: [ReactiveFormsModule],
})

export class AddNoteComponent {
    addNoteForm = new FormGroup({
        title: new FormControl('', Validators.required),
        text: new FormControl(''),
    });
}