import React, { useState } from 'react';
import BlogFilters from './BlogFilters';


const defaultData = [
    { id: 1, category: 'smm', imgSrc: '/public/ab-testi.jpg', title: 'Forest' },
    { id: 2, category: 'web', imgSrc: '/public/webb.jpg', title: 'Forest' },
    { id: 3, category: 'seo', imgSrc: '/public/sem.jpg', title: 'Forest' },
    { id: 4, category: 'smm', imgSrc: '/public/marka.jpg', title: 'Forest' },
    { id: 5, category: 'smm', imgSrc: '/public/b2c.jpg', title: 'Forest' },
    { id: 6, category: 'smm', imgSrc: '/public/guerilla.jpeg', title: 'Forest' },
];

const BlogSection = () => {
   const [activeFilter, setActiveFilter] = useState('*');  // * bütün filerler gorunsun
     const [data, setData] = useState(defaultData); // bütün blog elementlərini göstərməy defaultData


    //  Bu funksiya filtr seçildikdə işləyir və activeFilter dəyərini yeniləyir yeni dəyəri yazır
    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const filteredItems = activeFilter === '*' 
         ? data // ActiveFilter '*' olarsa filteredItems bütün blog elementerini gosderir
       : data.filter(item => `.${item.category}` === activeFilter || `filter-${item.category}` === activeFilter.replace('.', '')   ); 
// replace isdifade ederek (.) qaldırılsa activeFilter dəyəri smm seo kimi dəyərə dəyişir bu {item.category} formatına uyğun ola bilər sebebi activeFilter css class adıdır buna görə də nöqtə (.) ilə başlayır .smm falan ve buda bizim catgory ile uyusmur.
    console.log('Active Filter:', activeFilter);
    console.log('Filtered Items:', filteredItems);

    return (
        <section className="blog section" id="blog">
            <div className="blog_container container">
               
                <BlogFilters activeFilter={activeFilter} onFilterChange={handleFilterChange} />  {/*Filtr dəyişikliyi olduğda çağırılan funksiya propu  */}

                <div className="blog_wrap-container">
                    {
                        filteredItems.map(item => (
                            <div key={item.id} className={`blog_item filter-${item.category}`}>
                                <div className="blog_wrap">
                                    <img src={item.imgSrc} className="img-fluid" alt={item.title} />
                                    <div className="blog_info">
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
