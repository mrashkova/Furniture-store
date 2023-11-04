const CreateProductModal = ({ onClose, onProductCreate }) => {
  return (
    <div className="overlay">
      <div className="backdrop" onClick={onClose}></div>
      <div className="modal">
        <div className="user-container">
          <header className="headers">
            <h2>Add Product</h2>
            <button className="btn close" onClick={onClose}>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="xmark"
                className="svg-inline--fa fa-xmark"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                ></path>
              </svg>
            </button>
          </header>
          <form onSubmit={onProductCreate}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input id="name" name="name" type="text" />
                </div>
                {/* <p className="form-error">
                  First name should be at least 3 characters long!
                </p> */}
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input id="category" name="category" type="text" />
                </div>
                {/* <p className="form-error">
                  Last name should be at least 3 characters long!
                </p> */}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input id="price" name="price" type="text" />
                </div>
                {/* <p className="form-error">Email is not valid!</p> */}
              </div>
              <div className="form-group">
                <label htmlFor="priceBefore">Price Before</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <input id="priceBefore" name="priceBefore" type="text" />
                </div>
                {/* <p className="form-error">Email is not valid!</p> */}
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <input id="description" name="description" type="text" />
                </div>
                {/* <p className="form-error">Phone number is not valid!</p> */}
              </div>
            </div>

            <div className="form-group long-line">
              <label htmlFor="imageUrl">Image Url</label>
              <div className="input-wrapper">
                <span>
                  <i className="fa-solid fa-image"></i>
                </span>
                <input id="imageUrl" name="imageUrl" type="text" />
              </div>
              {/* <p className="form-error">ImageUrl is not valid!</p> */}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="width">Width</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>
                  <input id="width" name="width" type="text" />
                </div>
                {/* <p className="form-error">
                  Country should be at least 2 characters long!
                </p> */}
              </div>
              <div className="form-group">
                <label htmlFor="depth">Depth</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-city"></i>
                  </span>
                  <input id="depth" name="depth" type="text" />
                </div>
                {/* <p className="form-error">
                  City should be at least 3 characters long!
                </p> */}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="height">Height</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-map"></i>
                  </span>
                  <input id="height" name="height" type="text" />
                </div>
                {/* <p className="form-error">
                  Street should be at least 3 characters long!
                </p> */}
              </div>
              <div className="form-group">
                <label htmlFor="articleNumber">Article Number</label>
                <div className="input-wrapper">
                  <span>
                    <i className="fa-solid fa-house-chimney"></i>
                  </span>
                  <input id="articleNumber" name="articleNumber" type="text" />
                </div>
                {/* <p className="form-error">
                  Street number should be a positive number!
                </p> */}
              </div>
            </div>
            <div id="form-actions">
              <button id="action-save" className="btn" type="submit">
                Save
              </button>
              <button
                id="action-cancel"
                className="btn"
                type="button"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
