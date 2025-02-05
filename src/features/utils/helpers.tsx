import day from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
import {uniqueNamesGenerator, animals, adjectives,Style} from 'unique-names-generator'
day.extend(relativeTime);
day.extend(isToday);
day.extend(isYesterday);

export function shuffleArray<T extends { _id: string }>(array: T[], freezeCount: number): T[] {
  const limit = array.length - freezeCount;

  for (let i = limit - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }

  return array;
}


 
  export function paginationRange(
    totalPages: number,
    currentPage: number
  ): (number | string)[] {
    const range: (number | string)[] = [];
    const firstPages = Math.min(3, totalPages);
  
    // Add first 3 pages
    for (let i = 1; i <= firstPages; i++) {
      range.push(i);
    }
  
    // If we're on a page before the ellipsis, show the next 3 pages
    if (currentPage >= firstPages && currentPage < totalPages - 2) {
      // Add ellipsis if there's more pages after
      range.push('...');
  
      // Add the next 3 pages after the first 3
      const nextPageStart = currentPage + 1;
      const nextPageEnd = Math.min(currentPage + 3, totalPages - 1);
      for (let i = nextPageStart; i <= nextPageEnd; i++) {
        range.push(i);
      }
    }
  
    // Always show the last page
    if (totalPages > 1 && range[range.length - 1] !== totalPages) {
      range.push(totalPages);
    }
  
    // Add ellipsis only if there are more pages after the 3rd group
    if (totalPages > 3 && !range.includes('...')) {
      range.push('...');
    }
  
    return range;
  }

  export function isoToDate(iso:string){
    const date = day(iso)
    if(date.isToday()){
      return date.fromNow()
    }

    if(date.isYesterday()){
      return "Yesterday"
    }

    return date.format("MM/D/YYYY")
    

    
    
    
  }
  export function formatTime(iso:string){
    const time = day(iso).format("hh:mm A")
    return time
  }

  export function isEmpty(obj:object){
    return Object.keys(obj).length === 0

  }

  export function genRandomName (){
    const customConfig = {
      dictionaries: [adjectives,animals],
      seperator: '',
      length: 2,
      style: 'capital' as Style

    }
    return  uniqueNamesGenerator(customConfig).replace("_",'') + Math.floor(Math.random()*100)

  } 

  