using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ContosoUniversity.Data;
using ContosoUniversity.Models;

namespace ContosoUniversity.Pages.Student
{
    public class IndexModel : PageModel
    {
        private readonly ContosoUniversity.Data.ScoulContext _context;

        public IndexModel(ContosoUniversity.Data.ScoulContext context)
        {
            _context = context;
        }

        public IList<Students> Student { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Student = await _context.Student.ToListAsync();
        }
    }
}
