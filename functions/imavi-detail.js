import { imaviUrl } from './credential-settings';
import fetch from 'node-fetch';
const handler = async (event) => {
  try {
    let data = JSON.parse(event.body);
    console.log(data);

    let requestUrl = imaviUrl(data.type + '/view/' + data.code);
    console.log(requestUrl);
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
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData);
    return {
      statusCode: 200,
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};

export { handler };
