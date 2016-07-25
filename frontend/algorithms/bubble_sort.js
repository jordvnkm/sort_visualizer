

const BubbleSort = {

  sortTime: function(array, trialSize, situation){
    let times = [];
    let sortedArray = [];
    for (let i = 1; i <= array.length ; i ++){
      sortedArray.push(i);
    }
    for (let i = 0 ; i < trialSize; i ++){
      if (i == 0){
        let start = performance.now();
        let sorted = this.bubbleSort(sortedArray);
        let end = performance.now();
        times.push(end - start);
      }
      else {
        let start = performance.now();
        let sorted = this.bubbleSort(array);
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

  bubbleSort: function(items){
    var length = items.length;
    for (var i = 0; i < length; i++) { //Number of passes
      for (var j = 0; j < (length - i - 1); j++) { //Notice that j < (length - i)
        //Compare the adjacent positions
        if(items[j] > items[j+1]) {
          //Swap the numbers
          var tmp = items[j];  //Temporary variable to hold the current number
          items[j] = items[j+1]; //Replace current number with adjacent number
          items[j+1] = tmp; //Replace adjacent number with current number
        }
      }
    }
    return items;
  }
};


module.exports = BubbleSort;
