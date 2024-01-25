import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenavcomponent',
  standalone: true,
  imports: [],
  template: `
            <!-- top navigation div -->
            <div class="w-full h-[488px] flex flex-col gap-[10px] justify-between ">
                <div class="flex justify-center">
                    <a href=""><img src="../assets/svgs/Vector.svg" alt=""></a>
                    
                </div>
                <div class="flex relative justify-center">
                    <a href=""><img src="../assets/svgs/category.svg" alt=""></a>
                    <div class="absolute right-0">
                        <img class="" src="../assets/svgs/Vector active.svg" alt="">
                    </div>
                </div>
                <div class="flex relative justify-center">
                    <a href=""><img src="../assets/svgs/trend-up.svg" alt=""></a>
                    <div class="absolute right-0 hidden">
                        <img class="" src="../assets/svgs/Vector active.svg" alt="">
                    </div>
                </div>
                <div class="flex relative justify-center">
                    <a href=""><img src="../assets/svgs/profile-2user.svg" alt=""></a>
                    <div class="absolute right-0 hidden">
                        <img class="" src="../assets/svgs/Vector active.svg" alt="">
                    </div>
                </div>
                <div class="flex relative justify-center">
                    <a href=""><img src="../assets/svgs/box.svg" alt=""></a>
                    <div class="absolute right-0 hidden">
                        <img class="" src="../assets/svgs/Vector active.svg" alt="">
                    </div>
                </div>
                <div class="flex relative justify-center">
                    <a href=""><img src="../assets/svgs/discount-shape.svg" alt=""></a>
                    <div class="absolute right-0 hidden">
                        <img class="" src="../assets/svgs/Vector active.svg" alt="">
                    </div>
                </div>
                <div class="flex relative justify-center">
                    <a href=""><img src="../assets/svgs/info-circle.svg" alt=""></a>
                    <div class="absolute right-0 hidden">
                        <img class="" src="../assets/svgs/Vector active.svg" alt="">
                    </div>
                </div>
                <div class="flex relative justify-center">

                    <button class="w-[46px] h-[92px] rounded-[100px] flex flex-col  bg-[#FFFFFF] p-[8px] gap-[16px]">
                        <div>
                            <img src="../assets/svgs/Frame 427319676.svg" alt="">
                        </div>
                        <div>
                        <img src="../assets/svgs/moon 1.svg" alt="">
                    </div>
                </button>
            </div>
            </div>
            <!--end of top navigation div -->
            <!-- bottom navigation div -->
            <div class="w-full h-[152px] flex flex-col gap-[16px] items-center justify-evenly">
                <div>
                   <a href="">
                    <img src="../assets/svgs/arrow-right.svg" alt=""> 
                   </a>
                </div>
                <div>
                    <a href="">
                     <img src="../assets/svgs/setting-2.svg" alt=""> 
                    </a>
                 </div>
                 <div>
                    <a href="">
                     <img src="../assets/svgs/logout.svg" alt=""> 
                    </a>
                 </div>
            </div>
            <!--end of bottom navigation div -->
        
  `,
  styleUrl: './sidenavcomponent.component.css'
})
export class SidenavcomponentComponent {

}
