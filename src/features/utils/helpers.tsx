
export function shuffleArray<T>(array:T[], freezeCount:number) {
    const limit = array.length - freezeCount;
    for (let i = limit - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  