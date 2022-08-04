import { serve } from "https://deno.land/std@0.135.0/http/server.ts";
import API from "./api/index.ts";
import * as views from "./static/index.js";
import middleware from 'https://backpack-t84vymt96j10.deno.dev/api/blacklabel/bridge'
 
const port = 8080;


export const handler = async (request) => {
  return middleware(request, API, views)
};


console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });
 