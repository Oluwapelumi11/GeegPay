import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenavcomponent',
  standalone: true,
  imports: [],
  template: `
                <!-- top navigation div -->
    <div class="w-full h-[488px] flex flex-col gap-[10px] justify-between bg-[#FAFAFA] ">
        <div class="flex sm:justify-center justify-between pr-2 pl-3 py-3 items-center sm:px-0 sm:py-0">
            <div class="flex items-center">
                <a href=""><img src="../assets/svgs/Vector.svg" alt=""></a>
                <p class="text-[#26282C] sm:hidden flex px-3 text-2xl font-semibold font-jakarta first-letter:text-[#34CAA5] first-letter:text-3xl">GeegPay</p>
            </div>
            
            <button class=" w-[46px]  sm:hidden  h-[92px] rounded-[100px] flex flex-col  bg-[#FFFFFF] p-[8px] gap-[16px] ">
                <div>
                    <img src="../assets/svgs/Frame 427319676.svg" alt="">
                </div>
                <div>
                <img src="../assets/svgs/moon 1.svg" alt="">
            </div>
        </button>
            
        </div>
        <div class="flex group relative font-bold sm:justify-center text-right hover:bg-opacity-70 bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2">
            <a href=""><img src="../assets/svgs/category.svg" alt=""></a>
            <p class="text-[#26282C] px-3 flex sm:hidden ">Dashboard</p>
            <div class="absolute right-0">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
                
            </div>
        </div>
                <div class="flex  group relative font-bold sm:justify-center text-right hover:bg-opacity-70 bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2">

            <a href=""><img src="../assets/svgs/trend-up.svg" alt=""></a>
            <p class="text-[#26282C] px-3 flex sm:hidden ">Sales Metrics</p>

            <a class="absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">

            </a>
        </div>
                <div class="flex group relative font-bold sm:justify-center text-right hover:bg-opacity-70 bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2">

            <a href=""><img src="../assets/svgs/profile-2user.svg" alt=""></a>
            <p class="text-[#26282C] px-3 flex sm:hidden ">Profile</p>

            <a class="absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
            </a>
        </div>
                <div class="flex group relative font-bold sm:justify-center text-right hover:bg-opacity-70 bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2">

            <a href=""><img src="../assets/svgs/box.svg" alt=""></a>
            <p class="text-[#26282C] px-3 flex sm:hidden ">Clients</p>

            <a class="absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
            </a>
        </div>
                <div class="flex group relative font-bold sm:justify-center text-right hover:bg-opacity-70 bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2">

            <a href=""><img src="../assets/svgs/discount-shape.svg" alt=""></a>
            <p class="text-[#26282C] px-3 flex sm:hidden ">Promotions</p>
            <a class="absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
            </a>
        </div>
                <div class="flex group relative font-bold sm:justify-center text-right hover:bg-opacity-70 bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2">

            <a href=""><img src="../assets/svgs/info-circle.svg" alt=""></a>
            <p class="text-[#26282C] px-3 flex sm:hidden ">Informations</p>

            <a class="absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
            </a>
        </div>
        <div class="flex relative justify-center">

            <button class="w-[46px] hidden h-[92px] rounded-[100px] sm:flex flex-col  bg-[#FFFFFF] p-[8px] gap-[16px] ">
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
    <div class="w-full h-[152px] bg-gray-100 flex flex-col gap-[16px] items-center justify-end  sm:justify-evenly">
        <div class="hidden sm:flex">
           <a href="">
            <img src="../assets/svgs/arrow-right.svg" alt=""> 
           </a>
        </div>
        <div class="hidden sm:flex">
            <a href="" >
             <img src="../assets/svgs/setting-2.svg" alt=""> 
            </a>
         </div>
         <div class="hidden sm:flex">
            <a href="">
             <img src="../assets/svgs/logout.svg" alt=""> 
            </a>
         </div>
         <div class="flex sm:hidden group  relative font-bold sm:justify-center text-right hover:bg-opacity-70 bg-opacity-0 w-full transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2">
             
        <a href=""><img src="../assets/svgs/setting-2.svg" alt=""></a>
        <p class="text-[#26282C] px-3 flex sm:hidden ">Settings</p>

        <a class="absolute right-0 hidden group-hover:flex">
            <img class="" src="../assets/svgs/Vector active.svg" alt="">
        </a>
    </div>
    <div class="flex group relative w-full sm:hidden font-bold sm:justify-center text-right hover:bg-opacity-70 bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2">
        
        <a href=""><img src="../assets/svgs/logout.svg" alt=""></a>
        <p class="text-[#26282C] px-3 flex sm:hidden ">Logout</p>
        
        <a class="absolute right-0 hidden group-hover:flex">
            <img class="" src="../assets/svgs/Vector active.svg" alt="">
        </a>
    </div>
</div>
    <!--end of bottom navigation div -->
        
  `,
  styleUrl: './sidenavcomponent.component.css'
})
export class SidenavcomponentComponent {

}
