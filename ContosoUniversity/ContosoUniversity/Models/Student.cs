using Microsoft.AspNetCore.RateLimiting;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ContosoUniversity.Models
{
	public class Studentes
	{
		public int Id { get; set; }
		[StringLength(50, ErrorMessage = "Too many symbol for name")]
		[RegularExpression(@"^[A-ZА-Я]+[a-zа-я]*$")]
		[Display(Name = "LastName")]
		public required string LastName { get; set; }
		[StringLength(50, ErrorMessage = "Too many symbol for name")]
		[RegularExpression(@"^[A-ZА-Я]+[a-zа-я]*$")]
		
		[Display(Name = "Фамилия")]
		public required string FirstName { get; set; }
		[DataType(DataType.Date)]
		[DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
		[Display (Name = "Enrollment Date")]
		public DateTime EnrollmentDate { get; set; }
		[Display(Name = " full name")]
		public string FullName
		{
			get => $"{LastName} {FirstName}";
		}
		public ICollection<Enrollment>? Enrollments { get; set; }
	}
}
