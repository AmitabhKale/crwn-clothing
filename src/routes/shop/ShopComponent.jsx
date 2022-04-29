
import './ShopStyles.scss'
import CategoriesPreview from '../categories-Preview/CategoriesPreview';
import Category from '../category/Category';
import { Route, Routes } from 'react-router-dom';


const ShopComponent = () => {

    return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    );
}

export default ShopComponent