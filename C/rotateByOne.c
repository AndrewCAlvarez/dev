#include <stdio.h>

void rotateByOne( int arr[], int size)
{
    int temp = arr[0], i; 
    for(i = 0; i < size - 1; i++ ) 
    {
        arr[i] = arr[i+1];
    }     
    arr[i] = temp; 
}

void rotateArr(int arr[], int size, int rotations)
{
    for(int i = 0; i < rotations; i++)
    {
        rotateByOne(arr, size);
    }
}

int main()
{
    int arr[9] = {0,1,2,3,4,5,6,7,8};
    int size = sizeof(arr)/sizeof(arr[0]);
    int rotations = 3;
    printf("Before:");
    for(int i = 0; i < size; i++)
    {
        printf(" %d ", arr[i]);
    }
    printf("\nAfter:");
    rotateArr(arr, size, rotations);
    for(int i = 0; i < size; i++)
    {
        printf(" %d ", arr[i]);
    }
    return 0;
}