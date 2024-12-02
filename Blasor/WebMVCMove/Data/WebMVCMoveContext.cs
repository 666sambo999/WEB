using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebMVCMove.Models;

namespace WebMVCMove.Data
{
    public class WebMVCMoveContext : DbContext
    {
        public WebMVCMoveContext (DbContextOptions<WebMVCMoveContext> options)
            : base(options)
        {
        }

        public DbSet<WebMVCMove.Models.Movie> Movie { get; set; } = default!;
    }
}
