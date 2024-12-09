using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ContosoUniversity.Models;

namespace ContosoUniversity.Data
{
    public class ScoulContext : DbContext
    {
        public ScoulContext (DbContextOptions<ScoulContext> options)
            : base(options)
        {
        }

        public DbSet<ContosoUniversity.Models.Students> Student { get; set; } = default!;
    }
}
