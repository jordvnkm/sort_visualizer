const React = require("react");
const MergeSort = require("../algorithms/merge_sort");



const App = React.createClass({
  componentDidMount: function(){
    this.reverse = true;
  },

  clickMe: function(event){
    event.preventDefault();
    if (this.reverse){
      $('#firstBar').css("height", "75%");
      $('#secondBar').css("height", "25%");
    }
    else {
      $('#firstBar').css("height", "50%");
      $('#secondBar').css("height", "50%");
    }
    this.reverse = !this.reverse;
    let a = MergeSort.mergeSort([10,5,1,2,3,4,8,7,9]);
    let b = MergeSort.sortTime([10,5,1,2,3,4,8,7,9]);
    console.log(a);
    console.log(b);

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
                <div id="firstBar" className="bar-inner">50</div>
                <div className="bar-foreground"></div>
              </div>
            </div>
          </li>
          <li>
            <span>2012</span>
            <div className="bar-wrapper">
              <div className="bar-container">
                <div className="bar-background"></div>
                <div id="secondBar" className="bar-inner">75</div>
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
        <button onClick={this.clickMe}>click me</button>
      </div>
    )
  }
});


module.exports = App;
