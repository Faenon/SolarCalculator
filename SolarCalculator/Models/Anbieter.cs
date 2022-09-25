using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SolarCalculator.Models
{
    public class Anbieter : User
    {
        //Attribute
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AnbieterId { get; set; }
        public string firmenbezeichnung { get; set; }
        public decimal preism { get; set; }
        public decimal stromspeicher { get; set; }
        public decimal verpachtung { get; set; }
        public string weitereVorteile { get; set; }
        public string text { get; set; }

      
    }
}
