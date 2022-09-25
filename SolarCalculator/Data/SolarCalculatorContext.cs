using SolarCalculator.Models;
using Microsoft.EntityFrameworkCore;

namespace SolarCalculator.Data
{
    public class SolarCalculatorContext :DbContext
    {
        public SolarCalculatorContext(DbContextOptions<SolarCalculatorContext> options) : base(options)
        {
        }

        public DbSet<Anbieter> Anbieter { get; set; }
        public DbSet<Nutzer> Nutzer { get; set; }
        public DbSet<Haus> Haeuser { get; set; }
        public DbSet<Vertrag> Vertraege { get; set; }
        
    }
}
