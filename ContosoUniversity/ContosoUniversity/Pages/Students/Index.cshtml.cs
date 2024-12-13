using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using ContosoUniversity.Data;
using ContosoUniversity.Models;

namespace ContosoUniversity.Pages.Students
{
    public class IndexModel : PageModel
    {
        private readonly ContosoUniversity.Data.ScoulContext _context;

        public IndexModel(ContosoUniversity.Data.ScoulContext context)
        {
            _context = context;
        }

        public IList<Studentes> Students { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Students = await _context.Student.ToListAsync();
        }
    }
}
