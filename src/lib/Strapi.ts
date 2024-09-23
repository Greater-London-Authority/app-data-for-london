import qs from 'qs';
export default async function getStrapiData(
  path: string,
  urlParamsObject: object = {},
  options: object = {}
) {
  const baseUrl = 'http://localhost:1337';

  const url = new URL(path, baseUrl);

  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${baseUrl}/api${path}${
      queryString ? `?${queryString}` : ''
    }`;

    // API call
    const response = await fetch(baseUrl + path, mergedOptions);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
