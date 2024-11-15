using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Collections.Generic;
using System.Text.Json;
using ASP_Net.Models;

namespace ASP_Net.Service
{
    public class Product_servis
    {
        public IWebHostEnvironment WebHostEnvironment { get; }
        string JsonFileName
        {
            get => Path.Combine(WebHostEnvironment.WebRootPath, "data", "json.json");
        }
        public Product_servis(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }
        public IEnumerable<Product> GetProducts()
        {
            using StreamReader jsonFileReader = File.OpenText(JsonFileName);
            return JsonSerializer.Deserialize<Product[]>
                (
                jsonFileReader.ReadToEnd(),
                new JsonSerializerOptions { PropertyNameCaseInsensitive = true }
                );
        }
    }
}
