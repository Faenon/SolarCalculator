using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SolarCalculator.Models
{
    public class Nutzer : User
    {
        //Attribute
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int NutzerId { get; set; }
        public string name { get; set; }
        public string vorname { get; set; }
        public List<Haus> haeuser { get; set; } = new List<Haus>();
        
    }
}
