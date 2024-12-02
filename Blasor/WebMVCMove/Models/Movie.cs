using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebMVCMove.Models;

public class Movie
{
	public int Id { get; set; }
	public required string Title { get; set; }

	[DataType(DataType.Date)]
	public DataType? ReleaseData { get; set; }

	public string? Genre { get; set; }

	public decimal Price { get; set; }
}
