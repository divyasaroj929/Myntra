import DropDown from "./DropDown";

const a1 = [];

const a2 = [];

const a3 = [[{}], [{}]];
const Data = () => {
  const row = [
    [
      {
        heading: "Indian & Fusion Wear",
        title: [
          "Kurtas & Suits",
          "Kurtis, Tunics & Tops",
          "Sarees",
          " Ethnic Wear",
          " Leggings",
          "Salwars & Churidars",
          "Skirts & Palazzos",
          "Dress Materials",
          "Lehenga Cholis",
          "Dupattas & Shawls",
          "Jackets",
        ],
      },
      {
        heading: "Belts, Scarves & More",
        title: [],
      },
      {
        heading: "Watches & Wearables",
        title: [],
      },
    ],
    [
      {
        heading: "Western Wear",
        title: [
          "Dresses",
          "Tops",
          "Tshirts",
          "Jeans",
          "Trousers & Capris",
          "Shorts & Skirts",
          "Co-ords",
          "Playsuits",
          "Jumpsuits",
          "Shrugs",
          "Sweaters & Sweatshirts",
          "Jackets & Coats",
          "Blazers & Waistcoats",
        ],
      },
      {
        heading: "Plus Size",
        title: [],
      },
    ],
    [
      {
        heading: "Maternity",
        title: [],
      },
      {
        heading: "    Sunglasses & Frames",

        title: [],
      },

      {
        heading: "Footwear",
        title: [
          "Flats",
          "Casual Shoes",
          "Heels",
          "Boots",
          "Sports Shoes & Floaters",
        ],
      },
      {
        heading: "Sports & Active Wear",
        title: [
          "Clothing",
          "Footwear",
          "Sports Accessories",
          "Sports Equipment",
        ],
      },
    ],
    // beauty data
    [
      {
        heading: "Makeup",
        title: [
          "Lipstick",
          "Lip Gloss",
          "Lip Liner",
          "Mascara",
          "Eyeliner",
          "Kajal",
          "Eyeshadow",
          "Foundation",
          "Primer",
          "Concealer",
          "Compact",
          "Nail Polish",
        ],
      },
    ],
    [
      {
        heading: "Skincare, Bath & Body",
        title: [
          "Face Moisturiser",
          "Cleanser",
          "Masks & Peel",
          "Sunscreen",
          "Serum",
          "Face Wash",
          "Eye Cream",
          "Lip Balm",
          "Body Lotion",
          "Body Wash",
          "Body Scrub",

          "Hand Cream",
        ],
      },
      {
        heading: "Baby Care",

        title: [],
      },
      {
        heading: "Masks",
        title: [],
      },
    ],
    [
      {
        heading: "Haircare",
        title: [
          "Shampoo",
          "Conditioner",
          "Hair Cream",
          "Hair Oil",
          "Hair Gel",
          "Hair Color",
          "Hair Serum",
          "Hair Accessory",
        ],
      },
      {
        heading: "Fragrances",
        title: ["Perfume", "Deodorant", "Body Mist"],
      },
    ],
    [
      {
        heading: "Appliances",
        title: ["Hair Straightener", "Hair Dryer", "Epilator"],
      },
      {
        heading: "Men's Grooming",
        title: ["Trimmers", "Beard Oil", "Hair Wax"],
      },
      {
        heading: "Beauty Gift & Makeup Set",
        title: ["Beauty Gift ", "Makeup Set"],
      },
      {
        heading: "Premium Beauty",
        title: [],
      },
      {
        heading: "Wellness & Hygiene",
        title: [],
      },
    ],
    [
      {
        heading: "Top Brands",
        title: [
          "Lakme",
          "Maybelline",
          "LOreal",
          "Philips",
          "Bath & Body Works",
          "THE BODY SHOP",
          "Mamaearth",
          "MCaffeine",
        ],
      },
    ],
    // men data
    [
      {
        heading: "Topwear",
        title: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts"],
      },
      {
        heading: "Indian & Festive Wear",
        title: ["Kurtas & Kurta Sets", "Sherwanis", "Nehru Jackets", "Dhotis"],
      },
    ],
    [
      {
        heading: "Bottomwear",
        title: [
          "Jeans",
          "Casual Trousers",
          "Formal Trousers",
          "Shorts",
          "Track Pants & Joggers",
        ],
      },
      {
        heading: "",
        title: [""],
      },
      {
        heading: "",
        title: [""],
      },
    ],
    [
      {
        heading: "Footwear",
        title: [
          "Casual Shoes",
          "Sports Shoes",
          "Formal Shoes",
          "Sneakers",
          "Sandals & Floaters",
          "Flip Flops",
          "Socks",
        ],
      },
      {
        heading: "Personal Care & Grooming",

        title: [""],
      },
      {
        heading: "  Sunglasses & Frames",
        title: [""],
      },
      {
        heading: "Watches",
        title: [""],
      },
    ],
  ];
  row.map((column, index) => {
    return (
      <div className="column">
        {column.map((value, index) => {
          //
          return <DropDown heading={value.heading} title={value.title} />;
        })}
      </div>
    );
  });
};

export default Data;
