//Filter
const Mynums=[10,4,5,18,6,10]
//const item = Mynums.filter( (nums)=> (nums>5) )
const item=Mynums.filter( (i) => {
  return  i>10
} )
//console.log(item);

//ForEach loop

const arr=[]
const newArr=[14,35,11,37,48]
newArr.forEach( (i)=>{
    if(i>30){
        arr.push(i)
    }
} )
//console.log(arr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let ubooks=books.filter( (i)=> i.genre==='History' )
  //console.log(ubooks);

  ubooks=books.filter(  (i)=> i.publish>=1990 && i.genre==='History')
  //console.log(ubooks);

  //MAp

  const Arr=[12,34,44,55,66,77]
  //let NewArr=Arr.map( (i)=> i+10 )
  let NewArr=Arr.map( (i)=> {
    return i>20
  } )
  //console.log(NewArr);

  NewArr=Arr.map( (i)=>i+10  ).map( (i)=>i+1 ).filter( (i)=>i>20 )
  //console.log(NewArr);

  //Reduce
  const Array=[12,32,55,87]
  const total=Array.reduce(function(accumilator,currentvalue) {
    console.log(`accumilator value is ${accumilator} and currentvalue is${currentvalue}`);
  return accumilator+currentvalue;  
  },0)
  console.log(total);

  let Shopping=[{item:'shirt',cost:3200},{item:'pant',cost:4200},{item:'jacket',cost:4600}]
  let Totalbill=Shopping.reduce( (acc,item) => acc+item.cost,0)
  console.log(Totalbill);