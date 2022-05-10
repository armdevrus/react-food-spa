import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (value) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(value.toLowerCase())
            )
        );
        navigate({ pathname, search: `?search=${value}` });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(search ? 
                data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.toLowerCase().split("=")[1])
                      )
                    : data.categories
            );
        });
    }, [search]);

    return (
        <div>
            <Search callback={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </div>
    );
}

export { Home };
