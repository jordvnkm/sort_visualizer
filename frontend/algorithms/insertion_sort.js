




const InsertionSort = {

  sortTime: function(array){
    let start = performance.now();
    let sorted = this.insertionSort(array);
    let end = performance.now();
    return end - start;
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
