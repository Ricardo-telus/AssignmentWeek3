const contentful = require("contentful");
export const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '3jq8s1gy3pbb',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'Y0mUKhmQb4-NLoumkoDGcf-v2rYTxSXms5p1lr9V3Bw'
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
/*client
  .getEntry("5PeGS2SoZGSa4GuiQsigQu")
  .then(entry => console.log(entry))
  .catch(err => console.log(err));*/