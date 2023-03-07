import { rest } from "msw";

export const handlers = [
  /**
   * Example of a request handler—function that captures a request
   * and declares which mocked response to return upon match.
   * @see https://mswjs.io/docs/basics/request-handler
   */
  rest.get("/test", (req, res, ctx) => {
    console.log("REST GET test!");
    return res(
      ctx.status(301),
      ctx.json({
        id: -1,
        firstName: "Test"
      })
    );
  }),
  rest.get("https://made.up/api/usage", (req, res, ctx) => {
    return res(
      ctx.status(301),
      ctx.json({
        id: 1,
        firstName: "John"
      })
    );
  }),
  rest.get("https://made.up/api/user", (req, res, ctx) => {
    let name = req.url.searchParams.get("name");
    return res(
      ctx.status(301),
      ctx.json({
        id: 2,
        firstName: name
      })
    );
  }),
  rest.get("https://made.up/api/user/:name", (req, res, ctx) => {
    const { name } = req.params;
    return res(
      ctx.status(301),
      ctx.json({
        id: 2,
        firstName: name
      })
    );
  })
];
