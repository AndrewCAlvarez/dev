#include <stdio.h>
#include <stdlib.h>

// #define BOOL char
// #define TRUE 1
// #define FALSE 0

struct Node 
{
    int data;
    struct Node *next;
};

void printList(struct Node* n)
{
    while(n != NULL)
    {
        printf("%d\n", n->data);
        n = n->next;
    }
}

// This was my first attempt at creating a linked list. 
// Above is the simpler solution 
//
// void printList(struct Node head)
// {
//     struct Node * current_ptr = &head;
//     BOOL running = TRUE;
//     while(running)
//     {
//         if(current_ptr->next != NULL)
//         {
//             printf("Function: %d\n", current_ptr->data);
//             printf("address %p\n", current_ptr);
//             current_ptr = current_ptr->next;
//         }
//         else
//         {
//             printf("Function: %d\n", current_ptr->data);
//             printf("address %p\n", current_ptr);
//             running = FALSE;
//         }
        
//     }
// }

int main()
{
    struct Node* head = NULL;
    struct Node* second = NULL; 
    struct Node* third = NULL;

    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));
    third = (struct Node*)malloc(sizeof(struct Node));

    head->data = 1;
    head->next = second;

    second->data = 2;
    second->next = third;

    third->data = 3;
    third->next = NULL;

    printList(head);


    return 0;
}
