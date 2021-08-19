import Link from "next/link";

const Dashboard = ({ itemList }) => {
  const regex_date = /[0-9]+-[0-9]+-[0-9]+/;
  //   const regex_time = /[0-9]+:[0-9]+:[0-9]+/;
  return (
    <div className="dashboard-itemList">
      {itemList.map((item) => {
        return (
          <Link href={`/view/${item.id}`} key={item.id}>
            <a>
              <div className="dashboard-itemList__item">
                <img
                  className="item__image"
                  src={item.image_link}
                  alt="product image"
                />

                <div className="item__info">
                  <span className="item__info__name">
                    {item.name.trim().length < 42
                      ? item.name
                      : `${item.name.slice(0, 40)}...`}
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
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Dashboard;
