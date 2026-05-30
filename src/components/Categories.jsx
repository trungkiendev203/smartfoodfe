import React from 'react';

function Categories() {
  const categories = [
    {
      id: 'ngu-coc',
      name: 'Ngũ cốc',
      icon: '🌾',
      description: 'Gạo, hạt dinh dưỡng',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 'banh-mi',
      name: 'Bánh mì',
      icon: '🍞',
      description: 'Bánh mì tươi, bánh ngọt',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 'sua-trung',
      name: 'Sữa & Trứng',
      icon: '🧴',
      description: 'Sữa, trứng, phô mai',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 'thit',
      name: 'Thịt',
      icon: '🥩',
      description: 'Thịt bò, gà, heo',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 'hai-san',
      name: 'Hải sản',
      icon: '🐟',
      description: 'Cá, tôm tươi',
      image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 'rau-cu',
      name: 'Rau củ',
      icon: '🥒',
      description: 'Rau sạch mỗi ngày',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 'trai-cay',
      name: 'Trái cây',
      icon: '🍎',
      description: 'Trái cây tươi',
      image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=150',
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
