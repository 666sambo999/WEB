using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BlazorAcademy.Model;

namespace BlazorAcademy.Data
{
    public class BlazorAcademyContext : DbContext
    {
        public BlazorAcademyContext (DbContextOptions<BlazorAcademyContext> options)
            : base(options)
        {
        }

        public DbSet<BlazorAcademy.Model.Teacher> Teacher { get; set; } = default!;
    }
}
