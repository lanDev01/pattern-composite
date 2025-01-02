import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-modal",
  standalone: true,
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  handleCloseClick() {
    this.close.emit();
  }
}
