


const QuickSort = {
  sortTime: function(array){
    let start = performance.now();
    let sorted = this.quickSort(array);
    let end = performance.now();
    return end - start;
  },


  swap: function(items, firstIndex, secondIndex){
      var temp = items[firstIndex];
      items[firstIndex] = items[secondIndex];
      items[secondIndex] = temp;
  },

  partition: function(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            this.swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
  },

  quickSort: function(items, left, right) {

    var index;

    if (items.length > 1) {

        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;

        index = this.partition(items, left, right);

        if (left < index - 1) {
            this.quickSort(items, left, index - 1);
        }

        if (index < right) {
            this.quickSort(items, index, right);
        }

    }

    return items;
  }
};




module.exports = QuickSort;
