import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, Grid2x2, Grid3x3, LayoutGrid, X, ChevronDown, Check, ArrowUpDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '../data/products';
import './ProductListingPage.css';

const AVAILABLE_MATERIALS = [
  { id: 'Yellow Gold', label: 'Yellow Gold' },
  { id: 'Rose Gold', label: 'Rose Gold' },
  { id: 'White Gold', label: 'White Gold' },
  { id: 'Diamonds', label: 'Diamonds' },
  { id: 'Pearl', label: 'Freshwater Pearl' },
  { id: 'Turquoise', label: 'Turquoise' }
];

const CATEGORIES = ['All', 'Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Baby Collection'];

const ProductListingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize state from URL search params
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';
  const initialMaterials = searchParams.get('material') ? searchParams.get('material')!.split(',') : [];
  const initialSort = searchParams.get('sort') || 'featured';
  const initialGrid = Number(searchParams.get('grid')) || 3;

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(initialMaterials);
  const [sortBy, setSortBy] = useState<string>(initialSort);
  const [gridCols, setGridCols] = useState<number>(initialGrid);

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<{ [key: string]: boolean }>({
    categories: true,
    materials: true
  });

  // Sync state to URL search parameters
  useEffect(() => {
    const params: Record<string, string> = {};
    if (selectedCategory !== 'All') params.category = selectedCategory;
    if (searchQuery) params.search = searchQuery;
    if (selectedMaterials.length > 0) params.material = selectedMaterials.join(',');
    if (sortBy !== 'featured') params.sort = sortBy;
    if (gridCols !== 3) params.grid = String(gridCols);

    setSearchParams(params, { replace: true });
  }, [selectedCategory, searchQuery, selectedMaterials, sortBy, gridCols, setSearchParams]);

  // Handle mobile scroll locking when filter drawer is open
  useEffect(() => {
    if (isFilterDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFilterDrawerOpen]);

  // Check if a product matches a material filter option
  const matchMaterial = (productMaterial: string, filterMaterial: string) => {
    const normProduct = productMaterial.toLowerCase();
    const normFilter = filterMaterial.toLowerCase();

    if (normFilter === 'yellow gold') {
      return normProduct.includes('yellow gold') || (normProduct.includes('gold') && !normProduct.includes('rose') && !normProduct.includes('white'));
    }
    if (normFilter === 'rose gold') {
      return normProduct.includes('rose gold') || normProduct.includes('rose');
    }
    if (normFilter === 'white gold') {
      return normProduct.includes('white gold') || normProduct.includes('white');
    }
    if (normFilter === 'diamonds') {
      return normProduct.includes('diamond');
    }
    if (normFilter === 'pearl') {
      return normProduct.includes('pearl');
    }
    if (normFilter === 'turquoise') {
      return normProduct.includes('turquoise');
    }
    return normProduct.includes(normFilter);
  };

  // Toggle material filter selection
  const handleMaterialToggle = (materialId: string) => {
    setSelectedMaterials(prev =>
      prev.includes(materialId)
        ? prev.filter(m => m !== materialId)
        : [...prev, materialId]
    );
  };

  // Toggle accordions in filter panel
  const toggleAccordion = (section: string) => {
    setActiveAccordion(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedMaterials([]);
    setSortBy('featured');
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // 2. Filter by search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // 3. Filter by materials
    if (selectedMaterials.length > 0) {
      result = result.filter(p =>
        selectedMaterials.some(mat => matchMaterial(p.material, mat))
      );
    }

    // 4. Sort
    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [selectedCategory, searchQuery, selectedMaterials, sortBy]);

  return (
    <div className="plp-wrapper content-wrapper">
      {/* 1. Hero Header */}
      <section className="plp-hero">
        <div className="plp-hero-overlay"></div>
        <div className="plp-hero-content">
          <span className="plp-hero-eyebrow">THE AIRA COLLECTION</span>
          <h1 className="plp-hero-title">Exquisite Fine Jewellery</h1>
          <div className="plp-hero-divider"></div>
          <p className="plp-hero-subtitle">
            Indulge in our masterfully crafted selection of rings, necklaces, bracelets, and earrings.
            Each piece is meticulously designed with 18k gold and hand-selected gemstones to elevate your everyday elegance.
          </p>
        </div>
      </section>

      {/* 2. Sticky Control Panel */}
      <div className="plp-control-panel">
        <div className="plp-control-container">
          {/* Left: Filter Toggle & Results Count */}
          <div className="plp-control-left">
            <button
              className="plp-filter-btn"
              onClick={() => setIsFilterDrawerOpen(true)}
              aria-label="Open filters"
            >
              <SlidersHorizontal size={16} />
              <span>Filters</span>
              {selectedMaterials.length > 0 && (
                <span className="plp-filter-badge">{selectedMaterials.length}</span>
              )}
            </button>
            <div className="plp-results-count">
              <span>{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'Piece' : 'Pieces'}
            </div>
          </div>

          {/* Center: Desktop Navigation Quick Tabs */}
          <div className="plp-category-tabs">
            {CATEGORIES.map(category => (
              <button
                key={category}
                className={`plp-category-tab ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right: Layout Switcher & Sorting */}
          <div className="plp-control-right">
            {/* Grid density toggles */}
            <div className="plp-grid-toggles">
              <button
                className={`plp-grid-toggle ${gridCols === 2 ? 'active' : ''}`}
                onClick={() => setGridCols(2)}
                title="2 Columns View"
              >
                <Grid2x2 size={18} />
              </button>
              <button
                className={`plp-grid-toggle ${gridCols === 3 ? 'active' : ''}`}
                onClick={() => setGridCols(3)}
                title="3 Columns View"
              >
                <Grid3x3 size={18} />
              </button>
              <button
                className={`plp-grid-toggle plp-grid-toggle--desktop ${gridCols === 4 ? 'active' : ''}`}
                onClick={() => setGridCols(4)}
                title="4 Columns View"
              >
                <LayoutGrid size={18} />
              </button>
            </div>

            {/* Sorting dropdown wrapper */}
            <div className="plp-sort-wrapper">
              <ArrowUpDown size={14} className="plp-sort-icon" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="plp-sort-select"
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="name-asc">Alphabetical (A-Z)</option>
                <option value="name-desc">Alphabetical (Z-A)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Active Filter Tags */}
      {(selectedCategory !== 'All' || selectedMaterials.length > 0 || searchQuery !== '') && (
        <div className="plp-active-filters-bar">
          <div className="plp-active-filters-container">
            <span className="plp-active-label">Active Filters:</span>
            <div className="plp-active-tags">
              {selectedCategory !== 'All' && (
                <span className="plp-active-tag">
                  Category: {selectedCategory}
                  <button onClick={() => setSelectedCategory('All')} aria-label={`Remove Category ${selectedCategory}`}>
                    <X size={12} />
                  </button>
                </span>
              )}
              {selectedMaterials.map(mat => (
                <span key={mat} className="plp-active-tag">
                  {mat}
                  <button onClick={() => handleMaterialToggle(mat)} aria-label={`Remove Material ${mat}`}>
                    <X size={12} />
                  </button>
                </span>
              ))}
              {searchQuery && (
                <span className="plp-active-tag">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} aria-label="Clear Search">
                    <X size={12} />
                  </button>
                </span>
              )}
              <button className="plp-clear-all-btn" onClick={handleResetFilters}>
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Main Body: Filters Sidebar + Grid layout */}
      <div className="plp-main-content">
        <div className="plp-layout-container">

          {/* Desktop Filter Sidebar */}
          <aside className="plp-sidebar">
            {/* Search Input widget */}
            <div className="plp-sidebar-search">
              <h4 className="plp-sidebar-title">Search</h4>
              <div className="plp-search-box">
                <Search size={16} className="plp-search-icon" />
                <input
                  type="text"
                  placeholder="Search collections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="plp-search-input"
                />
                {searchQuery && (
                  <button className="plp-search-clear" onClick={() => setSearchQuery('')} aria-label="Clear text">
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Category Accordion */}
            <div className="plp-sidebar-accordion">
              <button
                className="plp-accordion-header"
                onClick={() => toggleAccordion('categories')}
              >
                <span>Categories</span>
                <ChevronDown size={16} className={`accordion-arrow ${activeAccordion.categories ? 'open' : ''}`} />
              </button>
              <div className={`plp-accordion-body ${activeAccordion.categories ? 'open' : ''}`}>
                <ul className="plp-filter-list">
                  {CATEGORIES.map(category => (
                    <li key={category}>
                      <button
                        className={`plp-filter-link ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        <span className="bullet"></span>
                        <span className="label">{category}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Materials Accordion */}
            <div className="plp-sidebar-accordion">
              <button
                className="plp-accordion-header"
                onClick={() => toggleAccordion('materials')}
              >
                <span>Metals & Stones</span>
                <ChevronDown size={16} className={`accordion-arrow ${activeAccordion.materials ? 'open' : ''}`} />
              </button>
              <div className={`plp-accordion-body ${activeAccordion.materials ? 'open' : ''}`}>
                <div className="plp-checkbox-group">
                  {AVAILABLE_MATERIALS.map(mat => {
                    const isChecked = selectedMaterials.includes(mat.id);
                    return (
                      <label key={mat.id} className="plp-checkbox-label">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleMaterialToggle(mat.id)}
                          className="hidden-checkbox"
                        />
                        <span className={`custom-checkbox ${isChecked ? 'checked' : ''}`}>
                          {isChecked && <Check size={12} strokeWidth={3} />}
                        </span>
                        <span className="checkbox-text">{mat.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid & Results */}
          <main className="plp-grid-container">
            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                <motion.div
                  className={`plp-grid plp-grid--cols-${gridCols}`}
                  layout
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="plp-card-item"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.03,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      layout
                    >
                      <Link to={`/product/${product.id}`} className="plp-card-link">
                        <div className="plp-card-image-wrapper">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="plp-card-image"
                            loading="lazy"
                          />
                          <div className="plp-card-overlay">
                            <span className="plp-card-overlay-btn">View Details</span>
                          </div>
                          {product.category === 'Baby Collection' && (
                            <span className="plp-card-tag">Baby</span>
                          )}
                        </div>
                        <div className="plp-card-info">
                          <span className="plp-card-material">{product.material}</span>
                          <h3 className="plp-card-name">{product.name}</h3>
                          <span className="plp-card-explore">Explore Collection</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="plp-no-results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="plp-no-results-icon">
                    <Search size={48} strokeWidth={1} />
                  </div>
                  <h3>No Pieces Found</h3>
                  <p>We couldn't find any jewellery matching your selection. Try clearing your filters or using a different search query.</p>
                  <button className="btn-gold" onClick={handleResetFilters}>
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </main>

        </div>
      </div>

      {/* 4. Slide-over Filter Drawer (Mobile Only) */}
      <AnimatePresence>
        {isFilterDrawerOpen && (
          <>
            {/* Dark glassmorphism overlay */}
            <motion.div
              className="plp-drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterDrawerOpen(false)}
            />

            {/* Sidebar drawer content */}
            <motion.div
              className="plp-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.35 }}
            >
              <div className="plp-drawer-header">
                <h3>Filters</h3>
                <button
                  className="plp-drawer-close"
                  onClick={() => setIsFilterDrawerOpen(false)}
                  aria-label="Close filters drawer"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="plp-drawer-body">
                {/* Search bar widget */}
                <div className="plp-drawer-section">
                  <h4 className="plp-drawer-title">Search</h4>
                  <div className="plp-search-box">
                    <Search size={16} className="plp-search-icon" />
                    <input
                      type="text"
                      placeholder="Search collections..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="plp-search-input"
                    />
                    {searchQuery && (
                      <button className="plp-search-clear" onClick={() => setSearchQuery('')} aria-label="Clear text">
                        <X size={14} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Categories selection */}
                <div className="plp-drawer-section">
                  <h4 className="plp-drawer-title">Categories</h4>
                  <div className="plp-drawer-buttons">
                    {CATEGORIES.map(category => (
                      <button
                        key={category}
                        className={`plp-drawer-chip ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Materials Checkbox selection */}
                <div className="plp-drawer-section">
                  <h4 className="plp-drawer-title">Metals & Stones</h4>
                  <div className="plp-checkbox-group">
                    {AVAILABLE_MATERIALS.map(mat => {
                      const isChecked = selectedMaterials.includes(mat.id);
                      return (
                        <label key={mat.id} className="plp-checkbox-label">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleMaterialToggle(mat.id)}
                            className="hidden-checkbox"
                          />
                          <span className={`custom-checkbox ${isChecked ? 'checked' : ''}`}>
                            {isChecked && <Check size={12} strokeWidth={3} />}
                          </span>
                          <span className="checkbox-text">{mat.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Drawer footer buttons */}
              <div className="plp-drawer-footer">
                <button className="plp-drawer-reset-btn" onClick={handleResetFilters}>
                  Clear All
                </button>
                <button className="btn-gold" onClick={() => setIsFilterDrawerOpen(false)}>
                  Show {filteredProducts.length} {filteredProducts.length === 1 ? 'Piece' : 'Pieces'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductListingPage;
