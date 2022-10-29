/* eslint-disable no-undef */
import API_ENDPOINT from '../globals/api-endpoint';

class TheRestoDbSource {
  static async listResto() {
    const response = await fetch(API_ENDPOINT.NOW);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postRestaurant(data) {
    const rawResponse = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return rawResponse;
  }
}

export default TheRestoDbSource;
