import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, getProductsByCategory, type ProductDetails } from '../data/products';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './ProductDetailsPage.css';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductDetails[]>([]);
  const [selectedMetal, setSelectedMetal] = useState('yg');
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [shippingOpen, setShippingOpen] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo(0, 0);

    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        const related = getProductsByCategory(foundProduct.category, foundProduct.id).slice(0, 4);
        setRelatedProducts(related);
      } else {
        // Handle product not found, redirect to home
        navigate('/');
      }
    }
  }, [id, navigate]);



  const getMetalName = (code: string) => {
    switch (code) {
      case 'yg': return '18k Yellow Gold';
      case 'wg': return '18k White Gold';
      case 'rg': return '18k Rose Gold';
      default: return '';
    }
  };

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(`Hello, I would like to inquire about the ${product.name} (${product.category}).\nMaterial: ${product.material}\nSelected Metal: ${getMetalName(selectedMetal)}\nI would like to know the price and availability.`);

  return (
    <div className="pd-page">
      <div className="pd-breadcrumb">
        <Link to="/">Home</Link> <span>/</span> 
        <Link to={`/#${product.category.toLowerCase()}`}>{product.category}</Link> <span>/</span> 
        {product.name}
      </div>

      <div className="pd-container">
        {/* Left Column */}
        <div className="pd-gallery">
          <div 
            className="pd-image-main"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            style={{ cursor: 'zoom-in' }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              style={{
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                transform: isZoomed ? 'scale(2.2)' : 'scale(1)',
                transition: isZoomed ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="pd-info">
          <span className="pd-eyebrow">{product.category}</span>
          <h1 className="pd-title">{product.name}</h1>
          <div className="pd-price">Price on Request</div>

          <p className="pd-desc">{product.description}</p>

          <div className="pd-option-group">
            <span className="pd-option-label">Metal Color: {getMetalName(selectedMetal)}</span>
            <div className="pd-metal-selector">
              <button 
                className={`pd-metal-btn pd-metal-yg ${selectedMetal === 'yg' ? 'active' : ''}`}
                onClick={() => setSelectedMetal('yg')}
                aria-label="Yellow Gold"
              />
              <button 
                className={`pd-metal-btn pd-metal-wg ${selectedMetal === 'wg' ? 'active' : ''}`}
                onClick={() => setSelectedMetal('wg')}
                aria-label="White Gold"
              />
              <button 
                className={`pd-metal-btn pd-metal-rg ${selectedMetal === 'rg' ? 'active' : ''}`}
                onClick={() => setSelectedMetal('rg')}
                aria-label="Rose Gold"
              />
            </div>
          </div>

          <div className="pd-option-group">
            <span className="pd-option-label">Select Option</span>
            <select className="pd-size-select">
              <option>Standard Size</option>
              <option>Custom Request</option>
            </select>
          </div>

          <div className="pd-actions">
            <a 
              href={`https://wa.me/971501847916?text=${whatsappMessage}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="pd-btn-whatsapp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Inquire via WhatsApp
            </a>
            <Link to="/contact" className="pd-btn-inquire">Contact Our Designer</Link>
          </div>

          <div className="pd-accordion">
            <div className="pd-accordion-item">
              <button 
                className="pd-accordion-header" 
                onClick={() => setDetailsOpen(!detailsOpen)}
              >
                Product Details
                {detailsOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              <div className={`pd-accordion-content ${detailsOpen ? 'open' : ''}`}>
                <ul>
                  <li><strong>Material:</strong> {product.material}</li>
                  {product.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="pd-accordion-item">
              <button 
                className="pd-accordion-header" 
                onClick={() => setShippingOpen(!shippingOpen)}
              >
                Shipping & Returns
                {shippingOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              <div className={`pd-accordion-content ${shippingOpen ? 'open' : ''}`}>
                <p style={{ marginTop: '10px' }}>
                  Complimentary express shipping on all orders. Returns accepted within 14 days of delivery. Custom pieces are non-returnable.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="pd-related">
          <div className="pd-related-header">
            <span className="pd-related-eyebrow">THE COLLECTION</span>
            <h2 className="pd-related-title">More from {product.category}</h2>
            <div className="pd-related-divider"></div>
          </div>
          <div className="pd-related-grid">
            {relatedProducts.map(related => (
              <Link to={`/product/${related.id}`} key={related.id} className="pd-related-card">
                <div className="pd-related-image">
                  <img src={related.image} alt={related.name} loading="lazy" />
                  <div className="pd-related-overlay">
                    <span className="pd-related-view-btn">VIEW PRODUCT &rarr;</span>
                  </div>
                </div>
                <span className="pd-related-cat">{related.category}</span>
                <h4 className="pd-related-name">{related.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
