import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core'
import { JQ_TOKEN } from './jQuery.service'
import { MY_TOKEN } from '../myservice'

@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string; 

  constructor(ref: ElementRef, 
    @Inject(JQ_TOKEN) private $: any,
    @Inject(MY_TOKEN) private mine: any,
    ) {
    this.el = ref.nativeElement;
    console.log('what is $?', $);
    console.log('what is mine?', mine);
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      console.log('$', this.$);
      this.$(`#${this.modalId}`).modal({})
    })
  }
}