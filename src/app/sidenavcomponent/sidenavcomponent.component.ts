import { isPlatformServer } from '@angular/common';
import { Component, HostBinding, Inject, PLATFORM_ID, computed, effect, signal } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DarkmodetoggleService } from '../darkmodetoggle.service';


@Component({
  selector: 'app-sidenavcomponent',
  standalone: true,
  imports: [RouterModule],
  template: `
                <!-- top navigation div -->
    <div class="dark:bg-gray-800 w-full h-[488px] flex flex-col gap-[10px] justify-between bg-[#FAFAFA] ">
        <div class="flex sm:justify-center justify-between pr-2 pl-3 py-3 items-center sm:px-0 sm:py-0">
            <div [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-200 flex items-center">
                <a [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100"><img src="../assets/svgs/Vector.svg" alt=""></a>
                <p class= "text-[#26282C] sm:hidden flex px-3  text-2xl font-semibold font-jakarta first-letter :text-[#34CAA5] first-letter :text-3xl">GeegPay</p>
            </div>
            
            <button (click)="toggleDarkMode()" class=" w-[46px]  sm:hidden  h-[92px] rounded-[100px] flex flex-col dark:bg-gray-500  bg-[#FFFFFF] p-[8px] gap-[16px] ">
                <div>
                    <img src="../assets/svgs/Frame 427319676.svg" alt="">
                </div>
                <div>
                <img src="../assets/svgs/moon 1.svg" alt="">
            </div>
        </button>
            
        </div>
        <div [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-200 flex group relative font-bold sm:justify-center  text-right  bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2" data-tooltip-placement="right" data-tooltip-target="dashboard">
            <a [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="bg-opacity-70 dark:bg-opacity-100" >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path [attr.fill]="isDarkMode ? '#34CAA5' : '#0D062D'" d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"/>
  <path [attr.fill]="isDarkMode ? '#34CAA5' : '#0D062D'" opacity="0.4" d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z"/>
  <path [attr.fill]="isDarkMode ? '#34CAA5' : '#0D062D'" d="M18.6699 13.4301H16.7699C14.5899 13.4301 13.4399 14.5801 13.4399 16.7601V18.6601C13.4399 20.8401 14.5899 21.9901 16.7699 21.9901H18.6699C20.8499 21.9901 21.9999 20.8401 21.9999 18.6601V16.7601C21.9999 14.5801 20.8499 13.4301 18.6699 13.4301Z"/>
  <path [attr.fill]="isDarkMode ? '#34CAA5' : '#0D062D'" opacity="0.4" d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z"/>
</svg>

</a>
            <a  class= "text-[#26282C] px-3 flex sm:hidden dark:text-gray-200 ">Dashboard</a>
            
            <span [routerLink]="['']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                    <img  class="" src="../assets/svgs/Vector active.svg" alt="">
                    
            </span>
            
        </div>
        <div id="dashboard" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Dashboard
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
                <div [routerLink]="'/metrics'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-200 flex  group relative font-bold sm:justify-center  text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-100 py-2"  data-tooltip-placement="right" data-tooltip-target="sales">

            <a [routerLink]="'/metrics'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100"><img src="../assets/svgs/trend-up.svg" alt=""></a>
            <a class= "text-[#26282C] px-3 flex sm:hidden dark:text-gray-200 ">Sales Metrics</a>
            
            <span [routerLink]="['/metrics']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
                
            </span>
        </div>
        <div id="sales" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Sales Metrics
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
                <div [routerLink]="'profile'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-200 flex group relative font-bold sm:justify-center  text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-100 py-2"  data-tooltip-placement="right" data-tooltip-target="profile">

            <a [routerLink]="'profile'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100"><img src="../assets/svgs/profile-2user.svg" alt=""></a>
            <a class= "text-[#26282C] px-3 flex sm:hidden dark:text-gray-200 ">Profile</a>

            <span [routerLink]="['/profile']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
        </div>
        <div id="profile" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Profile
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
                <div [routerLink]="'clients'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-200 flex group relative font-bold sm:justify-center  text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-100 py-2"  data-tooltip-placement="right" data-tooltip-target="clients">

            <a [routerLink]="'clients'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100"><img src="../assets/svgs/box.svg" alt=""></a>
            <a [routerLink]="'clients'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class= " text-[#26282C] px-3 flex sm:hidden dark:text-gray-200 ">Clients</a>

            <span [routerLink]="['/clients']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
        </div>
        <div id="clients" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Clients
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        <div [routerLink]="['/promotions']" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="flex group relative font-bold sm:justify-center  text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-100 py-2"  data-tooltip-placement="right" data-tooltip-target="proms">

            <a [routerLink]="'promotions'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100"><img src="../assets/svgs/discount-shape.svg" alt=""></a>
            <a  routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class= " text-[#26282C] px-3 flex sm:hidden dark:text-gray-200 ">Promotions</a>
            <span [routerLink]="['/promotions']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
        </div>
        <div id="proms" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Promotions
            <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
        <div [routerLink]="'informations'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-200 flex group relative font-bold sm:justify-center  text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-100 py-2"  data-tooltip-placement="right" data-tooltip-target="info">

                    <a [routerLink]="'informations'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100"><img src="../assets/svgs/info-circle.svg" alt=""></a>
                    <a  class= "text-[#26282C] px-3 flex sm:hidden dark:text-gray-200 ">Informations</a>
                    
                    <span [routerLink]="['/informations']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
                        <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
                </div>
                <div id="info" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Informations
                    <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
        <div class="flex relative justify-center">

            <div  class="w-[46px] hidden h-[92px] rounded-[100px] sm:flex flex-col dark:bg-gray-500  bg-[#FFFFFF] p-[8px] gap-[16px] ">
                <button (click)="toggleDarkMode()" >
                    <img src="../assets/svgs/Frame 427319676.svg" alt="">
</button >
                <button (click)="toggleDarkMode()">
                <img src="../assets/svgs/moon 1.svg" alt="">
</button>
</div>
    </div>
    </div>
    <!--end of top navigation div -->
    <!-- bottom navigation div -->
    <div class=" w-full h-[152px]  flex flex-col gap-[16px] bg-[#FAFAFA] dark:bg-gray-800 items-center justify-end  sm:justify-evenly">
        <div [routerLink]="'geegpay'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-200 hidden sm:flex"  data-tooltip-placement="right" data-tooltip-target="go">
           <a [routerLink]="'geegpay'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100">
            <img src="../assets/svgs/arrow-right.svg" alt=""> 
           </a>
           <div id="go" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Visit Site
                <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
        </div>
        <div  [routerLink]="" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-200 hidden sm:flex"  data-tooltip-placement="right" data-tooltip-target="settings">
            <a [routerLink]="" routerLinkActive="bg-opacity-70 dark:bg-opacity-100" >
             <img src="../assets/svgs/setting-2.svg" alt=""> 
            </a>
            <div id="settings" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Settings
                <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
         </div>
         <div  [routerLink]="'logout'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-200 hidden sm:flex"  data-tooltip-placement="right" data-tooltip-target="logout">
            <a [routerLink]="'logout'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100">
             <img src="../assets/svgs/logout.svg" alt=""> 
            </a>
            <div id="logout" role="tooltip" class="absolute z-10 hidden invisible sm:inline-block px-3 py-2  text-sm font-medium dark:text-gray-200  text-white transition-opacity duration-500 whitespace-nowrap bg-red-700 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Logout
                <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
         </div>
         <div [routerLink]="'settings'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100"  class="flex sm:hidden group  relative font-bold sm:justify-center  text-right hover: bg-opacity-0 w-full transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  >
             
        <a [routerLink]="'settings'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100"><img src="../assets/svgs/setting-2.svg" alt=""></a>
        <a class= "text-[#26282C] px-3 flex sm:hidden dark:text-gray-200 ">Settings</a>

        <span [routerLink]="['/settings']" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active" class=" yy absolute right-0 hidden group-hover:flex">
            <img class="" src="../assets/svgs/Vector active.svg" alt="">
</span>
    </div>
    <div  [routerLink]="'logout'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100 dark:text-gray-800" class="dark:text-gray-200 flex group relative w-full sm:hidden font-bold sm:justify-center  text-right hover: bg-opacity-0 transition-all ease-in-out duration-700 px-3 sm:px-0 bg-gray-300 py-2"  >
        
        <a [routerLink]="'logout'" routerLinkActive="bg-opacity-70 dark:bg-opacity-100"><img src="../assets/svgs/logout.svg" alt=""></a>
        <a class= "text-[#26282C] px-3 flex sm:hidden dark:text-gray-200 ">Logout</a>
        
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
isDarkMode : boolean = false;
    @HostBinding('class.dark') get mode() {
        return this.darkModeService.darkMode();
      }
    
      constructor(private darkModeService: DarkmodetoggleService) {}
    
      toggleDarkMode() {
        this.darkModeService.setDarkMode();
        this.isDarkMode = !this.isDarkMode
      }
        
}