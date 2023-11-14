import React from "react";

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Products statistics</h5>
          <iframe
            style={{
            
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-ecomm-qgrhd/embed/charts?id=6255a533-1f69-45b5-818a-57ec56ebdaf1&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
          <iframe
            style={{
            
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-ecomm-qgrhd/embed/charts?id=629c7e53-5bf7-4549-837d-e4f7d314d8cf&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
