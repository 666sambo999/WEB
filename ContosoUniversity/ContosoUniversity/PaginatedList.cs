using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ContosoUniversity
{
	public class PaginatedList<T>:List<T>
	{
		public int PageIndex { get; set; }
		public int TotalPages { get; set; }
		public PaginatedList(List<T> values, int count, int pageIndex, int pageSize) 
		{
			PageIndex = pageIndex;
			TotalPages = (int)Math.Ceiling(count/(double)pageSize);
			this.AddRange(values);
		}
		public bool HasPreviosPage => PageIndex > 1;

		public bool HasNextPage => PageIndex < TotalPages;
		public static async Task<PaginatedList<T>>CreateAsync(IQueryable<T> query, int pageIndex, int pageSize)
		{
			int count = await query.CountAsync();
			List<T> values = await query.Skip((pageIndex -1)*pageSize).Take(pageSize).ToListAsync();
			return new PaginatedList<T>(values, count, pageIndex, pageSize);
		}
	}
}
