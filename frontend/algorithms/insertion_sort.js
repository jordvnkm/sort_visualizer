




const InsertionSort = {

  sortTime: function(array, trialSize, situation){
    let times = [];
    let sortedArray = [];
    for (let i = 1; i <= array.length ; i ++){
      sortedArray.push(i);
    }
    for (let i = 0 ; i < trialSize; i ++){
      if (i == 0 && trialSize !== 1){
        let start = performance.now();
        let sorted = this.insertionSort(sortedArray);
        let end = performance.now();
        times.push(end - start);
      }
      else {
        let start = performance.now();
        let sorted = this.insertionSort(array);
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


  insertionSort: function(array){
    let length = array.length;
    let i;
    let j;

    for (i = 0 ; i < length; i ++){
      let val = array[i];
      for (j = i - 1; j >= 0 && array[j] > val ; j --){
        array[j + 1] = array[j];
      }

      array[j+1] = val;
    }

    return array;
  }
};


module.exports = InsertionSort;
