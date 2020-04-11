// This project is for creating new programs that I plan on deleting
// The ephemeral nature of this project is why it is named "white board"
using System;
using System.Drawing;

namespace WhiteBoard
{
    public sealed class Graphics : MarshalByRefObject, IDisposable,
    System.Drawing.IDeviceContext
    { }

    partial class Program
    {
        static void Main(string[] args)
        {


        }
    }
}
