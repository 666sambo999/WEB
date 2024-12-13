using System.ComponentModel.DataAnnotations;

namespace ContosoUniversity.Models
{
	public enum Grade { A, B, C, D, E }
	public class Enrollment
	{
		public int EnrollmentId { get; set; }

		public int CourseId{ get; set;}

		public int StudentId { get; set;}
		[DisplayFormat(NullDisplayText = "No grade")]

		public Grade? Grade { get; set; }

		public required Course Course { get; set; }

		public required Studentes Student { get; set; }

	}
}
