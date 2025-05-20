import { BagProductResponse } from '../../services/bag-products/bag-products.services.types';
import './bag-product-list.styles.css';

interface BagProductListProps {
  bag: BagProductResponse;
}

export const BagProductList: React.FC<BagProductListProps> = ({ bag }: BagProductListProps) => {
  return (
    <div className="container">
      {bag?.items.map((item, idx) => {
        const product = item.product;
        const image = product.imageObjects?.[0]?.small;

        return (
          <div key={idx} className="item">
            <img src={image} alt={product.name} className="image" />
            <div className="info">
              <span className="name">{product.name}</span>
              <div className="priceGroup">
                <span className="oldPrice">
                  R$ {product.maxPrice.toFixed(2).replace('.', ',')}
                </span>
                <span className="price">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
