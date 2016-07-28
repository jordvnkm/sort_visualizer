

let arrayLength;

const HeapSort = {
  sortTime: function(array, trialSize, situation){
    let times = [];
    let sortedArray = [];
    for (let i = 1; i <= array.length ; i ++){
      sortedArray.push(i);
    }
    for (let i = 0 ; i < trialSize; i ++){
      if (i == 0 && trialSize !== 1){
        let start = performance.now();
        let sorted = this.heapSort(sortedArray);
        let end = performance.now();
        times.push(end - start);
      }
      else {
        let start = performance.now();
        let sorted = this.heapSort(array);
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

  buildHeap: function(input) {
    arrayLength = input.length;

    for (var i = Math.floor(arrayLength / 2); i >= 0; i -= 1) {
      this.heapify(input, i);
    }
  },

  heapify: function(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var largest = i;

    if (left < arrayLength && input[left] > input[largest]) {
      largest = left;
    }

    if (right < arrayLength && input[right] > input[largest]) {
      largest = right;
    }

    if (largest != i) {
      this.swap(input, i, largest);
      this.heapify(input, largest);
    }
  },

  swap: function(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
  },

  heapSort: function(input) {
    this.buildHeap(input);

    for (var i = input.length - 1; i > 0; i--) {
      this.swap(input, 0, i);
      arrayLength--;
      this.heapify(input, 0);
    }
  }
}

module.exports = HeapSort;
