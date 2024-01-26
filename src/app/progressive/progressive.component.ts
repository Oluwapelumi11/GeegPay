import { AfterViewInit, Component, Input} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IntersectionObserverModule } from 'ngx-intersection-observer';

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
     <div class="w-full flex justify-between px-9  sm:px-0 sm:py-0 py-2 font-jakarta ">
                                    <p class="font-semibold text-lg text-[#26282C]">Top Platform</p>
                                    <p class="text-[#34CAA5] font-medium text-lg">See All</p>
      </div>
      <div class="">
        <p>Book Bazaar</p>
        <div>
          <span class="bg-red-500" [style.width.%]="progress" [@progressAnimation]="progressState">

          </span>
        </div>

      </div>

     


  `,
  styleUrl: './progressive.component.css'
})
export class ProgressiveComponent implements AfterViewInit {

  @Input() progress: number = 0;
  progressState: { progress: number } = { progress: 0 };



   inView: boolean = false;
ngAfterViewInit(): void {
  
}
onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
  if (visible) {
    this.inView = true;
  }
}
}
