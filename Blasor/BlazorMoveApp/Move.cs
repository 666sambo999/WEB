using System.ComponentModel.DataAnnotations;


namespace BlazorMoveApp.Models;

public class Movie
{ 
    public int Id { get; set; }
    [Required]
    public string? Title { get; set; }
    [DataType(DataType.Date)]
    public DateTime? DateRelies { get; set; }
    // знак ? ставиться ссылочных типов данных
    public string? Genre { get; set; }

    public decimal Price { get; set; }
  
}


