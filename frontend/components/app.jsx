const React = require("react");
const MergeSort = require("../algorithms/merge_sort");
const InsertionSort = require("../algorithms/insertion_sort");
const HeapSort = require("../algorithms/heap_sort");
const SelectionSort = require("../algorithms/selection_sort");
const QuickSort = require("../algorithms/quick_sort");
const BubbleSort = require("../algorithms/bubble_sort");

const App = React.createClass({
  getInitialState: function(){
    return {arraySize: 10, trialSize: 1, situation: "best"}
  },

  componentDidMount: function(){
    $('#timeWarning').css("visibility", "hidden");
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
    if (this.state.arraySize == 100000 || (this.state.arraySize == 1000 && this.state.trialSize == 1000)){
      $('#timeWarning').css("visibility", "visible");
    }
    setTimeout(() => {
      let sortTimes = this.getSortTimes();

      let max = Math.max(...sortTimes);
      let percentages = this.getPercentages(sortTimes, max);

      this.changePercentMarkers(max);
      $('#mergeSort').css("height", `${percentages[0]}%`);
      $('#insertionSort').css("height", `${percentages[1]}%`);
      $('#heapSort').css("height", `${percentages[2]}%`);
      $('#selectionSort').css("height", `${percentages[3]}%`);
      $('#quickSort').css("height", `${percentages[4]}%`);
      $('#bubbleSort').css("height", `${percentages[5]}%`);

      $('#mergeSort').css("bottom", "0");
      $('#insertionSort').css("bottom", "0");
      $('#heapSort').css("bottom", "0");
      $('#selectionSort').css("bottom", "0");
      $('#quickSort').css("bottom", "0");
      $('#bubbleSort').css("bottom", "0");
      $('#timeWarning').css("visibility", "hidden");
    } , 50);
    // $('#timeWarning').on("change", () => {
      // let sortTimes = this.getSortTimes();
      //
      // let max = Math.max(...sortTimes);
      // let percentages = this.getPercentages(sortTimes, max);
      //
      // this.changePercentMarkers(max);
      // $('#mergeSort').css("height", `${percentages[0]}%`);
      // $('#insertionSort').css("height", `${percentages[1]}%`);
      // $('#heapSort').css("height", `${percentages[2]}%`);
      // $('#selectionSort').css("height", `${percentages[3]}%`);
      // $('#quickSort').css("height", `${percentages[4]}%`);
      // $('#bubbleSort').css("height", `${percentages[5]}%`);
      //
      // $('#mergeSort').css("bottom", "0");
      // $('#insertionSort').css("bottom", "0");
      // $('#heapSort').css("bottom", "0");
      // $('#selectionSort').css("bottom", "0");
      // $('#quickSort').css("bottom", "0");
      // $('#bubbleSort').css("bottom", "0");



  },

  getSortTimes: function(){
    let array;
    let merge;
    let insert;
    let heap;
    let selection;
    let quick;
    let bubble;
    let sortTimes = [];

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


    merge = MergeSort.sortTime(array.slice(), this.state.trialSize, this.state.situation);
    insert = InsertionSort.sortTime(array.slice(), this.state.trialSize, this.state.situation);
    heap = HeapSort.sortTime(array.slice(), this.state.trialSize, this.state.situation);
    selection = SelectionSort.sortTime(array.slice(), this.state.trialSize, this.state.situation);
    quick = QuickSort.sortTime(array.slice(), this.state.trialSize, this.state.situation);
    bubble = BubbleSort.sortTime(array.slice(), this.state.trialSize, this.state.situation);


    sortTimes.push(merge);
    sortTimes.push(insert);
    sortTimes.push(heap);
    sortTimes.push(selection);
    sortTimes.push(quick);
    sortTimes.push(bubble)
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
    if (event.target.value == 100000){
      this.setState({arraySize: event.target.value, trialSize: 1});
    }
    else {
      this.setState({arraySize: event.target.value});
    }
  },

  onTrialChange: function(event){
    this.setState({trialSize: event.target.value});
  },

  onSituationChange: function(event){
    this.setState({situation: event.target.value});
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
        <label htmlFor="size3">1,000</label>

        <input id="size4" type='radio' checked={this.state.arraySize == 100000} name='arraySize' onChange={this.onSizeChange} value={100000}/>
        <label htmlFor="size4">100,000</label>
      </div>
    )
  },

  trialButtons: function(){
    if (this.state.arraySize == 100000){
      return (
        <div className="trialButtons">
          <h4>Trial Size</h4>
          <input id="trial1" type='radio' checked={this.state.trialSize == 1} name='trialSize' onChange={this.onTrialChange} value={1} />
          <label htmlFor="trial1">1</label>
        </div>
      )
    }
    else {
      return (
        <div className="trialButtons">
          <h4>Trial Size</h4>
          <input id="trial1" type='radio' checked={this.state.trialSize == 1} name='trialSize' onChange={this.onTrialChange} value={1} />
          <label htmlFor="trial1">1</label>

          <input id="trial2" type='radio' checked={this.state.trialSize == 10} name='trialSize' onChange={this.onTrialChange} value={10} />
          <label htmlFor="trial2">10</label>

          <input id="trial3" type='radio' checked={this.state.trialSize == 100} name='trialSize' onChange={this.onTrialChange} value={100}/>
          <label htmlFor="trial3">100</label>

          <input id="trial4" type='radio' checked={this.state.trialSize == 1000} name='trialSize' onChange={this.onTrialChange} value={1000}/>
          <label htmlFor="trial4">1,000</label>
        </div>
      )
    }
  },


  caseButtons: function(){
    return (
      <div className="caseButtons">
        <h4>Time</h4>
        <input id="case1" type='radio' checked={this.state.situation == "best"} name='situation' onChange={this.onSituationChange} value={"best"} />
        <label htmlFor="case1">Best</label>

        <input id="case2" type='radio' checked={this.state.situation == "average"} name='situation' onChange={this.onSituationChange} value={"average"} />
        <label htmlFor="case2">Average</label>

        <input id="case3" type='radio' checked={this.state.situation == "worst"} name='situation' onChange={this.onSituationChange} value={"worst"}/>
        <label htmlFor="case3">Worst</label>
      </div>
    )
  },

  options: function(){
    return (
      <div className="options">
        {this.sizeButtons()}
        {this.trialButtons()}
        {this.caseButtons()}
      </div>
    )
  },

  header: function(){
    return (
      <div id="header">
        <a href="/" id="logo">Sort Comparison</a>
      </div>
    )
  },


  render: function(){
    return (
      <div className="allContent">
        {this.header()}
        <div className="mainContent">
          {this.options()}
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
              <span>Selection sort</span>
              <div className="bar-wrapper">
                <div className="bar-container">
                  <div className="bar-background"></div>
                  <div id="selectionSort" className="bar-inner"></div>
                  <div className="bar-foreground"></div>
                </div>
              </div>
            </li>
            <li>
              <span>Quick sort</span>
              <div className="bar-wrapper">
                <div className="bar-container">
                  <div className="bar-background"></div>
                  <div id="quickSort" className="bar-inner"></div>
                  <div className="bar-foreground"></div>
                </div>
              </div>
            </li>
            <li>
              <span>Bubble sort</span>
              <div className="bar-wrapper">
                <div className="bar-container">
                  <div className="bar-background"></div>
                  <div id="bubbleSort" className="bar-inner"></div>
                  <div className="bar-foreground"></div>
                </div>
              </div>
            </li>
            <li>
              <ul className="graph-marker-container">
                <li id="marker25"><span>ms</span></li>
                <li id="marker50"><span>ms</span></li>
                <li id="marker75"><span>ms</span></li>
                <li id="marker100"><span>ms</span></li>
              </ul>
            </li>
          </ul>
        </div>
        <button onClick={this.runSorts}>Run Sorts</button>
        <h4 id="timeWarning">This may take a moment</h4>
      </div>
    )
  }
});


module.exports = App;
