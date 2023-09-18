import BlogCard from "./BlogCard"

const data = [
    {
        img:"pizza.jpeg",
        title:"health and tasty",
        date:"Aug 27, 2023",
        comment:8,
    },
    {
        img:"pizza.jpeg",
        title:"health and tasty",
        date:"Aug 27, 2023",
        comment:8,
    },
    {
        img:"pizza.jpeg",
        title:"health and tasty",
        date:"Aug 27, 2023",
        comment:8,
    },
]
const BlogSection = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl" >Latest News</h2>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sequi?
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el)=><BlogCard key={el.date} img={el.img} title={el.title} date={el.date} comment={el.comment}/>)}
      </div>
    </div>
  )
}

export default BlogSection
