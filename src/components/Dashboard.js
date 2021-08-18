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

            <div className="item__info">
              <span className="item__info__name">{item.name}</span>
              <span className="item__info__product-type">
                {item.product_type}
              </span>
              <span className="item__info__createdAt">{item.created_at}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
