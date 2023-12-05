import fetch from 'node-fetch';
import { imaviUrl } from './credential-settings';

const handler = async (event) => {
  try {
    console.log('error woi');
    let data;

    data = JSON.parse(event.body);
    console.log(data);
    let requestUrl = imaviUrl(data.type + '/get-all');
    let headerId, headerSecret, headerPartner;

    headerId = process.env.APP_ID;
    headerPartner = process.env.PARTNER;
    headerSecret = process.env.APP_SECRET;
    const response = await fetch(requestUrl, {
      headers: {
        Id: headerId,
        Secret: headerSecret,
        partner: headerPartner,
      },
    });
    console.log(headerId);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
    // Mendapatkan header dari respons

    return {
      statusCode: 200,
      body: JSON.stringify({
        data: responseData,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

export { handler };
