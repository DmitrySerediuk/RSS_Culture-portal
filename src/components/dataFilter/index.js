import * as _ from 'lodash';

export default class DataFilter {
  constructor(data) {
    this.data = data;
  }

  filterByLang(searchRow) {
    const searchKey = Object.keys(searchRow)[0];
    const searchValue = searchRow[searchKey];
    this.data = this.data.filter((value) => {
      return (value.hasOwnProperty(searchKey) && value[searchKey] === searchValue);
    });
    return this;
  }

  unique(key) {
    this.data = _.uniqBy(this.data, key);
    return this;

  }
}