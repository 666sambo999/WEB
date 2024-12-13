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

        public DbSet<ContosoUniversity.Models.Studentes> Student { get; set; }
        public DbSet<Enrollment> Enrollments {  get; set; }
        
        public DbSet<Course> Courses { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
            modelBuilder.Entity<Course>().ToTable("Course");
            modelBuilder.Entity<Enrollment>().ToTable("Enrollment");
            modelBuilder.Entity<Studentes>().ToTable("Student");
		}
	}
}
