// Code your solutions in this file

/*for (let age = 30; age < 40; age++) 
{
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
} 
*/
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) 
{
  for (let i = 0; i < gifts.length; i++) 
  {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 
*/

function main()
{
    const name = [];
    const giftType = "";

    writeCards(["Ada", "Brendan", "Ali"], "birthday");
}



function wrapGifts(name, giftType)
{
    const name = [];
    const giftType = "";
    for(let i = 0; i < name.length; i++)
    {
          console.log("Thank you, ${name[i]}, for the wonderful ${giftType} gift!");
          debugger;
    }

    return name;
}

function countDown()
{
    let count = 10;

    while(i > -1)
    {
        console.log(count--);
    }
}