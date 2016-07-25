


const SelectionSort = {


  sortTime: function(array){
    let start = performance.now();
    let sorted = this.selectionSort(array);
    let end = performance.now();
    return end - start;
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
