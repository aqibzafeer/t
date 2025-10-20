// app/lib/woocommerce.js

const WP_API_URL = "https://www.darwazypy.com/wp-json/wc/v3";
const CONSUMER_KEY = "ck_80e5c97f64b6063f0951efe41aaa361d45dc1b2f";
const CONSUMER_SECRET = "cs_21f23f1e5d15117bce5c71d6793650892271a9a6";

export async function fetchProducts() {
  try {
    const url = `${WP_API_URL}/products?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}&per_page=100`;
    
    console.log('Fetching from URL:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }

    const products = await response.json();
    console.log('Raw products data:', products);
    
    // Transform WooCommerce products to match your existing format
    const transformedProducts = products.map(product => ({
      id: product.id.toString(),
      name: product.name,
      short: product.short_description || (product.description ? product.description.replace(/<[^>]*>/g, '').substring(0, 100) : ''),
      price: parseFloat(product.price) || 0,
      description: product.description || 'No description available',
      image: product.images?.[0]?.src || '/about.webp',
      ingredients: product.meta_data?.find(meta => meta.key === '_ingredients')?.value || 'Not specified',
      specifications: [
        { key: "Weight", value: product.weight ? `${product.weight} kg` : 'Not specified' },
        { key: "Type", value: product.categories?.[0]?.name || 'General' },
        { key: "SKU", value: product.sku || 'N/A' },
      ]
    }));

    console.log('Transformed products:', transformedProducts);
    return transformedProducts;
    
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductById(id) {
  try {
    const url = `${WP_API_URL}/products/${id}?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
    
    console.log('Fetching product by ID:', url);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Product response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }

    const product = await response.json();
    console.log('Raw product data:', product);
    
    return {
      id: product.id.toString(),
      name: product.name,
      short: product.short_description || (product.description ? product.description.replace(/<[^>]*>/g, '').substring(0, 100) : ''),
      price: parseFloat(product.price) || 0,
      description: product.description || 'No description available',
      image: product.images?.[0]?.src || '/about.webp',
      ingredients: product.meta_data?.find(meta => meta.key === '_ingredients')?.value || 'Not specified',
      specifications: [
        { key: "Weight", value: product.weight ? `${product.weight} kg` : 'Not specified' },
        { key: "Type", value: product.categories?.[0]?.name || 'General' },
        { key: "SKU", value: product.sku || 'N/A' },
      ]
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

// Test connection function - ADD THIS
export async function testConnection() {
  try {
    const url = `${WP_API_URL}/products?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}&per_page=1`;
    
    console.log('Testing connection to:', url);
    
    const response = await fetch(url);
    const data = await response.json();
    
    console.log('Connection test response:', response.status, data);
    
    return {
      success: response.ok,
      status: response.status,
      productsCount: Array.isArray(data) ? data.length : 0,
      error: !response.ok ? data : null
    };
  } catch (error) {
    console.error('Connection test error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}