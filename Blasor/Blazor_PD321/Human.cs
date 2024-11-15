using System.ComponentModel.DataAnnotations;

namespace Blazor_PD321.Models
{
    public class Human
    {
        public int Id { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }

        public string MiddleName { get; set; }
        public DataType BirsrDate { get; set; }
        public DataType WorkSize {  get; set; }
    }
}
