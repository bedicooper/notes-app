import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component ({
selector: "app-note-detail",
standalone: true,
templateUrl: './note-detail.component.html',
styleUrl: './note-detail.component.css',
imports: [RouterModule],
})

export class NoteDetailComponent {}