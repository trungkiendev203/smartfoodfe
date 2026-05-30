import React from 'react';

function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Rau củ quả',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 2,
      name: 'Thịt, cá, hải sản',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 3,
      name: 'Trái cây',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 4,
      name: 'Sữa & Trứng',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 5,
      name: 'Đồ uống',
      image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 6,
      name: 'Đồ ăn nhanh',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=150',
    },
  ];

  return (
    <section className="categories">
      <h3>Danh mục nổi bật</h3>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
