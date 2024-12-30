using ContosoUniversity.Data;
using ContosoUniversity.Models.SchoolModel;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace ContosoUniversity.Pages
{
	public class AboutModel : PageModel
	{
		readonly SchoolContext _context;

		public AboutModel(SchoolContext context)
		{
			_context = context;
		}
		public IList<EnromentGroop> Students { get; set; }
		async public void OnGet()
		{
			IQueryable<EnromentGroop> data = from student in _context.Students 
											 group student by student.EnrollmentDate into dateGroup
											 select new EnromentGroop()
											 {
												 EnromentDate = dateGroup.Key,
												 StudentCount = dateGroup.Count()
											 };
			Students = await data.AsNoTracking().ToListAsync();
		}
		
	}
}
