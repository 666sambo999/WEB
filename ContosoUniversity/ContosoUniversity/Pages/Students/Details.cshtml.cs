﻿using System;
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
    public class DetailsModel : PageModel
    {
        private readonly ContosoUniversity.Data.SchoolContext _context;

        public DetailsModel(ContosoUniversity.Data.SchoolContext context)
        {
            _context = context;
        }

        public Studentes Student { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            //var student = await _context.Student.FirstOrDefaultAsync(m => m.Id == id);
            Studentes student = await _context.Students
				.Include(s => s.Enrollments)
				.ThenInclude(e => e.Course)
				.AsNoTracking()
				.FirstAsync(m => m.Id == id);
			if (student == null)
            {
                return NotFound();
            }
            else
            {
                Student = student;
            }
            return Page();
        }
    }
}
