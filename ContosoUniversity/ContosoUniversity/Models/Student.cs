using Microsoft.AspNetCore.RateLimiting;

namespace ContosoUniversity.Models
{
	public class Students
	{
		public int Id { get; set; }
		public required string LastName { get; set; }

		public required string FirstName { get; set; }

		public DateTime EnrollmentDate { get; set; }

		public ICollection<Enrollment> Enrollments { get; set; }
	}
}
