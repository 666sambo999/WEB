using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ContosoUniversity.Models;

namespace ContosoUniversity.Data
{
	public class SchoolContext : DbContext
	{
		public SchoolContext(DbContextOptions<SchoolContext> options)
			: base(options)
		{
		}

		public DbSet<ContosoUniversity.Models.Studentes> Students { get; set; }
		public DbSet<Enrollment> Enrollments { get; set; }
		public DbSet<Course> Courses { get; set; }


		public DbSet<Department> Department { get; set; }
		public DbSet<Instructore> Instructor { get; set; }
		public DbSet<Assistins> OfficeAssignments { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			//FluentAPI:
			modelBuilder.Entity<Course>().ToTable(nameof(Course))
				.HasMany(c => c.Instructors)
				.WithMany(i => i.Courses);

			//		Attributes:
			modelBuilder.Entity<Studentes>().ToTable(nameof(Studentes));
			modelBuilder.Entity<Instructore>().ToTable(nameof(Instructor));

			modelBuilder.Entity<Course>().ToTable("Course");
			modelBuilder.Entity<Enrollment>().ToTable("Enrollment");
			modelBuilder.Entity<Studentes>().ToTable("Student");
		}
	}
}
