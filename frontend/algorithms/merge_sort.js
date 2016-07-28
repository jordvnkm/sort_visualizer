



const MergeSort = {
  sortTime: function(array, trialSize, situation){
    let times = [];
    let sortedArray = [];
    for (let i = 1; i <= array.length ; i ++){
      sortedArray.push(i);
    }
    for (let i = 0 ; i < trialSize; i ++){
      if (i == 0 && trialSize !== 1){
        let start = performance.now();
        let sorted = this.mergeSort(sortedArray);
        let end = performance.now();
        times.push(end - start);
      }
      else {
        let start = performance.now();
        let sorted = this.mergeSort(array);
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


  merge: function(left, right){
      let result  = []
      let il      = 0
      let ir      = 0;

      while (il < left.length && ir < right.length){
          if (left[il] < right[ir]){
              result.push(left[il++]);
          } else {
              result.push(right[ir++]);
          }
      }

      return result.concat(left.slice(il)).concat(right.slice(ir));
  },

  mergeSort: function(array){
    if (array.length < 2){
      return array;
    }

    let middle = array.length / 2;
    let left = this.mergeSort(array.slice(0, middle));
    let right = this.mergeSort(array.slice(middle));
    return this.merge(left, right);
  }
};





module.exports = MergeSort;
