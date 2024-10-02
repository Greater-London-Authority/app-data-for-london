import qs from 'qs';

export default async function getStrapiData(
  path: string,
  urlParamsObject: object = {},
  options: object = {}
) {
  const baseUrl = process.env.BASE_URL;
  const ApiToken = process.env.STRAPI_TOKEN;

  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        ...(ApiToken ? { Authorization: `Bearer ${ApiToken}` } : {}),
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${baseUrl}${path}${
      queryString ? `?${queryString}` : ''
    }`;

    // API call
    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
