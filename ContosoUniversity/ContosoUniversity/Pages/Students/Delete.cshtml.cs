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
    public class DeleteModel : PageModel
    {
        private readonly ContosoUniversity.Data.ScoulContext _context;

        public DeleteModel(ContosoUniversity.Data.ScoulContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Studentes Students { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var student = await _context.Student.FirstOrDefaultAsync(m => m.Id == id);

            if (student == null)
            {
                return NotFound();
            }
            else
            {
                Students = student;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var student = await _context.Student.FindAsync(id);
            if (student != null)
            {
                Students = student;
                _context.Student.Remove(Students);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
