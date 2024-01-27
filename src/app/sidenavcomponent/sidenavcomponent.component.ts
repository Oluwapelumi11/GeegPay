import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-sidenavcomponent',
  standalone: true,
  imports: [RouterModule],
  template: `
                <!-- top navigation div -->
    <div class="w-full h-[488px] flex flex-col gap-[10px] justify-between bg-[#FAFAFA] ">
        <div class="flex sm:justify-center justify-between pr-2 pl-3 py-3 items-center sm:px-0 sm:py-0">
            <div [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70" class="flex items-center">
                <a [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70"><img src="../assets/svgs/Vector.svg" alt=""></a>
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
        <div [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70" class="flex group relative font-bold sm:justify-center text-right  bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2" data-tooltip-placement="right" data-tooltip-target="dashboard">
            <a [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70" ><img src="../assets/svgs/category.svg" alt=""></a>
            <a  class="text-[#26282C] px-3 flex sm:hidden ">Dashboard</a>
            
            <span [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                    <img  class="" src="../assets/svgs/Vector active.svg" alt="">
                    
            </span>
            
        </div>
        <div id="dashboard" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Dashboard
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
                <div [routerLink]="'/metrics'" routerLinkActive="bg-opacity-70" class="flex  group relative font-bold sm:justify-center text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  data-tooltip-placement="right" data-tooltip-target="sales">

            <a [routerLink]="'/metrics'" routerLinkActive="bg-opacity-70"><img src="../assets/svgs/trend-up.svg" alt=""></a>
            <a class="text-[#26282C] px-3 flex sm:hidden ">Sales Metrics</a>
            
            <span [routerLink]="['/metrics']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
                
            </span>
        </div>
        <div id="sales" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Sales Metrics
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
                <div [routerLink]="'profile'" routerLinkActive="bg-opacity-70" class="flex group relative font-bold sm:justify-center text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  data-tooltip-placement="right" data-tooltip-target="profile">

            <a [routerLink]="'profile'" routerLinkActive="bg-opacity-70"><img src="../assets/svgs/profile-2user.svg" alt=""></a>
            <a class="text-[#26282C] px-3 flex sm:hidden ">Profile</a>

            <span [routerLink]="['/profile']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
        </div>
        <div id="profile" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
                <div [routerLink]="'clients'" routerLinkActive="bg-opacity-70" class="flex group relative font-bold sm:justify-center text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  data-tooltip-placement="right" data-tooltip-target="clients">

            <a [routerLink]="'clients'" routerLinkActive="bg-opacity-70"><img src="../assets/svgs/box.svg" alt=""></a>
            <a [routerLink]="'clients'" routerLinkActive="bg-opacity-70" class="text-[#26282C] px-3 flex sm:hidden ">Clients</a>

            <span [routerLink]="['/clients']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
        </div>
        <div id="clients" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Clients
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        <div class="flex group relative font-bold sm:justify-center text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  data-tooltip-placement="right" data-tooltip-target="proms">

            <a [routerLink]="'promotions'" routerLinkActive="bg-opacity-70"><img src="../assets/svgs/discount-shape.svg" alt=""></a>
            <a  [routerLink]="'promotions'" routerLinkActive="bg-opacity-70" class="text-[#26282C] px-3 flex sm:hidden ">Promotions</a>
            <span [routerLink]="['/promotions']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
        </div>
        <div id="proms" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Promotions
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        <div [routerLink]="'informations'" routerLinkActive="bg-opacity-70" class="flex group relative font-bold sm:justify-center text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  data-tooltip-placement="right" data-tooltip-target="info">

                    <a [routerLink]="'informations'" routerLinkActive="bg-opacity-70"><img src="../assets/svgs/info-circle.svg" alt=""></a>
                    <a class="text-[#26282C] px-3 flex sm:hidden ">Informations</a>
                    
                    <span [routerLink]="['/informations']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                        <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
                </div>
                <div id="info" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Informations
                    <div class="tooltip-arrow" data-popper-arrow></div>
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
    <div class="w-full h-[152px]  flex flex-col gap-[16px] bg-[#FAFAFA] items-center justify-end  sm:justify-evenly">
        <div [routerLink]="'geegpay'" routerLinkActive="bg-opacity-70" class="hidden sm:flex"  data-tooltip-placement="right" data-tooltip-target="go">
           <a [routerLink]="'geegpay'" routerLinkActive="bg-opacity-70">
            <img src="../assets/svgs/arrow-right.svg" alt=""> 
           </a>
           <div id="go" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Visit Site
                <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
        </div>
        <div  [routerLink]="" routerLinkActive="bg-opacity-70" class="hidden sm:flex"  data-tooltip-placement="right" data-tooltip-target="settings">
            <a [routerLink]="" routerLinkActive="bg-opacity-70" >
             <img src="../assets/svgs/setting-2.svg" alt=""> 
            </a>
            <div id="settings" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Settings
                <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
         </div>
         <div  [routerLink]="'logout'" routerLinkActive="bg-opacity-70" class="hidden sm:flex"  data-tooltip-placement="right" data-tooltip-target="logout">
            <a [routerLink]="'logout'" routerLinkActive="bg-opacity-70">
             <img src="../assets/svgs/logout.svg" alt=""> 
            </a>
            <div id="logout" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-500 whitespace-nowrap bg-red-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Logout
                <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
         </div>
         <div [routerLink]="'settings'" routerLinkActive="bg-opacity-70"  class="flex sm:hidden group  relative font-bold sm:justify-center text-right hover: bg-opacity-0 w-full transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  >
             
        <a [routerLink]="'settings'" routerLinkActive="bg-opacity-70"><img src="../assets/svgs/setting-2.svg" alt=""></a>
        <a class="text-[#26282C] px-3 flex sm:hidden ">Settings</a>

        <span [routerLink]="['/settings']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
            <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
    </div>
    <div  [routerLink]="'logout'" routerLinkActive="bg-opacity-70" class="flex group relative w-full sm:hidden font-bold sm:justify-center text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  >
        
        <a [routerLink]="'logout'" routerLinkActive="bg-opacity-70"><img src="../assets/svgs/logout.svg" alt=""></a>
        <a class="text-[#26282C] px-3 flex sm:hidden ">Logout</a>
        
        <span [routerLink]="['/logout']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
            <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
    </div>
</div>
    <!--end of bottom navigation div -->
        
  `,
  styleUrl: './sidenavcomponent.component.css'
})
export class SidenavcomponentComponent {


    constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
}
