import { Component, inject } from "@angular/core";
import { Router, RouterModule, ActivatedRoute } from "@angular/router";
import { NOTES } from "../../notes";

@Component({
    selector: "app-note-detail",
    standalone: true,
    templateUrl: './note-detail.component.html',
    styleUrl: './note-detail.component.css',
    imports: [RouterModule],
})

export class NoteDetailComponent {
    router = inject(Router);
    activateRoute = inject(ActivatedRoute);
    id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    note = NOTES.find((note) => note.id === this.id);
};