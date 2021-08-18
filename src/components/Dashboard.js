const Dashboard = ({ itemList }) => {
  return (
    <div className="dashboard-itemList">
      {itemList.map((item) => {
        return (
          <div key={item.id} className="dashboard-itemList__item">
            <img
              className="item__image"
              src={item.image_link}
              alt="product image"
            />
            <span className="item__price">
              {item.price_sign}
              {item.price}
            </span>
            <span className="item__name">{item.name}</span>
            <span className="item__product-type">{item.product_type}</span>
            <p className="item__description">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
