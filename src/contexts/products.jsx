import { createContext, useState } from "react";

const productsContext = createContext();

import img from "src/assets/reachdadpoordad.png";
import img2 from "src/assets/atomic--habits.png";
import img3 from "src/assets/gohery.png";

const productsCategories = new Map([
  ["novels&books", [1, 2]],
  ["academicBooks", [3, 4]],
]);

const products = new Map([
  [
    1,
    {
      productId: 1,
      image: img2,
      pricing: {
        originalPrice: 100,
        discountedPrice: 50,
      },
      info: {
        title: "كتاب العادات الذرية",
        publisher: "جيمس كلير",
        description:
          "العادات الذرية بقلم جيمس كلير ... أيًا كانت أهدافك فإن كتاب العادات الذرية يقدم لك إطار عمل من أجل تطوير مهاراتك في كل يوم. جيمس كلير واحد من أبرز الخبراء في مجال اكتساب العادات، يوضح لنا في كتابه هذا استراتيجيات عملية تعلمنا كيف نستطيع اكتساب عادات جيدة، ",
        detailsList: [],
      },
    },
  ],
  [
    2,
    {
      productId: 2,
      image: img,
      pricing: {
        originalPrice: 343,
      },
      info: {
        title: "كتاب الاب الغنى و الاب الفقير",
        publisher: "Robert Kiyosaki",
        description:
          "الأب الغنى والأب الفقير بقلم روبرت كيوساكي ... حقق كتاب الأب الغنى والأب الفقير انتشاراً كبير على المستوى العالمى وترجم الكتاب الى معظم لغات العالم الأبطال يجعلون المصاعب تبدوا هينة، فإذا كانوا هم قادرين على فعلها، فكذلك أنا وأنت. حين يجعل الكثيرون عملية الاستثمار صعبة وخطيرة بل مستحيلة، ابحث عن أبطالك وتصرف كما كانوا ليتصرفوا لو كانوا مكانك.",
        detailsList: [],
      },
    },
  ],
  [
    3,
    {
      productId: 3,
      image: img3,
      pricing: {
        originalPrice: 55,
      },
      info: {
        title:
          "مقرر الجيولوجيا - النظام الحديث - الثالث الثانوى - د. احمد الجوهرى",
        publisher: "أحمد الجوهري",
        description: "شرح و تدريبات على مقرر الجيولوجيا فى النظام الحديث",
        detailsList: [],
      },
    },
  ],
  [
    4,
    {
      productId: 4,
      image: img3,
      pricing: {
        originalPrice: 55,
        discountedPrice: undefined,
      },
      info: {
        title:
          "مقرر الجيولوجيا - النظام الحديث - الثالث الثانوى - د. احمد الجوهرى",
        publisher: "أحمد الجوهري",
        description: "شرح و تدريبات على مقرر الجيولوجيا فى النظام الحديث",
        detailsList: [
          "تالته ثانوي",
          "شرح علي الباب كاملاً",
          "تدريبات علي الباب",
          "اختبارات شامله",
        ],
      },
    },
  ],
]);

export default function ProductContextProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("academicBooks");

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const selectProduct = function (id) {
    return products.get(id);
  };
  const selectedProducts = productsCategories
    .get(selectedCategory)
    .map((id) => products.get(id));

  const ctxValue = {
    selectedProducts,
    selectCategory,
    selectedCategory,
    selectProduct,
  };

  return (
    <productsContext.Provider value={ctxValue}>
      {children}
    </productsContext.Provider>
  );
}

export { productsContext };
