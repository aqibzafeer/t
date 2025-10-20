// app/test-products/page.js
import { fetchProducts } from '@/app/lib/woocommerce';

export default async function TestProducts() {
  let products = [];
  let connection = { success: false, error: 'Unknown error' };

  try {
    products = await fetchProducts();
    connection = { 
      success: products.length >= 0, // Even if no products, connection might work
      status: 'Fetched successfully',
      productsCount: products.length
    };
  } catch (error) {
    connection = { 
      success: false, 
      error: error.message,
      status: 'Fetch failed'
    };
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">API Connection Test</h1>
      
      <div className={`p-4 mb-6 rounded ${connection.success ? 'bg-green-100' : 'bg-red-100'}`}>
        <h2 className="text-xl font-semibold">
          {connection.success ? '✅ API Connection Working' : '❌ API Connection Failed'}
        </h2>
        <pre className="mt-2 text-sm whitespace-pre-wrap">
          {JSON.stringify(connection, null, 2)}
        </pre>
      </div>

      <h2 className="text-2xl font-bold mb-4">Products ({products.length})</h2>
      
      {products.length === 0 ? (
        <div className="bg-yellow-100 p-4 rounded">
          <p className="font-semibold">No products found or API not working.</p>
          <p className="mt-2">Possible issues:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>API credentials incorrect</li>
            <li>WooCommerce REST API not enabled</li>
            <li>No products in WooCommerce store</li>
            <li>SSL/HTTPS issues</li>
            <li>CORS restrictions</li>
          </ul>
          <div className="mt-4 p-3 bg-gray-100 rounded text-sm">
            <p><strong>Test the API directly in your browser:</strong></p>
            <code className="break-all">
              https://www.darwazypy.com/wp-json/wc/v3/products?consumer_key=ck_80e5c97f64b6063f0951efe41aaa361d45dc1b2f&consumer_secret=cs_21f23f1e5d15117bce5c71d6793650892271a9a6&per_page=1
            </code>
          </div>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <div key={product.id} className="p-4 border rounded-lg shadow-sm">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover mb-3 rounded"
              />
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-1">Price: ₹{product.price}</p>
              <p className="text-sm text-gray-500 mb-2">ID: {product.id}</p>
              <p className="text-sm text-gray-700">{product.short}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}