import React from 'react';

function Features() {
  const features = [
    {
      id: 1,
      icon: 'fa-truck',
      title: 'Giao hàng nhanh',
      description: 'Trong 2h',
    },
    {
      id: 2,
      icon: 'fa-sync-alt',
      title: 'Đổi trả dễ dàng',
      description: 'Trong 7 ngày',
    },
    {
      id: 3,
      icon: 'fa-certificate',
      title: 'Sản phẩm chất lượng',
      description: 'Cam kết chính hãng',
    },
    {
      id: 4,
      icon: 'fa-shield-alt',
      title: 'Thanh toán an toàn',
      description: 'Bảo mật 100%',
    },
  ];

  return (
    <section className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature-item">
          <div className="feature-icon">
            <i className={`fas ${feature.icon}`}></i>
          </div>
          <div className="feature-text">
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Features;
