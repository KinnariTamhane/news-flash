import {newsData} from '../data/news'

export async function GET(){
return Response.json(newsData);
}