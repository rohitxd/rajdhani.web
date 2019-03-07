using System;
using Web.Common;

namespace Web.Adapter
{
    public class FirstAdapter
    {
        public int Sum(FirstClassRequest request)
        {
            var summation = 0;
            summation = request.a + request.b;
            return summation;
        }
    }
}
