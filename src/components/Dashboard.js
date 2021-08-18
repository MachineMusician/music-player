const Dashboard = ({ itemList }) => {
  const regex_date = /[0-9]+-[0-9]+-[0-9]+/;
  //   const regex_time = /[0-9]+:[0-9]+:[0-9]+/;
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
              <span className="item__info__name">
                {item.name.trim().length < 42
                  ? item.name
                  : item.name.slice(0, 42)}
              </span>
              <span className="item__info__product-type">
                {item.product_type}
              </span>
              <span className="item__info__createdAt">
                {item.created_at.match(regex_date)}
                {/* {item.created_at.match(regex_time)} */}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
