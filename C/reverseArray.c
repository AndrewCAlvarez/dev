#include <stdio.h>

int main()
{
    // take an array of ints and reverse it
    char arr[4] = {'c','h','a','r'};
    int arrSize = sizeof(arr)/sizeof(arr[0]);
    printf("%d", arrSize);
    char reversedArray[arrSize];
    for(int i = 0; i < arrSize;i++)
    {
        reversedArray[i] = arr[arrSize - (i + 1)];
        printf("reversedArray[%d]: %c\n", i, reversedArray[i]);
    }
}