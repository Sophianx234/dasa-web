import day from 'dayjs'
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
    const now  = day().toISOString()
    const date = day(now).diff(day(iso))
    console.log("date:",date)
    

    
    
    
    // console.log("time: ",time)
    return date
  }

  export function isEmpty(obj:object){
    return Object.keys(obj).length === 0

  }