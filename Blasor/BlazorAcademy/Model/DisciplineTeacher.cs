using System.ComponentModel.DataAnnotations;

namespace BlazorAcademy.Model
{
	public class DisciplineTeacher
	{
		[Key] public int teacher {  get; set; }

		[Key] public int discipline  { get; set; }
	}
}
