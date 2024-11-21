using System.ComponentModel.DataAnnotations;

namespace BlazorAcademy.Model
{
	public class Discipline
	{
		[Key] 
		public int disciplin_id { get; set; }
		[Required]
		public string discipline_name { get; set; }
		[Required]
		public int number_of_lesson { get; set; }
	}
}
