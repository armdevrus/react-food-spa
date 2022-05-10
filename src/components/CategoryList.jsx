import { CategoryItem } from './CategoryItem';

function CategoryList({catalog = []}){

    return (
        <div className="list">
           
            {catalog.map((elem) => (
                <CategoryItem key={elem.idCategory} {...elem} />
            ))}
        </div>
    );

}

export {CategoryList}