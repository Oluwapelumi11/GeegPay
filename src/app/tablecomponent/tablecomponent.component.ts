import { Component } from '@angular/core';

@Component({
  selector: 'app-tablecomponent',
  standalone: true,
  imports: [],
  template: `
    <!-- last orders div -->
                                <div class="w-full flex justify-between bg-[#FFFFFF] dark:bg-gray-300 rounded-t-xl  px-4 sm:px-0 sm:py-0 py-2 font-jakarta ">
                                    <p class="font-semibold text-lg text-[#26282C]">Last Orders</p>
                                    <p class="text-[#34CAA5] font-medium text-lg">See All</p>
                                </div>
                                <div class="px-4 py-4 w-full bg-[#FFFFFF] dark:bg-gray-300 rounded-b-xl  overflow-x-auto h-[23rem] overflow-y-auto">
                                    <table class="table-auto w-full h-fit  text-left rounded-xl ">
                                        <thead class="border-b border-[#EDF2F6] sm:h-[5rem] h-[2rem]" >
                                            <tr class="font-jakarta text-left font-semibold sm:font-medium sm:text-base text-[9px] self-center dark:text-gray-800 text-[#9CA4AB]">
                                                <th class="px-2 sm:py-3 py-1 w-2/5 ">Name</th>
                                                <th class="px-2 sm:py-3 py-1 w-1/5">Date</th>
                                                <th class="px-2 sm:py-3 py-1 w-2/5 ">Amount</th>
                                                <th class="px-2 sm:py-3 py-1 w-2/5">Status</th>
                                                <th class="px-2 sm:py-3 py-1 w-2/5">Invoice</th>
                                            </tr>
                                        </thead>
                                        <tbody class="">
                                            <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                               <td class="flex items-center py-4 gap-2">
                                                <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px]" alt="">
                                                <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                               </td>
                                               <td class="font-jakarta font-semibold  sm:font-normal sm:text-base text-[9px]">
                                                    Nov 15, 2023
                                               </td>
                                               <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                $80,000
                                               </td>
                                               <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#34CAA5]">
                                                Paid
                                               </td>
                                               <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>

                                               </td>
                                            </tr>

                                               <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#ED544E]">
                                                 Refund
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
 
                                            </tr>

                                            <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#34CAA5]">
                                                 Paid
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
                                            </tr>
 
                                                <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                 <td class="flex items-center py-4 gap-2">
                                                  <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                  <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                 </td>
                                                 <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                      Nov 15, 2023
                                                 </td>
                                                 <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                  $80,000
                                                 </td>
                                                 <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#ED544E]">
                                                  Refund
                                                 </td>
                                                 <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                  <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                  <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
  
                                                 </td>
  
                                             </tr>
                                             <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#ED544E]">
                                                 Refund
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
 
                                            </tr>

                                            <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#34CAA5]">
                                                 Paid
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
                                            </tr>
                                            <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#ED544E]">
                                                 Refund
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
 
                                            </tr>

                                            <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#34CAA5]">
                                                 Paid
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
                                            </tr>
                                            <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#ED544E]">
                                                 Refund
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
 
                                            </tr>

                                            <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#34CAA5]">
                                                 Paid
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
                                            </tr>
                                            <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#ED544E]">
                                                 Refund
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
 
                                            </tr>

                                            <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#34CAA5]">
                                                 Paid
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
                                            </tr>
                                            <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#ED544E]">
                                                 Refund
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
 
                                            </tr>

                                            <tr class="border-b border-[#EDF2F6] items-center h-[4rem]">
                                                <td class="flex items-center py-4 gap-2">
                                                 <img src="../assets/svgs/Rectangle 1061.png" class="rounded-full sm:w-[32px] sm:h-[32px] w-[25px] h-[25px] " alt="">
                                                 <p class="font-jakarta font-semibold sm:font-medium sm:text-base text-xs text-[#3A3F51]">Marcus Bergson</p>
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">
                                                     Nov 15, 2023
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-medium sm:text-base text-[9px] px-2">
                                                 $80,000
                                                </td>
                                                <td class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px] text-[#34CAA5]">
                                                 Paid
                                                </td>
                                                <td class="flex sm:text-left text-right gap-2 sm:py-4">
                                                 <img class="hidde sm:flex" src="../assets/svgs/document-download.svg" alt="">
                                                 <p class="font-jakarta font-semibold sm:font-normal sm:text-base text-[9px]">View</p>
 
                                                </td>
                                            </tr>

                                            
                                        </tbody>

                                    </table>

                                </div>
                            
                            <!-- end of last orders div -->
  `,
  styleUrl: './tablecomponent.component.css'
})
export class TablecomponentComponent {

}
