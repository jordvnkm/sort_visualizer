


const SelectionSort = {


  sortTime: function(array, trialSize, situation){
    let times = [];
    let sortedArray = [];
    for (let i = 1; i <= array.length ; i ++){
      sortedArray.push(i);
    }
    for (let i = 0 ; i < trialSize - 1; i ++){
      if (i == 0){
        let start = performance.now();
        let sorted = this.selectionSort(sortedArray);
        let end = performance.now();
        times.push(end - start);
      }
      else {
        let start = performance.now();
        let sorted = this.selectionSort(array);
        let end = performance.now();
        times.push(end - start);
      }
    }
    if (situation == "average"){
      return this.average(times);
    }
    else if (situation == "best"){
      return this.best(times)
    }
    else if (situation == "worst"){
      return this.worst(times)
    }
  },

  best: function(array){
    return Math.min(...array);
  },

  worst: function(array){
    return Math.max(...array);
  },

  average: function(array){
    let total = 0;
    array.forEach((num) => {
      total += num;
    })
    return (total / array.length);
  },


  swap: function(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  },

  selectionSort: function(items){

      var len = items.length,
          min;

      for (let i=0; i < len; i++){

          //set minimum to this position
          min = i;

          //check the rest of the array to see if anything is smaller
          for (let j=i+1; j < len; j++){
              if (items[j] < items[min]){
                  min = j;
              }
          }

          //if the minimum isn't in the position, swap it
          if (i != min){
              this.swap(items, i, min);
          }
      }

      return items;
  }
};


module.exports = SelectionSort;
