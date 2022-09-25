using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SolarCalculator.Data;
using SolarCalculator.Models;

namespace SolarCalculator.Controllers
{
    public class AnbieterController : Controller
    {

        private readonly SolarCalculatorContext _context;

        public AnbieterController(SolarCalculatorContext context)
        {
            _context = context;
        }

        public List<Anbieter> Index()
        {
            List<Anbieter> liste = (from n in _context.Anbieter
                                  select n).ToList();

            return liste;
        }

        public Anbieter getAnbeiter(int id)
        {
            Anbieter anbieter = (from n in _context.Anbieter
                                 where n.AnbieterId == id
                                 select n).First();

            return anbieter;
        }


    }
}
