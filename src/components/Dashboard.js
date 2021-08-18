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

            <span className="item__name">{item.name}</span>
            <span className="item__product-type">{item.product_type}</span>
            <span className="item__createdAt">{item.created_at}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
