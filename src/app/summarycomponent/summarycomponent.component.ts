import { Component } from '@angular/core';

@Component({
  selector: 'app-summarycomponent',
  standalone: true,
  imports: [],
  template: `
   
                                <!-- box component -->
                                <div class="w-full h-fit p-1 rounded-[14px] bg-[#EDF2F7]">
                                    <div class="flex justify-between sm:py-4 px-2">
                                        <img src="../assets/svgs/Icon.svg" alt="">
                                        <img src="../assets/svgs/trend green.svg" alt="">
                                    </div>
                                    <div class="font-jakarta py-2 px-2">
                                        <p class="font-medium text-[18px] leading-[28px] text-[#898989]">Total Order</p>
                                        <p class="font-semibold text-2xl text-[#3A3F51]">350</p>
                                    </div>
                                    <div class="flex sm:gap-4 gap-2 items-center py-1 px-2">
                                        <div class=" flex w-fit  sm:p-2 px-2 py-1 rounded-full  bg-[#34CAA51F] bg-opacity-[12%]">
                                            <img src="../assets/svgs/trending-up.svg" alt="">
                                            <p class="text-[#34CAA5]  font-medium font-jakarta text-xs ">23.5%</p>
                                        </div>
                                        <p class="text-[#606060] font-inter font-normal sm:text-sm text-xs leading-[17px]">vs. previous month</p>
                                    </div>

                                    
                                </div>
                                <!-- box component -->

                                 <!-- box component -->
                                 <div class="w-full h-fit p-1 rounded-[14px] bg-[#EDF2F7]">
                                    <div class="flex justify-between sm:py-4 px-2">
                                        <img src="../assets/svgs/Icon rotate.svg" alt="">
                                        <img src="../assets/svgs/trend red.svg" alt="">
                                    </div>
                                    <div class="font-jakarta py-2 px-2">
                                        <p class="font-medium text-[18px] leading-[28px] text-[#898989]">Total Refund</p>
                                        <p class="font-semibold text-2xl text-[#3A3F51]">270</p>
                                    </div>
                                    <div class="flex sm:gap-4 gap-2 items-center py-1 px-2">
                                        <div class=" flex w-fit  sm:p-2 px-2 py-1 rounded-full  bg-[#ED544E] bg-opacity-[12%]">
                                            <img src="../assets/svgs/trending-down.svg" alt="">
                                            <p class="text-[#ED544E]  font-medium font-jakarta text-xs ">23.5%</p>
                                        </div>
                                        <p class="text-[#606060] font-inter font-normal sm:text-sm text-xs leading-[17px]">vs. previous month</p>
                                    </div>

                                    
                                </div>
                                <!-- box component -->

                                
                                <!-- box component -->
                                 <div class="w-full h-fit p-1 rounded-[14px] bg-[#EDF2F7]">
                                    <div class="flex justify-between sm:py-4 px-2">
                                        <img src="../assets/svgs/shop.svg" alt="">
                                        <img src="../assets/svgs/trend red.svg" alt="">
                                    </div>
                                    <div class="font-jakarta py-2 px-2">
                                        <p class="font-medium text-[18px] leading-[28px] text-[#898989]">Average Sales</p>
                                        <p class="font-semibold text-2xl text-[#3A3F51]">1567</p>
                                    </div>
                                    <div class="flex sm:gap-4 gap-2 items-center py-1 px-2">
                                        <div class=" flex w-fit  sm:p-2 px-2 py-1 rounded-full  bg-[#ED544E] bg-opacity-[12%]">
                                            <img src="../assets/svgs/trending-down.svg" alt="">
                                            <p class="text-[#ED544E]  font-medium font-jakarta text-xs ">23.5%</p>
                                        </div>
                                        <p class="text-[#606060] font-inter font-normal sm:text-sm text-xs leading-[17px]">vs. previous month</p>
                                    </div>
                                    
                                    
                                </div>
                                <!-- box component -->
                                <!-- box component -->
                                <div class="w-full h-fit p-1 rounded-[14px] bg-[#EDF2F7]">
                                   <div class="flex justify-between sm:py-4 px-2">
                                       <img src="../assets/svgs/Icon.svg" alt="">
                                       <img src="../assets/svgs/trend green.svg" alt="">
                                   </div>
                                   <div class="font-jakarta py-2 px-2">
                                       <p class="font-medium text-[18px] leading-[28px] text-[#898989]">Total Order</p>
                                       <p class="font-semibold text-2xl text-[#3A3F51]">350</p>
                                   </div>
                                   <div class="flex sm:gap-4 gap-2 items-center py-1 px-2">
                                       <div class=" flex w-fit  sm:p-2 px-2 py-1 rounded-full  bg-[#34CAA5] bg-opacity-[12%]">
                                           <img src="../assets/svgs/trending-up.svg" alt="">
                                           <p class="text-[#34CAA5]  font-medium font-jakarta text-xs ">23.5%</p>
                                       </div>
                                       <p class="text-[#606060] font-inter font-normal sm:text-sm text-xs leading-[17px]">vs. previous month</p>
                                   </div>

                                   
                               </div>
                               <!-- box component -->
                            
  `,
  styleUrl: './summarycomponent.component.css'
})
export class SummarycomponentComponent {

}
