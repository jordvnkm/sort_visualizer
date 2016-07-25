

let arrayLength;

const HeapSort = {
  sortTime: function(array){
    let start = performance.now();
    let sorted = this.heapSort(array);
    let end = performance.now();
    return end - start;
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
