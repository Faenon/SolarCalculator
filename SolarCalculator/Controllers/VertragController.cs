using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SolarCalculator.Data;
using SolarCalculator.Models;

namespace SolarCalculator.Controllers
{
    public class VertragController : Controller
    {
        private readonly SolarCalculatorContext _context;

        public VertragController(SolarCalculatorContext context)
        {
            _context = context;
        }

        public List<Vertrag> Index()
        {
            List<Vertrag> liste = (from n in _context.Vertraege
                                  select n).ToList();

            return liste;
        }

        public Vertrag getVertrag(int id)
        {
            Vertrag vertrag = (from n in _context.Vertraege
                               where n.VertragId == id
                               select n).First();

            return vertrag;
        }

        public List<Vertrag> getVertraegeNutzer(int nutzerID)
        {
            List<Vertrag> liste = (from n in _context.Vertraege
                                   where n.NutzerID == nutzerID
                                   select n).ToList();

            return liste;
        }

        public List<Vertrag> getVertraegeAnbieter(int anbeiterID)
        {
            List<Vertrag> liste = (from n in _context.Vertraege
                                   where n.AnbieterId == anbeiterID
                                   select n).ToList();

            return liste;
        }

        [HttpPost]
        public bool erstelleVertrag(int AnbieterId, int NutzerId, bool stromspeicher, bool verpachtung, decimal gesamtkosten)
        {
            Vertrag vertrag = new Vertrag
            {
                AnbieterId = AnbieterId,
                NutzerID = NutzerId,
                datum = DateTime.Now,
                status = 1,
                stromspeicher = stromspeicher,
                verpachtung = verpachtung,
                provision = 2M,
                praemie = 10M,
                gesamtkosten = gesamtkosten
            };

            _context.Vertraege.Add(vertrag);
            _context.SaveChanges();

            return true;
        }
    }
}
