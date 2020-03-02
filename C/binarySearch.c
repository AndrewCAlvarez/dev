#include <stdio.h>
#include <time.h>


int binarySearch(int arr[], int l, int r, int searchTerm)
{
    int middle;
    while(l <= r)
    {
        middle = l + (r - l) / 2;
        if( arr[middle] == searchTerm)
        {
        return middle;
        }
        if(arr[middle] < searchTerm)
        {
            l = middle + 1; 
        }
        else
        {
            r = middle - 1;
        }
    }
    return -1;
}

int main()
{
    // The idea of binary search is that you know the array is sorted.
    // Therefore, you can split the array in two checking if the middle is 
    // greater than or less than the search term until you reach the 
    // correct element.

    // Instantiate an array for us to work on
    int arrSize = 8976;
    int arr[arrSize];
    int searchTerm = 5999;

    for(int i = 0; i < arrSize; i++)
    {
        arr[i] = i +1; 
    }

    // Keep track of how long our search takes by getting start/end time
    clock_t begin = clock();
    for(int i = 0; i < 100000; i++)
    {
        binarySearch(arr, 0, arrSize, searchTerm);
    }
    // printf("found %d\n", binarySearch(arr, 0, arrSize, searchTerm));
    clock_t end = clock();
    double time_spent = (double)(end - begin) / CLOCKS_PER_SEC;
    printf("\n\nTIME: %f seconds.", time_spent);
}