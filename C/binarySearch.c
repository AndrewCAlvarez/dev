#include <stdio.h>

void rotateByOne(int arr[], int size)
{
    printf("Function array: ");
    int temp = arr[0];
    for(int i = 0; i < size; i++)
    {
        if(i < size - 1)
        {
            arr[i] = arr[i + 1]; 
        }
        else 
        {
            arr[i] = temp;
        }
        printf("%d", arr[i]);
    }
    printf("\n");
}

int main()
{
    int size = 10;
    int arr[size];
    printf("Pre-function: ");
    for(int i = 0; i < size; i++)
    {
        arr[i] = i;
        printf("%d", arr[i]);
    }
    printf("\n");
    

    rotateByOne(arr, size);
    rotateByOne(arr, size);
    rotateByOne(arr, size);
    rotateByOne(arr, size);
    rotateByOne(arr, size);
    rotateByOne(arr, size);
    
    
    printf("After function: ");
    for(int i = 0; i < size; i++)
    {
        printf("%d", arr[i]);
    }

}