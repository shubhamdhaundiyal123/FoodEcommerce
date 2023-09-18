import CategoryCard from "./CategoryCard"

const data=[
    {
        id:0,
        name:"Fresh fruits",
        count:"9 Products",
        img:"pizzaLeft.jpg",
    },
    {
        id:1,
        name:"Fresh fruits",
        count:"9 Products",
        img:"pizzaLeft.jpg",
    },
    {
        id:2,
        name:"Fresh fruits",
        count:"9 Products",
        img:"pizzaLeft.jpg",
    },
    {
        id:3,
        name:"Fresh fruits",
        count:"9 Products",
        img:"pizzaLeft.jpg",
    },
    {
        id:4,
        name:"Fresh fruits",
        count:"9 Products",
        img:"pizzaLeft.jpg",
    },
    {
        id:5,
        name:"Fresh fruits",
        count:"9 Products",
        img:"pizzaLeft.jpg",
    },
    {
        id:6,
        name:"Fresh fruits",
        count:"9 Products",
        img:"pizzaLeft.jpg",
    },
    {
        id:7,
        name:"Fresh fruits",
        count:"9 Products",
        img:"pizzaLeft.jpg",
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
