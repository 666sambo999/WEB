using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Http.HttpResults;

namespace ContosoUniversity.Models
{
	public class Instructore
	{
		public int ID { get; set; }
		[Required]
		[Display(Name = "Фамилия")]
		[StringLength(50)]
		[RegularExpression("^[A-ZА-Я][a-zа-я]*$")]
		public string LastName { get; set; }

		[Column("FirstName")]
		[Required]
		[Display(Name = "Имя")]
		[StringLength(50)]
		[RegularExpression("^[A-ZА-Я][a-zа-я]*$")]
		public string FirstMidName { get; set; }

		[Display(Name = "Дата трудоустройства")]
		[DataType(DataType.Date)]
		[DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
		public DateTime HireDate { get; set; }  //Дата трудоустройства
		public string FullName
		{
			get => $"{LastName} {FirstMidName}";
		}

		//		Navigation properties:
		public ICollection<Course> Courses { get; set; }
		public Assistins OfficeAssignment { get; set; }
	}
}
