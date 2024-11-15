using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using ASP_Net.Service;
using ASP_Net.Models;


namespace ASP_Net.Pages
{
    public class IndexModel : PageModel
    {
            private readonly ILogger<IndexModel> _logger;
            public Product_servis ProductService { get; set; }
            public IEnumerable<Product> Products { get; private set; }
            public IndexModel(ILogger<IndexModel> logger, Product_servis productService)
            {
                _logger = logger;
                ProductService = productService;
            }

            public void OnGet()
            {
                Products = ProductService.GetProducts();
            }
        
    }
}


