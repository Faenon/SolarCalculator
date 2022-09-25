using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.IO;

namespace SolarCalculator.Models
{
    public class Vertrag
    {
        //Attribute
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int VertragId { get; set; }
        public int AnbieterId { get; set; }
        public int NutzerID { get; set; }
        public DateTime datum { get; set; }
        public int status { get; set; }
        public bool stromspeicher { get; set; }
        public bool verpachtung { get; set; }
        public decimal provision { get; set; }
        public decimal praemie { get; set; }
        //public FileStream? rechnung { get; set; }
        public decimal gesamtkosten { get; set; }


        public decimal berechneProvision()
        {
            return provision * gesamtkosten;
        }

        public decimal berechnePraemie()
        {
            return praemie * gesamtkosten;
        }
    }
}
