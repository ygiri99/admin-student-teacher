import {Api_URL} from './Api_URL';
import axios from 'axios';

export async function addData({name,email,course,marks,percent,result}) {
  try{ await axios.post(Api_URL,{name,email,course,marks,percent,result});}
  catch(error) {console.log(error);}
}

export async function updateApi({id,name,email,course,marks,percent,result}) {
  try{ await axios.put(Api_URL+`/${id}`,{name,email,course,marks,percent,result});}
  catch(error) {console.log(error);}
}

export async function deleteApi(id) {
  try { await axios.delete(Api_URL+`/${id}`);}
  catch(error) {console.log(error);}
}


export async function readApi() {
  try { const response = await axios.get(Api_URL);
        return response.data;
  }
  catch(error) {console.log(error);}
}

export async function readIdApi(id) {
  try { const response = await axios.get(Api_URL+`/${id}`);
        return response.data;
  }
  catch(error) {console.log(error);}
}




