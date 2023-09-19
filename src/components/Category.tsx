import CategoryCard from "./CategoryCard"

const data=[
    {
        id:0,
        name:"Fresh Mango",
        count:"9 Products",
        img:"mango.jpg",
    },
    {
        id:1,
        name:"Fresh Apple",
        count:"9 Products",
        img:"apple.jpg",
    },
    {
        id:2,
        name:"Fresh Banana",
        count:"9 Products",
        img:"banana.jpg",
    },
    {
        id:3,
        name:"Fresh Kiwi",
        count:"9 Products",
        img:"kiwi.jpg",
    },
    {
        id:4,
        name:"Fresh Orange",
        count:"9 Products",
        img:"orange.jpg",
    },
    {
        id:5,
        name:"Fresh Raspberry",
        count:"9 Products",
        img:"raspberry.jpg",
    },
    {
        id:6,
        name:"Fresh Strawberry",
        count:"9 Products",
        img:"strawberry.jpg",
    },
    {
        id:7,
        name:"Fresh Guava",
        count:"9 Products",
        img:"guava.jpg",
    },
]
const Category = () => {
  return (
    <div className="container pt-16" >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map(el=><CategoryCard key={el.id} img={el.img} name={el.name} count={el.count}/>)}
      </div>
    </div>
  )
}

export default Category
