const React = require("react");
const MergeSort = require("../algorithms/merge_sort");
const InsertionSort = require("../algorithms/insertion_sort");
const HeapSort = require("../algorithms/heap_sort");

const App = React.createClass({
  getInitialState: function(){
    return {arraySize: 10}
  },

  componentDidMount: function(){
    this.reverse = true;
    this.n10 = this.createArray(10);
    this.n100 = this.createArray(100);
    this.n1000 = this.createArray(1000);
    this.n100000 = this.createArray(100000);
  },


  createArray: function(size){
    let array = [];
    for (let i = 1 ; i <= size ; i ++){
      array.push(i);
    }
    let shuffled = this.shuffleArray(array);
    return shuffled
  },

  shuffleArray: function(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  },

  runSorts: function(event){
    event.preventDefault();

    let sortTimes = this.getSortTimes();

    let max = Math.max(...sortTimes);
    let percentages = this.getPercentages(sortTimes, max);

    this.changePercentMarkers(max);
    $('#mergeSort').css("height", `${percentages[0]}%`);
    $('#insertionSort').css("height", `${percentages[1]}%`);
    $('#heapSort').css("height", `${percentages[2]}%`);
  },

  getSortTimes: function(){
    let array;
    if (this.state.arraySize == 10){
      array = this.n10.slice();
    }
    else if (this.state.arraySize == 100){
      array = this.n100.slice();
    }
    else if (this.state.arraySize == 1000){
      array = this.n1000.slice();
    }
    else if (this.state.arraySize == 100000){
      array = this.n100000.slice();
    }

    let sortTimes = [];
    let merge = MergeSort.sortTime(array);
    let insert = InsertionSort.sortTime(array);
    let heap = HeapSort.sortTime(array.slice());

    sortTimes.push(merge);
    sortTimes.push(insert);
    sortTimes.push(heap);
    return sortTimes;
  },


  changePercentMarkers: function(max){
    let percent25 = Math.round((max * 0.25 ) * 1000) / 1000;
    let percent50 = Math.round((max * 0.50) * 1000) / 1000;
    let percent75 = Math.round((max * 0.75) * 1000) / 1000;
    let percent100 = Math.round((max) * 1000) / 1000;
    $('#marker25 span').first().text(`${percent25} ms`);
    $('#marker50 span').first().text(`${percent50} ms`);
    $('#marker75 span').first().text(`${percent75} ms`);
    $('#marker100 span').first().text(`${percent100} ms`);
  },


  getPercentages: function(times, max){
    let percents = [];
    times.forEach((time) => {
      percents.push((time/max) * 100);
    })
    return percents;
  },

  onSizeChange: function(event){
    this.setState({arraySize: event.target.value});
  },

  sizeButtons: function(){
    return (
      <div className="sizeButtons">
        <h4>Array Size</h4>
        <input id="size1" type='radio' checked={this.state.arraySize == 10} name='arraySize' onChange={this.onSizeChange} value={10} />
        <label htmlFor="size1">10</label>

        <input id="size2" type='radio' checked={this.state.arraySize == 100} name='arraySize' onChange={this.onSizeChange} value={100} />
        <label htmlFor="size2">100</label>

        <input id="size3" type='radio' checked={this.state.arraySize == 1000} name='arraySize' onChange={this.onSizeChange} value={1000}/>
        <label htmlFor="size3">1000</label>

        <input id="size4" type='radio' checked={this.state.arraySize == 100000} name='arraySize' onChange={this.onSizeChange} value={100000}/>
        <label htmlFor="size4">100000</label>
      </div>
    )
  },

  trialButtons: function(){

  },

  options: function(){
    return (
      <div className="options">
        {this.sizeButtons()}
        {this.trialButtons()}
      </div>
    )
  },


  render: function(){
    return (
      <div>
        <ul className="graph-container">
          <li>
            <span>Merge Sort</span>
            <div className="bar-wrapper">
              <div className="bar-container">
                <div className="bar-background"></div>
                <div id="mergeSort" className="bar-inner"></div>
                <div className="bar-foreground"></div>
              </div>
            </div>
          </li>
          <li>
            <span>Insertion sort</span>
            <div className="bar-wrapper">
              <div className="bar-container">
                <div className="bar-background"></div>
                <div id="insertionSort" className="bar-inner"></div>
                <div className="bar-foreground"></div>
              </div>
            </div>
          </li>
          <li>
            <span>Heap sort</span>
            <div className="bar-wrapper">
              <div className="bar-container">
                <div className="bar-background"></div>
                <div id="heapSort" className="bar-inner"></div>
                <div className="bar-foreground"></div>
              </div>
            </div>
          </li>
          <li>
            <ul className="graph-marker-container">
              <li id="marker25"><span>25%</span></li>
              <li id="marker50"><span>50%</span></li>
              <li id="marker75"><span>75%</span></li>
              <li id="marker100"><span>100%</span></li>
            </ul>
          </li>
        </ul>
        {this.options()}
        <button onClick={this.runSorts}>Run Sorts</button>
      </div>
    )
  }
});


module.exports = App;
