using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BlazorMoveApp.Models;

namespace BlazorMoveApp.Data
{
    public class BlazorMoveAppContext : DbContext
    {
        public BlazorMoveAppContext (DbContextOptions<BlazorMoveAppContext> options)
            : base(options)
        {
        }

        public DbSet<BlazorMoveApp.Models.Movie> Movie { get; set; } = default!;
    }
}
