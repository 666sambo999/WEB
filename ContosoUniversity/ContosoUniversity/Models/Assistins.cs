using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
	public class Assistins
	{
		[Key]
		public int InstructorID { get; set; }
		[StringLength(50)]
		[Display(Name="Office")]
		required public string Location { get; set; }

		required public Instructore Instructor { get; set; }
	}
}
