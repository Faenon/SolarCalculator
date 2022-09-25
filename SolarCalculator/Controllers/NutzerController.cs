using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SolarCalculator.Data;
using SolarCalculator.Models;
using System.Security.Cryptography;
using System.Text;

namespace SolarCalculator.Controllers
{
    public class NutzerController : Controller
    {
        private readonly SolarCalculatorContext _context;

        public NutzerController(SolarCalculatorContext context)
        {
            _context = context;
        }

        public List<Nutzer> Index()
        {
            List<Nutzer> liste = (from n in _context.Nutzer
                                 select n).ToList();

            return liste;
        }

        public Nutzer getNutzer(int id)
        {
            Nutzer nutzer = (from n in _context.Nutzer
                             where n.NutzerId == id
                             select n).First();

            return nutzer;
        }

        [HttpPost]
        public bool login(string email, string passwort)
        {
            //Benutzer suchen
            var nutzerAbfrage = from n in _context.Nutzer
                                   where n.email == email
                                   select n;

            string passwortHash;
            if (nutzerAbfrage.Any())
            {
                passwortHash = nutzerAbfrage.First().passwort;
            } else
            {
                var anbieterAbfrage = from a in _context.Anbieter
                                      where a.email == email
                                      select a;

                if (anbieterAbfrage.Any())
                {
                    passwortHash = anbieterAbfrage.First().passwort;
                } else
                {
                    return false;
                }
            }

            //SHA256 Hash bilden
            using (SHA256 sha256Hash = SHA256.Create())
            { 
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(passwort));

                // Convert byte array to a string   
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++)
                {
                    builder.Append(bytes[i].ToString("x2"));
                }
                passwort = builder.ToString();
            }

            if (passwortHash == passwort)
            {
                //Cookie muss ergänzt werden (nicht Teil des Projektes)
                return true;
            } else
            {
                return false;
            }

        }
    }
}
