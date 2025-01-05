using ContosoUniversity.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ContosoUniversity.Data
{
	public class DBInitial
	{
		public static void Initializ (SchoolContext context)
		{
			//if (context.Student.Any()) return;
			// Look for any students.
			if (context.Students.Any())
			{
				return;   // DB has been seeded
			}

			var alexander = new Studentes
			{
				FirstName = "Carson",
				LastName = "Alexander",
				EnrollmentDate = DateTime.Parse("2016-09-01")
			};

			var alonso = new Studentes
			{
				FirstName = "Meredith",
				LastName = "Alonso",
				EnrollmentDate = DateTime.Parse("2018-09-01")
			};

			var anand = new Studentes
			{
				FirstName = "Arturo",
				LastName = "Anand",
				EnrollmentDate = DateTime.Parse("2019-09-01")
			};

			var barzdukas = new Studentes
			{
				FirstName = "Gytis",
				LastName = "Barzdukas",
				EnrollmentDate = DateTime.Parse("2018-09-01")
			};

			var li = new Studentes
			{
				FirstName = "Yan",
				LastName = "Li",
				EnrollmentDate = DateTime.Parse("2018-09-01")
			};

			var justice = new Studentes
			{
				FirstName = "Peggy",
				LastName = "Justice",
				EnrollmentDate = DateTime.Parse("2017-09-01")
			};

			var norman = new Studentes
			{
				FirstName = "Laura",
				LastName = "Norman",
				EnrollmentDate = DateTime.Parse("2019-09-01")
			};

			var olivetto = new Studentes
			{
				FirstName = "Nino",
				LastName = "Olivetto",
				EnrollmentDate = DateTime.Parse("2011-09-01")
			};

			var students = new Studentes[]
			{
				alexander,
				alonso,
				anand,
				barzdukas,
				li,
				justice,
				norman,
				olivetto
			};

			context.AddRange(students);

			var abercrombie = new Instructore
			{
				FirstMidName = "Kim",
				LastName = "Abercrombie",
				HireDate = DateTime.Parse("1995-03-11")
			};

			var fakhouri = new Instructore
			{
				FirstMidName = "Fadi",
				LastName = "Fakhouri",
				HireDate = DateTime.Parse("2002-07-06")
			};

			var harui = new Instructore
			{
				FirstMidName = "Roger",
				LastName = "Harui",
				HireDate = DateTime.Parse("1998-07-01")
			};

			var kapoor = new Instructore
			{
				FirstMidName = "Candace",
				LastName = "Kapoor",
				HireDate = DateTime.Parse("2001-01-15")
			};

			var zheng = new Instructore
			{
				FirstMidName = "Roger",
				LastName = "Zheng",
				HireDate = DateTime.Parse("2004-02-12")
			};

			var instructors = new Instructore[]
			{
				abercrombie,
				fakhouri,
				harui,
				kapoor,
				zheng
			};

			context.AddRange(instructors);

			var officeAssignments = new Assistins[]
			{
				new Assistins {
					Instructor = fakhouri,
					Location = "Smith 17" },
				new Assistins {
					Instructor = harui,
					Location = "Gowan 27" },
				new Assistins {
					Instructor = kapoor,
					Location = "Thompson 304" }
			};

			context.AddRange(officeAssignments);

			var english = new Department
			{
				Name = "English",
				Budget = 350000,
				StartDate = DateTime.Parse("2007-09-01"),
				Administrator = abercrombie
			};

			var mathematics = new Department
			{
				Name = "Mathematics",
				Budget = 100000,
				StartDate = DateTime.Parse("2007-09-01"),
				Administrator = fakhouri
			};

			var engineering = new Department
			{
				Name = "Engineering",
				Budget = 350000,
				StartDate = DateTime.Parse("2007-09-01"),
				Administrator = harui
			};

			var economics = new Department
			{
				Name = "Economics",
				Budget = 100000,
				StartDate = DateTime.Parse("2007-09-01"),
				Administrator = kapoor
			};

			var departments = new Department[]
			{
				english,
				mathematics,
				engineering,
				economics
			};

			context.AddRange(departments);

			var chemistry = new Course
			{
				CourseId = 1050,
				CourseName = "Chemistry",
				Credits = 3,
				Department = engineering,
				Instructors = new List<Instructore> { kapoor, harui }
			};

			var microeconomics = new Course
			{
				CourseId = 4022,
				CourseName = "Microeconomics",
				Credits = 3,
				Department = economics,
				Instructors = new List<Instructore> { zheng }
			};

			var macroeconmics = new Course
			{
				CourseId = 4041,
				CourseName = "Macroeconomics",
				Credits = 3,
				Department = economics,
				Instructors = new List<Instructore> { zheng }
			};

			var calculus = new Course
			{
				CourseId = 1045,
				CourseName = "Calculus",
				Credits = 4,
				Department = mathematics,
				Instructors = new List<Instructore> { fakhouri }
			};

			var trigonometry = new Course
			{
				CourseId = 3141,
				CourseName = "Trigonometry",
				Credits = 4,
				Department = mathematics,
				Instructors = new List<Instructore> { harui }
			};

			var composition = new Course
			{
				CourseId = 2021,
				CourseName = "Composition",
				Credits = 3,
				Department = english,
				Instructors = new List<Instructore> { abercrombie }
			};

			var literature = new Course
			{
				CourseId = 2042,
				CourseName = "Literature",
				Credits = 4,
				Department = english,
				Instructors = new List<Instructore> { abercrombie }
			};

			var courses = new Course[]
			{
				chemistry,
				microeconomics,
				macroeconmics,
				calculus,
				trigonometry,
				composition,
				literature
			};

			context.AddRange(courses);

			var enrollments = new Enrollment[]
			{
				new Enrollment {
					Student = alexander,
					Course = chemistry,
					Grade = Grade.A
				},
				new Enrollment {
					Student = alexander,
					Course = microeconomics,
					Grade = Grade.C
				},
				new Enrollment {
					Student = alexander,
					Course = macroeconmics,
					Grade = Grade.B
				},
				new Enrollment {
					Student = alonso,
					Course = calculus,
					Grade = Grade.B
				},
				new Enrollment {
					Student = alonso,
					Course = trigonometry,
					Grade = Grade.B
				},
				new Enrollment {
					Student = alonso,
					Course = composition,
					Grade = Grade.B
				},
				new Enrollment {
					Student = anand,
					Course = chemistry
				},
				new Enrollment {
					Student = anand,
					Course = microeconomics,
					Grade = Grade.B
				},
				new Enrollment {
					Student = barzdukas,
					Course = chemistry,
					Grade = Grade.B
				},
				new Enrollment {
					Student = li,
					Course = composition,
					Grade = Grade.B
				},
				new Enrollment {
					Student = justice,
					Course = literature,
					Grade = Grade.B
				}
			};

			context.AddRange(enrollments);
			context.SaveChanges();
		}
	}

	
}
