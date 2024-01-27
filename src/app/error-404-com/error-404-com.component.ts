import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-error-404-com',
  standalone: true,
  imports: [RouterModule],
  template: `
   <div class="grid grid-cols-5 gap-4 w-[94vw]  h-screen  px-0 py-0 relative sm:px-4 sm:py-5  ">
        <div class="sm:col-span-2 col-span-full flex flex-col  items-center justify-center w-full sm:h-screen">
            <img src="../assets/svgs/404.svg" class=" sm:w-2/5 w-full sm:h-[30vh] h-[20vh]" alt="">
            <img src="../assets/svgs/bot.svg" class=" w-full sm:h-[30vh] h-[20vh]" alt="">
        </div>
        <div class="sm:col-span-3 col-span-full text-center flex flex-col items-center justify-center">
            <p class="font-inter text-[#263238] text-center font-normal leading-normal py-6 sm:text-[70px] text-[35px]">PAGE NOT FOUND</p>
            <p class="capitalize font-normal font-inter text-[14px] sm:text-[28px] leading-normal md:w-[491px] sm:[300px] w-[261px] text-center py-6  ">we could't find the page you were looking for</p>
            <a [routerLink]="['']"   class="w-fit hover:opacity-100 opacity-90 rounded-[50px] my-6 bg-[#34CAA5] text-center text-xl capitalize  font-normal font-inter text-black sm:px-16 sm:py-8 px-8 py-4 whitespace-nowrap">Back to Dashboard</a>
        </div>

    </div>
   
  `,
  styleUrl: './error-404-com.component.css'
})
export class Error404ComComponent {

}
