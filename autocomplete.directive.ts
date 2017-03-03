import {
  Directive, Input,
  Output, OnInit,
  HostListener, TemplateRef,
  ViewContainerRef, EventEmitter,
  Component, ApplicationRef
} from '@angular/core';

import { Subject, Observable } from 'rxjs/Rx';

@Directive({
  selector: 'ng2-autocomplete'
})
export class AutocompleteDirective {
  
}