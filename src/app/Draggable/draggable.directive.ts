// import { Directive, HostBinding, HostListener, Output } from '@angular/core';
// import { EventEmitter } from 'events';

// @Directive({
//   selector: '[appDraggable]'
// })
// export class DraggableDirective {

  
//   @HostBinding('class.draggable') draggable = true;


//   @Output() dragStart = new EventEmitter();
//   @Output() dragMove = new EventEmitter();
//   @Output() dragEnd = new EventEmitter();

//   private dragging = false;

//   @HostListener('pointerdown') onPointerdown(): void {
//     this.dragging = true;
//     this.dragStart.emit();
//   }
//   @HostListener('document:pointermove') onPointermove(): void {
//     if (this.dragging) {
//       return;
//     }
//     this.dragMove.emit();

//   }
//   @HostListener('document:pointerup') onPointerup(): void {
//     if (this.dragging) {
//       return;
//     }

//     this.dragEnd.emit();
//     this.dragging = false;
//   }
// }
