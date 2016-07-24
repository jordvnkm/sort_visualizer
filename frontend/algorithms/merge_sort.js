



const MergeSort = {
  sortTime: function(array){
    let startTime = performance.now();
    let sorted = this.mergeSort(array);
    let endTime = performance.now();
    return endTime - startTime;
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
