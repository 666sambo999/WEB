using System;
using System.ComponentModel.DataAnnotations;

namespace ContosoUniversity.Models.SchoolModel
{
	public class EnromentGroop
	{
		[DataType(DataType.Date)]
		public DateTime EnromentDate  { get; set; }
		public int StudentCount { get; set; }
	}
}
