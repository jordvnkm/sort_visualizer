# Sort Comparison

Sort Comparison uses JavaScript and CSS3 to display different sorting algorithm times.  Users can select different array sizes, trial sizes, and the best, average, and worst times for each sort.  Because the sorts take a large amount of time for array size == 100,000 I have restricted the trial size for that option to 1.  The sorting algorithms are all implemented using JavaScript.  Files are bundled using webpack.

## Algorithms
Currently, the sorting algorithms that are displayed are :
```
Merge Sort
Insertion Sort
Heap Sort
Selection Sort
Quick Sort
Bubble Sort
```

## Options
Users of the application can choose different options for the sorting algorithms.  Different trial sizes can be used to get a more accurate illustration of the sorting times.  Also, different array sizes can be used to the same effect.  Options to display the best, average, and worst times are also given to the user.  The options can be seen below

![options](https://github.com/jordvnkm/fitnessApp/blob/master/docs/options.png)


## Display
Once the user chooses the trial size, array size, and time options, the application displays the sorting times for all the algorithms in a bar graph.  The percentages are based off of the max sorting time out of all the available algorithms.

![display](https://github.com/jordvnkm/fitnessApp/blob/master/docs/display.png)
