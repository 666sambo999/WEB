using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ContosoUniversity.Data;
using ContosoUniversity.Models;
using ContosoUniversity.Models.SchoolViewModels;

namespace ContosoUniversity.Pages.Instructors
{
	public class IndexModel : PageModel
	{
		private readonly ContosoUniversity.Data.SchoolContext _context;

		public IndexModel(ContosoUniversity.Data.SchoolContext context)
		{
			_context = context;
		}

		//public IList<Instructor> Instructor { get;set; } = default!;
		public InstructorIndexData InstructorData { get; set; }
		public int InstructorID { get; set; }
		public int CourseID { get; set; }

		public async Task OnGetAsync(int? id, int? courseID)
		{
			InstructorData = new InstructorIndexData();
			InstructorData.Instructor = await _context.Instructor
				.Include(i => i.OfficeAssignment)
				.Include(i => i.Courses)
				.ThenInclude(c => c.Department)
				.OrderBy(i => i.LastName)
				.ToListAsync();

			if (id != null)
			{
				InstructorID = id.Value;
				Instructore instructor = InstructorData.Instructor.Where(i => i.ID == id.Value).Single();
				//Single();         возвращает елинственную запись из Базы, или 'null', если запись НЕ найдена.
				//SingleOrDefault();возвращает елинственную запись из Базы, или объект по умолчанию, если запись НЕ найдена.
				InstructorData.Courses = instructor.Courses;
			}

			if (courseID != null)
			{
				CourseID = courseID.Value;
				IEnumerable<Enrollment> enrollments = await _context.Enrollments
					.Where(x => x.CourseId == CourseID)
					.Include(i => i.Student)
					.ToListAsync();
				InstructorData.Enrollments = enrollments;
			}
			//Instructor = await _context.Instructors.ToListAsync();
		}
	}
}