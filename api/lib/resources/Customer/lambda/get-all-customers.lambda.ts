export async function main(event:any){
  console.log('event 👉', event);
  return {
    statusCode: 200,
    body: JSON.stringify({name:"Chuck Norris", age: 135, status:"success of course"})
  }
}

//  handler