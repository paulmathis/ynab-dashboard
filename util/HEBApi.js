const axios = require('axios');

class HEBApi {
  constructor(apikey, storeId) {
    this.apikey = apikey;
    this.storeId = storeId;
    this.axios = axios.create({ headers: { apikey } });
  }

  getCouppons() {
    return this.axios(
      'https://openapi.heb.com/REST/v2/coupon/coupons?allIndex=0&allCount=25&profileId=',
    );
  }

  searchCoupons(search) {
    return this.axios(
      `https://openapi.heb.com/REST/v2/coupon/search?index=0&text=${search}&count=25&profileId=`,
    );
  }

  getWeeklyAdd() {
    return this.axios(
      `https://heb.mydigitalpublication.com/feeds/itemfeed.php?pid=136&out=json&co=US&pubid=13609&current=1&pc=${
        this.storeId
      }`,
    );
  }

  getCategories() {
    return this.axios(
      'https://openapi.heb.com/REST/v1/rest/model/atg/commerce/catalog/ProductCatalogActor/categoryList',
    );
  }

  getSubCategories(id) {
    return this.axios(
      `https://openapi.heb.com/REST/v1/rest/model/atg/commerce/catalog/ProductCatalogActor/categoryList?categoryId=${id}`,
    );
  }

  getCategoryProductList(id) {
    return this.axios(
      `https://openapi.heb.com/REST/v1/rest/model/atg/commerce/catalog/ProductCatalogActor/categoryProducts?categoryId=${id}&storeId=${
        this.storeId
      }&prodFilter=store`,
    );
  }

  searchProducts(search) {
    return this.axios(
      `https://openapi.heb.com/REST/v1/rest/model/atg/commerce/catalog/ProductCatalogActor/searchProducts?q=${search}&storeId=${
        this.storeId
      }&prodFilter=store`,
    );
  }
}

module.exports = HEBApi;
