using SolarCalculator.Models;
using System;
using System.Linq;

namespace SolarCalculator.Data
{
    public class dbInitializer
    {
        public static void Initialize(SolarCalculatorContext context)
        {
            context.Database.EnsureCreated();
        }
    }
}
