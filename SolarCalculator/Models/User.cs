using System.ComponentModel.DataAnnotations;

namespace SolarCalculator.Models
{
    public class User
    {
        //Attribute
        public string email { get; set; }
        public string passwort { get; set; }
        public string strasse { get; set; }
        public string hausnummer { get; set; }
        public string plz { get; set; }
        public string ort { get; set; }
    }

}
