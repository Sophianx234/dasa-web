import day from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
import relativeTime from 'dayjs/plugin/relativeTime';
import { adjectives, animals,  uniqueNamesGenerator } from 'unique-names-generator';
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
      style: 'capital' as 'capital' | 'upperCase'

    }
    return  uniqueNamesGenerator(customConfig).replace("_",'') + Math.floor(Math.random()*100)

  } 
  export function formatChatDate(isoString: string) {
    const date = new Date(isoString);
    const now = new Date();
  
    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();
  
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
  
    const isYesterday =
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear();
  
    if (isToday) return "Today";
    if (isYesterday) return "Yesterday";
    return date.toLocaleDateString(); 
  }

  export function formatDate(dateString:string) {
    const date = new Date(dateString);
  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const dayOfWeek = days[date.getUTCDay()];
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
  
    // Function to get ordinal suffix
    const getOrdinal = (n:number) => {
      if (n > 3 && n < 21) return `${n}th`;
      switch (n % 10) {
        case 1: return `${n}st`;
        case 2: return `${n}nd`;
        case 3: return `${n}rd`;
        default: return `${n}th`;
      }
    };
  
    return `${dayOfWeek} ${getOrdinal(day)} ${month} ${year}`;
  }
  
  

  
  export function convertDateToCustomString(isoDate: string) {
    const date = new Date(isoDate);
  
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
  
    const parts = date.toLocaleString('en-US', options).split(', ');
    const [monthDay, time] = parts;
    return `${monthDay}, ${time.toLowerCase()}`;
  }




  export function DateAnonymous(isoString: string) {
    const date = new Date(isoString);
    const now = new Date();
  
    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();
  
    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
  
    const isYesterday =
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear();
  
    if (isToday) return "Today";
    if (isYesterday) return "Yesterday";
  
    const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const monthsAgo = Math.floor(daysAgo / 30);
    // const yearsAgo = Math.floor(daysAgo / 365);
  
    if (daysAgo < 30) return `${daysAgo} day${daysAgo === 1 ? "" : "s"} ago`;
    if (monthsAgo < 12) return `${monthsAgo} month${monthsAgo === 1 ? "" : "s"} ago`;
  
    // If it's older than 1 year, fallback to normal date format
    return date.toLocaleDateString();
  }
  
  
  