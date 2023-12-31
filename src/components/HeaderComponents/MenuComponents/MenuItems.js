import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function MenuItems(props) {
  const [selectedBrands, setSelectedBrands] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleToggle = () => {
    setSelectedBrands(!selectedBrands);
  };

  const toggleModel = (brand) => {
    setSelectedBrand(brand === selectedBrand ? null : brand);
  };
  return (
    <div className="container">
      <div className="title" onClick={handleToggle} id="phones">
        {props.name}
      </div>
      {selectedBrands && (
        <div className="container-see-all-items">
          <div className="see-all-items">
            <Link to="/see-all-Items-brands">
              <small>See all</small>
            </Link>
            <small className="material-symbols-outlined">chevron_right</small>
          </div>
        </div>
      )}
      {selectedBrands && (
        <div className="phones-brands">
          {props.items.map((brand, index) => (
            <div key={index}>
              <div
                onClick={() => toggleModel(brand.brand)}
                className={selectedBrand === brand.brand ? "selected" : ""}
              >
                {brand.brand}
              </div>
              {selectedBrand === brand.brand && (
                <div className="container-see-all-items">
                  <div className="see-all-items">
                    <Link to="/see-all-Items">
                      <small>See all</small>
                    </Link>
                    <small className="material-symbols-outlined">
                      chevron_right
                    </small>
                  </div>

                  {brand.model.map((model, modelIndex) => (
                    <div key={modelIndex}>
                      <Link to={`item/${model}`}>{model}</Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItems;
