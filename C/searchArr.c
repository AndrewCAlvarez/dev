#include <stdio.h>

int main()
{
    int arr[5] = {3,4,2,7,4};
    int size = sizeof(arr)/sizeof(arr[0]);
    int searchItem = 7;
    for(int i = 0; i < size; i++)
    {
        if(arr[i] == searchItem)
        {
            printf("FOUND %d at index %d", searchItem, i);
            break;
        }
        else if(i == size -1)
        {
            printf("NOT FOUND");
        }
    }
}