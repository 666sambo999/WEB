using Microsoft.AspNetCore.RateLimiting;
using System.ComponentModel.DataAnnotations;

namespace ContosoUniversity.Models
{
	public class Studentes
	{
		public int Id { get; set; }
		public required string LastName { get; set; }

		public required string FirstName { get; set; }
		[DataType(DataType.Date)]
		public DateTime EnrollmentDate { get; set; }

		public ICollection<Enrollment>? Enrollments { get; set; }
	}
}
