using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
	public class Course
	{
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int CourseId { get; set; }
		public  required string CourseName { get; set;}

		public int Credits { get; set; }

		public ICollection<Enrollment>? Enrollments { get; set; }
	}
}
