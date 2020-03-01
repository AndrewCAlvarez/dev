#include <stdio.h>

int rotateArray(int arr[], int elements, int size)
{
    // copy the elements to be rotated into an array 
    // move all elements after forward
    // copy elements at the end of the array 
    int array_elements[size];
    int array_shifted[size];
    int array_elements_index = 0;
    int array_shifted_index = 0;

    for(int i = 0; i < size;i++){
        if(i < elements)
        {
            array_elements[i] = arr[i];
            printf("array_elements:\t%d\n", array_elements[i]);
        }
        else 
        {
            array_shifted[array_shifted_index] = arr[i];
            printf("array_shifted:\t%d\n", array_shifted[array_shifted_index]);
            array_shifted_index++;
        }
    }
    printf("=============\n");
    
    array_shifted_index = 0;
    
    for(int i = 0; i < size; i++)
    {
        if(i < size - elements){
            arr[i] = array_shifted[array_shifted_index];
            array_shifted_index++;
        }
        else
        {
            arr[i] = array_elements[array_elements_index];
            array_elements_index++;
        } 
        printf("Rotated array:\t%d\n", arr[i]);
    } 

    return 0;
}

int main()
{
     int array[10] = {0,1,2,3,4,5,6,7,8,9};
    rotateArray(array,4,10);
    return 0;
}

