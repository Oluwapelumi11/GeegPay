import { AfterViewInit, Component, Input} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IntersectionObserverModule } from 'ngx-intersection-observer';
import { ProgressData } from '../generals';


@Component({
  selector: 'app-progressive',
  standalone: true,
  animations: [
    trigger('progressAnimation', [
      state('in', style({ width: '{{ progress }}%' }), { params: { progress: 0 } }),
      transition(':enter', [animate('1s ease-out')]),
    ]),
  ],
  imports: [IntersectionObserverModule],
  template: `
     
      <div class="">
    <p class="text-xl font-semibold mb-4 text-[#22242C]">{{progress.name}}</p>
    <div class="w-full h-6 bg-gray-300 rounded">
        <div class="h-full bg-blue-500 rounded transition-all" [style.width.%]="progress.progress"></div>
    </div>
  </div>


  

  `,
  styleUrl: './progressive.component.css'
})
export class ProgressiveComponent implements AfterViewInit {
  @Input() progress!:ProgressData;
  progressState: { progress: number } = { progress: 0 };


   inView: boolean = false;
ngAfterViewInit(): void {
  
}
onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
  if (visible) {
    this.inView = true;
  }
}



 // An array of progress values

 
}
