using System;

namespace linkedList
{
    public class Node
    {
        public int Value;
        public Node Next;
    }
    class Program
    {
        static void printList(Node node)
        {
            while (node != null)
            {
                System.Console.WriteLine(node.Value);
                node = node.Next;
            }
        }
        static void Main(string[] args)
        {
            Node first = new Node { Value = 3 };
            Node second = new Node { Value = 5 };
            Node third = new Node { Value = 7 };

            first.Next = second;
            second.Next = third;

            printList(first);

        }
    }
}
