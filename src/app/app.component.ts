import { Component } from "@angular/core";
import { ModalComponent } from "./components/modal/modal.component";

@Component({
  selector: "app-root",
  imports: [ModalComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "pattern-composition";

  modalIsOpen = false;

  handleModalOpen() {
    this.modalIsOpen = true;
  }

  handleModalClose() {
    this.modalIsOpen = false;
  }
}
