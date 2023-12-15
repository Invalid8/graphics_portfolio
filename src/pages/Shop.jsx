import { Card, ProductCard } from "../components/UI";
import { GridLines } from "../components/Designs";

const Products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Shop = () => {
  return (
    <>
      <div className="blogs d-flex flex-column x20-gap relative">
        <GridLines fix />
        <div className="top-blogs p-5 d-flex flex-column jc-c ai-c x20-gap">
          <div className="header">
            <h2 className="title fw-6">Top Products</h2>
          </div>
          <div
            className="body d-flex ai-c x20-gap jc-c w-100 px-2 pb-4 custom-scroll-bar"
            style={{ overflow: "auto hidden" }}
          >
            <Card>
              <h4>Arising tech</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet molestiae.
              </p>
            </Card>
            <Card big>
              <h4>Design Implementation</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet molestiae.
              </p>
            </Card>
            <Card>
              <h4>Product Creation</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet molestiae.
              </p>
            </Card>
          </div>
        </div>
        <div className="product-container box d-flex w-100 x30-gap ai-c o-hidden h-100 bend rv">
          <div className="new d-flex flex-column jc-c ai-c h-100 x20-gap">
            <div className="header">
              <h3 className="title">Best Sales</h3>
            </div>
            <div class="d-flex flex-wrap jc-c ai-c p-2 x20-gap">
              {Products.slice(0, 4).map((Product) => {
                return (
                  <ProductCard>
                    <h5>Product {Product}</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus, similique.
                    </p>
                  </ProductCard>
                );
              })}
            </div>
          </div>
          <div className="related d-flex flex-column jc-c ai-c x20-gap bg-light w-100 p-5">
            <div className="header">
              <h3 className="title">Recent Poducts</h3>
            </div>
            <div class="d-flex flex-wrap jc-c ai-c p-2 x20-gap">
              {Products.slice(0, 4).map((Product) => {
                return (
                  <ProductCard>
                    <h5>Product {Product}</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Delectus, similique.
                    </p>
                  </ProductCard>
                );
              })}
            </div>
          </div>
        </div>
        <div className="sub-options s_height bg-special"></div>
      </div>
    </>
  );
};

export default Shop;
