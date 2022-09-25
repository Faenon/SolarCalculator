using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SolarCalculator.Models
{
    public class Haus
    {
        //Attribue
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int HausId { get; set; }
        public decimal dachfaeche { get; set; }
        public string dachausrichtung { get; set; }
        public decimal dachwinkel { get; set; }
        public string plz { get; set; }
        public decimal stromverbrauch { get; set; }
        public decimal stomkosten { get; set; }
        public DateTime datum { get; set; }

    
    }
}
