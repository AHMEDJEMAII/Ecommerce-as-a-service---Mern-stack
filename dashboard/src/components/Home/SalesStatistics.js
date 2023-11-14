import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe
            style={{
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-ecomm-qgrhd/embed/charts?id=6255a726-b74f-4949-8bd3-b21ff1fc7649&maxDataAge=3600&theme=light&autoRefresh=true"
            
          ></iframe>
            <h5 className="card-title">Sale statistics</h5>
          <iframe
            style={{
              width: "100%",
              height: "350px",
            }}
            src="https://charts.mongodb.com/charts-ecomm-qgrhd/embed/charts?id=629c7c14-187c-4afb-87e4-f804b9b52002&maxDataAge=3600&theme=light&autoRefresh=true"
            
          ></iframe>
          
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
