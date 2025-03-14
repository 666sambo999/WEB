﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ContosoUniversity.Models
{
	public class Department
	{
		public int DepartmentID { get; set; }

		[StringLength(50, MinimumLength = 3)]
		required public string Name { get; set; }

		[DataType(DataType.Currency)]
		[Column(TypeName = "money")]
		public decimal Budget { get; set; }

		[DataType(DataType.Date)]
		[DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
		[Display(Name = "Start Date")]
		public DateTime StartDate { get; set; }
		public int? InstructorID { get; set; }

		//Navigation properties:
		required public Instructore Administrator { get; set; }   //Начальник кафедры
		public ICollection<Course>? Courses { get; set; }
	}
}
