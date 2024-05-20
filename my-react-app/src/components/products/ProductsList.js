import React from 'react';
import mezuza from '../../assets/mezuza.jpg';
import tfilin from '../../assets/tfilin.png';
import SeferTorah from '../../assets/sefertorah.jpg';
import MegilatEster from '../../assets/megilatester.jpg';
import ProductItem from './ProductItem';
import '../../style/products/ProductList.css';
import translations from '../../assets/translations.json';

const ProductsList = ({ selectedLanguage }) => {
    return (
        <div className="product-list" id='product-list'>
            <ProductItem
                title={translations[selectedLanguage].tefillin}
                imageSrc={tfilin}
                // description="הבן הגיע לגיל בר מצווה? הנכד עושה בר מצווה? עכשיו זה ההזדמנות לקנות לו תפילין מהודרות שקונים תפילין צריך לדאוג שהתפילין יהיו מהודרות ברמה שרק אומנות הסתם יכולים לתת"
            />

            <ProductItem
                title={translations[selectedLanguage].mezuzot}
                imageSrc={mezuza}
                // description="מזוזות מהודרות לבית ולעסק לשמירה והגנה עליך ועל כל משפחתך מכל צרה"
            />

            <ProductItem
                title={translations[selectedLanguage].torah_scrolls}
                imageSrc={SeferTorah}
                // description="יקירכם חשובים לכם? הייתם רוצים לדאוג לעולם האמת שלהם? למה שחשוב להם באמת? עכשיו בהזדמנות ספרי תורה מהודרים מסופרים ירא שמיים התחייבות לכתב ברמה הכי מהודרת בשוק"
            />
            <ProductItem
                title={translations[selectedLanguage].megillat_esther}
                imageSrc={MegilatEster}
                // description="תמיד רצית גם אתה ללכת עם מגילה מהודרת לבית הכנסת בפורים עכשיו זה ההזדמנות שלך למגילה מהודרת כי יש דברים שקונים פעם בחיים לכל החיים"
            />
        </div>
    );
}

export default ProductsList;
