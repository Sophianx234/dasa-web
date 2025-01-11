
export function shuffleArray<T>(array:T[], freezeCount:number) {
    const limit = array.length - freezeCount;
    for (let i = limit - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }


 
export function paginationRange(totalPages:number){
      const range = [];
      const maxPage = totalPages;
  
      // First 5 pages (if available)
      for (let i = 1; i <= Math.min(3, maxPage); i++) {
        range.push(i);
      }
  
      // Show ellipsis if there are more pages beyond 5
      if (maxPage > 3) {
        range.push('...');
        range.push(maxPage); // Last page
      }
  
      return range;
    };