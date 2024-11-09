using System.ComponentModel.DataAnnotations;


namespace BlazorMoveApp.Models;

public class Movie
{ 
    public int Id { get; set; }
    [Required]
    public string? Title { get; set; }
    [DataType(DataType.Date)]
    [Range(typeof(DateTime), "1888-10-14", "2025-12-31")]
    public DateTime? DateRelies { get; set; }
    // знак ? ставиться ссылочных типов данных
    public string? Genre { get; set; }
    [Range(150, 1000)]// ограничение со стоймости 
    public decimal Price { get; set; }
  
}


