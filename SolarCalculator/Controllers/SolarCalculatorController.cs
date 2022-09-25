using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SolarCalculator.Data;
using SolarCalculator.Models;

namespace SolarCalculator.Controllers
{
    public class SolarCalculatorController : Controller
    {

        private readonly SolarCalculatorContext _context;

        public SolarCalculatorController(SolarCalculatorContext context)
        {
            _context = context;
        }

        public string Index()
        {
            return "Hallo!";
        }

        public int calc(int a, int b)
        {
            int ergebnis = a + b;
            return ergebnis;
        }

        public Nutzer getNutzer()
        {
            var query = from n in _context.Set<Nutzer>()
                        select n;

            return query.First();
        }

        public string updateNutzer()
        {
            var query = from n in _context.Nutzer
                        select n;

            Nutzer user = query.First();
            user.vorname = "Henry";
            _context.SaveChanges();
            return "OK";
        }
    }
}
