using System.ComponentModel.DataAnnotations;

namespace BlazorAcademy.Model
{
    public class Teacher: Human
    {
        public DateTime work_since { get; set; }
    }
}
