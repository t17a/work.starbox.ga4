function getCurrentTimeString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  return `${year}${month}${day}_${hours}${minutes}${seconds}`;
}

function getCurrentHourString() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  
  return `${hours}`;
}


gtag("event", "purchase", {
    transaction_id: "T_" + getCurrentTimeString(),
    value: 10000,
    tax: 1000,
    shipping: 500,
    currency: "JPY",
    coupon: "SUMMER_SALE",
    items: [{
        item_id: "SKU_001" + getCurrentHourString(),
        item_name: "Coffee_" + getCurrentHourString(),
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        discount: 1000,
        index: 0,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "Coffee",
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
        price: 6000,
        quantity: 1
    },{
        item_id: "SKU_002" + getCurrentHourString(),
        item_name: "Tea_" + getCurrentHourString(),
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        discount: 1000,
        index: 1,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "Tea",
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
        price: 3000,
        quantity: 2
    }]
});