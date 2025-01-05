namespace ContosoUniversity.Models.SchoolViewModels
{
	public class InstructorIndexData
	{
		public IEnumerable<Instructore> Instructor { get; set; }
		public IEnumerable<Course> Courses { get; set; }
		public IEnumerable<Enrollment> Enrollments { get; set; }
	}
}
